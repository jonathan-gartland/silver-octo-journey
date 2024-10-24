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
    mpnList = getQtMpn(inCount);
  }

  const ConfidenceViewTitle: FC<ViewProps> = () => (
    <Text style={stylesQt.mpnconfTitle}>95% Confidence Interval:</Text>
  );

  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <View style={{ ...stylesQt.container }}>
          <Text
            style={{
              ...stylesQt.mpn,
              paddingRight: 150,
            }}
          >
            MPN:
          </Text>
        </View>
        <View>
          <Text style={stylesQt.mpn}>
            {mpnList !== undefined && mpnList[0]}
            {}
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
        <ConfidenceViewTitle />
        {/*<ConfidenceView mpnList1={mpnList[1]} mpnList2={mpnList[2]} />*/}
      </View>
    </View>
  );
}

const TitleView: FC<ViewProps> = () => (
  <Text style={stylesQt.title}>QuantiTray&reg; MPN</Text>
);

export default function QtMpn() {
  const [inCount, setInCount] = useState(0);
  const handleNumberChange = (value: string) => {
    setInCount(Number(value));
  };
  // const ConfidenceViewTitle: FC<ViewProps> = () => (
  //   <Text style={stylesQt.mpnconfTitle}>95% Confidence Interval:</Text>
  // );
  // const ConfidenceView: FC = () => (
  //   <View>
  //     <View
  //       style={{
  //         flexDirection: 'row',
  //         justifyContent: 'center',
  //         paddingLeft: 80,
  //         paddingTop: 10,
  //       }}
  //     >
  //       <View style={{ flex: 1 }}>
  //         <Text style={stylesQt.mpnconf}>High:</Text>
  //       </View>
  //       <View style={stylesQt.conf2}>
  //         <Text style={stylesQt.mpnconf}>
  //           {/*{mpnList[2] !== undefined && mpnList[2]}{' '}*/}
  //         </Text></View></View>
  //     <View
  //       style={{
  //         flexDirection: 'row',
  //         justifyContent: 'center',
  //         paddingLeft: 80,
  //         paddingTop: 10,
  //       }}
  //     >
  //       <View style={{ flex: 1 }}>
  //         <Text style={stylesQt.mpnconf}>Low: </Text>
  //       </View>
  //       <View style={stylesQt.conf2}>
  //         <Text style={stylesQt.mpnconf}>
  //           {/*{mpnList !== undefined && mpnList[1]}{' '}*/}
  //         </Text>
  //       </View>
  //     </View>
  //   </View>
  // );

  const InputView: FC<ViewProps> = () => (
    <View
      style={{ justifyContent: 'center', paddingLeft: 0, flexDirection: 'row' }}
    >
      <Text style={{ paddingRight: 40, paddingTop: 4 }}>
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
  const ReworkMpnView: FC<ViewProps> = () => <View>{getMpn(inCount)}</View>;
  return (
    <View>
      <TitleView />
      <InputView />
      <ReworkMpnView />
    </View>
  );
}

const stylesQt = StyleSheet.create({
  container: {
    // padding: 20,
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
