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
        <Text style={styles.paragraph}>
          This app is not affiliated in any way with IDEXX. For more information
          please read the about section.
        </Text>
        <Text style={styles.paragraph}>
          To use: Choose the relevant test below, enter the number of positively
          identified cells, the MPN will be displayed.
        </Text>
      </View>
    );
  };
  return (
    <>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={styles.title}>MPN Lookup</Text>
        <Text style={styles.title}></Text>
        <Text style={styles.title}>Welcome!</Text>
      </View>
      <Greeting />
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
});
