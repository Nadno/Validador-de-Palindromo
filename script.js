const invalidValue = (value) => 
  (typeof value !== "string" || !value || value.length < 3);

const arrayToString = array => 
  array.map(letter => letter).join("");

const getReverseString = (string) => {
  const array = string.split("");
  const reversedArray = array.reverse();

  return arrayToString(reversedArray);
};

const getNormalizedString = (string) => {
  const NORMALIZE_PUNCTUATION = /\s|[\d,.?!:'\-"]/g;
  const NORMALIZE_A = /[àáâãäå]/g;
  const NORMALIZE_E = /[èéêë]/g;
  const NORMALIZE_I = /[íìîï]/g;
  const NORMALIZE_O = /[óòõôö]/g
  const NORMALIZE_U = /[úùûü]/g;
  const NORMALIZE_C = /[ç]/g;

  let result = string.toLowerCase();

  result = result
    .replace(NORMALIZE_PUNCTUATION, "")
    .replace(NORMALIZE_A, "a")
    .replace(NORMALIZE_E,"e")
    .replace(NORMALIZE_I,"i")
    .replace(NORMALIZE_O,"o")
    .replace(NORMALIZE_U,"u")
    .replace(NORMALIZE_C,"c");

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