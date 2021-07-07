let templateInner = document.getElementById('c-e-inner-temp');
globalThis.customElements.define(
	templateInner.id,
	class extends HTMLElement {
		constructor() {
			super();
			this.attachShadow({ mode: 'open' });
			this.shadowRoot.appendChild(templateInner.content.cloneNode(true));
		}
	}
);

let templateOuter = document.getElementById('c-e-outer-temp');
globalThis.customElements.define(
	templateOuter.id,
	class extends HTMLElement {
		constructor() {
			super();
			this.attachShadow({ mode: 'open' });
			this.shadowRoot.appendChild(templateOuter.content.cloneNode(true));
		}
	}
);
