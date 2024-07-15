
const Input = () => {
  const cities = ['台北市', '新北市', '桃園市', '台中市', '台南市', '高雄市', '基隆市', '新竹市', '嘉義市', '新竹縣', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '屏東縣', '宜蘭縣', '花蓮縣', '台東縣', '澎湖縣', '金門縣', '連江縣'];
  return (

    <div className="flex flex-col p-3">
      <h3 className="text-[#B5CC22] text-semibold">站點資訊</h3>
      <input placeholder="搜尋站點" className="h-[40px] bg-[#F6F6F6] rounded-[8px] my-2 p-3" />
      <select className="h-[40px] bg-[#F6F6F6] rounded-[8px] my-2 p-2"
        placeholder="area">
        {cities.map((city, index) => (
          <option className="w-full"
            key={index}
            value={city}>
            {city}</option>
        ))}
      </select>
    </div>
  );
}

export default Input;