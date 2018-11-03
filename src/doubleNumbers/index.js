/* eslint-disable-next-line */
export const doubleNum = num => {
  // your logic here... 
  const str = num.toString();
  const index = str.length % 2 ? (str.length + 1) / 2 : str.length / 2;     
  const firstPart = str.slice(0, index);
  const secondPart = str.slice(index, str.length);
  return firstPart === secondPart ? num : num * 2; 
};
