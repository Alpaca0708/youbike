const Table = ({ stations }) => {
  return (
    <div className="overflow-x-auto w-full">

      <table className="w-full bg-white border-collapse block md:table">
        <thead className="block w-full bg-[#B5CC22] md:table-header-group">
          <tr className="text-white flex justify-around blocl w--full">
            <th className="w-">
              縣市
            </th>
            <th >
              區域
            </th>
            <th >
              站點名稱
            </th>
            <th >
              可借車輛
            </th>
            <th >
              可還空位
            </th>
            {/* <th className="bg-green-500 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              可還空位
            </th> */}
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {stations && stations.map((station, index) => (
            <tr key={index} className=" md:border-none block md:table-row">
              <td className="p-2 md:border text-left block md:table-cell">台北市</td>
              <td className="p-2 md:border text-left block md:table-cell">{station.sarea}</td>
              <td className="p-2 md:border text-left block md:table-cell">{station.sna}</td>
              <td className="p-2 md:border text-left block md:table-cell">{station.availableBikes}</td>
            </tr>
          ))}
        </tbody>
        {/* <tbody className="block md:table-row-group">
          {stations.map((station, index) => (
            <tr
              key={index}
              className="bg-gray-300 border border-grey-500 md:border-none block md:table-row"
            >
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                {station.city}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                {station.district}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                {station.name}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                {station.availableBikes}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                {station.availableDocks}
              </td>
            </tr>
          ))}
        </tbody> */}
      </table>
    </div>
  )
}

export default Table;