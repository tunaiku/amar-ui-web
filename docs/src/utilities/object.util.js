export const sortObjectByPropertyAlphabetically = (firstObject, secondObject, reference) => {
  return firstObject[reference].localeCompare(secondObject[reference]);
};
