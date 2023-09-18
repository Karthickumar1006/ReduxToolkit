import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { increment, decrement, resetState } from '../Redux/Slice/CounterSlice';
import { personDetailsAdded } from '../Redux/Slice/PostSlice';
import { useSelector, useDispatch } from 'react-redux';
import ApiHooks from './Customhooks/ApiHooks';


const Dashboard = () => {
  const useSelect = useSelector(state => state.counter.count);
  const useApiRes = useSelector(state => state.Person.personDetails);
  const dispatch = useDispatch();

  const data = ApiHooks("https://jsonplaceholder.typicode.com/comments?_page=1&_limit=200");
  const [datas, setData] = useState();

  useEffect(() => {
    setData(data)
  }, [data])

  const incre = () => {
    console.log('Increment');
    dispatch(increment());
  };

  const decre = () => {
    dispatch(decrement());
    console.log('Decrement');
  };

  const reset = () => {
    dispatch(resetState());
    console.log('Reset');
  };

  const actionPayload = () => {
    dispatch(personDetailsAdded(datas));
  };

  const retriveData = () => {
    console.log("RetriveData", useApiRes);
  };

  return (
    <View style={{ margin: 10 }}>
      <View
        style={{ margin: 10, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{useSelect}</Text>
      </View>

      <View style={{ margin: 10 }}>
        <Button
          onPress={() => {
            incre();
          }}
          title="Increment"></Button>
      </View>
      <View style={{ margin: 10 }}>
        <Button
          onPress={() => {
            decre();
          }}
          title="Decrement"></Button>
      </View>
      <View style={{ margin: 10 }}>
        <Button
          onPress={() => {
            reset();
          }}
          title="Reset"></Button>
      </View>

      <View style={{ margin: 10 }}>
        <Button
          onPress={() => {
            actionPayload();
          }}
          title="ActionPayload"></Button>
      </View>

      <View style={{ margin: 10 }}>
        <Button
          onPress={() => {
            retriveData();
          }}
          title="RetriveData"></Button>
      </View>
    </View>
  );
};

export default Dashboard;
