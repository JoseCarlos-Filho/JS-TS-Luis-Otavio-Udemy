const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];
// const thirdArray = firstArray + secondArray;
// const thirdArray = firstArray.concat(secondArray, [7, 8, 9], "Jose");
// ...rest -> ...spread : espalhando os arrays.
const thirdArray = [...firstArray, "Tiemi", ...secondArray, ...[7, 8, 9]];
console.log(thirdArray);
