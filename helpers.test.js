const { generateRoomCode } = require("./helpers.js");

describe("generateRoomCode", () => {
  it("creates a string of letters of length 4", () => {
    const code = generateRoomCode();
    expect(code.length).toBe(4);
    for (let i = 0; i < 4; i++) {
      expect("abcdefghijklmnopqrstuvwxyz".includes(code[i])).toBe(true);
    }
  });
});
