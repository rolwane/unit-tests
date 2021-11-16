const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toEqual('function');

    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails())).toEqual(true);

    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails().length).toEqual(2);

    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof productDetails()[0]).toEqual('object');
    expect(typeof productDetails()[1]).toEqual('object');


    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    const produtos = productDetails('produto1', 'produto2');
    const compara = produtos[0]['details']['productId'] === produtos[1]['details']['productId'] ? false : true;
    expect(compara).toEqual(true);

    // Teste se os dois productIds terminam com 123.
    const productId1 = produtos[0]['details']['productId'];
    const productId2 = produtos[1]['details']['productId'];

    expect(productId1.slice(productId1.length - 3)).toEqual('123');
    expect(productId2.slice(productId2.length - 3)).toEqual('123');
  });
});
