from itertools import permutations

text = "Indium"
for p in permutations(text):
    print("".join(p))