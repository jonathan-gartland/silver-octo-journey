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
      <View>
        <View style={{ flexDirection: 'row', flex: 2 }}>
          <Text style={{ fontFamily: 'cochin' }}>MPN:</Text>
          {'   ' && mpnList && mpnList.length === 0 && (
            <Text data-testid={'empty-value-text'}>
              Enter valid value please!
            </Text>
          )}
        </View>

        <Text>{mpnList !== undefined && mpnList[0]}</Text>
        <Text>95% Confidence Interval:</Text>
        <Text>High: {mpnList !== undefined && mpnList[2]}</Text>
        <Text>Low: {mpnList !== undefined && mpnList[1]}</Text>
      </View>
    );
  }

  return (
    <View>
      <Text
        style={{ ...stylesQt.title, paddingTop: 10, ...stylesQt.paragraph }}
      >
        QuantiTray&reg; MPN
      </Text>
      <View
        style={{
          paddingLeft: 10,
          paddingBottom: 20,
        }}
      >
        <View style={{ paddingLeft: 80 }}>
          <Text style={{ ...stylesQt.paragraph }}>
            Enter Positive Well Count:
          </Text>
          <TextInput
            style={{
              width: 100,
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              textAlign: 'center',
              fontFamily: 'cochin',
            }}
            onChangeText={handleNumberChange}
            value={inCount.toString()}
            keyboardType="numeric"
          />
          <Text></Text>
          {getMpn(inCount)}
        </View>
      </View>
    </View>
  );
}

const stylesQt = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    justifyContent: 'center', // Vertically center the content
    alignItems: 'center', // Horizontally center the content
    flexDirection: 'column',
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
