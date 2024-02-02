import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Home() {
    let temp = 9999999;
    return (
        <View>
            <View style={styles.topContainer}>
                <Text>Expense Tracker</Text>
                <View style={styles.incomeBalanceRow}>
                    <Text style={styles.incomeBalanceText}>Income: {temp}</Text>
                    <Text style={styles.incomeBalanceText}>Balance: {temp}</Text>
                </View>
            </View>
            <View style={styles.transferContainer}>
                <Text>Transfer History</Text>
            </View>
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
        flexDirection: "row"
    }
})