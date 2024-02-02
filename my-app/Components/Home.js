import { Button, Pressable, StyleSheet, Text, TextInput, TextInputComponent, View } from 'react-native'
import React, { useState } from 'react'

export default function Home() {
    let temp = 0;
    const [income, setIncome] = useState(0);
    const [balance, setBalance] = useState(0);
    const [transferHistory, setTransferHistory] = useState([]);
    const [amount, setAmount] = useState(0);
    const [purpose, setPurpose] = useState("");
    const handleIncomePress = () => {
        console.log(income)
        //setIncome(0);
        setBalance(income);
    }

    const handleAddExpense = () => {
        const newData = {
            amount: amount,
            purpose: purpose
        }
        setTransferHistory([...transferHistory, newData]);
        setAmount(0);
        setPurpose("");
        console.log(transferHistory);
    }
    return (
        <>
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
                        <Text style={styles.incomeBalanceText}>Balance: {balance}</Text>
                    </View>
                    <View style={styles.incomeBalanceRow}>
                        <TextInput style={styles.incomeInput} inputMode='numeric' value={income}
                            onChangeText={(e) => setIncome(e)}
                        ></TextInput>
                        <Pressable style={styles.setIncomeButton} onPress={handleIncomePress}>
                            <Text> Set Balance</Text>
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
                    //Form for transfer history
                }
                <View>
                    <View style={styles.incomeBalanceRow}>
                        <Text >Amount</Text>
                        <TextInput style={styles.incomeInput} value={amount} onChangeText={(e) => setAmount(e)} inputMode='numeric'></TextInput>
                    </View>
                    <View style={styles.incomeBalanceRow}>
                        <Text >Purpose</Text>
                        <TextInput style={styles.incomeInput} value={purpose} onChangeText={(e) => setPurpose(e)} inputMode='text'></TextInput>
                    </View>
                    <Pressable style={styles.setIncomeButton} onPress={handleAddExpense}>
                        <Text>Add</Text>
                    </Pressable>
                </View>
                {
                    //End of main View
                }

            </View>
        </>
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
        margin: 5
    },
    setIncomeButton: {
        backfaceVisibility: "visible",
        paddingLeft: 4,
        backgroundColor: "green"
    }
})