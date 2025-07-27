import React from 'react'

type SSdProps = {
    label: string
    icon: string
    text: string
    deg: number
    className?: string
}

const SSDCard = ({ label, text, icon, deg, className }: SSdProps) => {
    return (
        <div
            className={`flex flex-col gap-6 bg-background-card sm:p-5 px-7 py-12 rounded-[24px] shadow-md min-w-[280px] flex-shrink-0 ${className ?? ""}`}
            style={{ transform: window.innerWidth >= 420 ? `rotate(${deg}deg)` : "none" }}
        >
            <img src={icon} alt={label} className="object-center object-contain w-[56px] h-[56px] rounded-[9.5px]" />
            <h3 className="text-[24px] font-figtree font-semibold leading-text tracking-text text-pale-brown">{label}</h3>
            <p className="sm:text-[16px] text-[13px] md:max-w-lg font-figtree text-slate-gray">{text}</p>
        </div>
    )
}


export default SSDCard
