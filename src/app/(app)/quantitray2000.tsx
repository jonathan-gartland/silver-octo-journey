import type { Mpn } from 'mpn-lookup/mpn.lookup';
import { getQt2KMpn } from 'mpn-lookup/mpn.lookup';
import { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { Text, View } from '@/ui';
export default function Qt2000Mpn() {
  const [in2KL, setIn2KL] = useState(0);
  const [in2KS, setIn2KS] = useState(0);

  function qt2KMpn(inLarge: number, inSmall: number) {
    let mpn2KList: Mpn = [];
    if (inLarge >= 0 && inLarge <= 49 && inSmall >= 0 && inSmall <= 48) {
      mpn2KList = getQt2KMpn(inLarge, inSmall);
    }
    return (
      <View style={{}}>
        <Text>MPN:</Text>
        {mpn2KList && mpn2KList.length === 0 && (
          <Text data-testid={'empty-value-text'}>
            Enter valid values please!
          </Text>
        )}
        <Text>{mpn2KList !== undefined && mpn2KList[0]}</Text>
        <Text>95% Confidence Interval:</Text>
        <Text>High: {mpn2KList !== undefined && mpn2KList[2]}</Text>
        <Text>Low: {mpn2KList !== undefined && mpn2KList[1]}</Text>
      </View>
    );
  }
  return (
    <View>
      <Text style={{ ...stylesQt.title, paddingTop: 10 }}>
        QuantiTray2000&reg; MPN
      </Text>
      <View
        style={{
          paddingLeft: 10,
          paddingBottom: 20,
        }}
      >
        <View style={{}}>
          <Text>Enter Large Positive Well Count:</Text>
          <TextInput
            style={{
              width: 100,
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              textAlign: 'center',
            }}
            onChangeText={(text) => {
              setIn2KL(Number(text));
            }}
            value={in2KL.toString()}
            keyboardType="numeric"
          />
          <Text>Enter Small Positive Well Count:</Text>
          <TextInput
            style={{
              width: 100,
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              textAlign: 'center',
            }}
            onChangeText={(text) => setIn2KS(Number(text))}
            value={in2KS.toString()}
            keyboardType="numeric"
          />
        </View>
        {qt2KMpn(in2KL, in2KS)}
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
