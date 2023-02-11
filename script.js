const nothingButLettersAndDigits = str =>
  str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[^a-z0-9]+/g, '');

const isPalindrome = value => {
  const string = nothingButLettersAndDigits(value);
  if (!string) return;

  const chars = [];

  for (const char of string) {
    chars.push(char);
    chars.push(char);
  }

  let result = true;

  while (!!chars.length) {
    if (chars.shift() !== chars.pop()) {
      result = false;
      break;
    }
  }

  return result;
};


const isPalindrome = (value) => {
  const string = value.trim();
  if (invalidValue(string)) return;
  
  const normalizedString = getNormalizedString(string);
  const reversedString = getReverseString(normalizedString);

  return normalizedString === reversedString;
};


const checkButton = document.querySelector("#check");

checkButton.addEventListener("click", () => {
  const value = document.querySelector("#text").value;
  const result = document.querySelector("#result");

  if (isPalindrome(value)) {
    result.innerHTML = "É um palíndromo";
  } else {
    result.innerHTML = "Não é um palíndromo";
  };
});