export type TType = "success" | "error" | "warning";
export type T = {
	title?: string;
	description: string;
	tipo: TType;
	duration?: number;
} | null;

export type GlobalErrorModalRef = {
	// show: () => void;
	// hide: () => void;
	item: (obj: T) => void;
};
