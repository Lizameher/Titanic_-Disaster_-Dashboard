
import React, { useState } from 'react';
import SurvivalChart from './SurvivalChart';
import PassengerStats from './PassengerStats';
import DemographicFilter from './DemographicFilter';

const DataVisualizer = () => {
  const [activeCategory, setActiveCategory] = useState<'gender' | 'class' | 'age'>('gender');

  return (
    <div className="max-w-5xl mx-auto">
      <DemographicFilter 
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <SurvivalChart category={activeCategory} />
        </div>
        <div>
          <PassengerStats />
        </div>
      </div>
    </div>
  );
};

export default DataVisualizer;
