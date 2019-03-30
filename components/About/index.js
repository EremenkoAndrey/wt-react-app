import React from 'react';
import { Text, View, Animated, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { CLOSE_ABOUT } from "../../actions/app";


class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: this.props.showAbout,
            translateYValue: new Animated.Value(0)
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.showAbout && !nextProps.showAbout) {
            this.hide();
        }
        if (!this.props.showAbout && nextProps.showAbout) {
            this.show();
        }
    }

    show() {
        Animated.timing(                  // Animate over time
            this.state.translateYValue,            // The animated value to drive
            {
                toValue: -Dimensions.get('window').height,
                duration: 1000,
            }
        ).start(() => {
            this.setState({
                show: true
            })
        });
    }

    hide() {
        Animated.timing(                  // Animate over time
            this.state.translateYValue,            // The animated value to drive
            {
                toValue: 0,
                duration: 1000,
            }
        ).start(() => {
            this.setState({
                show: false
            })
        });
    }

    render() {
        const { closeAbout } = this.props;
        // if (!this.state.show) {
        //     return null;
        // }

        const list = [
            '- get other markets people opinion',
            '- give your opinion',
            '- create forecasts for tickers',
            '- get changes for quotes'
        ];

        return (
            <Animated.View style={{
                backgroundColor: '#FFFFFF',
                position: 'absolute',
                top: '100%',
                height: '100%',
                left: 0,
                right: 0,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                transform: [{
                    translateY: this.state.translateYValue
                }]
            }}>
                <View style={{
                    padding: 30,
                }}>
                    <Text
                        style={{ color: '#3F5185', marginBottom: 30 }}
                        onPress={closeAbout}
                    >
                        Close
                    </Text>
                    <Text style={{ marginBottom: 5 }}>
                        That mobile app is light weight client app for service WhoTrades.com
                    </Text>
                    <Text>
                        WhoTrades.com - social network for traders, here you can:
                    </Text>

                    {list.map((item, index) => <Text key={index} style={{marginLeft: 10, marginBottom: 5}}>{item}</Text>)}
                </View>
            </Animated.View>
        );
    }
}

const mapStateToProps = state => ({
    showAbout: state.app.showAbout
});


const mapDispatchToProps = dispatch => ({
    closeAbout: () => dispatch(CLOSE_ABOUT())
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
