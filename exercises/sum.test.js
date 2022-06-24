const sum = require('./sum');

describe('testa a função sum', () => {
    it ('deve retornar o resultado da soma', () => {
        expect(sum(4, 5)).toBe(9);
        expect(sum(0, 0)).toBe(0);
    });
    it ('deve disparar um erro caso receba uma string como parâmetro', () => {
        expect(() => sum(4, '5')).toThrowError();
        expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
    });
});