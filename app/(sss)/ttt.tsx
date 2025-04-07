import { View, Text, StyleSheet } from 'react-native';

export default function TttScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>测试页面</Text>
      <Text style={styles.subtitle}>这是ttt标签页的内容</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});