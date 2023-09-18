import React from 'react'
import { View, Text, Button } from 'react-native'
import { increment, decrement, resetState } from '../Redux/Slice/CounterSlice'
import { useSelector, useDispatch } from 'react-redux'
const Dashboard = () => {
    const useSelect = useSelector((state) => state.counter.count)
    const dispatch = useDispatch();

    const incre = () => {
        console.log("Increment");
        dispatch(increment())
    }


    const decre = () => {
        dispatch(decrement())
        console.log("Decrement");
    }

    const reset = () => {
        dispatch(resetState())
        console.log("Reset");
    }

    return (
        <View style={{ margin: 10 }}>
            <View style={{ margin: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{useSelect}</Text>
            </View>

            <View style={{ margin: 10 }}>
                <Button onPress={() => { incre() }} title='Increment'></Button>

            </View>
            <View style={{ margin: 10 }}>
                <Button onPress={() => { decre() }} title='Decrement'></Button>
            </View>
            <View style={{ margin: 10 }}>
                <Button onPress={() => { reset() }} title='Reset'></Button>
            </View>
        </View>
    )

}

export default Dashboard;