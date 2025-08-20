import React, { useState, useEffect } from "react";
import { paymentDarkBg, paymentLightBg } from "../../assets/images";
import { Link, useParams } from "react-router";
import { logo, logoText } from "../../assets/icons";
import { Button } from "../../Components/Button/Button";
import { Skeleton } from "../../Components/Skeleton/Skeleton";
import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";
import axios from "axios";

interface PaymentData {
    title?: string;
    amount?: string;
    token?: string;
    payerDetails?: Record<string, any>;
}

const Payment = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [paymentData, setPaymentData] = useState<PaymentData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchPaymentLink = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/payment-link/${id}`);
                console.log(response.data);
                setPaymentData(response.data);
            } catch (error) {
                console.error('Error fetching payment link:', error);
            } finally {
                setIsLoading(false);
            }
        };

        if (id) {
            fetchPaymentLink();
        }
    }, [id]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    const renderDynamicFields = () => {
        if (!paymentData?.payerDetails) return null;

        return Object.keys(paymentData.payerDetails).map((fieldName) => {
            const fieldType = fieldName === 'email' ? 'email' :
                fieldName === 'phone' ? 'tel' :
                    fieldName === 'age' ? 'number' : 'text';

            return (
                <div key={fieldName}>
                    <label className="block font-figtree text-[16px] text-[#0E121B] dark:text-white mb-1">
                        {fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
                    </label>
                    <input
                        type={fieldType}
                        placeholder={`Enter ${fieldName}`}
                        className="placeholder:font-figtree w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white text-[#99A0AE] focus:outline-none focus:shadow-md rounded-[10px]"
                    />
                </div>
            );
        });
    };

    const SunIcon = GoSun as unknown as React.FC;
    const MoonIcon = IoMoonOutline as unknown as React.FC;
    return (
        <div
            style={{
                backgroundImage: `url(${darkMode ? paymentDarkBg : paymentLightBg})`,
            }}
            className="min-h-screen flex flex-col items-center   bg-cover bg-no-repeat bg-top  text-gray-800 px-4">

            <header className="sm:px-20 px-2 flex justify-between py-6 items-center w-full">
                <Link to="/">
                    <div className="flex gap-2">
                        <img src={logo} alt="logo" className="max-s20:w-7" />
                        <img src={logoText} alt="logoText" className="max-s20:w-24" />
                    </div>
                </Link>
                <div className="flex items-center sm:gap-4 gap-2">
                    <Button
                        size="icon"
                        variant="ghost"
                        onClick={toggleDarkMode}
                        className="bg-gray-200 dark:bg-gray-700"
                    >
                        {darkMode ? <SunIcon /> : <MoonIcon />}
                    </Button>
                </div>
            </header>
            <div className="bg-white sm:mt-40 mt-16 dark:bg-[#0e121b] border border-[#E1E4EA] dark:border-[#2B303B] rounded-xl shadow-xl w-full max-w-[450px] p-6">

                {isLoading ? (
                    <>
                        {/* Header skeleton */}
                        <div className="flex justify-between items-center mb-4 pb-7 border-b border-gray-300 dark:border-gray-700">
                            <div className="flex items-center gap-2">
                                <img src={logo} alt="logo" className="max-s20:w-7" />
                                <div>
                                    <Skeleton className="h-6 w-24 mb-2" />
                                    <Skeleton className="h-4 w-40" />
                                </div>
                            </div>
                            <div className="text-right">
                                <Skeleton className="h-6 w-16 mb-2" />
                                <Skeleton className="h-4 w-12" />
                            </div>
                        </div>

                        {/* Form skeleton */}
                        <div className="space-y-4">
                            <div>
                                <Skeleton className="h-4 w-16 mb-1" />
                                <Skeleton className="h-10 w-full" />
                            </div>
                            <div>
                                <Skeleton className="h-4 w-20 mb-1" />
                                <Skeleton className="h-10 w-full" />
                            </div>
                            <div>
                                <Skeleton className="h-4 w-12 mb-1" />
                                <Skeleton className="h-10 w-full" />
                            </div>
                            <Skeleton className="h-12 w-full mt-4" />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex justify-between items-center mb-4 pb-7 border-b border-gray-300 dark:border-gray-700">
                            <div className="flex items-center gap-2">
                                <img src={logo} alt="logo" className="max-s20:w-7" />
                                <div>
                                    <h2 className="text-[24px] text-[#0e121b] dark:text-white font-figtree font-semibold tracking-text">
                                        {paymentData?.title || "Payment"}
                                    </h2>
                                    <p className="text-[16px] text-[#525866] dark:text-[#99A0AE] tracking-text">Fill in this few details to pay {id}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-[24px] font-calsans font-bold text-[#E85e38]">
                                    ${paymentData?.amount || "0.00"}
                                </div>
                                <div className="text-[16px] text-[#525866] dark:text-[#99A0AE]">
                                    {paymentData?.token || "TOKEN"}
                                </div>
                            </div>
                        </div>

                        <form className="space-y-4">
                            {renderDynamicFields()}
                            <button
                                type="submit"
                                className="w-full bg-[#E7562E] hover:bg-[#E0793E] text-white font-semibold py-3 rounded-[10px]"
                            >
                                Proceed to pay
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>

    );
}

export default Payment
