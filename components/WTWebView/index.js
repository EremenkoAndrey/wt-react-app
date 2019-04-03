import React from 'react';
import PropTypes from 'prop-types';
import { WebView } from 'react-native';

export default class WTWebView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0
        };
        this.content = this._getTemplate();
    }

    _onNavigationChange = (event) => {
        console.log(event)

        if (event.title) {
            const htmlHeight = parseInt(event.title, 10) || 0;
            this.setState({ height: htmlHeight });
        }
    };

    _getTemplate() {
        const { source } = this.props;
        return `<!DOCTYPE html><html>${source.html}<script>document.title = document.body.scrollHeight</script></html>`;
    }


    render() {
        const { height } = this.state;

        return (
            <WebView
                {...this.props}
                source={{ html: this.content }}
                style={{ height, flex: 1 }}
                onNavigationStateChange={this._onNavigationChange}
            />
        );
    }
}

WTWebView.propTypes = {
    source: PropTypes.shape({
        html: PropTypes.string.isRequired
    }).isRequired
};
