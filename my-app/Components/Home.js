import { Alert, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View, StatusBar, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'

export default function Home() {
    const [income, setIncome] = useState(0);
    const [balance, setBalance] = useState(0);
    const [transferHistory, setTransferHistory] = useState([]);
    const [amount, setAmount] = useState(0);
    const [purpose, setPurpose] = useState("");
    const handleReset = () => {
        setTransferHistory([]);
    }
    const handleIncomePress = () => {
        console.log(income)
        //setIncome(0);
        setBalance(income.toString());
    }

    const handleAddExpense = () => {
        let tempBalance = balance;
        tempBalance -= amount;
        if (tempBalance < 0) {
            Alert.alert("Insufficient Balance", "Sorry you cannot make the next transfer",
                [
                    {
                        text: "Ok"
                    }
                ]
            )
            return;
        }
        setBalance(tempBalance.toString());
        const newData = {
            amount: amount.toString(),
            purpose: purpose
        }

        setTransferHistory([...transferHistory, newData]);
        setAmount(0);
        setPurpose("");
        console.log(transferHistory);
    }
    return (
        <>
            <SafeAreaView style={styles.topContainer}>
                {
                    //Begining of main View
                }
                {
                    //TopHeader
                }
                <View>
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
                    <FlatList
                        nestedScrollEnabled
                        data={transferHistory}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => {
                            //console.log(item);
                            return (
                                <View style={styles.incomeBalanceRow}>
                                    <ScrollView style={styles.scrollView}>
                                        <Text style={styles.incomeBalanceText}>{item.amount}  {item.purpose}</Text>
                                    </ScrollView>
                                </View>
                            )
                        }}
                    />
                    <Pressable onPress={handleReset} style={styles.resetButton}>
                        <Text style={styles.resetButtonText}>Reset</Text>
                    </Pressable>
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

            </SafeAreaView>
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
        backgroundColor: "yellow",
        marginTop: StatusBar.currentHeight
    },
    transferContainer: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "skyblue",
        width: 500,
        margin: 5
    },
    incomeBalanceText: {
        padding: 5
    }
    ,
    incomeBalanceRow: {
        flexDirection: "row",
        width: 100
    },
    incomeInput: {
        backgroundColor: "white",
        margin: 5,
        width: 70
    },
    setIncomeButton: {
        backfaceVisibility: "visible",
        paddingLeft: 4,
        backgroundColor: "green"
    },
    scrollView: {

    },
    resetButton: {
        backgroundColor: "red",
        width: 60
    },
    resetButtonText: {
        textAlign: "center",
        fontSize: 20
    }
})