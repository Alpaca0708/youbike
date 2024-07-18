import Image from "next/image";
import Bike from '@/app/assets/bike.png';

const Area = ({ area }) => {
  return (
    <div className="flex flex-col  justify-start" >
      {/* <div>
        <label>
          <input type="checkbox" id='all' className=" accent-[#B5CC22] text-white w-[60px]" />
          <span>全部勾選</span>
        </label>
      </div> */}
      <div className="flex w-full items-end ">
        <div className="w-full md:w-[40%] flex flex-col ">
          <label>
            <input type="checkbox" id='all' className=" accent-[#B5CC22] text-white w-[60px]" />
            <span>全部勾選</span>
          </label>
          <div className="flex flex-wrap">
            {area.map && area.map((district, index) =>
              <label key={index}>
                <input type="checkbox" id={district} className="accent-[#B5CC22] w-[60px] my-3" />
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