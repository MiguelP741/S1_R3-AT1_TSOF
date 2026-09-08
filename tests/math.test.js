import { describe, expect, it } from 'vitest';
import {
    somar,
    subtrair,
    multiplicar,
    dividir,
    elevar,
    fatorial,
    ehPar,
    media,
    ehPrimo,
    liminar,
    fibonacci
} from '../src/math';

describe('Biblioteca matemática.', () => {
    // testes

    describe("soma", () => {
        it('deve somar dois números.', () => {
            expect(somar(2, 3)).toBe(5);
            expect(somar(2, 0)).toBe(2);
            expect(somar(-2, 5)).toBe(3);
        });
        it('deve lançar erro ao somar valores que não sejam números.', () => {
            expect(() => somar(2, '3')).toThrow('Os valores devem ser números');
            expect(() => somar('2', '3')).toThrow('Os valores devem ser números');
        });
    })

    describe("subtração", () => {
        it('deve subtrair dois números.', () => {
            expect(subtrair(2, 3)).toBe(-1);
            expect(subtrair(2, -5)).toBe(7);
            expect(subtrair(-2, 5)).toBe(-7);
        })
        it('deve lançar erro ao subtrair valores que não sejam números.', () => {
            expect(() => subtrair(2, '3')).toThrow('Os valores devem ser números');
            expect(() => subtrair('2', '3')).toThrow('Os valores devem ser números');
        });
    })

    describe("multiplicação", () => {
        it('deve multiplicar dois números.', () => {
            expect(multiplicar(2, 3)).toBe(6);
            expect(multiplicar(2, 0)).toBe(0);
            expect(multiplicar(-2, 5)).toBe(-10);
        });
        it('deve lançar erro ao multiplicar valores que não sejam números.', () => {
            expect(() => multiplicar(2, '3')).toThrow('Os valores devem ser números');
            expect(() => multiplicar('2', '3')).toThrow('Os valores devem ser números');
        });
    })

    describe("divisão", () => {
        it('deve dividir dois números.', () => {
            expect(dividir(10, 2)).toBe(5);
            expect(dividir(49, 7)).toBe(7);
        });
        it('deve lançar erro ao dividir valores que não sejam números.', () => {
            expect(() => dividir(2, '3')).toThrow('Os valores devem ser números');
            expect(() => dividir('2', '3')).toThrow('Os valores devem ser números');
        });
        it('deve lançar erro ao dividir valores por 0', () => {
            expect(() => dividir(2, 0)).toThrow('Divisão por zero não é permitida.');
        });
    })

    describe("elevação", () => {
        it('deve elevar dois números.', () => {
            expect(elevar(2, 3)).toBe(8);
            expect(elevar(2, 0)).toBe(1);
            expect(elevar(-2, 5)).toBe(-32);
        });
        it('deve lançar erro ao elevar valores que não sejam números.', () => {
            expect(() => elevar(2, '3')).toThrow('Os valores devem ser números');
            expect(() => elevar('2', '3')).toThrow('Os valores devem ser números');
        });
    });

    describe("fatoração", () => {
        it('deve fatorar um número.', () => {
            expect(fatorial(4)).toBe(24);
        });
        it('deve lançar erro ao fatorar o valor que não sejam um número.', () => {
            expect(() => fatorial('3')).toThrow('O valor deve ser um número');
        });
        it('deve lançar erro ao fatorar um valor negativo', () => {
            expect(() => fatorial(-2)).toThrow('Fatorial de número negativo não é permitido.');
        });
    })

    describe("número par", () => {
        it('deve considerar números pares.', () => {
            expect(ehPar(2)).toBe(true);
            expect(ehPar(4)).toBe(true);
            expect(ehPar(3)).toBe(false);
        });
        it('deve lançar erro ao considerar valores que não sejam números.', () => {
            expect(() => ehPar('2')).toThrow('O valor deve ser um número');
        });
    })

    describe("média", () => {
        it('deve fazer a media dos números.', () => {
            expect(media([10, 10])).toBe(10);
            expect(media([-9, -104])).toBe(-56.5);
        });
        it('deve lançar erro ao considerar valores que não sejam números.', () => {
            expect(() => media('2', '3')).toThrow('É necessário informar uma lista de números válida.');
        });
    });

    describe("número primo", () => {
        it('deve considerar números primos.', () => {
            expect(ehPrimo(5)).toBe(true);
            expect(ehPrimo(3)).toBe(true);
            expect(ehPrimo(4)).toBe(false);
        });
    })

    describe("limite", () => {
        it('deve elevar dois números.', () => {
            expect(elevar(2, 3)).toBe(8);
            expect(elevar(2, 0)).toBe(1);
            expect(elevar(-2, 5)).toBe(-32);
        });
        it('deve lançar erro ao elevar valores que não sejam números.', () => {
            expect(() => elevar(2, '3')).toThrow('Os valores devem ser números');
            expect(() => elevar('2', '3')).toThrow('Os valores devem ser números');
        });
    })

    describe("fibonacci", () => {
        it('deve retirnar  o valor ....', () => {
            expect(fibonacci(0)).toBe(0);
            expect(fibonacci(1)).toBe(1);
            expect(fibonacci(6)).toBe(8);
        });
    })
})