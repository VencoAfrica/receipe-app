import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight} from 'react-native';

export interface buttonProps{
    style?: object,
    hasName?: boolean,
    name: string,
    onButtonClick?: () => void
}

const ButtonComponent = (props: buttonProps) => {
    
    return(
        <TouchableHighlight
        style={{
            borderRadius: 10,
            width: '50%',
            marginTop: 10,
            backgroundColor: '#129575',
            paddingVertical: 15,
            ...StyleSheet.flatten(props.style)
        }}
            onPress={props.onButtonClick}
            disabled={false}
            underlayColor="#55FFFFFF">
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
              <Text style={styles.buttonText}>
                {props.name}
              </Text>
            </View>
          </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: '#129575',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        justifyContent: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 24,
    },
})

export default ButtonComponent