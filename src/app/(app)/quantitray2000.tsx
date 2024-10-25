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
  mpn2KList = mpn2KList !== undefined ? mpn2KList : [0, 0, 0];
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          ...stylesQt.container,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text
            style={{
              ...stylesQt.mpn,
              paddingTop: 20,
              left: 60,
            }}
          >
            MPN:
          </Text>
        </View>
        <View style={{ position: 'relative', right: 80, paddingTop: 20 }}>
          <Text style={{ ...stylesQt.mpn }}>
            {mpn2KList !== undefined && mpn2KList[0]}
          </Text>
        </View>
        {!mpn2KList ||
          (mpn2KList.length === 0 && (
            <Text
              style={{ ...stylesQt.mpn, top: -10 }}
              data-testid={'empty-value-text'}
            >
              Enter valid{'\n'}value please!
            </Text>
          ))}
      </View>
      <View
        style={{
          justifyContent: 'center',
          paddingLeft: 80,
          paddingTop: 30,
        }}
      >
        <Text style={stylesQt.mpnconfTitle}>95% Confidence Interval:</Text>
        <ConfidenceView
          mpnList1={mpn2KList[1].toString()}
          mpnList2={mpn2KList[2].toString()}
        />
      </View>
    </View>
  );
}

const ConfidenceView: FC<{ mpnList1: string; mpnList2: string }> = ({
  mpnList1,
  mpnList2,
}) => (
  <View>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10,
      }}
    >
      <View style={{ flex: 1 }}>
        <Text style={stylesQt.mpnconf}>High</Text>
      </View>
      <View style={{ ...stylesQt.conf2 }}>
        <Text style={stylesQt.mpnconf}>
          {mpnList2 !== undefined && mpnList2}{' '}
        </Text>
      </View>
    </View>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10,
      }}
    >
      <View style={{ flex: 1 }}>
        <Text style={stylesQt.mpnconf}>Low: </Text>
      </View>
      <View style={stylesQt.conf2}>
        <Text style={stylesQt.mpnconf}>
          {mpnList1 !== undefined && mpnList1}{' '}
        </Text>
      </View>
    </View>
  </View>
);
const TitleView: FC<ViewProps> = () => (
  <Text style={stylesQt.title}>QuantiTray2000&reg; MPN</Text>
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
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 16, paddingLeft: 10, paddingTop: 4 }}>
              Enter Large Positive Well Count:
            </Text>
          </View>
          <View style={{ position: 'relative', right: 50 }}>
            <TextInput
              style={stylesQt.textInput}
              onChangeText={handleLargeNumberChange}
              value={in2KL.toString()}
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
            <Text style={{ fontSize: 16, paddingLeft: 10, paddingTop: 4 }}>
              Enter Small Positive Well Count:
            </Text>
          </View>
          <View style={{ position: 'relative', right: 50 }}>
            <TextInput
              style={stylesQt.textInput}
              onChangeText={handleSmallNumberChange}
              value={in2KS.toString()}
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
      <MpnView2K large={in2KL} small={in2KS} />
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
