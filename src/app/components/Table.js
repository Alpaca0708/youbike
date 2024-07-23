const Table = ({ stations }) => {
  // const filterStations = stations.filter((station) => station.sarea === '大安區');

  if (!stations) return
  <div className="flex justify-center">
    Loading...
  </div>;

  return (
    <div className="overflow-x-auto w-full p-[20px]">
      <table className="min-w-[600px] w-full bg-white border-collapse table-auto rounded-[20px] overflow-hidden">
        <thead className=" w-full bg-[#B5CC22] rounded-[20px]">
          <tr className="text-white w-full h-[60px]">
            <th className=" p-2 text-white font-bold text-left min-w-[100px]">
              縣市
            </th>
            <th className="p-2 text-white font-bold text-left">
              區域
            </th>
            <th className="p-2 text-white font-bold text-left">
              站點名稱
            </th>
            <th className="p-2 text-white font-bold text-left min-w-[100px]">
              可借車輛
            </th>
            <th className="p-2 text-white font-bold text-left min-w-[100px]">
              可還空位
            </th>
            {/* <th className="bg-green-500 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              可還空位
            </th> */}
          </tr>
        </thead>
        <tbody className="">
          {stations && stations.map((station, index) => (
            <tr key={index} className=" md:border-none md:table-row">
              <td className="p-2 md:border text-left md:table-cell">台北市</td>
              <td className="p-2 md:border text-left md:table-cell">{station.sarea}</td>
              <td className="p-2 md:border text-left md:table-cell">{station.sna.replace('YouBike2.0_', '')}</td>
              <td className="p-2 md:border text-left md:table-cell text-[#B5CC22] font-bold">{station.available_rent_bikes}</td>
              <td className="p-2 md:border text-left md:table-cell text-[#B5CC22] font-bold">{station.available_return_bikes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table;