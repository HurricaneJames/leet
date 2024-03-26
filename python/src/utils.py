from typing import List

def printMatrix(matrix: List[List[int]], spaces: int) -> None:
    for row in matrix:
        print(' ' * spaces, '[ ' + ', '.join(list(map(lambda n: "{:2d}".format(n), row))) + ' ]')
