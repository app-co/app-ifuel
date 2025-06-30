import { ifuel, themeColorApp } from "@/clientCustomers/ifuel/themes";

const appBase = process.env.EXPO_PUBLIC_CLIENT_APP;
const client = appBase.replace(/[^a-zA-Z0-9\s]/g, "").toLocaleLowerCase();

interface IThemeApp {
	splash: string;
	ico: string;
}

const temas: { [key: string]: any } = {
	ifuel,
};

const _appThemes: { [key: string]: IThemeApp } = {
	ifuel: themeColorApp,
};

export const tema = temas[client];
export const appTheme = _appThemes[client];
