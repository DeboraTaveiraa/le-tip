import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currencySymbol: "$",
    currencyAbbreviation: "USD",
    accountValue: 0,
    tipPercentage: 10,
    amountPeople: 2,
    realValueFormatted: "",
  },
  getters: {
    currencySymbol: (state) => state.currencySymbol,
    currencyAbbreviation: (state) => state.currencyAbbreviation,
    accountValue: (state) => state.accountValue,
    tipPercentage: (state) => state.tipPercentage,
    amountPeople: (state) => state.amountPeople,
    realValueFormatted: (state) => state.realValueFormatted,
  },
  mutations: {
    setCurrencySymbol(state, payload: string) {
      state.currencySymbol = payload;
    },
    setCurrencyAbbreviation(state, payload: string) {
      state.currencyAbbreviation = payload;
    },
    setAccountValue(state, payload: number) {
      state.accountValue = payload;
    },
    setTipPercentage(state, payload: number) {
      state.tipPercentage = payload;
    },
    setAmountPeople(state, payload: number) {
      state.amountPeople = payload;
    },
    setRealValueFormatted(state, payload: string) {
      state.realValueFormatted = payload;
    },
  },
  actions: {},
  modules: {},
});
