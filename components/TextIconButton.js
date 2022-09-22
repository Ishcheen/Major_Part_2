import React from "react";
import {
    TouchableOpacity,
    Text, 
    Image, 
    StyleSheet
} from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen";

import { FONTS, COLORS } from "../constants";

const TextIconButton = ({
    containerStyle, 
    label, 
    labelStyle,
    icon,
    iconPosition,
    iconStyle,
    onPress
}) => {
    return (
        <TouchableOpacity
        style = {{
            flexDirection : 'row',
            alignItems : 'center',
            justifyContent : 'center',
            ...containerStyle
        }}
        onPress = {onPress}
        >
            {iconPosition == LEFT && 
            <Image
             source={icon}
             style ={{
                ...styles.image,
                ...iconStyle
             }}
             />
            }

            <Text
            styles = {{
                ...FONTS.body3, 
                labelStyle
            }}
            >
                {label}
            </Text>

            {iconPosition == RIGHT && 
            <Image
             source={icon}
             style ={{
                ...styles.image,
                ...iconStyle
             }}
             />
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    iamge : { 
        marginLeft  : 5, 
        width : 20,
        height : 20,
        tintColor : COLORS.black
    }
})

export default TextIconButton;