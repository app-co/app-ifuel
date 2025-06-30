const appclient = process.env.EXPO_PUBLIC_CLIENT_APP;

import type { ReactNode } from "react";
import { ifuelImgs } from "@/clientCustomers/ifuel/assets/public";

interface IImgs {
	// boasVindas: ImageSourcePropType;
	Logo: ReactNode;
}

const imgs: { [key: string]: IImgs } = {
	ifuel: ifuelImgs,
};

export const appImgs = imgs[appclient];
