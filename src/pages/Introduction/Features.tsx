import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Features(props: any) {
	return (
		<View {...props} style={{ backgroundColor: "grey", height: "100%", ...props.style }}>
			<Text className="heading">Features</Text>
		</View>
	);
}