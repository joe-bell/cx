import { createCx } from "../src";

const shortcuts = {
  "c-button": [
    "bg-blue-500",
    "hover:bg-blue-700",
    "text-white",
    "font-bold",
    "py-2",
    "px-4",
    "rounded"
  ],
  "u-border": "border-black"
};
const cx = createCx(shortcuts);

const testClasses = ["some-class", "some-other-class"];

describe("cx", () => {
  it("concatenates classes", () => {
    expect(cx(testClasses[0], "u-border")).toEqual(
      [testClasses[0], shortcuts["u-border"]].join(" ")
    );
  });

  it("flattens class arrays", () => {
    expect(cx(...testClasses, "c-button")).toEqual(
      [...testClasses, ...shortcuts["c-button"]].join(" ")
    );
  });
});
