const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let firstPassword = document.getElementById("first-password")
let secondPassword = document.getElementById("second-password")


function generatePasswords() {
  let randomCharacter = ""
    for (i = 1; i <= 15; i++){
      randomCharacter += characters[Math.floor(Math.random() * characters.length)]
    }
    firstPassword.textContent = randomCharacter

  let randomPassword = ""
    for (i = 1; i <= 15; i++){
        randomPassword += characters[Math.floor(Math.random() * characters.length)]
      }
      secondPassword.textContent = randomPassword
}

// let testNumbers = [
//   "a",
//   "b",
//   "c",
//   "d"
// ];

// function generatePasswords() {
//   let randomNumberOne = ""
//     for (i = 1; i <2; i++){
//       randomNumberOne += testNumbers[Math.floor(Math.random() * testNumbers.length)]
//     }
//     firstPassword.textContent = randomNumberOne

//   let randomNumberTwo = ""
//     for (i = 1; i <2; i++){
//         randomNumberTwo += testNumbers[Math.floor(Math.random() * testNumbers.length)]
//       }
//       secondPassword.textContent = randomNumberTwo
// }

