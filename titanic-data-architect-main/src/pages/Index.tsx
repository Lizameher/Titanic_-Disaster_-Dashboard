
import React from 'react';
import Header from '../components/Header';
import DataVisualizer from '../components/DataVisualizer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <Header />
        
        <div className="mb-8 bg-gradient-to-r from-blue-900/10 to-blue-700/10 p-6 rounded-lg border border-blue-200">
          <h2 className="font-serif text-2xl mb-4 text-gray-800">About the Titanic Disaster</h2>
          <p className="text-gray-700 mb-3">
            The RMS Titanic was a British passenger liner operated by the White Star Line that sank in the North Atlantic Ocean on April 15, 1912, after striking an iceberg during her maiden voyage from Southampton to New York City.
          </p>
          <p className="text-gray-700">
            Of the estimated 2,224 passengers and crew aboard, more than 1,500 died, making the sinking one of the deadliest commercial peacetime maritime disasters in modern history. The disaster led to major improvements in maritime regulations.
          </p>
        </div>
        
        <DataVisualizer />
      </div>
    </div>
  );
};

export default Index;
