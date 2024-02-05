from decimal import Decimal
import math

# Exercise 1
names_list = ["John", "Michael", "Sara", "Mary"]

names_tuple = ("John", "Michael", "Sara", "Mary")

num_float = 20.5

num_int = 20

num_decimal = Decimal(20.5)

fruits_qty = {
    "apple": 2,
    "banana": 8,
    "strawberry": 1,
}

print("Exercise 1")
print(names_list)
print(names_tuple)
print(num_float)
print(num_int)
print(num_decimal)
print(fruits_qty)

# Exercise 2
num_round_up = math.ceil(num_float)

print("Exercise 2")
print(num_round_up)

# Exercise 3
num_sqrt = math.sqrt(num_float)

print("Exercise 3")
print(num_sqrt)

# Exercise 4
first_key_fruits = list(fruits_qty.keys())[0]
first_value_fruits = list(fruits_qty.values())[0]
first_pair_fruits = list(fruits_qty.items())[0]
# Alternative
first_value_fruits_alt = fruits_qty[first_key_fruits]

print("Exercise 4")
print(first_key_fruits)
print(first_value_fruits)
print(first_value_fruits_alt)
print(first_pair_fruits)

# Exercise 5
second_el_name = names_tuple[1]

print("Exercise 5")
print(second_el_name)

# Exercise 6
names_list.append("Mark")

print("Exercise 6")
print(names_list)

# Exercise 7
names_list[0] = "Harry"

print("Exercise 7")
print(names_list)

# Exercise 8
names_list.sort()

print("Exercise 8")
print(names_list)

# Exercise 9
names_tuple += ("New element",)

print("Exercise 9")
print(names_tuple)








