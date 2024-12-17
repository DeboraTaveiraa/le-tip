import apiCurrencyLayer from "./apiCurrencyLayer";

const ACCESS_KEY = process.env.VUE_APP_API_KEY_CURRENCY_LAYER;

export const currencyLayerService = {
  async getConversion(
    baseCurrency: string,
    quoteCurrency: string,
    amount: string | number
  ) {
    try {
      const URI = `/convert?access_key=${ACCESS_KEY}&from=${baseCurrency}&to=${quoteCurrency}&amount=${amount}`;

      const response = await apiCurrencyLayer.get(URI);

      return response?.data;
    } catch (error) {
      console.error("Erro ao realizar a conversão", error);
      throw error;
    }
  },
};
