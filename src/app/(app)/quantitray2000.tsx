import type { Mpn } from 'mpn-lookup/mpn.lookup';
import { getQt2KMpn } from 'mpn-lookup/mpn.lookup';
import React, { type FC, useState } from 'react';
import { StyleSheet, TextInput, type ViewProps } from 'react-native';

import { Text, View } from '@/ui';

function qt2KMpn(inLarge: number, inSmall: number) {
  let mpn2KList: Mpn = [];
  if (inLarge >= 0 && inLarge <= 49 && inSmall >= 0 && inSmall <= 48) {
    mpn2KList = getQt2KMpn(inLarge, inSmall);
  }
  return (
    <View style={{}}>
      <Text>MPN:</Text>
      {mpn2KList && mpn2KList.length === 0 && (
        <Text data-testid={'empty-value-text'}>Enter valid values please!</Text>
      )}
      <Text>{mpn2KList !== undefined && mpn2KList[0]}</Text>
      <Text>95% Confidence Interval:</Text>
      <Text>High: {mpn2KList !== undefined && mpn2KList[2]}</Text>
      <Text>Low: {mpn2KList !== undefined && mpn2KList[1]}</Text>
    </View>
  );
}

const TitleView: FC<ViewProps> = () => (
  <Text style={{ ...stylesQt.title, paddingTop: 10 }}>
    QuantiTray2000&reg; MPN
  </Text>
);

const MpnView2K: FC<{ large: number; small: number }> = ({ large, small }) => (
  <View>{qt2KMpn(large, small)}</View>
);

export default function Qt2000Mpn() {
  const [in2KL, setIn2KL] = useState(0);
  const [in2KS, setIn2KS] = useState(0);
  const handleLargeNumberChange = (value: string) => {
    setIn2KL(Number(value));
  };
  const handleSmallNumberChange = (value: string) => {
    setIn2KS(Number(value));
  };
  const InputView: FC<ViewProps> = () => (
    <View>
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
            onChangeText={handleLargeNumberChange}
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
            onChangeText={handleSmallNumberChange}
            value={in2KS.toString()}
            keyboardType="numeric"
          />
        </View>
      </View>
    </View>
  );

  return (
    <View>
      <TitleView />
      <InputView />
      <MpnView2K large={in2KL} small={in2KS} />
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
