var input = 'Hi human! This is whale language!';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let w = 0; w < input.length; w++) {
  //console.log('w is ' + w);
  for (let y = 0; y < vowels.length; y++) {
    //console.log('y is ' + y);
    if (input[w] === vowels[y]) {
      resultArray.push(vowels[y]);
    }

  }

  if (input[w] === 'e' || input[w] === 'u') {
    resultArray.push(input[w]);
  }
}

console.log(resultArray.join('').toUpperCase());