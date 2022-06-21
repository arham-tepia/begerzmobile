export function searchInArrayOfObjectsWithID(id: string, myArray: any) {
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i].id === id) {
      return true;
    }
  }
  return false;
}

export function removeItemOnceFromArray(value: any, arr: any) {
  var newArr = arr.filter((item: any) => item.id != value.id);
  return newArr;
}
