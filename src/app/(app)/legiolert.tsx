import type { Mpn } from 'mpn-lookup/mpn.lookup';
import { getQtLegio } from 'mpn-lookup/mpn.lookup';
import { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { Text, View } from '@/ui';
export default function QtLMpn() {
  const [inL, setInL] = useState(0);
  const [inS, setInS] = useState(0);

  function qt2KMpnL(inLarge: number, inSmall: number) {
    let mpn2KList: Mpn = [];
    if (inLarge >= 0 && inLarge <= 6 && inSmall >= 0 && inSmall <= 90) {
      mpn2KList = getQtLegio(inLarge, inSmall);
    }
    return (
      <View style={{}}>
        <Text>MPN:</Text>
        {mpn2KList && mpn2KList.length === 0 && (
          <Text data-testid={'empty-value-text'}>
            Enter valid values please!
          </Text>
        )}
        <Text>{mpn2KList !== undefined && mpn2KList}</Text>
      </View>
    );
  }
  return (
    <View>
      <Text style={{ ...stylesQt.title, paddingTop: 10 }}>
        Legiolert&reg; MPN
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
              setInL(Number(text));
            }}
            value={inL.toString()}
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
            onChangeText={(e) => setInS(Number(e))}
            value={inS.toString()}
            keyboardType="numeric"
          />
        </View>
        {qt2KMpnL(inL, inS)}
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
