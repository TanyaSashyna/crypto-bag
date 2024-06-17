//Handles rows based on selected
export const handleRows = (array: string[], key: number, name: string): string[] => {
  const itemKey = name + '_' + key;

  const newIndex = array.indexOf(itemKey);

  let newArray: string[] = [];

  if (newIndex === -1) {
    newArray = newArray.concat(array, itemKey);
  } else if (newIndex === 0) {
    newArray = newArray.concat(array.slice(1));
  } else if (newIndex === array.length - 1) {
    newArray = newArray.concat(array.slice(0, -1));
  } else if (newIndex > 0) {
    newArray = newArray.concat(array.slice(0, newIndex), array.slice(newIndex + 1));
  }

  return newArray;
};