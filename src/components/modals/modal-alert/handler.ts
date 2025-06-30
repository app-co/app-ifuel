import type { MutableRefObject } from "react";

import type { GlobalErrorModalRef, T } from "./types";

export default class AlertModal {
	static ref: MutableRefObject<GlobalErrorModalRef | undefined>;

	static setRef(ref: MutableRefObject<GlobalErrorModalRef | undefined>) {
		this.ref = ref;
	}

	static showModal(obj: T) {
		this.ref?.current?.show(obj);
	}

	static hideModal() {
		this.ref?.current?.hide();
	}
}
