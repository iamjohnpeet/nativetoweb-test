import React from 'react';
import PropTypes from 'prop-types';
import { Text as RNText, StyleSheet } from 'react-native';

const Text = ({
    textColour,
    fontWeight,
    underline,
    align,
    ...props
}) => {
    const styles = StyleSheet.create({
        text: {
            color: 'black',
            fontSize: 18,
        },
    });

    return <RNText style={ styles.text } { ...props } />;
};

Text.defaultProps = {
    textColour: null,
    fontSize: 'md',
    fontWeight: 'regular',
    underline: false,
    align: 'left',
};

Text.propTypes = {
    screenTheme: PropTypes.string,
    textColour: PropTypes.string,
    fontSize: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    fontWeight: PropTypes.string,
    underline: PropTypes.bool,
    align: PropTypes.string,
};

export default Text;
