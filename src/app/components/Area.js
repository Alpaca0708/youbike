const Area = ({ area }) => {
  return (
    <div className="flex flex-col  justify-start" >
      <div>
        <label>
          <input type="checkbox" id='all' className=" accent-[#B5CC22] text-white w-[60px]" />
          <span>全部勾選</span>
        </label>
      </div>
      <div className="flex flex-wrap">
        {area.map && area.map((district, index) =>
          <label key={index}>
            <input type="checkbox" id={district} className="accent-[#B5CC22] w-[60px]" />
            <span>{district}</span>
          </label>
        )}
      </div>
    </div>
  );
}

export default Area;