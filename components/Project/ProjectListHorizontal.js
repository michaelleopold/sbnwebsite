const listProjects = [
  {
    id: 1, title: 'Separi', description: 'Slurry and Dewatering Project in Separi with PT. KPUC', img: '/images/projects/project-separi.jpg',
  },
  {
    id: 2, title: 'Bengalon', description: 'Slurry and Dewatering Project in Bengalon with PT. Dharma Henwa', img: '/images/projects/project-bengalon.jpg',
  },
  {
    id: 3, title: 'Berau', description: 'Slurry Project and Dewatering Project in Berau with PT. Berau Coal', img: '/images/projects/project-berau.jpg',
  },
  {
    id: 4, title: 'Belawan', description: 'Sand Pumping/Dredging Project for the new port in Belawan with PT. WIKA', img: '/images/projects/project-belawan.png',
  },
  {
    id: 5, title: 'Dondang', description: 'Port Silting/Dredging Project consist of sand, mud, and water in Dondang with PT. Global Inti Energi', img: '/images/projects/project-dondang.png',
  },
];

const ProjectListHorizontal = () => (
  <div className="flex flex-row">
    <div className="flex flex-col w-180 pl-24 pr-2 mr-10 justify-center mb-56">
      <h1 className="text-gray-900 font-bold text-3xl tracking-tight">OUR EXPERIENCES</h1>
      <div className="w-12 border-2 border-[#0094DF] mt-2" />
      <h1 className="w-[30rem] mt-4 text-gray-500 text-lg">we have a lot of experience in pumping projects both in well-known private companies and government companies.</h1>
    </div>
    <div
      className="flex overflow-x-scroll pb-10 hide-scroll-bar hide-scroll-bar pt-10 pl-5 mb-44 mt-20"
    >
      <div
        className="flex flex-nowrap"
      >
        {listProjects.map((e) => (
          <div key={e.id} className="inline-block px-3">
            <div
              className="w-72 h-96 max-w-xs overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer"
            >
              <img src={e.img} alt="site 1" className="w-full h-full object-cover" />
            </div>
            <div className="mt-6">
              <h1 className="font-bold tracking-wide mb-1">{e.title}</h1>
              <p className="text-teal-500">{e.description}</p>
            </div>
          </div>
        ))}
        <div className="px-3 flex justify-center items-center">
          <button type="button" onClick={() => {}} className="bg-teal-400 flex justify-center items-center py-2 shadow-lg rounded-lg w-24 h-10 hover:shadow-2xl hover:bg-teal-300 active:bg-teal-500 transition-shadow duration-300 ease-in-out cursor-pointer">
            <h1 className="text-white font-bold">see more</h1>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectListHorizontal;
