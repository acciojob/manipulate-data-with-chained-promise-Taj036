//your JS code here. If required.
function processArray(arr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arr);
    }, 3000);
  });
}
function filterOddNumbers(arr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const oddNumbers = arr.filter((number) => number % 2 !== 0);
      resolve(oddNumbers);
    }, 1000);
  });
}

function multiplyEvenNumbers(arr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const evenNumbersMultiplied = arr.map((number) => (number % 2 === 0 ? number * 2 : number));
      resolve(evenNumbersMultiplied);
    }, 2000);
  });
}
const inputArray = [1, 2, 3, 4];

processArray(inputArray)
  .then((result) => {
    document.getElementById('output').innerText = ` ${result}`;
    return filterOddNumbers(result);
  })

 .then((result) => {
    document.getElementById('output').innerText += `\n ${result}`;
    return multiplyEvenNumbers(result);
  })
  .then((result) => {
    document.getElementById('output').innerText += `\n ${result}`;
  })
  .catch((error) => {

    console.error(error);
  });