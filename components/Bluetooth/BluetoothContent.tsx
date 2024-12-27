import { useState } from 'react';
import { Button, StyleSheet } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import '@/scripts/bluetooth';

export function BluetoothContent() {
  const [isBluetoothActive, setIsBluetoothActive] = useState(false);

  return (
    <ThemedView>
      <ThemedText>{isBluetoothActive?'ON':'OFF'}</ThemedText>
      <Button title={`bluetooth ${!isBluetoothActive?'ON':'OFF'}`} onPress={()=>{setIsBluetoothActive(!isBluetoothActive)}} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  content: {
    marginTop: 6,
    marginLeft: 24,
  },
});
