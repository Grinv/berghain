type ChainType = () => void;
export class BooleanSchema {
  #chain: ChainType[] = [];
  #value: unknown;
  #isValid: boolean = true;

  constructor() {
    this.#chain.push(this.#string);
    return this;
  }

  validate(value: unknown) {
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

  true() {
    this.#chain.push(this.#true);
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

  #true() {
    console.log("try nullable", this.#value);
    if (this.#value !== null) {
      console.log("WRONG!");
      this.#isValid = false;
    }
  }
}
