#!/usr/bin/python3

def print_matrix_integer(matrix=[[]]):

    for i in matrix:
        L = 1
        for j in i:
            if L == len(i):
                print("{:d}".format(j), end="")
            else:
                print("{:d}".format(j), end=" ")
            L = L + 1
        print()
