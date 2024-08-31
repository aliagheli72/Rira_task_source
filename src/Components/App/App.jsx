import React, { useState } from "react";
function App() {
  const iranRate = 590000;
  const [usdAmount, setUsdAmount] = useState("");
  const handelUsdChange = (e) => {
    const value = parseFloat(e.target.value);
    setUsdAmount(value);
  };
  const convertToRial = () => {
    return (usdAmount * iranRate).toLocaleString("fa-IR");
  };

  const [rialAmount, setRialAmount] = useState("");

  const handelRialChange = (e) => {
    const value = parseFloat(e.target.value);
    setRialAmount(value);
  };
  const convertToDollar = () => {
    return (rialAmount / iranRate).toLocaleString("fa-IR");
  };

  return (
    <div className="w-[100%] m-auto flex flex-col items-center self-center p-1">
      <h1 className=" text-black-50  text-[32px] mt-[50px] mb-[10px]">
        {" "}
        تبدیل دلار به ریال ایران و بلعکس
      </h1>
      <div className="App w-[80%] rounded-[10px] mx-auto p-[30px] flex flex-row flex-wrap gap-10 bg-[#2b2b2b] justify-evenly items-center">
        <div>
          <h2 className="font-tahoma text-[24px] text-white mb-[30px] ">
            مقدار دلار خود را در کادر زیر وارد کنید
          </h2>
          <input
            className="w-[300px] h-[40px] rounded-[10px] p-[10px] "
            type="number"
            value={usdAmount}
            onChange={handelUsdChange}
            placeholder="مقدار دلار را وارد کنید"
          />

          <h2 className="font-tahoma text-[16px] text-green-700 mt-[30px]">
            مقدار وارد شده معادل {convertToRial()} ریال{" "}
          </h2>
        </div>
        <hr className="" />
        <div>
          <h2 className="font-tahoma text-[24px] text-white mb-[30px]">
            مقدار ریال خود را در کادر زیر وارد کنید
          </h2>
          <input
            className="w-[300px] h-[40px] rounded-[10px] p-[10px] "
            type="number"
            value={rialAmount}
            onChange={handelRialChange}
            placeholder="مقدار ریال را وارد کنید"
          />
          <h2 className="font-tahoma text-[16px] text-green-700 mt-[30px]">
            {" "}
            مقدار وارد شده معادل {convertToDollar()} دلار است
          </h2>
        </div>
      </div>
    </div>
  );
}
export default App;
