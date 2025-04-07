
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AntDesignProvider } from '@/providers/AntDesignProvider';
import { Button } from '@ant-design/react-native';
import { Icon } from "@ant-design/react-native";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    antoutline: require('@ant-design/icons-react-native/fonts/antoutline.ttf'),
    antfill: require('@ant-design/icons-react-native/fonts/antfill.ttf')
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen name='(main)'>
      
    </Stack.Screen>
    <Stack.Screen
                name="(sss)"
                options={{ title: 'SSS页面', headerShown: true }}
            />
   
  </Stack>
  );
  
}
var styles = StyleSheet.create({
  
    test: {
      backgroundColor: Platform.select({
        ios: 'red',
        android: 'blue',
        web: 'green',
      }),
    },
  });

  var clickBtn = () => {
    alert('' + Platform.OS);
  }
