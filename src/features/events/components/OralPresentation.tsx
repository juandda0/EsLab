
export default function OralPresentation() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Oral Presentation
        </h2>
        <div className="inline-block w-[35px] h-[6px] bg-green-600 rounded-3xl mt-4 mb-8"></div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Texto */}
          <div>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-6 text-gray-700">
              Oral presentations are now being solicited for the conference. Each
              presenter has 10 minutes for their presentation and 5 minutes for
              discussion. Presenters are required to prepare a PowerPoint
              presentation and submit it to the organizing committee approximately
              two to three weeks before the conference.
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Guidelines for Oral Presenters
              </h3>
              <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
                <li>Submit a full paper to make an oral presentation</li>
                <li>Submit an abstract to make an oral presentation</li>
              </ul>
              <p className="text-red-500 text-sm mt-3 font-medium">
                Note: The full papers/abstracts that have been officially
                published can also be shared as oral presentations at the
                conference.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-2">
                Participation Steps for Oral Presenters
              </h3>
              <ol className="list-decimal ml-6 space-y-1 text-gray-700 text-sm">
                <li>
                  Authors can submit full papers/abstracts and make oral
                  presentations.
                </li>
                <li>
                  The organizing committee will send an invitation letter after
                  acceptance.
                </li>
                <li>
                  Presenters should prepare PowerPoint, audio, or video
                  materials.
                </li>
              </ol>
            </div>
          </div>

          {/* Imágenes */}
          <div className="grid grid-cols-2 gap-3">
            <img
              src="https://placehold.co/300x200"
              alt="presentation"
              className="rounded-lg shadow-sm object-cover"
            />
            <img
              src="https://placehold.co/300x200"
              alt="presentation"
              className="rounded-lg shadow-sm object-cover"
            />
            <img
              src="https://placehold.co/300x200"
              alt="presentation"
              className="rounded-lg shadow-sm object-cover"
            />
            <img
              src="https://placehold.co/300x200"
              alt="presentation"
              className="rounded-lg shadow-sm object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
