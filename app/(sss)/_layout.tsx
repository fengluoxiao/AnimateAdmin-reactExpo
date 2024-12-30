import { Tabs } from "expo-router";

export default function Scc() {
    return(
        <Tabs>
            <Tabs.Screen
                name="ttt"
                options={{title: '测试'}}
            />
        </Tabs>
    )
}