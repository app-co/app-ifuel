import { key } from "./key";

interface IKyes {
	oneSignalKey: string;
	googleMapsKey: string;
}

const app = process.env.EXPO_PUBLIC_CLIENT_APP;

const chave: { [key: string]: IKyes } = key;

export const keys = chave[app];
