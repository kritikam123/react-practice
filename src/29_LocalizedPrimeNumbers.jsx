import * as React from "react";
export function calculatePrime(n) {
  let count = 0;
  let number = 1;

  while (count < n) {
    number++;

    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      count++;
    }
  }

  return number;
}

export const translations = {
  "en-US": {
    nextPrime: "Next Prime",
    nthPrime: (count, prime) => `The ${count}th prime number is ${prime}.`,
  },

  "es-ES": {
    nextPrime: "Siguiente Primo",
    nthPrime: (count, prime) => `El número primo ${count} es ${prime}.`,
  },
};

export function formatNumberToString(number, locale) {
  return new Intl.NumberFormat(locale).format(number);
}
export function LocalizedPrimeNumbers() {
  const [count, setCount] = React.useState(1);
  const [locale, setLocale] = React.useState("en-US");

  const handleClick = () => {
    setCount(count + 1);
  };
  const handleLocaleChange = (e) => {
    setLocale(e.target.value);
  };

  const nthprime = React.useMemo(() => {
    return calculatePrime(count);
  }, [count]);

  return (
    <div>
      <header>
        <select value={locale} onChange={handleLocaleChange}>
          <option value="en-US">English (US)</option>
          <option value="es-ES">Español (ES)</option>
        </select>

        <button onClick={handleClick}>{translations[locale].nextPrime}</button>
      </header>
      <p>
        {translations[locale].nthPrime(
          formatNumberToString(count, locale),
          nthprime,
        )}
      </p>
    </div>
  );
}
