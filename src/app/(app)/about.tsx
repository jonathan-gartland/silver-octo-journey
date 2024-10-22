import { Linking, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';

import { Text, View } from '@/ui';

export default function About() {
  const mpnlookup_url = 'https://github.com/jonathan-gartland/mpn-lookup';
  const iqt_url =
    'https://www.idexx.com/en/water/water-products-services/quanti-tray-system/';
  const obytes_url = 'https://starter.obytes.com/';
  return (
    <View style={{}}>
      <Text
        style={{
          ...styles.title,
        }}
      >
        Why is this a thing?
      </Text>
      <Text style={styles.paragraph}>
        Some folks work in water testing facilities that utilize the Idexx
        QuantiTray&reg; System for analyzing water samples. If the user is
        familiar with this system, then the app should make sense.{' '}
      </Text>
      <Text style={styles.paragraph}>
        For a quick overhead view for those who just stumbled on this in the app
        store and may not be familiar, once the water sample is incubated, a
        technician will need to count the positive indicating sample wells, and
        then cross reference one of three PDF files with the corresponding Most
        Probable Number and the related confidence range if available for that
        positive sample count.
      </Text>
      <Text style={styles.paragraph}>
        For all the detail you'll ever need about this please visit:
      </Text>
      <Text
        style={styles.underLineText}
        onPress={() => Linking.openURL(iqt_url)}
      >
        {iqt_url}
      </Text>
      <Divider />
      <View style={{ paddingTop: 20 }}>
        <Text style={styles.paragraph}>
          This app, which I built (using the{' '}
          <Text
            style={styles.underLineText}
            onPress={() => Linking.openURL(obytes_url)}
          >
            {obytes_url}
          </Text>{' '}
          as a fantastic guide) to practice React Native and NextJS development
          and testing, wraps a little npm package I built using the values from
          the PDF files copied and pasted into convenient objects. For more info
          see that repository on github. :
        </Text>
        <Text
          style={styles.underLineText}
          onPress={() => Linking.openURL(mpnlookup_url)}
        >
          {mpnlookup_url}
        </Text>
        {/*<TouchableOpacity>*/}
        {/*  <Text style={styles.underLineText}>Your underline Text</Text>*/}
        {/*</TouchableOpacity>*/}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 5,
    paddingTop: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    textDecorationLine: 'underline',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 5,
    fontFamily: 'cochin',
    paddingTop: 10,
    // textAlign: 'center',
  },
  underLineText: {
    fontSize: 12,
    textDecorationLine: 'underline',
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'space-evenly',
  },
});
