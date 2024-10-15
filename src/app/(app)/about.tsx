import { StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';

import { Text, View } from '@/ui';

export default function About() {
  return (
    <View style={{}}>
      <Text style={styles.title}>Why?</Text>
      <Text style={styles.paragraph}>
        Some folks work in water testing facilities that utilize the Idexx
        QuantiTray&reg; System for analyzing water samples.{' '}
      </Text>
      <Text style={styles.paragraph}>
        Once the water sample is incubated, a technician will need to count the
        positive indicating sample wells, and then cross reference one of three
        PDF files with the corresponding Most Probable Number and the related
        confidence range if available.
      </Text>
      <Text style={styles.paragraph}>
        For all the detail you'll ever need about this please visit:
        https://www.idexx.com/en/water/water-products-services/quanti-tray-system/
        at your leisure.
      </Text>
      <Divider />
      <Text style={styles.paragraph}>
        it uses a little npm package I built using the values from the PDF
        files: https://github.com/jonathan-gartland/mpn-lookup for more info.
      </Text>
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
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 5,
    fontFamily: 'cochin',
    paddingTop: 10,
  },
});
