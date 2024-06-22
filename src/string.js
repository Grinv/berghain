export class string {
  #chain = [];
  #value;
  #isValid = true;

  constructor() {
    this.#chain.push(this.#string);
    return this;
  }

  validate(value) {
    this.#value = value;
    this.#isValid = true;

    for (const validate of this.#chain) {
      if (!this.#isValid) {
        break;
      }
      validate.call(this);
    }

    return this.#isValid;
  }

  nullable() {
    this.#chain.push(this.#nullable);
    return this;
  }

  #string() {
    if (
      typeof this.#value !== "string" &&
      this.#value !== null &&
      this.#value !== undefined
    ) {
      this.#isValid = false;
    }
  }

  #nullable() {
    console.log("try nullable", this.#value);
    if (this.#value !== null) {
      console.log("WRONG!");
      this.#isValid = false;
    }
  }
}
