def reverse_string(Karthik):
    result = ""
    for i in range(len(Karthik) - 1, -1, -1):
        result += Karthik[i]
    return result
print(reverse_string("Karthik"))
