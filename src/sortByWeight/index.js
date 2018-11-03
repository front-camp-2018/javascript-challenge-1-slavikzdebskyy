/* eslint-disable-next-line */
export const sortByWeight = arr => {
  // your logic here...
  const sum = array => {
    return array.split('').reduce((accum, el) => {
      return accum += Number(el);
    }, 0);
  };
  return arr.sort((a, b) => {
    return sum(a) - sum(b);
  });   
};
