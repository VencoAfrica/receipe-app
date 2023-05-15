import React from 'react'
import { StyleSheet, View, Text, TextInput} from 'react-native';

export interface textFieldProps{
    hasLabel: boolean,
    hasIcon: boolean,
    icon?: string,
    label?: string,
    style?: object,
    placeHolder: string,
    onChangeText?: () => void
}

const TextFieldComponent = (props: textFieldProps) => {
    
    return(
        <View style={{marginBottom: 20, width: '100%', ...StyleSheet.flatten(props.style)}}>
            {props.hasLabel && <Text style={{
                marginBottom: 10
            }}>{props.label}</Text>}
            <View style={{
                borderColor: '#D9D9D9',
                borderWidth: 1.5,
                borderRadius: 10,
                borderStyle: 'solid',
                justifyContent: 'center',
                alignItems: 'flex-start',
            }}>
                {/* {props.hasIcon && 
                    <Image source={require('somethhing')}/>
                } */}
                <TextInput style={styles.text}
                    placeholder={props.placeHolder}
                    placeholderTextColor={'#D9D9D9'}
                    onChangeText={props.onChangeText}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        backgroundColor: '#129575',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        justifyContent: 'flex-start',
        color: '#121212',
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 24,
    },
})

export default TextFieldComponent