let arr: number[] = [10, 25, 3, 47, 8];
let largest: number = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}

console.log(largest);