
import React from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface DemographicFilterProps {
  activeCategory: 'gender' | 'class' | 'age';
  onCategoryChange: (category: 'gender' | 'class' | 'age') => void;
}

const DemographicFilter: React.FC<DemographicFilterProps> = ({ 
  activeCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md mb-6">
      <h3 className="font-serif text-lg mb-4 text-gray-800">Filter Survival Data</h3>
      
      <Tabs defaultValue={activeCategory} className="w-full" onValueChange={(value) => onCategoryChange(value as 'gender' | 'class' | 'age')}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="gender">By Gender</TabsTrigger>
          <TabsTrigger value="class">By Class</TabsTrigger>
          <TabsTrigger value="age">By Age</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default DemographicFilter;
