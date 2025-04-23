
import React from 'react';

const Header = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-900 to-blue-700 py-6 px-4 text-white mb-8 rounded-lg shadow-lg">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl mb-2 text-center">Titanic Disaster Dashboard</h1>
        <p className="text-center text-blue-100 italic">
          Exploring the data behind the tragic sinking on April 15, 1912
        </p>
        
        <div className="mt-6 bg-blue-800/50 p-4 rounded-lg text-sm md:text-base">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-blue-200">Passengers</p>
              <p className="font-serif text-2xl">2,224</p>
            </div>
            <div>
              <p className="text-blue-200">Survivors</p>
              <p className="font-serif text-2xl">705</p>
            </div>
            <div>
              <p className="text-blue-200">Fatality Rate</p>
              <p className="font-serif text-2xl">68%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
