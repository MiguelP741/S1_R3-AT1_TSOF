import { describe, expect, it, vi } from "vitest";
import axios from "axios";
import { buscarCotacao, converterMoeda } from "../src/moeda"

vi.mock('axios', () => ({
    default: {
        get: vi.fn(),
    }
}));

describe("Biblioteca de moedas.", () => {
    it("deve buscar a cotação atual da moeda", async () => {
        axios.get.mockResolvedValue({
            data: {
                rates: {BRL: 5.36}
            }
        });

        const cotacaoUB = await buscarCotacao('USD', "BRL");

        expect(cotacaoUB).toBe(5.36)
        expect(axios.get).toHaveBeenCalledWith(
            'https://api.frankfurter.app/latest', {
                params: {
                    from: 'USD',
                    to: 'BRL'
                },
            }
        )
    });

    it("deve buscar a cotação atual da moeda", async () => {
        axios.get.mockResolvedValue({
            data: {
                rates: {BRL: 5.93}
            }
        });

        const cotacaoUB = await buscarCotacao('EUR', "BRL");

        expect(cotacaoUB).toBe(5.93)
        expect(axios.get).toHaveBeenCalledWith(
            'https://api.frankfurter.app/latest', {
                params: {
                    from: 'EUR',
                    to: 'BRL'
                },
            }
        )
    });

    it("deve buscar a cotação atual da moeda", async () => {
        axios.get.mockResolvedValue({
            data: {
                rates: {BRL: 3.67}
            }
        });

        const cotacaoUB = await buscarCotacao('AUD', "BRL");

        expect(cotacaoUB).toBe(3.67)
        expect(axios.get).toHaveBeenCalledWith(
            'https://api.frankfurter.app/latest', {
                params: {
                    from: 'AUD',
                    to: 'BRL'
                },
            }
        )
    });

    it("deve buscar a cotação atual da moeda", async () => {
        axios.get.mockResolvedValue({
            data: {
                rates: {BRL: 0.30}
            }
        });

        const cotacaoUB = await buscarCotacao('MXN', "BRL");

        expect(cotacaoUB).toBe(0.30)
        expect(axios.get).toHaveBeenCalledWith(
            'https://api.frankfurter.app/latest', {
                params: {
                    from: 'MXN',
                    to: 'BRL'
                },
            }
        )
    });

    it("deve buscar a cotação atual da moeda", async () => {
        axios.get.mockResolvedValue({
            data: {
                rates: {BRL: 0.53}
            }
        });

        const cotacaoUB = await buscarCotacao('SEK', "BRL");

        expect(cotacaoUB).toBe(0.53)
        expect(axios.get).toHaveBeenCalledWith(
            'https://api.frankfurter.app/latest', {
                params: {
                    from: 'SEK',
                    to: 'BRL'
                },
            }
        )
    });

    it("deve buscar a cotação atual da moeda", async () => {
        axios.get.mockResolvedValue({
            data: {
                rates: {BRL: 0.03}
            }
        });

        const cotacaoUB = await buscarCotacao('JPY', "BRL");

        expect(cotacaoUB).toBe(0.03)
        expect(axios.get).toHaveBeenCalledWith(
            'https://api.frankfurter.app/latest', {
                params: {
                    from: 'JPY',
                    to: 'BRL'
                },
            }
        )
    });

    it("deve mostrar erro ao buscar a cotação atual da moeda inexistente", async () => {
        axios.get.mockResolvedValue({
            data: {
                "message": "bad currency pair"
            }
        });

        await expect(buscarCotacao("NNN", "BRL")).rejects.toThrow(
            'Moeda destino não encontrada na resposta API.'
        )
    });

    it("deve mostrar erro ao buscar a cotação atual da moeda igual", async () => {
        axios.get.mockResolvedValue({
            data: {
                "message": "bad currency pair"
            }
        });

        await expect(buscarCotacao("BRL", "BRL")).rejects.toThrow(
            'Moeda destino não encontrada na resposta API.'
        )
    });
});