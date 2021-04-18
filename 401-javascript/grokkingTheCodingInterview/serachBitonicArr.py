import math

def search_bitonic_array(arr, key):
  maxIdx = find_max_index(arr)
  keyIdx = find_key(0, maxIdx, arr, key)
  if(keyIdx < 0):
    keyIdx = find_key(maxIdx + 1, len(arr) - 1, arr, key)
  return keyIdx

def find_key(min, max, arr, key):
  asc = arr[min] < arr[max]
  while(min <= max):
    mid = (min + max) // 2
    if(arr[mid] == key):
      return mid
    if(arr[mid] > key):
      if asc:
        max = mid - 1
      else:
        min = mid + 1
    else:
      if asc:
        min = mid + 1
      else:
        max = min - 1
  return -1

def find_max_index(arr):
  min = 0
  max = len(arr) - 1
  while min < max:
    mid = (min + max) // 2
    if arr[mid] < arr[mid + 1]:
      min = mid + 1
    else:
      max = mid
  return min

def main():
  print(search_bitonic_array([1, 3, 8, 4, 3], 4))
  print(search_bitonic_array([3, 8, 3, 1], 8))
  print(search_bitonic_array([1, 3, 8, 12], 12))
  print(search_bitonic_array([10, 9, 8], 10))

main()
