class Apple {
	constructor(name) {
		this.size = 5;
		this.name = name;
	}

	returnAppleSize() {
		return this.size;	
	}

	returnAppleName() {
		return this.name;
	}
}

let grannySmith = Apple("gran");
console.log(grannySmith.returnAppleSize());
//TODO: need to add more functions