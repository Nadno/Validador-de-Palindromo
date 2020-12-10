const invalidValue = (value) => (typeof value !== "string" || !value || value.length < 3);

const stringToArray = (value) => {
  const array = value.split("");
  const removeSpaces = letter => letter.trim();

  return array.filter(removeSpaces);
};

const arrayToString = array => array.map(letter => letter).join("");

const reverseArray = array => array.reverse();
const getReverseString = (string) => {
  const array = stringToArray(string);
  const reversedArray = reverseArray(array);
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


const isPalindromo = (value) => {
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

  if (isPalindromo(value)) {
    result.innerHTML = "É um palíndromo";
  } else {
    result.innerHTML = "Não é um palíndromo";
  };
});