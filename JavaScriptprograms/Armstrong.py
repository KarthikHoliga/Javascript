def armstrong(num):
    digits = str(num)
    power = len(digits)
    total = sum(int(digit) ** power for digit in digits)
    return total == num

print(armstrong(153))  # True
print(armstrong(371))  # True
print(armstrong(123))  # False