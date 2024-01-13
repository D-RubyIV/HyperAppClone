import React from "react";
import { FC } from "react";

interface PlanCardProps {
  name: String;
  description: String;
  btnText?: String;
  price?: String;
  features: String[];
  color: String;
}

const PlanCard: FC<PlanCardProps> = ({
  name,
  description,
  btnText,
  price,
  features,
  color,
}) => {
  return (
    <div className="flex min-h[428px] w-[320px] font-medium flex-col border-solid border-2 border-sky-100 rounded-3xl py-10 px-8" style={{ backgroundColor: color as string }}>
      <h2 className="mb-5 text-xl font-medium">{name}</h2>
      <span className="text-gray-600 font-semibold text-sm">{description}</span>
      <div className="mb-5 flex items-end text-4xl font-black my-5">{
        price ? (
          <>${price}</>
        ) : (<>Free</>)
      }</div>
      <div><button className="border-solid border-2 rounded-lg px-5 py-2 bg-indigo-500 w-full">Buy Plan</button></div>
      <ul>
        {features.map((item, key) => (
          <div className="flex my-2 text-gray-600" key={key}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
            </svg>
            <li className="font-semibold text-sm">{item}</li>
            <br></br>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PlanCard;



