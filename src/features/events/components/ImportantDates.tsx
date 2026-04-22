import { useEventContext } from "../context/EventContext";

export default function ImportantDates() {
  const { eventData } = useEventContext();
  const { visible, items } = eventData.dates;

  if (!visible) return null;

  return (
    <section className="py-24 bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#1d1d1f]">
            Cronograma <br /> del Evento
          </h2>
          <div className="h-[1px] w-20 bg-[#16a34a] mt-6 md:mt-10"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((d, index) => (
            <div
              key={index}
              className="bg-white border border-[#d2d2d7]/30 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all"
            >
              <p className="text-[10px] font-bold text-[#86868b] uppercase tracking-[0.2em] mb-4">{d.label}</p>
              <p className="text-2xl font-bold text-[#1d1d1f] tracking-tight">{d.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}