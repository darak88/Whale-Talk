let input = "Bears, Beats, Battlestar Galactica";
const vowels = ["a","e","i","o","u"];
let resultArray= [];

for (let inputLetter = 0; inputLetter < input.length; inputLetter++){
  //console.log("inputLetter = " +input[inputLetter]);
  for (let vowel = 0; vowel < vowels.length; vowel++) {
    //console.log("vowel = " +vowel);
    if (input[inputLetter] === vowels[vowel]){
      if (input[inputLetter] === 'e'){
        resultArray.push("ee");
      } else if (input[inputLetter] === "u") {
            resultArray.push("uu");
          }
      } else {
        resultArray.push(input[inputLetter]);
      }
    }
  }

console.log(resultArray.join("").toUpperCase());