import * as F from "@expo-google-fonts/magra";
import { useFonts } from "expo-font";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Providers } from "@/providers";

export default function App() {
	const [_loaded, _errorr] = useFonts({
		regular: F.Magra_400Regular,
		bold: F.Magra_700Bold,
	});

	if (!_loaded) {
		return <ActivityIndicator size="large" />; // or a loading indicator
	}

	return (
		<View style={styles.container}>
			<Providers />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
