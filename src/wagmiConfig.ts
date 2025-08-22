import { mantleSepoliaTestnet } from 'viem/chains';
import { http, fallback } from 'wagmi';
import { createConfig } from '@privy-io/wagmi';


export const wagmiConfig = createConfig({
  chains: [mantleSepoliaTestnet],
  transports: {
    [mantleSepoliaTestnet.id]: fallback([
      http('https://rpc.sepolia.mantle.xyz'),
    ]),
  },
});
