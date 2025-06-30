import type { ConfigContext, ExpoConfig } from "expo/config";

const EAS_PROJECT_ID = "b4a73f6a-d1a8-433a-b2ad-899671128493";
const PROJECT_SLUG = "with-envs";
const OWNER = "CodeCrafters";

const APP_NAME = "IFUEL";
const SCHEME = "ifuel";

const BUNDLE_IDENTIFIER = "com.codecrafters.ifuel";
const PACKAGE_NAME = "com.codecrafters.ifuel";

const ICON = "./assets/icon.png";
const ADAPTIVE_ICON = "./assets/adaptive-icon.png";
const _SPLASH = "./assets/splash.png";

type TEnv = "ifuel" | "default";

const client = process.env.EXPO_PUBLIC_CLIENT_APP as TEnv;
const _path = `./src/clientCustomers/${client.replace(/[^a-zA-Z0-9\s]/g, "").toLocaleLowerCase()}/assets/ico`;

export default ({ config }: ConfigContext): ExpoConfig => {
	const {
		name,
		bundleIdentifier,
		icon,
		adaptiveIcon,
		splash,
		packageName,
		scheme,
		bgIcon,
		bgSplash,
	} = getDynamicAppConfig(client);

	return {
		...config,
		name: name,
		version: "1.0.1",
		runtimeVersion: "1.0.0",
		slug: PROJECT_SLUG,
		orientation: "portrait",
		userInterfaceStyle: "automatic",
		newArchEnabled: true,
		icon: icon,
		scheme: scheme,

		ios: {
			supportsTablet: true,
			bundleIdentifier: bundleIdentifier,
			config: {
				googleMapsApiKey: "AIzaSyDfrH0vNwCcDajUtUfcw_3dWPVT54Yn-_c",
			},
		},
		android: {
			adaptiveIcon: {
				foregroundImage: adaptiveIcon,
				backgroundColor: bgIcon,
			},
			config: {
				googleMaps: {
					apiKey: "AIzaSyDfrH0vNwCcDajUtUfcw_3dWPVT54Yn-_c",
				},
			},
			package: packageName,
		},
		updates: {
			url: `https://u.expo.dev/${EAS_PROJECT_ID}`,
		},
		// runtimeVersion: {
		// 	policy: "appVersion",
		// },
		extra: {
			eas: {
				projectId: EAS_PROJECT_ID,
			},
			client: process.env.EXPO_PUBLIC_CLIENT_APP,
		},
		web: {
			favicon: "./assets/favicon.png",
		},
		plugins: [
			"expo-font",
			[
				"onesignal-expo-plugin",
				{
					mode: "production",
				},
			],
			[
				"expo-location",
				{
					locationAlwaysAndWhenInUsePermission:
						"Permita que o $(PRODUCT_NAME) use sua localização. Essa ação é necesaria para que você tenha uma melhor experiência na busca do postos de combustíveis.",
				},
			],
			[
				"expo-image-picker",
				{
					photosPermission:
						"O deseja aplicativo acessa suas fotos para que você possa compartilhá-las com seus amigos.",
				},
			],
			[
				"expo-updates",
				{
					checkForUpdatesOnStartup: true,
				},
			],
			[
				"expo-splash-screen",
				{
					image: splash,
					imageWidth: 200,
					resizeMode: "contain",
					backgroundColor: bgSplash,
				},
			],
		],

		owner: OWNER,
	};
};

export const getDynamicAppConfig = (environment: TEnv) => {
	if (environment) {
		return {
			name: environment,
			scheme: `app-${environment.toLocaleLowerCase()}`,
			bundleIdentifier: `com.codecrafters.${environment.toLocaleLowerCase().replace(/[^a-zA-Z0-9\s]/g, "")}`,
			packageName: `com.codecrafters.${environment.toLocaleLowerCase().replace(/[^a-zA-Z0-9\s]/g, "")}`,
			icon: `${_path}/icon.png`,
			splash: `${_path}/splash-icon.png`,
			adaptiveIcon: `${_path}/adaptive-icon.png`,
			bgSplash: "#D41D15",
			bgIcon: "#D41D15",
		};
	}

	return {
		name: `${APP_NAME} Development`,
		scheme: `${SCHEME}-dev`,
		bundleIdentifier: `${BUNDLE_IDENTIFIER}.dev`,
		packageName: `${PACKAGE_NAME}.dev`,
		icon: ICON,
		splash: _SPLASH,
		adaptiveIcon: ADAPTIVE_ICON,
	};
};
