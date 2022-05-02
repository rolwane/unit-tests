const average = (array) => {
  if (array.length === 0) { return undefined; }

  for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] !== 'number') { return undefined; }
  }

  let media = 0;

  array.forEach((element) => {
    media += element;
  });

  return Math.round(media / array.length);
};

module.exports = average;
