import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import { AuthLayout } from '../';
import {FONTS,SIZES,COLORS} from "../../constants";
import {FormInput , TextButton} from "../../components" ;
import { utils } from  ".../../utils"
const ForgotPassword = () => {
    const[email,setEmail] = React.useState("")
    const[emailError, setEmailError] = React.useState("")
    return (
        <AuthLayout
        title="Password Recovery"
        subtitle="Please enter your email address"
        titleContainerStyle={{
            marginTop:SIZES.padding*2
        }}
        >
            {/* form input  */}
            <View
            style = {{ 
                flex : 1 ,
                marginTop:SIZES.padding * 2
            }}></View>
        </AuthLayout>

    )
}

export default ForgotPassword;