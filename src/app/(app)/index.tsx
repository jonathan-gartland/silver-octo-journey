import { useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const Greeting = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          A simple app that provides the respective Most Probable Numbers for
          positive samples using the QuantiTray&reg;, QuantiTray2000&reg; or
          Legiolert systems from IDEXX Laboratories.
        </Text>
        <Text style={styles.disclaimer}>
          Disclaimer: This app is not affiliated in any way with IDEXX
          Laboratories. This app and the related code are free and open to use
          by anyone and will never cost money to use. There is no proprietary
          information involved that can not be found freely available on the
          web. For more information please go to the about section.
        </Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.paragraph}>
          To Look up the relevant MPN for your test:
        </Text>
        <Text></Text>
        <Text>Choose the relevant test tab below.</Text>
        <Text></Text>
        <Text>Enter the number of positively identified cells.</Text>
        <Text></Text>
        <Text>The MPN will be displayed.</Text>
      </View>
    );
  };
  return (
    <>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={styles.title}>MPN Lookup</Text>
        <Text style={styles.title}></Text>
        <Text style={styles.title}>Welcome!</Text>
        <Greeting />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    //justifyContent: 'center', // Vertically center the content
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
  disclaimer: {
    fontSize: 10,
    fontStyle: 'italic',
    marginBottom: 10,
    marginLeft: 5,
    fontFamily: 'cochin',
  },
});
