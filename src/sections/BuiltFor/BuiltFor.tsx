import React, { useState } from "react";
import data from "./data";
import { BuiltForImg } from "../../assets/images";
import { arrowDown } from "../../assets/icons";

const BuiltFor = () => {
    const [selection, setSelection] = useState<string | null>(null);

    const handleAddSelection = (currentId: string) => {
        setSelection(selection === currentId ? null : currentId);
    };

    const dataElement = data.map((dataItem) => (
        <div
            key={dataItem.id}
            className="flex flex-col relative w-full max-w-[350px] max-md:max-w-[550px] md:max-w-[550px] lg:max-w-[450px] max-lg:justify-center"
        >
            <h3
                className={`${selection === dataItem.id
                        ? "bg-background-card text-brown text-sm font-semibold font-figtree flex items-center p-[24px] rounded-t-[24px]"
                        : "bg-brown text-[#F3aa96] text-sm font-semibold font-figtree flex items-center p-[24px] mb-0 rounded-[24px]"
                    }`}
            >
                {dataItem.question}
            </h3>


            <img
                src={arrowDown}
                alt="Toggle Arrow"
                onClick={() => handleAddSelection(dataItem.id)}
                className={`absolute right-[25px] top-[28px] cursor-pointer transform transition-transform duration-300 ${selection === dataItem.id ? "rotate-180" : "rotate-0"
                    }`}
            />

            {/* Smooth Transition */}
            <div
                className={`bg-background-card rounded-b-[24px] overflow-hidden transition-all duration-500 ease-in-out ${selection === dataItem.id
                        ? "max-h-[160px]"
                        : "max-h-0"
                    }`}
            >
                <p className="text-[#000000] -mt-1 font-figtree text-[14px] p-[5px_25px_15px]">
                    {dataItem.answer}
                </p>
            </div>
        </div>
    ));

    return (
        <section className="flex justify-center max-container w-full bg-background-main padding-x py-8">
            <div className="flex max-lg:flex-col justify-center items-start gap-10 px-6 py-10 bg-background-sub rounded-[40px] lg:max-h-[650px] w-full">

                <div className="lg:w-1/2 w-full flex flex-col flex-1 gap-7 max-lg:justify-center">
                    <h1 className="text-background-card font-calsans sm:text-[50px] text-[36px] max-lg:text-center leading-text tracking-text max-s8:text-left max-s8:whitespace-nowrap">
                        Built for Real-World <br /> Use Cases
                    </h1>

                    <div className="s20:flex hidden flex-col w-full flex-1 gap-5 items-center lg:items-start">{dataElement}</div>

                    <div className="flex s20:hidden flex-col gap-4">
                        <div className="bg-[#9A391F] text-[#F3aa96] p-5 rounded-[6px_24px_24px_24px] w-fit font-figtree">
                            Brick-and-Mortar Merchants
                        </div>
                        <div className="bg-[#FADDD5] text-[#9A391F] p-5 rounded-[24px_6px_24px_24px] w-fit translate-x-24 max-s8:translate-x-20 font-figtree">
                            Freelancers & Creators
                        </div>
                        <div className="bg-[#9A391F] text-[#F3aa96] p-5 rounded-[6px_24px_24px_24px] w-fit font-figtree">
                            SaaS & Digital Businesses
                        </div>
                        <div className="bg-[#9A391F] text-[#F3aa96] p-5 rounded-[6px_24px_24px_24px] w-fit font-figtree">
                            DAOs & GameFi Projects
                        </div>
                    </div>

                </div>


                <div className="lg:w-1/2 w-full flex items-start max-lg:justify-center">
                    <img
                        src={BuiltForImg}
                        alt="People on a table"
                        className="object-contain object-center self-start max-h-[550px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default BuiltFor;
