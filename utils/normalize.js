const types = new Map([
    [1, 'user'],[2, 'group'], [3, 'post'], [4, 'file'], [5, 'instrument'], [6, 'comment']
]);

function isObject(val) {
    return val !== null && typeof val === 'object';
}

function getType(data) {
    if (isObject(data)) {
        if (data.data && data.data.activityId) {
            return 'activity';
        }
        if (data.type && types.has(data.type)) {
            return types.get(data.type);
        }
        return null;
    }
    return null;
}

export default function normalize(data) {
    const result = {};

    const addToResult = (object, type) => {
        result[type] = result[type] || {};
        const id = `${object.id}`; // приведение id к строке
        if (result[type][id]) {
            result[type][id] = {
                ...result[type][id],
                ...object,
                type,
                id
            }
        } else {
            result[type][id] = {
                ...object,
                type,
                id
            };
        }
    };

    const findEntity = (value) => {
        // Если массив, обследовать каждый элемент
        if (Array.isArray(value)) {

            value.forEach(val => findEntity(val));
            // Если объект является сущностью, то добавить его в результат.
            // Исследовать все свойства объекта
        } else if (isObject(value)) {
            const objType = getType(value);
            if (objType) {
                addToResult(value, objType);
            }

            for (let propName in value) {
                if (!value.hasOwnProperty(propName)) {
                    continue;
                }
                findEntity(value[propName])
            }
        }
    };

    const replaceDataToLinks = (object) => {
        const typeNames = Object.keys(object);
        typeNames.forEach((name) => {
            const ids = Object.keys(object[name]);
            ids.forEach((id) => {
                const entity = object[name][id];
                findEndReplace(entity);
            })
        });

        function findEndReplace(obj) {
            for (let prop in obj) {
                if (!obj.hasOwnProperty(prop)) {
                    continue;
                }

                if (isObject(obj[prop])) {
                    const type = getType(obj[prop]);
                    if (type) {
                        obj[prop] = {
                            id: `${obj[prop].id}`,
                            type
                        }
                    } else {
                        findEndReplace(obj[prop]);
                    }
                }
            }
        }

        return object;
    };

    findEntity(data);

    return  replaceDataToLinks(result);
}
