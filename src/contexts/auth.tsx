/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-constructed-context-values */

import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
	createContext,
	type ReactNode,
	useContext,
	useState,
} from "react";
import type { IUser } from "@/hooks/dtos/interfaces";
import type { TLogin } from "@/hooks/dtos/types";

// import { OneSignal } from 'react-native-onesignal';

interface AuthProviderProps {
	children: ReactNode;
}

interface AuthContextData {
	user: IUser | undefined;
	loading: boolean;
	signIn: (value: TLogin) => void;
	signOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
	const [user, setUser] = useState<IUser | undefined>();
	const [loading, setLoading] = useState(true);

	const updateUser = React.useCallback(async () => {
		try {
		} finally {
			setLoading(false);
		}
	}, []);

	React.useEffect(() => {
		updateUser();
	}, [updateUser]);

	const signIn = React.useCallback(async (_input: TLogin) => {
		// api.defaults.headers.common.Authorization = `Bearer ${auth.token}`;
		// OneSignal.User.addTag('user', auth.cpfCnpj);
	}, []);

	async function signOut() {
		setLoading(true);
		// OneSignal.User.removeTag('user');

		// OneSignal.User.removeTag('userId');

		await AsyncStorage.clear();
		setUser({} as IUser);

		setLoading(false);
	}

	return (
		<AuthContext.Provider
			value={{
				signIn,
				signOut,
				user,
				loading,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

// export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => { };

export function useAuth() {
	const context = useContext(AuthContext);
	return context;
}
