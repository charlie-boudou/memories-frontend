import { Button, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { useState } from 'react';

export default function ProfileScreen() {
  const [isDairyActive, setIsDairyActive] = useState(false);

  const onClick = (title) => {
    console.log('title', title);
  };
  return (
    <SafeAreaView>
      <Header title="Brazil" icon="edit" onClick={onClick} isDairyActive={isDairyActive} setIsDairyActive={setIsDairyActive} />
      <Text>Profile Screen</Text>
    </SafeAreaView>
  );
}
