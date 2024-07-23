'use client'
import '@/app/globals.css';
import Menu from '@/app/components/Menu';
import Input from '@/app/components/Input';
import Area from '@/app/components/Area';
import Table from '@/app/components/Table';
import { useState, useEffect } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [area, setArea] = useState([]);
  const [stations, setStations] = useState(null);
  const [filterData, setFilterData] = useState(null);
  const [checkedAreas, setCheckedAreas] = useState({});

  const fetchYoubikeData = async () => {
    try {
      const response = await fetch('https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json');
      const data = await response.json();
      console.log('youbike data', data);
      setStations(data);
      const uniqueAreas = new Set(data.map(station => station.sarea));
      const uniqueAreasArray = Array.from(uniqueAreas);


      setArea(uniqueAreasArray);
      console.log('uniqueAreas', uniqueAreas);
      console.log('uniqueAreasArray', uniqueAreasArray);
      const initialCheckedState = {};
      uniqueAreasArray.forEach(district => {
        initialCheckedState[district] = true;
      });
      setCheckedAreas(initialCheckedState);
    } catch (error) {
      console.error('fetchYoubikeData error', error);
    }
  };

  useEffect(() => {
    fetchYoubikeData();
  }, []);

  useEffect(() => {
    filterStations();
  }, [inputValue, checkedAreas, stations]);

  const handleSelectAll = () => {
    const allChecked = Object.values(checkedAreas).every(value => value);
    const newCheckedState = {};
    area.forEach(district => {
      newCheckedState[district] = !allChecked;
    });
    setCheckedAreas(newCheckedState);
  };
  const handleInputStation = (inputValue) => {
    setInputValue(inputValue);
    console.log('page input valute  ', inputValue)
  };

  const handleCheckboxChange = (district) => {
    setCheckedAreas(prevState => ({
      ...prevState,
      [district]: !prevState[district]
    }));
  };
  const filterStations = () => {
    if (!stations) return;

    const filteredByInput = stations.filter(station =>
      station.sna.includes(inputValue)
    );

    const filteredByArea = filteredByInput.filter(station =>
      checkedAreas[station.sarea]
    );

    setFilterData(filteredByArea);
  };

  return (
    <div className="w-full h-100vh p-3 md:px-[70px]">
      <Menu />
      <main>
        <Input
          handleInputStation={handleInputStation} />
        <Area
          area={area}
          checkedAreas={checkedAreas}
          handleCheckboxChange={handleCheckboxChange}
          handleSelectAll={handleSelectAll} />
        <Table
          stations={filterData || stations} />
      </main>

    </div>
  );
}
