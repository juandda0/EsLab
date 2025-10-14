
const agenda = [
  { date: "Nov. 21, 2025", title: "Registration" },
  { date: "Nov. 22, 2025", title: "Keynote Speeches & Oral/Poster Presentations" },
  { date: "Nov. 23, 2025", title: "Academic Tourism (One Day Tour in Wuhan)" },
];

export default function ConferenceAgenda() {
  return (
    <section className="bg-green-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Conference Agenda
        </h2>
        <div className="inline-block w-[35px] h-[6px] bg-green-600 rounded-3xl mt-4 mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between gap-6">
          {agenda.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-sm rounded-xl overflow-hidden border border-gray-100 flex-1"
            >
              <div className="bg-green-700 text-white text-center py-3 font-semibold">
                {item.date}
              </div>
              <div className="p-5 text-center text-gray-700 font-medium">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
