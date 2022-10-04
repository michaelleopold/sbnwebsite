import { useRouter } from 'next/router';

import ServiceCard from '../Service/ServiceCard';

const HomeServices = () => {
  const router = useRouter();

  return (
    <div className="w-full bg-gray-100 flex flex-col items-center py-28">
      <div className="flex flex-col mb-10">
        <button onClick={() => router.push('/services')}>
          <h1 className="text-gray-900 font-bold text-4xl cursor-pointer">OUR SERVICES</h1>
        </button>
        <div className="w-12 border-2 border-[#0094DF] mt-2" />
      </div>

      <div className="flex flex-col space-y-14 lg:hidden xl:flex xl:space-y-0 xl:flex-row xl:space-x-10">
        <ServiceCard title="MINE PUMP" alt="mine pump" image="./images/services/lifting.jpg" description="Complete Slurry or Mud removal, Dewatering removal, others." />
        <ServiceCard title="DREDGING" alt='dredging' image="./images/services/dredging.jpg" description="All types of dredging including silting of the jetty area, silting of the path to the jetty, and others." />
        <ServiceCard title="SAND PUMP & RECLAMATION" alt='sand pump' image="./images/services/reclamation.png" description="Pumping sand as construction sand, quartz sand, complete reclamation, others." />
        <ServiceCard title="FABRICATION" alt="fabrication" image="./images/services/fabrication.jpg" description="We can manufacture mine slurry pumps, dewatering pumps, sand pumps, slurry tanks, pontoons and more." />
      </div>

      {/* IF SCREEN WIDTH IS LG */}
      <div className="hidden lg:flex flex-col space-y-14 xl:hidden">
        <div className="flex flex-row space-x-14">
          <ServiceCard title="MINE PUMP" alt="mine pump" image="./images/services/lifting.jpg" description="asdjflkasdjf kajsf jasldkfj asldfj aksdjf lasdj flajsdf kajsdf kljasdkjads lfkjsda" />
          <ServiceCard title="DREDGING" alt="dredging" image="./images/services/dredging.jpg" description="asdjflkasdjf kajsf jasldkfj asldfj aksdjf lasdj flajsdf kajsdf kljasdkjads lfkjsda" />
        </div>

        <div className="flex flex-row space-x-14">
          <ServiceCard title="SAND PUMP & RECLAMATION" alt="sand pump" image="./images/services/reclamation.png" description="asdjflkasdjf kajsf jasldkfj asldfj aksdjf lasdj flajsdf kajsdf kljasdkjads lfkjsda" />
          <ServiceCard title="FABRICATION" alt="fabrication" image="./images/services/fabrication.jpg" description="asdjflkasdjf kajsf jasldkfj asldfj aksdjf lasdj flajsdf kajsdf kljasdkjads lfkjsda asjdf asjdf" />
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
