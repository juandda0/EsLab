import React from "react";
import { Download } from "lucide-react";

const EventosPage: React.FC = () => {
  return (
    <section className="py-20 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl text-center mb-10 my-10 border-b border-gray-200 pb-3 items-start">
          Eventos y presentaciones
        </h2>
        <div>
          <h3 className="text-3xl font-semibold flex items-center gap-2">
            About ICAMIT2025
          </h3>
          <div className="inline-block w-[35px] h-[6px] bg-green-600 rounded-3xl mt-[12px] mb-[12px]"></div>
        </div>

        <div className="mb-1 grid grid-cols-[3fr_1fr] gap-6">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              2025 5th International Conference on Applied Mathematics and
              Information Technology is a platform that allows specialists and
              scholars to exchange ideas and find inspiration.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              2025 5th International Conference on Applied Mathematics and
              Information Technology will be held in Wuhan, China during Nov.
              21-23, 2025. Wuhan is the capital of Hubei Province in the
              People's Republic of China. It is the largest city in Hubei and
              the most populous city in Central China. The name "Wuhan" came
              from the city's historical origin from the conglomeration of
              Wuchang, Hankou and Hanyang, which are collectively known as the
              "Three Towns of Wuhan". It lies in the eastern Jianghan Plain, at
              the confluence of the Yangtze river and its largest tributary, the
              Han River and is known as "Nine Provinces' Thoroughfare". Because
              of its key role in domestic transportation, Wuhan is sometimes
              referred to as "the Chicago of China" by foreign sources.
            </p>
          </div>

          <div className="flex flex-col bg-green-50 shadow-sm  justify-center items-center">
            <h4 className="text-lg font-semibold text-center mb-4">
              — Download —
            </h4>
            <ul className="flex flex-col  text-start justify-center space-y-2 text-green-700 font-medium text-lg">
              <li>
                <a href="#" className="hover:underline">
                  Call for Papers Flyer
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  English Template
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Chinese Template
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Abstract Template
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Poster Presentation Template
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <p>Click the button below to download the Call for Papers Flyer: </p>

          <button className="bg-green-600 hover:bg-blue-700 hover:cursor-pointer text-white font-medium py-2 px-4 flex items-center gap-2 transition-all">
            <Download className="w-5 h-5" /> Call for Papers Flyer
          </button>
        </div>

        {/* Important Dates */}
        <div>
          <h3 className="text-3xl font-semibold mb-6 flex items-center gap-2">
            Important Dates
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
                20-30 days after submission
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventosPage;
