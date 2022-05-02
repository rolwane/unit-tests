const myCounter = () => {
  const myArray = [];
  for (let counter = 0; counter <= 3; counter += 1) {
    myArray.push(counter);
    for (let i = 2; i <= 3; i += 1) {
      myArray.push(i);
    }
  }
  return myArray;
};

module.exports = myCounter;
