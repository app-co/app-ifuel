export type TType = "success" | "error" | "warning";
export type T = {
	title?: string;
	description: string;
};

export type GlobalErrorModalRef = {
	show: (h: T) => void;
	hide: () => void;
};
