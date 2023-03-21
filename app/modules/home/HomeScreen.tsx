/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Button, FlatList, ListRenderItemInfo, Text, View } from 'react-native';
import styles from './HomeScreenStyles';

interface UserType {
  name: string;
  age: number;
}

const HomeScreen = () => {
  //Type guard
  const getData = (info: string | number) => {
    let IsString = info.charAt(0);
    console.log(IsString);

    if (typeof info === 'string') {
      let thirdChar = info.toUpperCase();
      console.log(thirdChar, 'thirdChar');
    } else {
      let count = info + 1;
      console.log(count, 'count');
    }
  };

  const ObData: UserType = { name: 'Lakhan', age: 28 };
  const listData: UserType[] = [{ name: 'Gopal', age: 34 }];

  return (
    <View style={styles.container}>
      <FlatList
        data={listData}
        keyExtractor={(item: UserType) => `${item.name}`}
        renderItem={({ item }: ListRenderItemInfo<UserType>) => (
          <Text>{item.age}</Text>
        )}
      />
      <Button title="Click" onPress={() => getData('oks')} />
    </View>
  );
};

export default HomeScreen;
