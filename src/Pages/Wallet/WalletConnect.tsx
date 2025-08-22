"use client";

import { useState } from "react";
import { useLogin, usePrivy } from "@privy-io/react-auth";
import { Button } from "../../Components/Button/Button";
import { UserPill } from "@privy-io/react-auth/ui";
import { RiWallet2Line } from "react-icons/ri";

function WalletConnect() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { user, ready, authenticated } = usePrivy();

  const { login } = useLogin({
    onComplete: () => setIsLoading(false),
    onError: () => setIsLoading(false),
  });

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      await login();
    } catch (error) {
      console.error("Login error:", error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      {authenticated && user && user.wallet?.address ? (
        <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-3">
          <UserPill
            expanded={true}
            ui={{
              minimal: false,
              background: undefined,
            }}
            label={
              <span className="w-full h-full flex items-center gap-3 text-left transition-colors duration-150 text-white">
                <RiWallet2Line className="h-5 w-5 text-white" />
                <span className="text-sm font-medium">
                  {user.wallet?.address?.slice(0, 6)}...
                  {user.wallet?.address?.slice(-4)}
                </span>
              </span>
            }
          />
        </div>
      ) : (
        <>
          <div className="flex flex-row items-center space-x-3">
            {ready ? (
              <button
                disabled={isLoading}
                onClick={handleLogin}
                className={`w-full lg:w-fit rounded-xl px-2 sm:px-4 py-2 bg-white text-xs sm:text-base text-[#E85e38] border border-[#E85e38] hover:bg-[#E85e38] hover:text-white ${isLoading ? "cursor-not-allowed opacity-50" : ""
                  }`}
              >
                {isLoading ? "Connecting..." : "Connect Wallet"}
              </button>
            ) : (
              <Button
                disabled={true}
                size="normal"
                variant="default"
                className="w-full lg:w-fit rounded-xl px-4 py-2 bg-white text-[#E85e38] border border-[#E85e38] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Loading...
              </Button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
export default WalletConnect;
