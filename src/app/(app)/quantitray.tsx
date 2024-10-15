import type { Mpn } from 'mpn-lookup/mpn.lookup';
import { getQtMpn } from 'mpn-lookup/mpn.lookup';
import { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { Text, View } from '@/ui';
export default function QtMpn() {
  const [inCount, setInCount] = useState(0);

  const handleNumberChange = (value: string) => {
    setInCount(Number(value));
  };

  function getMpn(inCount: number) {
    let mpnList: Mpn = [];
    if (inCount >= 0 && inCount <= 51) {
      mpnList = getQtMpn(inCount);
    }

    return (
      <View style={{}}>
        <Text>MPN:</Text>
        {mpnList && mpnList.length === 0 && (
          <Text data-testid={'empty-value-text'}>
            Enter valid value please!
          </Text>
        )}
        <Text>{mpnList !== undefined && mpnList[0]}</Text>
        <Text>95% Confidence Interval:</Text>
        <Text>High: {mpnList !== undefined && mpnList[2]}</Text>
        <Text>Low: {mpnList !== undefined && mpnList[1]}</Text>
      </View>
    );
  }

  return (
    <View>
      <Text style={{ ...stylesQt.title, paddingTop: 10 }}>
        QuantiTray&reg; MPN
      </Text>
      <View
        style={{
          paddingLeft: 10,
          paddingBottom: 20,
        }}
      >
        <View style={{}}>
          <Text>Enter Positive Well Count:</Text>
          <TextInput
            style={{
              width: 100,
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              textAlign: 'center',
            }}
            onChangeText={handleNumberChange}
            value={inCount.toString()}
            keyboardType="numeric"
          />
        </View>
        {getMpn(inCount)}
      </View>
    </View>
  );
}

const stylesQt = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center', // Vertically center the content
    alignItems: 'center', // Horizontally center the content
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 5,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 5,
    fontFamily: 'cochin',
  },
});
