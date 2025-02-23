def mystery_function(x, y):
    x.append(4)  # Modifies the original list 'x' (mutable)
    y = y + [4]  # Creates a new list 'y' instead of modifying the original (immutable operation)
    return x, y

a = [1, 2, 3]
b = [1, 2, 3]
result = mystery_function(a, b)

print("a:", a)  
print("b:", b)  
print("result:", result)  


