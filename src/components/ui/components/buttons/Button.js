import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Text } from '../typography';

function Button({
    small,
    hPosition,
    textColour,
    bgColour,
    keylineColour,
    title,
    screenTheme,
    icon,
    disabled,
    ...props
}) {
    const propStyles = StyleSheet.create({
        button: {
            backgroundColor: 'yellow',
            borderColor: 'yellow',
            paddingTop: 10,
            paddingBottom: 10,
            paddingRight: 20,
            paddingLeft: 20,
        },
    });

    return (
        <View style={ propStyles.buttonWrap }>
            <TouchableOpacity
                { ...props }
            >
                <View style={ [styles.button, propStyles.button] }>
                    <Text>
                        { title }
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        margin: 0,
        alignItems: 'center',
    },
    disabled: {
        opacity: 0.5,
    },
});

Button.defaultProps = {
    small: false,
    hPosition: null,
    textColour: null,
    bgColour: null,
    keylineColour: null,
    title: null,
    icon: null,
    disabled: false,
};

Button.propTypes = {
    small: PropTypes.bool,
    hPosition: PropTypes.string,
    textColour: PropTypes.string,
    bgColour: PropTypes.string,
    keylineColour: PropTypes.string,
    title: PropTypes.string,
    disabled: PropTypes.bool,
    screenTheme: PropTypes.string,
};

export default Button;
