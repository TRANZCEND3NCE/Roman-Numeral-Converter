const input = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

const romanNumeral = [
  { value: 1000, numeral: 'M' },
  { value: 900, numeral: 'CM' },
  { value: 500, numeral: 'D' },
  { value: 400, numeral: 'CD' },
  { value: 100, numeral: 'C' },
  { value: 90, numeral: 'XC' },
  { value: 50, numeral: 'L' },
  { value: 40, numeral: 'XL' },
  { value: 10, numeral: 'X' },
  { value: 9, numeral: 'IX' },
  { value: 5, numeral: 'V' },
  { value: 4, numeral: 'IV' },
  { value: 1, numeral: 'I' },
];

convertBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let num = parseInt(input.value, 10)

  if (isNaN(num)) {
    output.innerText = 'Please enter a valid number';
    return;
  } if (num < 1) {
    output.innerText = 'Please enter a number greater than or equal to 1';
    return;
  } if (num > 3999) {
    output.innerText = 'Please enter a number less than or equal to 3999';
    return;
  }
  
  output.innerText = decimalToRoman(num);
});

const decimalToRoman = (num) => {
  let result = '';
  let remaining = num;

  for (const { value, numeral } of romanNumeral) {
    while (remaining >= value) {
      result += numeral;
      remaining -= value;
    }
  }
  return result;
};
