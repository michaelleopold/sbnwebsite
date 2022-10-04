import ContactMessage from './ContactMessage';

const ContactInformations = () => (
  <div className="w-full py-20 bg-gray-100 flex justify-center xl:flex-row xl:items-center xl:space-x-7">
    <div className="flex flex-col w-100 space-y-5 lg:w-[30rem]">

      <div className="w-full  h-[4.5rem] bg-white flex flex-row shadow-lg rounded-md lg:h-[5.5rem]">
        <div className="w-28 flex justify-center items-center shadow-sm">
          <a href="https://www.facebook.com/PTSamudera-Biru-Nusantara-105645351036978/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 lg:w-14 lg:h-14 rounded-[1.5rem] lg:rounded-[1.75rem] flex justify-center items-center bg-[#0094DF] hover:opacity-60 active:opacity-30 cursor-pointer">
            <img src="/icons/facebook-white.png" alt="sbn facebook" className="w-6 lg:w-7 shadow-lg" />
          </a>
        </div>
        <div className="flex flex-col flex-grow justify-center">
          <h1 className="text-lg lg:text-xl text-gray-900 font-bold">Phone Number</h1>
          <p className="text-sm lg:text-base text-gray-500">+62 852 514 55565</p>
        </div>
      </div>

      <div className="w-full  h-[4.5rem] bg-white flex flex-row shadow-lg rounded-md lg:h-[5.5rem]">
        <div className="w-28 flex justify-center items-center shadow-sm">
          <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-[1.5rem] lg:rounded-[1.75rem] flex justify-center items-center bg-[#0094DF] hover:opacity-60 active:opacity-30 cursor-pointer">
            <img src="/icons/mail-white.png" alt="sbn mail" className="w-6 lg:w-7 shadow-lg" />
          </div>
        </div>
        <div className="flex flex-col flex-grow justify-center">
          <h1 className="text-lg lg:text-xl text-gray-900 font-bold">Email Address</h1>
          <p className="text-sm lg:text-base text-gray-500">office@samuderabirunusantara.com</p>
        </div>
      </div>

      <div className="w-full  h-[4.5rem] bg-white flex flex-row shadow-lg rounded-md lg:h-[5.5rem]">
        <div className="w-28 flex justify-center items-center shadow-sm">
          <a href="https://www.instagram.com/samuderabirunusantara/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 lg:w-14 lg:h-14 rounded-[1.5rem] lg:rounded-[1.75rem] flex justify-center items-center bg-[#0094DF] hover:opacity-60 active:opacity-30 cursor-pointer">
            <img src="/icons/instagram-white.png" alt="sbn instagram" className="w-6 lg:w-7 shadow-lg" />
          </a>
        </div>
        <div className="flex flex-col flex-grow justify-center">
          <h1 className="text-lg lg:text-xl text-gray-900 font-bold">Instagram</h1>
          <p className="text-sm lg:text-base text-gray-500">@samuderabirunusantara</p>
        </div>
      </div>

      <div className="w-full  h-[4.5rem] bg-white flex flex-row shadow-lg rounded-md lg:h-[5.5rem]">
        <div className="w-28 flex justify-center items-center shadow-sm">
          <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-[1.5rem] lg:rounded-[1.75rem] flex justify-center items-center bg-[#0094DF] hover:opacity-60 active:opacity-30 cursor-pointer">
            <img src="/icons/location.png" alt="sbn location" className="w-6 lg:w-7 shadow-lg" />
          </div>
        </div>
        <div className="flex flex-col flex-grow justify-center">
          <h1 className="text-lg lg:text-xl text-gray-900 font-bold">Location</h1>
          <p className="text-sm lg:text-base text-gray-500">Ruko Balikpapan Baru AB1 No.1</p>
        </div>
      </div>
    </div>

    <div className="hidden xl:flex w-160 h-[40rem] rounded-md shadow-md bg-white justify-center items-center">
      <ContactMessage />
    </div>
  </div>
);

export default ContactInformations;
