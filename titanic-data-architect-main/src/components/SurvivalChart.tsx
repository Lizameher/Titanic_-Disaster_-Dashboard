
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { titanicData, TitanicPassenger } from '../data/titanicData';

interface SurvivalData {
  name: string;
  survived: number;
  perished: number;
}

interface SurvivalChartProps {
  category: 'gender' | 'class' | 'age';
}

const SurvivalChart: React.FC<SurvivalChartProps> = ({ category }) => {
  const [data, setData] = useState<SurvivalData[]>([]);

  useEffect(() => {
    switch (category) {
      case 'gender':
        prepareGenderData();
        break;
      case 'class':
        prepareClassData();
        break;
      case 'age':
        prepareAgeData();
        break;
      default:
        prepareGenderData();
    }
  }, [category]);

  const prepareGenderData = () => {
    const maleData = titanicData.filter(p => p.sex === 'male');
    const femaleData = titanicData.filter(p => p.sex === 'female');
    
    const maleSurvived = maleData.filter(p => p.survived).length;
    const femaleSurvived = femaleData.filter(p => p.survived).length;
    
    setData([
      {
        name: 'Male',
        survived: maleSurvived,
        perished: maleData.length - maleSurvived
      },
      {
        name: 'Female',
        survived: femaleSurvived,
        perished: femaleData.length - femaleSurvived
      }
    ]);
  };

  const prepareClassData = () => {
    const firstClass = titanicData.filter(p => p.pclass === 1);
    const secondClass = titanicData.filter(p => p.pclass === 2);
    const thirdClass = titanicData.filter(p => p.pclass === 3);
    
    const firstClassSurvived = firstClass.filter(p => p.survived).length;
    const secondClassSurvived = secondClass.filter(p => p.survived).length;
    const thirdClassSurvived = thirdClass.filter(p => p.survived).length;
    
    setData([
      {
        name: '1st Class',
        survived: firstClassSurvived,
        perished: firstClass.length - firstClassSurvived
      },
      {
        name: '2nd Class',
        survived: secondClassSurvived,
        perished: secondClass.length - secondClassSurvived
      },
      {
        name: '3rd Class',
        survived: thirdClassSurvived,
        perished: thirdClass.length - thirdClassSurvived
      }
    ]);
  };

  const prepareAgeData = () => {
    // Filter out null ages
    const passengersWithAge = titanicData.filter(p => p.age !== null) as (TitanicPassenger & { age: number })[];
    
    // Define age groups
    const children = passengersWithAge.filter(p => p.age < 18);
    const adults = passengersWithAge.filter(p => p.age >= 18 && p.age < 60);
    const elderly = passengersWithAge.filter(p => p.age >= 60);
    
    const childrenSurvived = children.filter(p => p.survived).length;
    const adultsSurvived = adults.filter(p => p.survived).length;
    const elderlySurvived = elderly.filter(p => p.survived).length;
    
    setData([
      {
        name: 'Children (<18)',
        survived: childrenSurvived,
        perished: children.length - childrenSurvived
      },
      {
        name: 'Adults (18-59)',
        survived: adultsSurvived,
        perished: adults.length - adultsSurvived
      },
      {
        name: 'Elderly (60+)',
        survived: elderlySurvived,
        perished: elderly.length - elderlySurvived
      }
    ]);
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h3 className="font-serif text-lg mb-4 text-gray-800">
        Survival by {category === 'gender' ? 'Gender' : category === 'class' ? 'Passenger Class' : 'Age Group'}
      </h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="survived" name="Survived" fill="#4ade80" />
            <Bar dataKey="perished" name="Perished" fill="#ef4444" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SurvivalChart;
