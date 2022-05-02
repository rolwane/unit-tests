const createMenu = require('../src/restaurant');

describe('10 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    
    // 1. No arquivo tests/restaurant.spec.js, escreva um teste que verifica se a função createMenu()
    // retorna um objeto que possui a chave fetchMenu, a qual tem como valor uma função.

    const objetoRetornado = createMenu();
    expect(typeof objetoRetornado).toEqual('object');
    expect(typeof objetoRetornado.fetchMenu).toEqual('function');

    // 2. No arquivo tests/restaurant.spec.js, escreva um teste que verifica se 'objetoRetornado.fetchMenu()'
    // retorna um objeto cujas chaves são somente food e drink, considerando que a função createMenu foi chamada
    // com o objeto: { food: {}, drink: {} }.

    const returnTest02 = createMenu({ food: {}, drink: {} });
    expect(Object.keys(returnTest02.fetchMenu()).length).toEqual(2);
    expect(Object.keys(returnTest02.fetchMenu())).toContain('food');
    expect(Object.keys(returnTest02.fetchMenu())).toContain('drink');

    // 3. No arquivo tests/restaurant.spec.js, escreva um teste que verifica se o menu passado pra função createMenu
    // é identico ao menu recuperado pela função 'objetoRetornado.fetchMenu()'.

    const objTeste = {
      food: {'coxinha': 3.90, 'sanduiche': 9.90},
      drinks: {'agua': 3.90, 'cerveja': 6.90}
    }

    const returnTeste03 = createMenu(objTeste);
    const objEqual = JSON.stringify(objTeste) === JSON.stringify(returnTeste03.fetchMenu());

    expect(objEqual).toEqual(true);

    // 5. No arquivo tests/restaurant.spec.js, escreva um teste que verifica se 'objetoRetornado.consumption',
    // após a criação do menu, retorna um array vazio.

    expect(objetoRetornado.consumption).toEqual([]);

    // 7. No arquivo tests/restaurant.spec.js, escreva um teste que verifica se ao chamar uma função associada
    // à chave order no objeto retornado, passando uma string como parâmetro (como objetoRetornado.order('coxinha')),
    // tal string é adicionada ao array retornado em objetoRetornado.consumption

    objetoRetornado.order('coxinha');
    expect(objetoRetornado.consumption).toContain('coxinha');

    // 9. No arquivo tests/restaurant.spec.js, escreva um teste que verifica se ao adicionar três pedidos,
    // dentre bebidas e comidas, o array objetoRetornado.consumption contém os itens pedidos.

    const objTest9 = createMenu();
    objTest9.order('frango');
    objTest9.order('café');
    objTest9.order('pudim');

    expect(objTest9.consumption.length).toEqual(3);
    expect(objTest9.consumption).toContain('frango');
    expect(objTest9.consumption).toContain('café');
    expect(objTest9.consumption).toContain('pudim');

    // 10. No arquivo tests/restaurant.spec.js, escreva um teste que verifica se a função order aceita que
    // pedidos repetidos sejam acrescidos a consumption.

    const objTest10 = createMenu();

    objTest10.order('coxinha');
    objTest10.order('coxinha');
    objTest10.order('coxinha');

    expect(objTest10.consumption.length).toEqual(3);
    expect(objTest10.consumption).toContain('coxinha');

    // 11. No arquivo tests/restaurant.spec.js, escreva um teste que verifica que, ao chamar objetoRetornado.pay(),
    // retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em objetoRetornado.consumption.

    const objTest11 = createMenu({ food: {'coxinha': 3, 'pastel': 6}, drink: {'coca-cola': 8, 'café': 1.5} });

    objTest11.order('coxinha');
    objTest11.order('coxinha');
    objTest11.order('pastel');
    objTest11.order('coca-cola');
    objTest11.order('café');

    expect(objTest11.pay()).toEqual(23.65);

  });
});
