import { View,Icon } from "@ant-design/react-native";
import { Stack, Tabs } from "expo-router";

export default function NewPage() {
    return(
        <Tabs>
            <Tabs.Screen
                name="ttt"
                options={{
                    title: 'SSS首页',
                    headerShown: true,
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" color={color} size={24} />
                    )
                  }}
            />
        </Tabs>
    )
}