/* eslint-disable no-param-reassign */
/* eslint-disable default-case */
import axios from "axios";

import { AppError } from "./AppError";

const prd = "https://treepy.appcom.dev";
const tst = "http://192.168.0.107:3333";
const url: { [key: number]: string } = {
	1: prd,
	2: tst,
};

const api = axios.create({
	baseURL: url[1],
});

// function handleConnectionError() {
// 	ConnectionErrorModalHandler.showModal();
// }

// function handleServerError(error: any) {
// 	switch (error.response.status) {
// 		// case 400:
// 		//   UnauthorizedModalHandler.showModal();
// 		//   break;
// 		case 401:
// 			break;
// 		case 403:
// 			NotAllowedModalHandler.showModal();
// 			break;
// 		case 500:
// 		case 503:
// 			InternalServerErrorModalHandler.showModal();
// 	}
// }

// api.interceptors.request.use(
//     async config => {
//         const token = await AsyncStorage.getItem('treepy@token');

//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }

//         return config;
//     },
//     error => {
//         return Promise.reject(error);
//     },
// );

api.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		const repnseApi = error?.response?.data?.error;

		if (repnseApi === "Seu token expirou, faça o login novamente") {
			// UnauthorizedModalHandler.showModal();
		}

		if (repnseApi) {
			return Promise.reject(new AppError(repnseApi));
		}
		return Promise.reject(error);
	},
);
export { api };
