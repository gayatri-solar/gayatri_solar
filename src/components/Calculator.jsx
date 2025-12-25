import { useState } from "react";
import { PiSolarPanel } from "react-icons/pi";
import { MdOutlineCalculate } from "react-icons/md";
import { FaClockRotateLeft } from "react-icons/fa6";

export default function EnergyCalculator() {
    const [bill, setBill] = useState();

    const plantCapacity = (bill * 0.001).toFixed(3); // kW
    const estimatedCost = Math.round(bill * 65); // Rs
    const paybackMonths = Math.ceil(estimatedCost / bill /12); // Months

    return (
        <div id="Calculator" className="p-8 flex justify-between flex-col lg:flex-row gap-6 bg-white ">

            {/* Left Section */}
            <div>
                <p className="text-sm tracking-wide text-lime-950 mb-1">
                    — Quick Estimate —
                </p>
                <h1 className="text-lime-600 mb-5 lg:text-5xl text-3xl">Energy Calculator</h1>

                <div className="relative">
                    <input
                        type="number"
                        value={bill}
                        onChange={(e) => setBill(Number(e.target.value))}
                        className="w-full border rounded px-5 py-3 text-lg focus:outline-none focus:ring-1 focus:ring-lime-600"
                        placeholder="Enter Bill Amount"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 bg-lime-600 text-white px-3 py-1 rounded-full text-sm">
                        ₹
                    </span>
                </div>

                <p className="text text-red-400 italic mt-4">
                   Disclaimer: This is an indicative, system-generated estimate. Final capacity, cost, and payback may vary. Please contact us for an exact quotation and detailed assessment.
                </p>
            </div>

            <div className="bg-white rounded-2xl py-8 px-4 grid grid-cols-3 text-center gap-2 shadow-sm w-full">

                {/* Card 1 */}
                <div className="flex flex-col items-center justify-center">
                    <div className="text-lime-600 text-3xl lg:text-5xl mb-2">
                        <PiSolarPanel />
                    </div>
                    <p className="font-semibold text-[12px] sm:text-sm">
                        Plant Capacity
                    </p>
                    <p className="mt-1 text-sm sm:text-lg font-bold">
                        {isNaN(plantCapacity) ? "0.00" : plantCapacity} kW
                    </p>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center justify-center border-x border-lime-200">
                    <div className="text-lime-600 text-3xl lg:text-5xl mb-2">
                        <MdOutlineCalculate />
                    </div>
                    <p className="font-semibold text-[12px] sm:text-sm">
                        Estimated Cost
                    </p>
                    <p className="mt-1 text-sm sm:text-lg font-bold">
                        ₹ {isNaN(estimatedCost) ? "0" : estimatedCost}
                    </p>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center justify-center">
                    <div className="text-lime-600 text-3xl lg:text-5xl mb-2">
                        <FaClockRotateLeft />
                    </div>
                    <p className="font-semibold text-[12px] sm:text-sm">
                        Payback Period
                    </p>
                    <p className="mt-1 text-sm sm:text-lg font-bold">
                        {isNaN(paybackMonths) ? "0" : paybackMonths} Years
                    </p>
                </div>

            </div>


        </div>
    );
}
