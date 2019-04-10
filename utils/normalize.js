const types = new Map([
    [1, 'user'], [2, 'group'], [3, 'post'], [4, 'file'], [5, 'instrument'], [6, 'comment']
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

        // Сохранить тип activity в объекте data
        if (type === 'activity') {
            object.data.activityType = object.type;
        }
        if (result[type][id]) {
            result[type][id] = {
                ...result[type][id],
                ...object,
                type,
                id
            };
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

            Object.values(value).forEach(prop => findEntity(prop));
        }
    };

    const replaceDataToLinks = (object) => {
        function findEndReplace(obj) {
            Object.keys(obj).forEach((key) => {
                if (isObject(obj[key])) {
                    const type = getType(obj[key]);
                    if (type) {
                        /* eslint no-param-reassign:0 */
                        obj[key] = {
                            id: `${obj[key].id}`,
                            type
                        };
                    } else {
                        findEndReplace(obj[key]);
                    }
                }
            });
        }

        const typeNames = Object.keys(object);
        typeNames.forEach((name) => {
            const ids = Object.keys(object[name]);
            ids.forEach((id) => {
                const entity = object[name][id];
                findEndReplace(entity);
            });
        });

        return object;
    };

    findEntity(data);

    return replaceDataToLinks(result);
}
