import React from "react";
import { useEventContext } from "../context/EventContext";

export default function ImportantDates() {
  const { eventData } = useEventContext();
  const { visible, items } = eventData.dates;

  if (!visible) return null;

  return (
    <section>
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-semibold flex items-center">
          Important Dates
        </h3>
        <div className="inline-block w-[35px] h-[6px] bg-green-600 rounded-3xl mt-4 mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((d, index) => (
            <div
              key={index}
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
}