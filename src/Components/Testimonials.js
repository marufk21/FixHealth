import React from "react";

const Testimonial = () => {
  return (
    <>
      <style>
        {`
          @import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css');
          body.dark {
            background-color: #1a202c;
            color: #cbd5e0;
          }
          .text-gray-800 {
            color: #2d3748;
          }
          .text-gray-600 {
            color: #718096;
          }
          .bg-gray-50 {
            background-color: #ffffff;
          }
          .border-gray-200 {
            border-color: #cbd5e0;
          }
          .text-indigo-500 {
            color: #667eea;
          }
        `}
      </style>

      <div className="min-w-screen min-h-screen bg-gray-50 dark:bg-gray-800 dark:text-gray-100 flex items-center justify-center">
        <div className="w-full bg-gray-800 dark:bg-gray-800 border-t border-b border-gray-700 px-5 py-16 md:py-24 text-gray-100">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">
                What people <br /> are saying.
              </h1>
              <h3 className="text-xl mb-5 font-light">
              Don't just take our word for it
              </h3>
              <div className="text-center mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>
            
            <div class="-mx-3 md:flex items-start">
                <div class="px-3 md:w-1/3">
                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div class="w-full flex mb-4 items-center">
                            <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="https://i.pravatar.cc/100?img=1" alt=""/>
                            </div>
                            <div class="flex-grow pl-3">
                                <h6 class="font-bold text-sm uppercase text-gray-600">Kenzie Edgar.</h6>
                            </div>
                        </div>
                        <div class="w-full">
                            <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Dr. Taylor's compassionate and skilled approach made my physiotherapy experience at Harmony truly exceptional. He not only addressed my injury but also educated me on preventive measures. I highly recommend Dr. Taylor and the entire team for their top-notch care.<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                        </div>
                    </div>
                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div class="w-full flex mb-4 items-center">
                            <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="https://i.pravatar.cc/100?img=2" alt=""/>
                            </div>
                            <div class="flex-grow pl-3">
                                <h6 class="font-bold text-sm uppercase text-gray-600">Stevie Tifft.</h6>
                            </div>
                        </div>
                        <div class="w-full">
                            <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>I want to express my gratitude to Dr. Lewis for her patience and expertise in helping me regain mobility after a surgery. The personalized exercises she prescribed were instrumental in my recovery. Harmony Physiotherapy is a place where you can trust the professionals.<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                        </div>
                    </div>
                </div>
                <div class="px-3 md:w-1/3">
                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div class="w-full flex mb-4 items-center">
                            <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="https://i.pravatar.cc/100?img=3" alt=""/>
                            </div>
                            <div class="flex-grow pl-3">
                                <h6 class="font-bold text-sm uppercase text-gray-600">Tommie Ewart.</h6>
                            </div>
                        </div>
                        <div class="w-full">
                            <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Dr. Harper's attention to detail and commitment to my rehabilitation were outstanding. His knowledge of orthopedic conditions and effective treatment plans truly set him apart. I'm grateful for the excellent care I received at Harmony Physiotherapy.<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                        </div>
                    </div>
                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div class="w-full flex mb-4 items-center">
                            <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="https://i.pravatar.cc/100?img=4" alt=""/>
                            </div>
                            <div class="flex-grow pl-3">
                                <h6 class="font-bold text-sm uppercase text-gray-600">Charlie Howse.</h6>
                            </div>
                        </div>
                        <div class="w-full">
                            <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>I cannot thank Dr. Chen enough for her dedication and skill in treating my shoulder injury. Her holistic approach, combining manual therapy and exercises, made a significant difference in my recovery. I wholeheartedly recommend Dr. Chen and Harmony Physiotherapy.<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                        </div>
                    </div>
                </div>
                <div class="px-3 md:w-1/3">
                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div class="w-full flex mb-4 items-center">
                            <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="https://i.pravatar.cc/100?img=5" alt=""/>
                            </div>
                            <div class="flex-grow pl-3">
                                <h6 class="font-bold text-sm uppercase text-gray-600">Nevada Herbertson.</h6>
                            </div>
                        </div>
                        <div class="w-full">
                            <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>I want to express my deepest gratitude to Dr. Emily Johnson for her exceptional physiotherapy skills. After suffering from chronic back pain for years, her personalized treatment plan and hands-on approach made a significant difference in my daily life. I can now move freely without constant discomfort. Thank you, Dr. Johnson<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                        </div>
                    </div>
                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div class="w-full flex mb-4 items-center">
                            <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="https://i.pravatar.cc/100?img=6" alt=""/>
                            </div>
                            <div class="flex-grow pl-3">
                                <h6 class="font-bold text-sm uppercase text-gray-600">Kris Stanton.</h6>
                            </div>
                        </div>
                        <div class="w-full">
                            <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>I had the pleasure of being treated by Dr. Turner at Harmony Physiotherapy. Her expertise and personalized approach helped me recover from a sports injury swiftly. I highly recommend Dr. Turner and the entire team for their excellent care<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                        </div>
                    </div>
                </div>
            </div>

            
          </div>
        </div>
      </div>
      {/* BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES */}
      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Buy me a beer"
            href="https://www.buymeacoffee.com/scottwindon"
            target="_blank"
            className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              className="object-cover object-center w-full h-full rounded-full"
              src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"
              alt="Buy me a beer"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
