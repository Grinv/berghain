// sum.test.js
import { expect, test } from "vitest";
import { StringSchema as string } from "../src/string";

test("string", () => {
  const schema = new string();
  expect(schema.validate("kek")).toBe(true);
  expect(schema.validate("")).toBe(true);
  expect(schema.validate(null)).toBe(true);
  expect(schema.validate(undefined)).toBe(true);
  expect(schema.validate(123)).toBe(false);
  expect(schema.validate([])).toBe(false);
});

test("nullable", () => {
  const schema = new string().nullable();
  expect(schema.validate("kek")).toBe(false);
  expect(schema.validate("")).toBe(false);
  expect(schema.validate(null)).toBe(true);
  expect(schema.validate(undefined)).toBe(false);
  expect(schema.validate(123)).toBe(false);
  expect(schema.validate([])).toBe(false);
});
