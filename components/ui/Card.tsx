import React from "react";
import { View, ViewStyle } from "react-native";
interface CardProps extends React.PropsWithChildren {
  style?: ViewStyle;
}
export default function Card({ children, style = {} }: CardProps) {
  return (
    <View
      style={{
        padding: 15,
        borderRadius: 15,
        backgroundColor: "white",
        elevation: 8,
        shadowColor: "#000",
        shadowRadius: 8,
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.15,
        ...style,
      }}>
      {children}
    </View>
  );
}
