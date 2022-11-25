import Pacote from "./Pacote";


export default function PacoteList() {

    /*const pacotes = [
        {
            id: 1,
            title: 'Beginner',
            names: ['Yellow Spot, Online Listing, Print Directory [Bold] - name, Line of Info, Physical Address Y.P and W.P']
        },
        {
            id: 2,
            title: 'Pro',
            names: ['Website, Smart Site, 1-10 Website Pages, Engager - Contact Form, Blog, Booking, Services, ...']
        },
        {
            id: 3,
            title: 'Full E-commerce',
            names: ['Website, 1-30 Website Pages, Engager - Contact Form, Blog, Booking, Services, 1-7 Corporate Email, ...']
        }
    ];*/


    return(
        <section className="md:mt-20 mt-14 mx-auto">
             <h3 className="text-3xl font-bold text-center pb-10">Our packages </h3>
             <div className="flex flex-wrap md:flex-nowrap md:flex-row mx-auto justify-center gap-16 md:w-3/4">
                
                <div className="md:w-[14rem] bg-[#1E1E1E] text-[#FFFFFF] w-3/4 border cursor-pointer hover:shadow-3xl duration-500 ease-out px-3 py-4 rounded-md text-center">
                    <p className="text-lg font-bold text-[#FBED04]">Beginner</p>
                    <div className="">
                        <p className="block text-sm mt-4">Yellow Spot</p>
                        <p className="block text-sm mt-2">Online Listing</p>
                        <p className="block text-sm mt-2">Print Directory [Bold] - name, Line of Info, Physical Address Yellow Pages and White Pages</p>
                        <button className="bg-[#FBED04] mt-28 px-8 py-1 rounded font-bold text-sm text-[#1E1E1E]"><a href="#sectionInfo">Know more</a></button>
                    </div>
                </div>
                <div className="md:w-[14rem] bg-[#1E1E1E] text-[#FFFFFF] w-3/4 border cursor-pointer hover:shadow-3xl duration-500 ease-out px-3 py-4 rounded-md text-center">
                    <p className="text-lg font-bold text-[#FBED04]">Pro</p>
                    <div className="">
                        <p className="block text-sm mt-4">Website</p>
                        <p className="block text-sm mt-2">Smart Site</p>
                        <p className="block text-sm mt-2">1-10 Website Pages</p>
                        <p className="block text-sm mt-2">Engager - Contact Form</p>
                        <p className="block text-sm mt-2">Blog</p>
                        <p className="block text-sm mt-2">Booking</p>
                        <p className="block text-sm mt-2">Services</p>
                        <p className="block text-sm mt-2">...</p>
                    </div>
                    <button className="bg-[#FBED04] mt-4 px-8 py-1 rounded font-bold text-sm text-[#1E1E1E]"><a href="#sectionInfo">Know more</a></button>
                </div>
                <div className="md:w-[14rem] bg-[#1E1E1E] text-[#FFFFFF] w-3/4 border cursor-pointer hover:shadow-3xl duration-500 ease-out px-3 py-4 rounded-md text-center">
                    <p className="text-lg font-bold text-[#FBED04]">Full E-commerce</p>
                    <div>
                        <p className="block text-sm mt-4">Website</p>
                        <p className="block text-sm mt-2">1-30 Website Pages</p>
                        <p className="block text-sm mt-2">Engager - Contact Form</p>
                        <p className="block text-sm mt-2">Blog</p>
                        <p className="block text-sm mt-2">Booking</p>
                        <p className="block text-sm mt-2">Services</p>
                        <p className="block text-sm mt-2">1-7 Corporate Email</p>
                        <p className="block text-sm mt-2">...</p>
                    </div>
                    <button className="bg-[#FBED04] mt-4 px-8 py-1 rounded font-bold text-sm text-[#1E1E1E]"><a href="#sectionInfo">Know more</a></button>
                </div>
            </div>
        </section>
    );
}