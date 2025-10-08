import React from "react";
import { Download, Calendar } from "lucide-react";

const EventosPage: React.FC = () => {
  return (
    <section className="py-25 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-start mb-8 border-b border-gray-200 pb-4 items-start">
          Eventos y presentaciones
        </h2>

        <div className="mb-12 grid grid-cols-[3fr_1fr] gap-12">
            <div>
          <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            About ICAMIT2025
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            2025 5th International Conference on Applied Mathematics and
            Information Technology is a platform that allows specialists and
            scholars to exchange ideas and find inspiration.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            2025 5th International Conference on Applied Mathematics and
            Information Technology will be held in Wuhan, China during Nov.
            21-23, 2025. Wuhan is the capital of Hubei Province in the People's
            Republic of China. It is the largest city in Hubei and the most
            populous city in Central China. The name "Wuhan" came from the
            city's historical origin from the conglomeration of Wuchang, Hankou
            and Hanyang, which are collectively known as the "Three Towns of
            Wuhan". It lies in the eastern Jianghan Plain, at the confluence of
            the Yangtze river and its largest tributary, the Han River and is
            known as "Nine Provinces' Thoroughfare". Because of its key role in
            domestic transportation, Wuhan is sometimes referred to as "the
            Chicago of China" by foreign sources.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 hover:cursor-pointer text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2 transition-all">
            <Download className="w-5 h-5" /> Call for Papers Flyer
          </button>
          </div>
        

        <div className="bg-blue-50 rounded-xl p-6 shadow-sm mb-12">
          <h4 className="text-lg font-semibold text-center mb-4">
            — Download —
          </h4>
          <ul className="flex flex-col justify-center items-center space-y-2 text-blue-700 font-medium text-lg text-center">
            <li>
              <a href="#" className="hover:underline">
                📄 Call for Papers Flyer
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                📝 English Template
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                📝 Chinese Template
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                📝 Abstract Template
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                📊 Poster Presentation Template
              </a>
            </li>
          </ul>
        </div>
        </div>

        {/* Important Dates */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-blue-600" /> Important Dates
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
              <p className="font-semibold text-gray-700">
                Full Paper Submission Deadline
              </p>
              <p className="text-blue-600 font-medium">
                Extended to Oct. 28, 2025
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
              <p className="font-semibold text-gray-700">
                Abstract Submission Deadline
              </p>
              <p className="text-blue-600 font-medium">
                Extended to Oct. 28, 2025
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
              <p className="font-semibold text-gray-700">Conference Date</p>
              <p className="text-blue-600 font-medium">Nov. 21–23, 2025</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
              <p className="font-semibold text-gray-700">
                Notification of Acceptance
              </p>
              <p className="text-blue-600 font-medium">
                20–30 days after submission
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventosPage;
