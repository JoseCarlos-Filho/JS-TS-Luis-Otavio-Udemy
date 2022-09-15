function fizzBuzz(x) {
  if (typeof x !== "number") return x;
  if (x % 3 === 0 && x % 5 === 0) return "FizzBuzz"; // esta condição deve ser checada primeiro.
  if (x % 3 === 0) return "Fizz";
  if (x % 5 === 0) return "Buzz";
  return `não divivel por 3 e 5 : ${x}`;
}

console.log("a", fizzBuzz("a"));
for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i));
}
