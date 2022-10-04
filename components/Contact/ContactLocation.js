/* eslint-disable max-len */
import { memo } from 'react';

const ContactLocation = () => (
  <div className="w-full py-20 bg-gray-100 flex justify-center items-center xl:bg-white">
    <div className="flex flex-col justify-center items-center w-[22rem] md:w-[40rem] lg:w-[50rem] xl:w-[60rem]">
      <h1 className="text-2xl font-bold mb-2 text-gray-900 md:text-3xl">Find Us on Google Maps</h1>
      <p className="text-gray-500 md:text-lg mb-10 text-center">
        Ruko Balikpapan Baru AB 1 No.1, 76114 Balikpapan Selatan, Kalimantan Timur, Indonesia.
      </p>

      <div id="mapouter" className="relative text-right h-110 lg:h-[32rem] w-[22rem] md:w-[40rem] lg:w-[50rem] xl:w-[60rem] bg-gray-500 shadow-xl">
        <div id="gmap_canvas" className="overflow-hidden bg-none h-110 lg:h-[32rem] w-[22rem] md:w-[40rem] lg:w-[50rem] xl:w-[60rem]">
          <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=samudera%20biru%20nusantara&t=&z=17&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" className="w-full h-full"></iframe>
          <a href="https://123movies-to.org"></a>
          <a href="https://www.embedgooglemap.net">google custom map</a>
        </div>
      </div>
    </div>
  </div>
);

export default memo(ContactLocation);
