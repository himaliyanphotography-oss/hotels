import React from "react";

export default function ServiceList() {
    return (
        <div className="pt-10 lg:pt-20">
            <div className="flex flex-wrap px-5 lg:px-20">
                <div className="w-full lg:w-1/2 px-5 lg:px-36 pb-5 lg:pb-10 lg:border-r-[0.1px] border-b-[0.1px] border-[#303030]">
                    <h1 className="uppercase text-white text-xl lg:text-3xl font-bold pb-2.5 lg:pb-5">Basic Facilities</h1>
                    <ul className="flex flex-col list-disc pl-5">
                        <li className="text-[#969696] text-sm lg:text-lg">Free Wi-Fi</li>
                        <li className="text-[#969696] text-sm lg:text-lg">Power Backup</li>
                         <li className="text-[#969696] text-sm lg:text-lg">Dry Cleaning Service</li>
                          <li className="text-[#969696] text-sm lg:text-lg">Restaurant (Freshly Prepared Meals)</li>
                        <li className="text-[#969696] text-sm lg:text-lg">Free Parking available for 8-10 cars (On first come basis and availability)*</li>
                        <li className="text-[#969696] text-sm lg:text-lg">Paid Public parking available nearby</li>
                    </ul>
                </div>
                <div className="lg:w-1/2 px-5 lg:px-36 pb-5 pt-5 lg:pt-0 lg:pb-10 border-b-[0.1px] border-[#303030]">
                                   <h1 className="uppercase text-white text-xl lg:text-3xl font-bold pb-2.5 lg:pb-5">100% Satisfaction</h1>
                    <h2 className="text-[#969696] text-sm lg:text-lg">Whether this is your first visit, or you have been a guest many times, we want your experience to be excellent. Our staff is always available to help with any questions or concerns you may have. </h2>
                </div>
                <div className="lg:w-1/2 px-5 lg:px-36 py-5 lg:py-10 lg:border-r-[0.1px] border-[#303030]">
                    <h1 className="uppercase text-white text-xl lg:text-3xl font-bold pb-2.5 lg:pb-5">Corporate Outbounds</h1>
                    <h2 className="text-[#969696] text-sm lg:text-lg">Over the years, Kausani has emerged as a coveted destination for corporate outbound training modules. The city’s favourable geography makes it a convenient, and at the same time, unwinding getaway from the city humdrum.  </h2>
                </div>
                <div className="lg:w-1/2 px-5 lg:px-36 py-5 lg:py-10 border-t-[0.1px] lg:border-t-[0px] border-[#303030]">

                </div>
            </div>
        </div>
    )
}