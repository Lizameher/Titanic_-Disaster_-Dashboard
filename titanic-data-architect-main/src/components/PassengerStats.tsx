
import React from 'react';
import { calculateStatistics } from '../data/titanicData';

const PassengerStats = () => {
  const stats = calculateStatistics();
  
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h3 className="font-serif text-lg mb-4 text-gray-800">Key Statistics</h3>
      
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-blue-50 p-3 rounded-md">
          <p className="text-sm text-blue-600 font-medium">Total Passengers</p>
          <p className="text-2xl font-serif text-blue-900">{stats.totalPassengers}</p>
        </div>
        
        <div className="bg-green-50 p-3 rounded-md">
          <p className="text-sm text-green-600 font-medium">Survival Rate</p>
          <p className="text-2xl font-serif text-green-900">{stats.survivalRate}%</p>
        </div>
        
        <div className="col-span-2 mt-2">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Survival by Gender</h4>
          
          <div className="flex justify-between mb-2">
            <span className="text-gray-600 text-sm">Males</span>
            <span className="text-blue-600 text-sm">{stats.maleSurvivalRate}%</span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div 
              className="bg-blue-600 h-2 rounded-full" 
              style={{ width: `${stats.maleSurvivalRate}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between mb-2">
            <span className="text-gray-600 text-sm">Females</span>
            <span className="text-pink-600 text-sm">{stats.femaleSurvivalRate}%</span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div 
              className="bg-pink-600 h-2 rounded-full" 
              style={{ width: `${stats.femaleSurvivalRate}%` }}
            ></div>
          </div>
        </div>
        
        <div className="col-span-2 mt-2">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Survival by Class</h4>
          
          <div className="flex justify-between mb-2">
            <span className="text-gray-600 text-sm">1st Class</span>
            <span className="text-yellow-600 text-sm">{stats.class1SurvivalRate}%</span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div 
              className="bg-yellow-600 h-2 rounded-full" 
              style={{ width: `${stats.class1SurvivalRate}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between mb-2">
            <span className="text-gray-600 text-sm">2nd Class</span>
            <span className="text-orange-600 text-sm">{stats.class2SurvivalRate}%</span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div 
              className="bg-orange-600 h-2 rounded-full" 
              style={{ width: `${stats.class2SurvivalRate}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between mb-2">
            <span className="text-gray-600 text-sm">3rd Class</span>
            <span className="text-red-600 text-sm">{stats.class3SurvivalRate}%</span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div 
              className="bg-red-600 h-2 rounded-full" 
              style={{ width: `${stats.class3SurvivalRate}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassengerStats;
