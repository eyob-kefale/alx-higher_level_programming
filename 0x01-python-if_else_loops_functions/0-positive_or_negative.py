#!/usr/bin/python3
import random
number = random.randint(-10, 10)
# YOUR CODE HERE
# if number>0:
#     print(f"{number} is positive")
# elif number<0:
#     print(f"{number} is negative")
# else:
#     print(f"{number} is zero")
        

if number > 0:
    print("{} is positive".format(number))
elif number == 0:
    print("{} is zero".format(number))
elif number < 0:
    print("{} is negative".format(number))