import React from "react"
import { Get, Receive, Track, Type } from "../assets/icons"

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
