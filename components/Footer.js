const Footer = () => (
  <>
    <div className="w-full h-16 lg:h-24 bg-gray-800 flex flex-row justify-around lg:justify-between items-center lg:px-10">
      <img src="/logos/sbn.png" alt="sbn logo" className="hidden w-24 lg:flex" />
      <div className="flex flex-row space-x-5">
        <a href="https://www.facebook.com/PTSamudera-Biru-Nusantara-105645351036978/" target="_blank" rel="noopener noreferrer">
          <img src="/icons/facebook-white.png" alt="sbn facebook" className="w-6 shadow-lg hover:opacity-60 active:opacity-30" />
        </a>
        <a href="https://www.instagram.com/samuderabirunusantara/" target="_blank" rel="noopener noreferrer">
          <img src="/icons/instagram-white.png" alt="instagram facebook" className="w-6 shadow-lg hover:opacity-60 active:opacity-30" />
        </a>
        <a href="https://www.linkedin.com/company/pt-samudera-biru-nusantara/about/" target="_blank" rel="noopener noreferrer">
          <img src="/icons/linkedin-white.png" alt="linkedin facebook" className="w-6 shadow-lg hover:opacity-60 active:opacity-30" />
        </a>
        <a href="http://api.whatsapp.com/send?phone=6285251455565" target="_blank" rel="noopener noreferrer">
          <img src="/icons/whatsapp-white.png" alt="linkedin facebook" className="w-6 shadow-lg hover:opacity-60 active:opacity-30" />
        </a>
      </div>
      <div className="">
        <h1 className="text-white text-sm font-light lg:hidden">© 2022 PT. SBN</h1>
        <h1 className="hidden lg:flex text-white text-sm font-light">© 2022 PT. Samudera Biru Nusantara</h1>
      </div>
    </div>
  </>
);

export default Footer;
