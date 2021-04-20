def count_rotations(arr):
  start = 0
  end = len(arr) - 1
  while start < end:
    mid = (start + end) // 2
    if (arr[mid] == arr[end]):
      end -= 1
    elif(arr[mid] < arr[end]):
      end = mid
    else:
      start = mid + 1
  return end


def main():
  print(count_rotations([10, 15, 1, 3, 8]))
  print(count_rotations([4, 5, 7, 9, 10, -1, 2]))
  print(count_rotations([1, 3, 8, 10]))
  print(count_rotations([7, 3, 3, 3]))


main()