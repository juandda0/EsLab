import { useEventContext } from "../context/EventContext";

export default function ConferenceAgenda() {
  const { eventData } = useEventContext();
  const { visible, items } = eventData.agenda;

  if (!visible) return null;

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#1d1d1f]">
            Agenda de <br /> Conferencias
          </h2>
          <div className="h-[1px] w-20 bg-[#16a34a] mt-6 md:mt-10"></div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-3xl overflow-hidden border border-[#d2d2d7]/30 flex-1 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="bg-[#16a34a] text-white text-center py-5 text-sm font-black tracking-widest uppercase">
                {item.date}
              </div>
              <div className="p-8 text-center text-[#1d1d1f] text-xl font-bold leading-tight">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}