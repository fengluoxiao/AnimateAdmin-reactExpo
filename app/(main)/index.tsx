import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { api, NameData } from '../API/api';

export default function Home() {
  const [names, setNames] = useState<NameData[]>([]);
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registerError, setRegisterError] = useState('');

  useEffect(() => {
    fetchNames();
  }, []);

  const fetchNames = async () => {
    try {
      const result = await api.getAllNames();
      if (result.ok) {
        setNames(result.data);
        console.log(result.data);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('获取数据失败');
      console.error('获取数据错误:', err);
    }
  };

  const handleRegister = async () => {
    try {
      const result = await api.register(username, password, '你的token');
      if (result.ok) {
        alert('注册成功！');
        setUsername('');
        setPassword('');
      } else {
        setRegisterError(result.message);
      }
    } catch (err) {
      setRegisterError('注册失败');
      console.error('注册错误:', err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.registerForm}>
        <Text style={styles.title}>创建管理员账号</Text>
        <TextInput
          style={styles.input}
          placeholder="用户名"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="密码"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {registerError ? (
          <Text style={styles.error}>{registerError}</Text>
        ) : null}
        <TouchableOpacity 
          style={styles.button}
          onPress={handleRegister}
        >
          <Text style={styles.buttonText}>注册</Text>
        </TouchableOpacity>
      </View>

      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <>
          {names.map((item) => (
            <View key={item.id}>
              <Text>{item.name}</Text>
              <Text style={{ fontSize: 12, color: '#666' }}>{item.desc}</Text>
            </View>
          ))}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  registerForm: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  }
});