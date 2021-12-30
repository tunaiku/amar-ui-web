/**
 *
 * @param {*} object
 */
export const sortArrayObjectAlphabetically = (object, reference) =>
  object.sort((firstItem, secondItem) => firstItem[reference].localeCompare(secondItem[reference]));
