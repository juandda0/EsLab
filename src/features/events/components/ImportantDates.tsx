import React from "react";

const dates = [
  {
    label: "Full Paper Submission Deadline",
    value: "Extended to Oct. 28, 2025",
  },
  { 
    label: "Abstract Submission Deadline", 
    value: "Extended to Oct. 28, 2025" 
  },
  { 
    label: "Conference Date", 
    value: "Nov. 21-23, 2025" 
  },
  { 
    label: "Notification of Acceptance", 
    value: "20-30 days after submission" 
  },
];

const ImportantDates: React.FC = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-semibold flex items-center">
          Important Dates
        </h3>
        <div className="inline-block w-[35px] h-[6px] bg-green-600 rounded-3xl mt-4 mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dates.map((d) => (
            <div
              key={d.label}
              className="bg-green-50 border border-gray-200 rounded-lg p-4 text-center"
            >
              <p className="font-semibold text-gray-700">{d.label}</p>
              <p className="text-green-600 font-medium">{d.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ImportantDates;
