import React,{useId} from 'react'

function InputBox({
    label,
    amount,
    onChangeAmount,
    onCurrencyChange, // Changed to camelCase
    className = "",
    currencyOptions = [], // Changed to camelCase and provided default empty array
    selectedCurrency = 'usd', // Changed to camelCase
    disabled = false,
}) {
    const amountInput = useId()
    return (

        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label  htmlFor={amountInput} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInput}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    disabled={disabled}
                    onChange={(e) => onChangeAmount(Number(e.target.value))} />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectedCurrency} // Changed to camelCase
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} > {/* Fixed onChange handler */}
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                        {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;