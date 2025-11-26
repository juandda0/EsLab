import React, { createContext, useState, useContext } from "react";

export interface EventData {
  about: {
    visible: boolean;
    title: string;
    description: string;
    location: string;
    downloads: { label: string; url: string }[]; // <--- NUEVO
  };
  dates: {
    visible: boolean;
    items: { label: string; value: string }[];
  };
  agenda: {
    visible: boolean;
    items: { date: string; title: string }[];
  };
  oral: {
    visible: boolean;
    content: string;
    gallery: string[]; // <--- NUEVO: URLs de las 4 imágenes
  };
}

interface EventContextType {
  eventData: EventData;
  updateEventData: (newData: EventData) => void;
}

const defaultEventData: EventData = {
  about: {
    visible: true,
    title: "About ICAMIT2025",
    description: "2025 5th International Conference on Applied Mathematics and Information Technology is a platform that allows specialists and scholars to exchange ideas and find inspiration.\n\nIt will be held in Wuhan, China during Nov. 21-23, 2025.",
    location: "Wuhan, China",
    downloads: [
      { label: "Flyer del Evento", url: "#" },
      { label: "Plantilla de Presentación", url: "#" }
    ]
  },
  dates: {
    visible: true,
    items: [
      { label: "Full Paper Submission Deadline", value: "Extended to Oct. 28, 2025" },
      { label: "Abstract Submission Deadline", value: "Extended to Oct. 28, 2025" },
      { label: "Conference Date", value: "Nov. 21-23, 2025" },
    ],
  },
  agenda: {
    visible: true,
    items: [
      { date: "Nov. 21, 2025", title: "Registration" },
      { date: "Nov. 22, 2025", title: "Keynote Speeches & Oral/Poster Presentations" },
      { date: "Nov. 23, 2025", title: "Academic Tourism" },
    ],
  },
  oral: {
    visible: true,
    content: "Oral presentations are now being solicited for the conference. Each presenter has 10 minutes for their presentation and 5 minutes for discussion.",
    gallery: [
       "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=300&q=80",
       "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=300&q=80",
       "https://images.unsplash.com/photo-1477281765962-ef9dbfa14960?auto=format&fit=crop&w=300&q=80",
       "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=300&q=80"
    ]
  },
};

const EventContext = createContext<EventContextType | undefined>(undefined);

export const EventProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [eventData, setEventData] = useState<EventData>(defaultEventData);

  const updateEventData = (newData: EventData) => {
    setEventData(newData);
  };

  return (
    <EventContext.Provider value={{ eventData, updateEventData }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = () => {
  const context = useContext(EventContext);
  if (!context) throw new Error("useEventContext must be used within EventProvider");
  return context;
};