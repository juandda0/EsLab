import React from "react";
import { Download } from "lucide-react";

interface downloadSection {
  title: string;
  url: string;
}
const downloads: downloadSection[] = [
  {
    title: "Call for Papers Flyer",
    url: "Extended to Oct. 28, 2025",
  },
  { title: "English Template", url: "#" },
  { title: "Chinese Template", url: "#" },
  { title: "Abstract Template", url: "#" },
];

const About: React.FC = () => {
  return (
    <section className="">
      <div className="flex flex-col max-w-6xl mx-auto px-6">
        <h2 className="text-3xl text-center mb-10 my-10 border-b border-gray-200 pb-3 items-start">
          Eventos y presentaciones
        </h2>
        <div>
          <h3 className="text-3xl font-semibold flex items-center gap-2">
            About ICAMIT2025
          </h3>
          <div className="inline-block w-[35px] h-[6px] bg-green-600 rounded-3xl mt-4 mb-8"></div>
        </div>

        <div className="mb-1 flex flex-col md:grid md:grid-cols-[3fr_1fr] gap-8">
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

          <div className="flex flex-col bg-green-50  justify-center items-center">
            <h4 className="text-lg font-semibold text-center mb-4">
              — Download —
            </h4>
            <ul className="flex flex-col  text-start justify-center space-y-2 text-green-700 font-medium text-lg">
              {downloads.map((link) => (
                <li key={link.title} className="relative group">
                  <a href={link.url} className="hover:underline">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-row mt-5 gap-6 items-center">
          <p>Click the button below to download the Call for Papers Flyer: </p>

          <button className="bg-green-600 hover:bg-blue-700 hover:cursor-pointer text-white font-medium py-2 px-4 flex items-center gap-2 transition-all">
            <Download className="w-5 h-5" /> Call for Papers Flyer
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
