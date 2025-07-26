import React from "react"
import { Get, Receive, Track, Type } from "../assets/icons"
import { BuyandSell, faceCoin, Ligthening, QRCode, Stack } from "../assets/images"

export interface NavLink {
  label: string
  link: string
}

export interface SSDItems {
   label: string
  icon: string
  text: string
  deg: number

}

export interface WhatMakes1 {
   label: string
  icon: string
  text: string
}


export const navLinks: NavLink[] = [
  { label: "Home", link: "" },
  { label: "Why us", link: "about" },
  { label: "Features", link: "features" },

]

export const SSD: SSDItems[] = [
    { label: "Type", icon: Type, text: "Open your Telegram and send a simple command to Obverse, like: generate $50 USDC payment link", deg: 3 },
    { label: "Get", icon: Get, text: "Within seconds, you’ll receive a payment link and a QR code generated specifically for that request.", deg: 2 },
    { label: "Receive", icon: Receive, text: "Once your customer completes the payment, the funds are delivered directly to your non-custodial wallet, like Phantom on Solana.", deg: -2 },
    { label: "Track", icon: Track, text: "Once your customer completes the payment, the funds are delivered directly to your non-custodial wallet, like Phantom on Solana.", deg: -3 },
]

export const WhatMakes1: WhatMakes1[] = [
    { label: "Buy & Sell Instantly", text: "Trade assets with ease. Whether it’s tokens, , or digital goods, buying and selling is seamless and lightning-fast.", icon: BuyandSell },
    { label: "Scan & Go with QR Code", text: "Send and receive funds or access features instantly with smart QR code integration—no long addresses, just tap and go.", icon: QRCode },
]
export const WhatMakes2: WhatMakes1[] = [
    { label: "Crowd Fund with Your Community", text: "Launch, manage, or support crowdfunding campaigns with full transparency and smart contract protection.", icon: faceCoin },
    { label: "Track Everything in Real-Time", text: "Keep an eye on your portfolio, transactions, and campaigns with live updates and clean dashboards.", icon: Ligthening },
    { label: "Seamless Integration", text: "Plug-and-play for websites, SaaS platforms, or social storefronts", icon: Stack },
]

export const PaymentApp: WhatMakes1[] = [
    { label: "", text: "", icon: ""},
    { label: "", text: "", icon: ""}
]
