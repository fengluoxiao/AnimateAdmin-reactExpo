import { Provider as AntProvider } from "@ant-design/react-native";
import { PropsWithChildren } from "react";

export function AntDesignProvider({ children }: PropsWithChildren) {
  return <AntProvider>{children}</AntProvider>;
}
