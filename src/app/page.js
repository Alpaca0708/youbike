'use client'
import '@/app/globals.css';
import Image from "next/image";
import Menu from '@/app/components/Menu';
import Input from '@/app/components/Input';
import Area from '@/app/components/Area';
import Table from '@/app/components/Table';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [area, setArea] = useState([]);
  const [stations, setStations] = useState(null);

  const fetchYoubikeData = async () => {
    try {
      const response = await fetch('https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json');
      const data = await response.json();
      console.log('youbike data', data);
      setStations(data);
      const uniqueAreas = new Set(data.map(station => station.sarea));
      const uniqueAreasArray = Array.from(uniqueAreas);

      // 將 Set 轉換為陣列
      setArea(uniqueAreasArray);
      console.log('uniqueAreas', uniqueAreas);
      console.log('uniqueAreasArray', uniqueAreasArray)
    } catch (error) {
      console.error('fetchYoubikeData error', error);
    }
  };

  const data = [

    {
      "sno": "500101001",
      "sna": "YouBike2.0_捷運科技大樓站",
      "sarea": "大安區",
      "mday": "2024-07-14 18:01:21",
      "ar": "復興南路二段235號前",
      "sareaen": "Daan Dist.",
      "snaen": "YouBike2.0_MRT Technology Bldg. Sta.",
      "aren": "No.235， Sec. 2， Fuxing S. Rd.",
      "act": "1",
      "srcUpdateTime": "2024-07-14 18:01:25",
      "updateTime": "2024-07-14 18:01:52",
      "infoTime": "2024-07-14 18:01:21",
      "infoDate": "2024-07-14",
      "total": 28,
      "available_rent_bikes": 0, // 可借車輛
      "latitude": 25.02605,
      "longitude": 121.5436,
      "available_return_bikes": 28 // 可還空位
    },
    {
      "sno": "500101002",
      "sna": "YouBike2.0_復興南路二段273號前",
      "sarea": "大安區",
      "mday": "2024-07-14 18:06:50",
      "ar": "復興南路二段273號西側",
      "sareaen": "Daan Dist.",
      "snaen": "YouBike2.0_No.273， Sec. 2， Fuxing S. Rd.",
      "aren": "No.273， Sec. 2， Fuxing S. Rd. (West)",
      "act": "1",
      "srcUpdateTime": "2024-07-14 18:07:25",
      "updateTime": "2024-07-14 18:07:53",
      "infoTime": "2024-07-14 18:06:50",
      "infoDate": "2024-07-14",
      "total": 21,
      "available_rent_bikes": 2,
      "latitude": 25.02565,
      "longitude": 121.54357,
      "available_return_bikes": 19
    }
  ]


  useEffect(() => {
    fetchYoubikeData();
  }, []);

  return (
    <div className="w-full h-100vh p-3">
      <Menu />
      <main>
        <Input />
        <Area
          area={area} />
        <Table
          stations={stations} />
      </main>
      {/* <Link href="/hello">Hello</Link>
      <div>
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <Link href={`/blog/${inputValue}`}>Blog</Link>
      </div> */}

    </div>
  );
}
