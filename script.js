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

const $palindromeChecker = document.querySelector('#palindrome-checker'),
  $inputText = document.querySelector('#text');
$result = document.querySelector('#result');

$inputText.addEventListener('input', () => {
  if (!$result.dataset.hasResult) return;
  $result.innerHTML = '';
  delete $result.dataset.hasResult;
});

$palindromeChecker.addEventListener('submit', e => {
  e.preventDefault();

  const value = $inputText.value;
  if (!value) return;

  $result.dataset.hasResult = true;

  if (isPalindrome(value)) {
    $result.innerHTML = 'É um palíndromo';
  } else {
    $result.innerHTML = 'Não é um palíndromo';
  }
});
