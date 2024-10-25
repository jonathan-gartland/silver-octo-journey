import type { Mpn } from 'mpn-lookup/mpn.lookup';
import { getQtLegio } from 'mpn-lookup/mpn.lookup';
import React, { type FC, useState } from 'react';
import { StyleSheet, TextInput, type ViewProps } from 'react-native';

import { Text, View } from '@/ui';

const qtMpnL = (inLarge: number, inSmall: number) => {
  let mpnList: Mpn = [];
  if (inLarge >= 0 && inLarge <= 6 && inSmall >= 0 && inSmall <= 90) {
    mpnList = getQtLegio(inLarge, inSmall);
  }
  mpnList = mpnList !== undefined ? mpnList : [0, 0, 0];
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          ...stylesQt.container,
          paddingTop: 50,
        }}
      >
        <View>
          <Text
            style={{
              ...stylesQt.mpn,
              paddingRight: 100,
            }}
          >
            MPN:
          </Text>
        </View>
        <View
          style={
            {
              // position: 'relative',
              // right: 80,
              // paddingTop: 20,
            }
          }
        >
          <Text style={{ ...stylesQt.mpn }}>
            {mpnList !== undefined && mpnList}
          </Text>
        </View>
        {!mpnList ||
          (mpnList.length === 0 && (
            <Text style={{ ...stylesQt.mpn }} data-testid={'empty-value-text'}>
              Enter valid{'\n'}value please!
            </Text>
          ))}
      </View>
    </View>
  );
};
const TitleView: FC<ViewProps> = () => (
  <Text style={{ ...stylesQt.title, paddingTop: 10 }}>Legiolert&reg; MPN</Text>
);

const MpnViewLe: FC<{ large: number; small: number }> = ({ large, small }) => (
  <View>{qtMpnL(large, small)}</View>
);

export default function QtLMpn() {
  const [inL, setInL] = useState(0);
  const [inS, setInS] = useState(0);
  const handleLargeNumberChange = (value: string) => {
    setInL(Number(value));
  };
  const handleSmallNumberChange = (value: string) => {
    setInS(Number(value));
  };

  const InputView: FC<ViewProps> = () => (
    <View>
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 16, paddingLeft: 30, paddingTop: 4 }}>
              Enter Large Positive Well Count:
            </Text>
          </View>
          <View style={{ position: 'relative', right: 50 }}>
            <TextInput
              style={stylesQt.textInput}
              onChangeText={handleLargeNumberChange}
              value={inL.toString()}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop: 20,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 16, paddingLeft: 30, paddingTop: 4 }}>
              Enter Small Positive Well Count:
            </Text>
          </View>
          <View style={{ position: 'relative', right: 50 }}>
            <TextInput
              style={stylesQt.textInput}
              onChangeText={handleSmallNumberChange}
              value={inS.toString()}
              keyboardType="numeric"
            />
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={{ paddingTop: 50 }}>
      <TitleView />
      <InputView />
      <MpnViewLe large={inL} small={inS} />
    </View>
  );
}
const stylesQt = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center', // Vertically center the content
    alignItems: 'center', // Horizontally center the content
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 5,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 30,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 5,
    fontFamily: 'cochin',
  },
  mpn: {
    fontSize: 18,
    fontFamily: 'cochin',
    color: 'red',
  },
  mpnconfTitle: {
    fontSize: 18,
    fontFamily: 'cochin',
    color: 'blue',
  },
  mpnconf: {
    fontSize: 16,
    fontFamily: 'cochin',
    color: 'blue',
  },
  conf1: {},
  conf2: { flex: 2, paddingLeft: 150 },
  textInput: {
    width: 40,
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
    fontFamily: 'cochin',
    fontSize: 16,
  },
});
