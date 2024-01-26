import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const Form = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View>

            <Text> Username </Text>
            <TextInput value={name} onChangeText={(e) => setName(e)}></TextInput>

            <Text> Password </Text>
            <TextInput secureTextEntry={true} value={password} onChangeText={(e) => setPassword(e)} ></TextInput>

            <Button onPress={console.log(name + " " + password)} title="Submit"></Button>
        </View>
    )
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    }
})

export default Form;