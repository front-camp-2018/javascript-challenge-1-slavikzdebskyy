/* eslint-disable-next-line */
export const doubleNum = num => {
  // your logic here... 
  const str = num.toString();
  if (str.length % 2) {    
    const firstPart = str.slice(0, (str.length + 1) / 2);
    const secondPart = str.slice((str.length + 1) / 2, str.length);
    return firstPart === secondPart ? num : num * 2;
  } else {
    const firstPart = str.slice(0, str.length / 2);
    const secondPart = str.slice(str.length / 2, str.length);
    return firstPart === secondPart ? num : num * 2;
  }  
};
