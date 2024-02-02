import { Button, Pressable, StyleSheet, Text, TextInput, TextInputComponent, View } from 'react-native'
import React, { useState } from 'react'

export default function Home() {
    let temp = 9999999;
    const handleIncomePress = () => {
        console.log(income)
        //setIncome(0);
    }
    const [income, setIncome] = useState(0);
    return (
        <View>
            {
                //Begining of main View
            }
            {
                //TopHeader
            }
            <View style={styles.topContainer}>
                <Text>Expense Tracker</Text>
                <View style={styles.incomeBalanceRow}>
                    <Text style={styles.incomeBalanceText}>Income: {income}</Text>
                    <Text style={styles.incomeBalanceText}>Balance: {temp}</Text>
                </View>
                <View style={styles.incomeBalanceRow}>
                    <TextInput style={styles.incomeInput} inputMode='numeric' defaultValue={income}
                        onChangeText={(e) => setIncome(e)}
                    ></TextInput>
                    <Pressable onPress={handleIncomePress}>
                        Set Income
                    </Pressable>
                </View>
            </View>

            {
                //Transfer History
            }
            <View style={styles.transferContainer}>
                <Text>Transfer History</Text>
            </View>
            {
                //End of main View
            }
        </View>
    )
}

const styles = StyleSheet.create({
    topContainer: {
        flex: 1,
        alignItems: "center",
        padding: 8,
        paddingBottom: 10,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "yellow"
    },
    transferContainer: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "skyblue"
    },
    incomeBalanceText: {
        padding: 5
    }
    ,
    incomeBalanceRow: {
        flexDirection: "row",
    },
    incomeInput: {
        backgroundColor: "blue",
    }
})