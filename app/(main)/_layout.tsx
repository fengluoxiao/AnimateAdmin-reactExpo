import { Icon,Text } from "@ant-design/react-native"
import {Tabs} from "expo-router"
export default function TabsScreen() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index" 
                options={{ title: '首页' ,headerTitle: '首页'}}
            />
             <Tabs.Screen
                name="sc" 
                options={{
                    title: '第二个',

                }}
            />
        </Tabs>
    )
}