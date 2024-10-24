import { getQtMpn, type Mpn } from 'mpn-lookup/mpn.lookup';
import React, { type FC, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  type ViewProps,
} from 'react-native';

function getMpn(inCount: number) {
  let mpnList: Mpn = [];
  if (inCount >= 0 && inCount <= 51) {
    mpnList = getQtMpn(inCount)!;
  }
  mpnList = mpnList !== undefined ? mpnList : [0, 0, 0];
  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <View style={{ ...stylesQt.container }}>
          <Text
            style={{
              ...stylesQt.mpn,
              paddingRight: 150,
              paddingTop: 20,
            }}
          >
            MPN:
          </Text>
        </View>
        <View style={{ paddingTop: 20 }}>
          <Text style={stylesQt.mpn}>
            {mpnList !== undefined && mpnList[0]}
          </Text>
          {mpnList && mpnList.length === 0 && (
            <Text
              style={{ ...stylesQt.mpn, top: -10 }}
              data-testid={'empty-value-text'}
            >
              Enter valid{'\n'}value please!
            </Text>
          )}
        </View>
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
          mpnList1={mpnList[1].toString()}
          mpnList2={mpnList[2].toString()}
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
      <View style={stylesQt.conf2}>
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
  <Text style={stylesQt.title}>QuantiTray&reg; MPN</Text>
);

const MpnView: FC<{ count: number }> = ({ count }) => (
  <View>{getMpn(count)}</View>
);

export default function QtMpn() {
  const [inCount, setInCount] = useState(0);
  const handleNumberChange = (value: string) => {
    setInCount(Number(value));
  };
  const InputView: FC<ViewProps> = () => (
    <View
      style={{ justifyContent: 'center', paddingLeft: 0, flexDirection: 'row' }}
    >
      <Text style={{ fontSize: 16, paddingRight: 40, paddingTop: 4 }}>
        Enter Positive Well Count:{' '}
      </Text>
      <TextInput
        style={stylesQt.textInput}
        onChangeText={handleNumberChange}
        value={inCount.toString()}
        keyboardType="numeric"
      />
    </View>
  );

  return (
    <View style={{ paddingTop: 50 }}>
      <TitleView />
      <InputView />
      <MpnView count={inCount} />
    </View>
  );
}

const stylesQt = StyleSheet.create({
  container: {
    left: -15,
    justifyContent: 'center', // Vertically center the content
    alignItems: 'center', // Horizontally center the content
    flexDirection: 'column',
  },
  title: {
    fontSize: 24,
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
  },
});
