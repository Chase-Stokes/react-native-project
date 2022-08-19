import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Oh Snap!!!</Text>
      </View>
      <View style={styles.body}>
        <Text>This is showing up on the emulator!</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDD0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'walnut',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold'
  },
  body: {
    backgroundColor: 'aquamarine',
    padding: 10
  }
});
