import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { Text, Button } from '../ui';

class Screen extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={ {marginLeft: 10, marginRight: 10} }>
                <View style={ {marginTop: 160} }>
                    <Text>Some text here</Text>
                </View>
                <View style={ {marginTop: 40} }>
                    <Button title="Click me!" />
                </View>
            </View>
        )
    }
}

export default Screen;
