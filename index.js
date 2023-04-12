// Napisz program o nazwie Wyrocznia delficka, który w interfejsie zawierać będzie napis: “To ja, przemożna Pytia – zadaj mi w myślach pytanie, a ja odpowiem czy to o czym pomyślałeś się spełni” oraz przycisk “arrayNumbersawdź”. Po kliknięciu na przycisk skrypt pokaże na ekranie napis: “Prawdopodobieństwo, że tak będzie wynosi: 41%” – przy czym wartość procentowa ma zostać wygenerowana pseudolosowo przy każdym kliknięciu na przycisk z przedziału 1-100 (41 to tylko przykładowe wykonanie). Dodatkowo, jeśli prawdopodobieństwo wynosi od 0-33% to napis ma być czerwony, jeśli 34-66% niebieski, a dla 67-100% zielony.
const probability_of_fulfillment = () => {
  const viewProbabilty = document.querySelector('#viewProbabilty');
  const randomProbabilty = Math.floor(Math.random() * (100 - 0) + 0);
  if (randomProbabilty <= 33) {
    viewProbabilty.style.color = 'red';
  } else if (randomProbabilty > 33 && randomProbabilty <= 66) {
    viewProbabilty.style.color = 'blue';
  } else if (randomProbabilty > 66 && randomProbabilty <= 100) {
    viewProbabilty.style.color = 'green';
  }
  // randomProbabilty <= 33 ? (viewProbabilty.style.color = 'red') : randomProbabilty > 33 && randomProbabilty <= 66 ? (viewProbabilty.style.color = 'blue') : randomProbabilty > 66 && randomProbabilty <= 100 ? (viewProbabilty.style.color = 'green') : '';
  return (viewProbabilty.innerHTML = 'Prawdopodobieństwo, że tak będzie wynosi: ' + randomProbabilty + '%.');
};
document.querySelector('#checkButton').addEventListener('click', probability_of_fulfillment);


// -----------------------------------------------------------------------------------------------------------------------------------
// Napisz skrypt, który wczytuje od użytkownika dwa słowa, po czym zamienia po kliknięciu w przycisk pierwsze litery w obu wyrazach wypisując taką wersję słów pod formularzem. Na przykład: “ford mustang” po kliknięciu przekształci się w: “mord fustang”
const firstWord = document.querySelector('#firstWord');
const secondWord = document.querySelector('#secondWord');
const transformed_words = (firstWord, secondWord) => {
  const transformedFirstWord = firstWord.value.replace(firstWord.value.charAt(0), secondWord.value.charAt(0));
  const transformedSecondWord = secondWord.value.replace(secondWord.value.charAt(0), firstWord.value.charAt(0));
  return (document.querySelector('#transformedWords').innerHTML = transformedFirstWord + ', ' + transformedSecondWord);
};
document.querySelector('#transformedWordsButton').addEventListener('click', () => transformed_words(firstWord, secondWord));


// -----------------------------------------------------------------------------------------------------------------------------------
// Napisz skrypt, który arrayNumbersawdzi, czy podany napis ma przynajmniej 6 znaków, a dodatkowo arrayNumbersawdzi także, czy łańcuch zakończony jest wyrazem “kot”. Przykład 1: “warkot” – wyraz ma co najmniej 6 znaków i kończy się napisem kot. Przykład 2: “łaskotki” – wyraz ma co najmniej 6 znaków, ale nie kończy się napisem kot. Przykład 3: “kot” – wyraz nie ma co najmniej 6 znaków, ale kończy się napisem kot.
const wordToCheck = document.querySelector('#wordToCheck');
const checking_word = (wordToCheck) => {
  const checkLength = wordToCheck.value.length;
  const checkIncluding = wordToCheck.value.includes('kot');
  const checkLengthTrue = (checkLength) => {
    return checkLength >= 6 ? 'Tak' : 'Nie';
  };
  const checkIncludingTrue = (checkIncluding) => {
    return checkIncluding === true ? 'Tak' : 'Nie';
  };
  // return (document.querySelector('#resultOfCheckingWord').innerHTML = 'Długość wyrazu wynosi: ' + checkLength + ' liter, a zawartość słowa "kot" jest ' + checkIncluding + '.');
  return (document.querySelector('#resultOfCheckingWord').innerHTML =
    'Czy napis posiada conajmniej 6 liter? - ' +
    checkLengthTrue(checkLength) +
    '<br />' +
    'Czy napis posiada w sobie frazę "kot"? - ' +
    checkIncludingTrue(checkIncluding));
};
document.querySelector('#checkWord').addEventListener('click', () => checking_word(wordToCheck));


// -----------------------------------------------------------------------------------------------------------------------------------
// Napisz skrypt, który po wczytaniu trzech liczb znajdzie najmniejszą i największą z podanych wartości.
const numberToCheck = document.querySelector('#numberToCheck');
const chooseNumbersToCheck = document.querySelector('#chooseNumbersToCheck');

const add_number = (numberToCheck) => {
  if (numberToCheck.value === '') {
    return alert('Podaj cyfrę/liczbę.');
  } else if (numberToCheck.value !== '') {
    return (document.querySelector('#chooseNumbersToCheck').innerHTML += numberToCheck.value + ', '), (numberToCheck.value = '');
  }
};

const prepare_numbers = (chooseNumbersToCheck) => {
  const arrayNumbers = chooseNumbersToCheck.textContent.split(', ');
  for (i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] === '') {
      arrayNumbers.splice(i, 1);
    }
  }
  return search_min_and_max(arrayNumbers);
};

const search_min_and_max = (arrayNumbers) => {
  let minmax = arrayNumbers.reduce(
    (acc, curr) => {
      return [Math.min(acc[0], curr), Math.max(acc[1], curr)];
    },
    [arrayNumbers[0], arrayNumbers[0]]
  );

  return (document.querySelector('#minAndMax').innerHTML =
    'Najmnijesza z wybranych wartości to: ' + minmax[0] + '.' + '<br />' + 'Największa z wybranych wartości to: ' + minmax[1] + '.');
};

document.querySelector('#addNumber').addEventListener('click', () => add_number(numberToCheck));
document.querySelector('#searchMinAndMax').addEventListener('click', () => prepare_numbers(chooseNumbersToCheck));


// -----------------------------------------------------------------------------------------------------------------------------------
// Napisz program, który obliczy pole trójkąta na podstawie podanych długości trzech boków a, b, c (ale tylko pod warunkiem, że z tych boków można stworzyć trójkąt – jeśli trójkąta nie można utworzyć, to program zamiast dokonać obliczeń wypisze tekst: Z podanych boków nie sposób utworzyć trójkąta!
// Info znalezione w sieci pomocne do powyższego zadania: Trójkąt może być zbudowany tylko wtedy, gdy suma długości jego dwóch boków jest większa od długości trzeciego boku. Musisz porównać długość każdego boku z sumą długości dwóch pozostałych. Nawet jeśli jeden bok jest dłuższy lub równy sumie długości dwóch pozostałych boków, to taki trójkąt nie może być zbudowany.

const firstLengthOfTriangle = document.querySelector('#firstLengthOfTriangle');
const secondLengthOfTriangle = document.querySelector('#secondLengthOfTriangle');
const thirdLengthOfTriangle = document.querySelector('#thirdLengthOfTriangle');

const prepare_data_of_triangle_area = (firstLengthOfTriangle, secondLengthOfTriangle, thirdLengthOfTriangle) => {
  let arrayOfAllLengths = [];
  arrayOfAllLengths.push(Number(firstLengthOfTriangle.value));
  arrayOfAllLengths.push(Number(secondLengthOfTriangle.value));
  arrayOfAllLengths.push(Number(thirdLengthOfTriangle.value));
  let sumarizedLengths = [];
  for (i = 0; i < arrayOfAllLengths.length; i++) {
    for (j = 1 + i; j < arrayOfAllLengths.length; j++) {
      let sum = '';
      sum = arrayOfAllLengths[i] + arrayOfAllLengths[j];
      sumarizedLengths.push(sum);
    }
  }
  return check_triangle_area(arrayOfAllLengths, sumarizedLengths);
};

const check_triangle_area = (arrayOfAllLengths, sumarizedLengths) => {
  let result = '';
  let results = [];
  for (i = 0; i < arrayOfAllLengths.length; i++) {
    for (j = 0; j < sumarizedLengths.length; j++) {
      if (arrayOfAllLengths[i] < sumarizedLengths[j]) {
        result = true;
        results.push(result);
      } else if (arrayOfAllLengths[i] >= sumarizedLengths[j]) {
        result = false;
        results.push(result);
      }
    }
  }
  const checkFinallyResult = results.some((el) => el === false);
  if (checkFinallyResult === true) {
    document.querySelector('#triangleArea').innerHTML = 'Z podanych boków nie można utworzyć trójkąta';
    document.querySelector('#triangleArea').style.color = 'red';
  } else if (checkFinallyResult === false) {
    count_triangle_area(arrayOfAllLengths);
  }
};

const count_triangle_area = (arrayOfAllLengths) => {
  let a = arrayOfAllLengths[0];
  let b = arrayOfAllLengths[1];
  let c = arrayOfAllLengths[2];
  let halfP = (a + b + c) / 2;
  let p = Math.sqrt(halfP * (halfP - a) * (halfP - b) * (halfP - c));
  return (
    (document.querySelector('#triangleArea').innerHTML = 'Pole trójkąta o podanych bokach wynosi: ' + p),
    (document.querySelector('#triangleArea').style.color = 'green')
  );
};
document
  .querySelector('#checkTriangle')
  .addEventListener('click', () => prepare_data_of_triangle_area(firstLengthOfTriangle, secondLengthOfTriangle, thirdLengthOfTriangle));
