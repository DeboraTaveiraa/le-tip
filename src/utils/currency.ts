const USD_LOCALE = "en-US";
const EUR_LOCALE = "de-DE";
const USD_CURRENCY = "USD";

function formatCurrency(value: number, currency: string): string {
  const locale = currency === USD_CURRENCY ? USD_LOCALE : EUR_LOCALE;

  const formatter = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true,
  });

  return formatter.format(value);
}

export { formatCurrency };
