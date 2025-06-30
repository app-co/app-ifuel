import type { MutableRefObject } from "react";

import type { GlobalErrorModalRef, T } from "./types";

export default class Toast {
	static ref: MutableRefObject<GlobalErrorModalRef | undefined>;

	static setRef(ref: MutableRefObject<GlobalErrorModalRef | undefined>) {
		this.ref = ref;
	}

	static show(item: T) {
		this.ref.current?.item(item);
	}
}
