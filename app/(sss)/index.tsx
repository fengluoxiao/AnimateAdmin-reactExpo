import { View, Text, StyleSheet } from 'react-native';

export default function SssIndex() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>欢迎使用</Text>
      <Text style={styles.subtitle}>这是(sss)目录的首页</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});