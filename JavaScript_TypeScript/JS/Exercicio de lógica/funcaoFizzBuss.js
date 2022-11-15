// function fizzBuzz(x) {
//   if (typeof x !== "number") return x;
//   if (x % 3 === 0 && x % 5 === 0) return "FizzBuzz"; // esta condição deve ser checada primeiro.
//   if (x % 3 === 0) return "Fizz";
//   if (x % 5 === 0) return "Buzz";
//   return `não divivel por 3 e 5 : ${x}`;
// }

// console.log("a", fizzBuzz("a"));
// for (let i = 0; i <= 100; i++) {
//   console.log(i, fizzBuzz(i));
// }

function solution(number) {
  let div3and5 = 0;
  let div3or5 = 0;
  let total = 0;
  for (let n = 0; n < number; n++) {
    if (n % 3 === 0 || n % 5 === 0) {
      div3or5 += n;
    }
    if (n % 3 === 0 && n % 5 === 0) {
      div3and5 += n;
    }
  }
  total = div3or5 + div3and5;
  console.log(total);
}

let n = 20;
solution(n);
