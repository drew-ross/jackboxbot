module.exports = {
  generateRoomCode,
};

function generateRoomCode() {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  let code = "";
  for (let i = 0; i < 4; i++) {
    code += letters[Math.floor(Math.random() * 24)];
  }
  return code;
}
