import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.HoleContainer}>
      <Text>This is React Native Mobile Application Assignment From Gabishcool</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  HoleContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
