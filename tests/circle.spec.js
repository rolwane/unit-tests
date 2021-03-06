const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contedos os valores esperados', () => {

    // Teste se circle retorna undefined, caso o parâmetro passado não seja um número.
    expect(circle('22')).toBeUndefined()

    // Teste se circle retorna um objeto.
    expect(typeof circle(10)).toEqual('object');

    // Teste se o objeto retornado tem 3 propriedades.
    const keys = Object.keys(circle(10));
    expect(keys.length).toEqual(3);

    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    expect(circle()).toBeUndefined();

    // Teste que a função retorna, dentro de um objeto, a circunferência correta para um círculo de raio 2.
    expect(circle(2).circumference).toEqual(12.56);

    // Teste que a função retorna, dentro de um objeto, a área correta para um círculo de raio 3.
    expect(circle(3).area).toEqual(28.259999999999998);

    // Teste que a função retorna, num objeto, os dados corretos de um círculo de raio 3.
    const dados = circle(3);
    expect(dados.radius).toEqual(3);
    expect(dados.area).toEqual(28.259999999999998);
    expect(dados.circumference).toEqual(18.84);
  });
});
