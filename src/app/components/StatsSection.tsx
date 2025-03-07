'use client';

import React from 'react';

// Stats data
const stats = [
  { number: "10+", label: "Years Experience" },
  { number: "1000+", label: "Students Taught" },
  { number: "4.9/5", label: "Student Rating" },
];

const StatsSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-slate-100 shadow-md rounded-xl">
      <div className="p-6 sm:p-8 md:p-12 lg:p-16 text-center">
        <h2 className="text-2xl sm:text-3xl text-blue-500 mb-8 sm:mb-12 md:mb-16 font-bold">
          Our Impact
        </h2>
        
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center mb-6 sm:mb-8 md:mb-10 px-4 sm:px-6 md:px-8 w-full sm:w-auto">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500 mb-2 sm:mb-3 md:mb-4">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-slate-500 uppercase tracking-wide font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 