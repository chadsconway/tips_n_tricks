import { data } from './data.js';

class Injector {
	constructor() {
		this.links = new Map();
		this.allLinks = new Map();
		this.i = 0;
		this.dataIterator = {
			*[Symbol.iterator()]() {
				while (i < data.length) {
					yield data[i];
					i++;
				}
			},
		};
		for (let val of dataIterator) {
			let item = val.next();
			let name = item.name;
			let type = item.type;
			let cdn = item.cdn;
			console.log(`item = ${item}`);
			console.log(`name = ${name}, type = ${type}`);
			console.log(`cdn = ${cdn}`);
			this.allLinks.set(name, { type: type, cdn: cdn });
		}
	}
}

export { Injector };
export { Injector as default };
