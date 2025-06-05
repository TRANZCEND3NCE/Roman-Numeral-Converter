const input = document.getElementById("number")
const convertBtn = document.getElementById("convert-btn")
const output = document.getElementById("output")
let numeralRoman = ""
const romanNumeral = [
  {
    input: 1000,
    numeral: "M",
  },
  {
    input: 900,
    numeral: "CM",
  },
  {
    input: 500,
    numeral: "D",
  },
  {
    input: 400,
    numeral: "CD",
  },
  {
    input: 100,
    numeral: "C",
  },
  {
    input: 90,
    numeral: "XC",
  },
  {
    input: 50,
    numeral: "L"
  },
  {
    input: 40,
    numeral: "XL",
  },
  {
    input: 10,
    numeral: "X",
  },
  {
    input: 9,
    numeral: "IX",
  },
  {
    input: 5,
    numeral: "V",
  },
  {
    input: 4,
    numeral: "IV",
  },
  {
    input: 1,
    numeral: "I",
  },
];


convertBtn.addEventListener('click', (e) => {
    e.preventDefault();


  if (input.value === "") {
    output.innerText = "Please enter a valid number"
    return
  } else if (input.value < 0) {
    output.innerText = "Please enter a number greater than or equal to 1"
    return
  } else if (input.value > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999"
   return
  } 
     toRoman(input.value);
  output.innerText = numeralRoman;
});

const toRoman = (input) => {
  let result = "";
  let remaining = input;

  for (const { input, numeral } of romanNumeral) {
    while (remaining >= input) {
      result += numeral;
      remaining -= input;
    }
  }
numeralRoman = result;
};