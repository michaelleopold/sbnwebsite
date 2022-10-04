/* eslint-disable max-len */

import ProjectHistory from './ProjectHistory';
import SingleProjectComponent from './ProjectComponent/SingleProjectComponent';

const belawan = './images/projects/project-belawan.png';
const separimalinau = './images/projects/project-separi-dan-malinau.png';
const bengalonasam = './images/projects/project-asam-asam-dan-bengalon.jpg';
const amborawang = './images/projects/project-jetty-ambalat.jpg';
const dondang = './images/projects/project-jetty-dondang.jpg';
const melak = './images/projects/project-melak.jpg';

const ProjectListVertical = () => (
  <div className="w-full py-20 xl:pt-28 xl:pb-[30rem] flex flex-col justify-center items-center bg-white">
    <div className="flex flex-col w-110 md:w-150 xl:w-[50rem]">
      <div className="flex flex-col w-full justify-center mb-20">
        <h1 className="text-gray-900 font-bold text-3xl tracking-tight">OUR PAST & CURRENT PROJECTS</h1>
        <div className="w-12 border-2 border-[#0094DF] mt-2" />
        <h1 className="mt-4 text-gray-500 text-lg md:text-xl">We have a lot of experience in pumping projects from well-known private companies, public listed companies, and government companies.</h1>
      </div>

      <div className="w-full mt-12 flex flex-col space-y-16 xl:hidden">
        <div className="w-full flex flex-col">
          <h1 className="font-medium text-2xl text-gray-900">Project Dredging - PT. Wika-Hutama Jo (WIKA)</h1>
          <h3 className="font-light mb-3 text-gray-500 md:text-lg">(Lokasi Belawan, Medan) - 2018</h3>
          <div className="relative h-60 md:h-80 w-[28rem] md:w-[35rem] rounded-md shadow-lg overflow-hidden">
            <img src={belawan} alt="PT. WIKA Dredging Project" className="w-full h-full object-fill" />
          </div>
        </div>

        <div className="w-full flex flex-col">
          <h1 className="font-medium text-2xl text-gray-900">Project Slurry Removal - PT. Kayan Putra Utama Coal (KPUC)</h1>
          <h3 className="font-light mb-3 text-gray-500">(Lokasi Separi, Kalimantan Timur & Malinau, Kalimantan Utara) - 2019</h3>
          <div className="relative h-60 md:h-80 w-[28rem] md:w-[35rem] rounded-md shadow-lg overflow-hidden">
            <img src={separimalinau} alt="PT. KPUC Slurry Removal Project" className="w-full h-full object-fill" />
          </div>
        </div>

        <div className="w-full flex flex-col">
          <h1 className="font-medium text-2xl text-gray-900">Project Slurry Removal - PT. Dharma Henwa (DH)</h1>
          <h3 className="font-light mb-3 text-gray-500">(Lokasi Asam-Asam, Kalimantan Selatan & Bengalon, Kalimantan Timur) - 2019</h3>
          <div className="relative h-60 md:h-80 w-[28rem] md:w-[35rem] rounded-md shadow-lg overflow-hidden">
            <img src={bengalonasam} alt="PT. DH Slurry Removal Project" className="w-full h-full object-fill" />
          </div>
        </div>

        <div className="w-full flex flex-col">
          <h1 className="font-medium text-2xl text-gray-900">Project Jetty Dredging - PT. TBS</h1>
          <h3 className="font-light mb-3 text-gray-500">(Lokasi Amborawang Laut, Kalimantan Timur) - 2021</h3>
          <div className="relative h-60 md:h-80 w-[28rem] md:w-[35rem] rounded-md shadow-lg overflow-hidden">
            <img src={dondang} alt="PT. TBS Jetty Dredging Project" className="w-full h-full object-fill" />
          </div>
        </div>

        <div className="w-full flex flex-col">
          <h1 className="font-medium text-2xl text-gray-900">Project Jetty Dredging - PT. Globalindo Inti Energi</h1>
          <h3 className="font-light mb-3 text-gray-500">(Lokasi Dondang, Kalimantan Timur) - 2021</h3>
          <div className="relative h-60 md:h-80 w-[28rem] md:w-[35rem] rounded-md shadow-lg overflow-hidden">
            <img src={amborawang} alt="PT. GIE Jetty Dredging Project" className="w-full h-full object-fill" />
          </div>
        </div>

        <div className="w-full flex flex-col">
          <h1 className="font-medium text-2xl text-gray-900">Project Slurry Removal & Dewatering - PT. Jomima Baramulia Abadi</h1>
          <h3 className="font-light mb-3 text-gray-500">(Lokasi Melak, Kalimantan Timur) - 2021</h3>
          <div className="relative h-60 md:h-80 w-[28rem] md:w-[35rem] rounded-md shadow-lg overflow-hidden">
            <img src={melak} alt="PT. JBA Slurry & Dewatering Removal Project" className="w-full h-full object-fill" />
          </div>
        </div>

      </div>

      <div className="hidden relative xl:flex w-150 mt-12 flex-col self-center">
        <ProjectHistory />

        <div className="absolute top-24 right-[22rem] flex flex-col w-[35rem]">
          <SingleProjectComponent image={belawan} alt="PT. WIKA Jetty Dredging Project" year="2018" companyName="PT. WIKA-HUTAMA JO" description="Working as Sub-Contractor for Dredging Belawan Jetty Phase 2 in Belawan, North Sumatera." projectName="JETTY DREDGING" />
        </div>

        <div className="absolute top-[43rem] left-[22rem] flex flex-col w-[35rem]">
          <SingleProjectComponent image={separimalinau} alt="PT. KPUC Slurry Removal Project" year="2019" companyName="PT. KALTIM PRIMA UTAMA COAL" description="Working as Contractor for Slurry Removal in 2 sites namely Separi, East Kalimantan and Malinau, North Kalimantan." projectName="SLURRY REMOVAL" />
        </div>

        <div className="absolute top-[78rem] right-[22rem] flex flex-col w-[35rem]">
          <SingleProjectComponent image={bengalonasam} alt="PT. DH Slurry Removal Project" year="2019" companyName="PT. DHARMA HENWA" description="Working as Sub-Contractor for Slurry Removal in 2 sites namely Bengalon, East Kalimantan and Asam-asam, South Kalimantan." projectName="SLURRY REMOVAL" />
        </div>

        <div className="absolute top-[115rem] left-[22rem] flex flex-col w-[35rem]">
          <SingleProjectComponent image={amborawang} alt="PT. TBS Jetty Dredging Project" year="2021" companyName="PT. TBS" description="Working as Contractor for Jetty Dredging in Amborawang Laut, East Kalimantan." projectName="JETTY DREDGING" />
        </div>

        <div className="absolute top-[150rem] right-[22rem] flex flex-col w-[35rem]">
          <SingleProjectComponent image={dondang} alt="PT. GIE Jetty Dredging Project" year="2021" companyName="PT. GLOBALINDO INTI ENERGIE" description="Working as Contractor for Jetty Dredging in Dondang, East Kalimantan." projectName="JETTY DREDGING" />
        </div>

        <div className="absolute top-[187rem] left-[22rem] flex flex-col w-[35rem]">
          <SingleProjectComponent image={melak} alt="PT. JBA Slurry & Dewatering Removal Project" year="2021" companyName="PT. JOMIMA BARAMULIA ABADI" description="Working as Contractor for Slurry and Dewatering Removal in Melak, East Kalimantan." projectName="SLURRY & DEWATERING REMOVAL" />
        </div>
      </div>
    </div>
  </div>
);

export default ProjectListVertical;
