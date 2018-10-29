/* eslint-disable-next-line */
export const sortByWeight = arr => {
  // your logic here...
  const sum = array => {
    const numbersArray = array.split('').map(el => {
      return Number(el);
    });
    return numbersArray.reduce((accum, el) => {
      return accum += el;
    }, 0);
  };
  return arr.sort((a, b) => {
    return sum(a) - sum(b);
  });   
};
