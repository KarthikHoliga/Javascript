function checkArmstrong(num) {
    const digits = String(num).split('');
    const power = digits.length;

    // Sum each digit raised to the power of total digit count
    const sum = digits.reduce((acc, digit) => {
        return acc + Math.pow(Number(digit), power);
    }, 0);

    if (sum === num) {
        console.log(`${num} is an Armstrong Number`);
    } else {
        console.log(`${num} is Not an Armstrong Number`);
    }
}

// Test
checkArmstrong(153); // 153 is an Armstrong Number
checkArmstrong(123); // 123 is Not an Armstrong Number