import { useState, useEffect } from 'react';
import { Platform } from 'react-native';

import { BleManager } from 'react-native-ble-plx';


function funcForIos(): void {
}



export default function useConnectedDevicesWithBluetooth() {
  Platform.select({
    ios:     `${funcForIos()}`,
    android: 'android',
    web:     'web',
    default: 'other'
  });
};
