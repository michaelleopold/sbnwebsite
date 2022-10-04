import { useRouter } from 'next/router';

const listProjects = [
  {
    id: 1, title: 'PT. Wika-Hutama Jo (WIKA)', alt: 'project di PT. WIKA', description: 'Working as Sub-Contractor for Dredging Belawan Jetty Phase 2 in Belawan, North Sumatera.', img: './images/projects/project-belawan.png',
  },
  {
    id: 2, title: 'PT. KALTIM PRIMA UTAMA COAL', alt: 'project di PT. KPUC', description: 'Working as Contractor for Slurry Removal in 2 sites namely Separi, East Kalimantan and Malinau, North Kalimantan.', img: './images/projects/project-separi-dan-malinau.png',
  },
  {
    id: 3, title: 'PT. DHARMA HENWA', alt: 'projet di PT. DH', description: 'Working as Sub-Contractor for Slurry Removal in 2 sites namely Bengalon, East Kalimantan and Asam-asam, South Kalimantan.', img: './images/projects/project-asam-asam-dan-bengalon.jpg',
  },
  {
    id: 4, title: 'PT. GLOBALINDO INTI ENERGIE', alt: 'project di PT. GIE', description: 'Working as Contractor for Jetty Dredging in Dondang, East Kalimantan.', img: './images/projects/project-jetty-dondang.jpg',
  },
  {
    id: 5, title: 'PT. JOMIMA BARAMULIA ABADI', alt: 'project di PT. JBA', description: 'Working as Contractor for Slurry and Dewatering Removal in Melak, East Kalimantan.', img: './images/projects/project-melak.jpg',
  },
];

const HomeProjectListHorizontal = () => {
  const router = useRouter();

  return (
    <>
      <div className="hidden lg:flex flex-row w-full bg-white">
        <div className="flex flex-col w-180 pl-24 pr-2 mr-10 justify-center mb-56">
          <div className="flex flex-col items-start">
            <button onClick={() => router.push('/projects')}>
              <h1 className="text-gray-900 font-bold text-3xl tracking-tight cursor-pointer">OUR EXPERIENCES</h1>
            </button>
            <div className="w-12 border-2 border-[#0094DF] mt-2" />
          </div>
          <h1 className="w-[30rem] mt-4 text-gray-500 text-lg">we have a lot of experience in pumping projects both in well-known private companies and government companies.</h1>
          <h1 className="w-[30rem] mt-2 text-[#0094DF]">(slide right)</h1>
        </div>
        <div
          className="flex overflow-x-scroll pb-10 hide-scroll-bar hide-scroll-bar pt-10 pl-5 mb-44 mt-20"
        >
          <div
            className="flex flex-nowrap space-x-5"
          >
            {listProjects.map((e) => (
              <div key={e.id} className="inline-block px-3">
                <div
                  className="relative w-72 h-96 max-w-xs overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer"
                >
                  <img src={e.img} alt={e.alt} className="w-full h-full object-cover" />
                </div>
                <div className="mt-6">
                  <h1 className="font-bold tracking-wide mb-1">{e.title}</h1>
                  <p className="text-teal-500">{e.description}</p>
                </div>
              </div>
            ))}
            <div className="px-3 flex justify-center items-center">
              <button type="button" onClick={() => router.push('/projects')} className="bg-teal-400 flex justify-center items-center py-2 shadow-lg rounded-lg w-24 h-10 hover:shadow-2xl hover:bg-teal-300 active:bg-teal-500 transition-shadow duration-300 ease-in-out cursor-pointer">
                <h1 className="text-white font-bold">see more</h1>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:hidden w-full py-20 bg-white overflow-hidden">
        <div className="flex flex-col w-[30rem] justify-center items-center self-center mb-5">
          <div className="flex flex-col">
            <button onClick={() => router.push('/projects')}>
              <h1 className="text-gray-900 font-bold text-3xl tracking-tight cursor-pointer">OUR EXPERIENCES</h1>
            </button>
            <div className="w-12 border-2 border-[#0094DF] mt-2 self-start" />
          </div>
          <h1 className="w-full mt-4 text-gray-500 text-center text-lg">we have a lot of experience in pumping projects both in well-known private companies and government companies.</h1>
          <h1 className="w-full mt-2 text-[#0094DF] text-center">(slide right)</h1>
        </div>
        <div
          className="flex overflow-x-scroll pb-10 hide-scroll-bar hide-scroll-bar pt-10 pl-5"
        >
          <div
            className="flex flex-nowrap"
          >
            {listProjects.map((e) => (
              <div key={e.id} className="inline-block px-3">
                <div
                  className="relative w-72 h-96 max-w-xs overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer"
                >
                  <img src={e.img} alt={e.alt} className="w-full h-full object-cover" />
                </div>
                <div className="mt-6">
                  <h1 className="font-bold tracking-wide mb-1">{e.title}</h1>
                  <p className="text-teal-500">{e.description}</p>
                </div>
              </div>
            ))}
            <div className="px-3 flex justify-center items-center">
              <button type="button" onClick={() => router.push('/projects')} className="bg-teal-400 flex justify-center items-center py-2 shadow-lg rounded-lg w-24 h-10 hover:shadow-2xl hover:bg-teal-300 active:bg-teal-500 transition-shadow duration-300 ease-in-out cursor-pointer">
                <h1 className="text-white font-bold">see more</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProjectListHorizontal;
