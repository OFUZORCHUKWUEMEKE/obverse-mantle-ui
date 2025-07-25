import React, { useState } from 'react';
import data from './data';
import { BuiltForImg } from '../../assets/images';

const BuiltFor = () => {
    const [selection, setSelection] = useState<string | null>(null);

    const handleAddSelection = (currentId: string) => {
        setSelection(selection === currentId ? null : currentId);
    };
    const dataElement = data.map((dataItem) => (
        <div
            className='flex flex-col relative w-full max-w-[350px] sm:max-w-[350px] md:max-w-[550px] lg:max-w-[450px] shadow-[-3px_10px_34px_-10px_rgba(0,0,0,0.36)]'
            key={dataItem.id}
        >
            <h3
                className={`${selection === dataItem.id
                        ? 'bg-black text-white text-xl font-bold font-montserrat flex items-center p-[15px_20px]'
                        : 'bg-white shadow-[-8px_10px_5px_-7px_rgba(102,102,102,0.15)] text-black text-xl font-bold font-palanquin flex items-center p-[15px_20px] mb-0'
                    }`}
            >
                {dataItem.question}
            </h3>
            {selection === dataItem.id ? (
                <button
                    onClick={() => handleAddSelection(dataItem.id)}
                    className='text-white text-xs absolute right-[25px] top-[25px]'
                />
            ) : (
                <button
                    onClick={() => handleAddSelection(dataItem.id)}
                    className='text-gray-500 text-xs absolute right-[25px] top-[25px]'
                />
            )}
            {selection === dataItem.id && (
                <p className='flex text-[#666666] items-center p-[10px_30px]'>{dataItem.answer}</p>
            )}
        </div>
    ));

    return (
        <section className="flex justify-center max-container w-full bg-background-main px-6 py-8">
            <div className="flex max-lg:flex-col justify-center items-start gap-10 lg:px-6 px-12 py-10 bg-background-sub rounded-[40px] lg:max-h-[650px]">

                <div className="lg:w-1/2 w-full flex flex-col flex-1 gap-5">
                    <h1 className="text-background-card font-calsans sm:text-[50px] text-[36px] max-sm:text-center leading-text tracking-text">
                        Built for Real-World Use Cases
                    </h1>
                    <div className="flex flex-col w-full flex-1 gap-5">{dataElement}</div>
                </div>

              
                <div className="lg:w-1/2 w-full flex items-start">
                    <img
                        src={BuiltForImg}
                        alt="People on a table"
                        className="object-contain object-center self-start max-h-[550px]"
                    />
                </div>

            </div>
        </section>

    )
}

export default BuiltFor
