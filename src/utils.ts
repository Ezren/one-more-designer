export const getRandomInt = (max: number): number =>
  Math.floor(Math.random() * Math.floor(max))

export const getRandomItem = (array: string[]) =>
  array[getRandomInt(array.length - 1)]
