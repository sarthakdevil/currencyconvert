import React, { useState } from "react";
import "./App.css";
import useCurrencyInfo from "../hooks/currency.js";
import InputBox from "./components/input.jsx";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }


  const swap = () => {
    // Swap currencies
    setFrom(to);
    setTo(from);
    // Swap amounts
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  return (
    <>
      <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat">
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Handle conversion here
                convert()

              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label={from}
                  amount={amount}
                  onChangeAmount={(val) => setAmount(val)}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectedCurrency={from}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label={to}
                  amount={convertedAmount}
                  onChangeAmount={(val) => setConvertedAmount(val)}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectedCurrency={to}
                  disabled
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
