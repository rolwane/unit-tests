const vqv = (name, age) => {
  let text = '';

  if (name === undefined || age === undefined) {
    return undefined;
  }
  
  text = `Oi, meu nome é ${name}!\n`;
  text += `Tenho ${age} anos,\n`;

  return text;
};

module.exports = vqv;
