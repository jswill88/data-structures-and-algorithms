def search_rotated_array(arr, key):
  n = len(arr)
  left = 0
  right = n - 1
  while (left < right):
    mid = (left + right) // 2
    if(arr[mid] < arr[right]):
      right = mid
    else: 
      left = mid + 1
  os = right
  min = 0
  max = n - 1
  while (min <= max):
    mid = (min + max) // 2
    shiftedIdx = shifted(mid, os, n)
    if(arr[shiftedIdx] == key):
      return shiftedIdx
    if(arr[shiftedIdx] < key):
      min = mid + 1
    else:
      max = mid - 1
  return -1

def shifted(i, offset, n):
  return (i + offset) % n

def main():
  print(search_rotated_array([10, 15, 1, 3, 8], 15))
  print(search_rotated_array([4, 5, 7, 9, 10, -1, 2], 10))


main()