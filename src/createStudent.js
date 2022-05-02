const createStudent = function (nome) {
  return {
    name: nome,
    feedback: () => 'Eita pessoa boa!',
  };
};

module.exports = createStudent;
