import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type SSdProps = {
    label: string;
    icon: string;
    text: string;
    deg: number;
    className?: string;
    id: number
};

const SSDCard = ({ label, text, icon, deg, className, id }: SSdProps) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 640px)");
        const checkScreen = () => setIsMobile(mediaQuery.matches);

        checkScreen();
        mediaQuery.addEventListener("change", checkScreen);
        return () => mediaQuery.removeEventListener("change", checkScreen);
    }, []);

    const baseClasses = `flex flex-col gap-6 bg-background-card sm:p-5 px-7 py-12 rounded-[24px] shadow-md min-w-[280px] flex-shrink-0 ${className ?? ""}`;
    const rotation = !isMobile ? { transform: `rotate(${deg}deg)` } : {};

    if (isMobile) {
        // NO ANIMATION on small screens
        return (
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: id * 0.3 }}
                viewport={{ once: true }}
                className={baseClasses} style={rotation}>
                <img src={icon} alt={label} className="object-center object-contain w-[56px] h-[56px] rounded-[9.5px]" />
                <h3 className="text-[24px] font-figtree font-semibold leading-text tracking-text text-pale-brown">{label}</h3>
                <p className="sm:text-[16px] text-[13px] md:max-w-lg font-figtree text-slate-gray">{text}</p>
            </motion.div>
        );
    }

    // Animated for larger screens
    return (
        <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className={baseClasses}
            style={rotation}
        >
            <img src={icon} alt={label} className="object-center object-contain w-[56px] h-[56px] rounded-[9.5px]" />
            <h3 className="text-[24px] font-figtree font-semibold leading-text tracking-text text-pale-brown">{label}</h3>
            <p className="sm:text-[16px] text-[13px] md:max-w-lg font-figtree text-slate-gray">{text}</p>
        </motion.div>
    );
};

export default SSDCard;
