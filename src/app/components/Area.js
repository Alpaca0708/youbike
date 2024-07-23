'use client'
import Image from "next/image";
import Bike from '@/app/assets/bike.png';
import { useState, useEffect } from 'react';

const Area = ({ area, checkedAreas, handleCheckboxChange, handleSelectAll }) => {

  return (
    <div className="flex flex-col justify-start" >
      {/* <div>
        <label>
          <input type="checkbox" id='all' className=" accent-[#B5CC22] text-white w-[60px]" />
          <span>全部勾選</span>
        </label>
      </div> */}
      <div className="flex w-full items-end ">
        <div className="w-full md:w-[40%] flex flex-col ">
          <label>
            <input className=" accent-[#B5CC22] text-white w-[60px]"
              type="checkbox"
              id='all'
              checked={Object.values(checkedAreas).every(value => value)}
              onChange={handleSelectAll} />
            <span>全部勾選</span>
          </label>
          <div className="flex flex-wrap">
            {area.map && area.map((district, index) =>
              <label key={index}>
                <input className="accent-[#B5CC22] w-[60px] my-3"
                  type="checkbox"
                  id={district}
                  checked={checkedAreas[district] || false}
                  onChange={() => handleCheckboxChange(district)} />
                <span>{district}</span>
              </label>
            )}
          </div>
        </div>
        <div className="hidden md:block md:ml-[100px]">
          <Image src={Bike} alt='bike' />
        </div>
      </div>
    </div>
  );
}

export default Area;