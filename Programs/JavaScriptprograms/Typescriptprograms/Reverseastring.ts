let str: string = "TypeScript";
let reversedStr: string = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}

console.log(reversedStr);