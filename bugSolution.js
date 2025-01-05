// bugSolution.js
import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const DATA = []; //Initial empty Data array

const MyComponent = () => {
  const [data, setData] = useState(DATA);

  useEffect(() => {
    const fetchData = async () => {
      //Simulate fetching data from an API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setData([{
        id: '1',
        name: 'Item 1'
      }, {
        id: '2',
        name: 'Item 2'
      }]);
    };
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item?.name ?? 'Loading...'}</Text> {/* Optional chaining and nullish coalescing */}
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});