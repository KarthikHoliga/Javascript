def reverse_string(text):
result = ""
for i in range(len(text) - 1, -1, -1):
result += text[i]
return result
print(reverse_string("India"))