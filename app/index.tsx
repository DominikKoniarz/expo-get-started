import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Index() {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount((prevCount) => prevCount + 1);
	};
	const decrement = () => {
		setCount((prevCount) => prevCount - 1);
	};

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text>Edit app/index.tsx to edit this screen.</Text>
			<Button title="Increment" onPress={increment} />
			<Button title="Decrement" onPress={decrement} />
			<Text style={{ fontSize: 20, marginTop: 20 }}>Count: {count}</Text>
			<Text style={{ fontSize: 20, marginTop: 20 }}>
				{count % 2 === 0 ? "Even" : "Odd"}
			</Text>
		</View>
	);
}
