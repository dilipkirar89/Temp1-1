import logo from "./as-logo.jpg"
import profile from "./profile.jfif"
import cart from "./cart.jfif"
import search from "./search.jfif"
import menu from "./menu.jfif"
import drop_left from "./dropleft.jfif"
import super_mart from "./supermart.png"
import babySoap from "./baby-soap.webp"
import cranberry from "./cranberry-chocolate.webp"
import basmatiRice from "./daawat-basmati-rice.jpg"
import ghee from "./desi-ghee.webp"
import kanan from "./kanan-tea.webp"
import pampersDiaper from "./pampersDiaper.webp"
import patanjaliOil from "./patanjaliOil.webp"
import safewash from "./safewash-liquid.webp"
import exchange from "./exchangeicon.jfif"
import Return from "./return.jfif"
import Customer from "./customer.jfif"
import dropdown from "./dropdownicon.jfif"
import { BiCategory } from "react-icons/bi"
import cross from "./crossicon.jfif"
import pampers1 from "./pampers1.jfif"
import pampers2 from "./pampers2.jfif"
import pampers3 from "./pampers3.jfif"
import pampers4 from "./pampers4.jfif"
import dullStar from "./dullStar.jfif"
import starIcone from "./starIcone.jfif"
import about from "./about.jpg";
import contact from "./contact.webp";
import remove from "./remove.jfif"
  export const assets={
    logo,
    profile,
    cart,
    search,
    menu,
    drop_left,
    super_mart,
    exchange,
    Return,
    Customer,
    dropdown,
    cross,
    dullStar,
    starIcone,
    about,
    contact,
    remove,

}

export const products = [
  {
    _id: "aaaaa",
    name: "babySoap",
    description: "Bodyguard Baby Wet Wipes - (1 Packs, 72 Wipes per Pack), 72 Pulls",
    price: 80,
    image: [babySoap], // Use assets object for images
    category:"Baby",
    subCategory:"BabyCare "
  },
  {
    _id: "aaaab",
    name: "cranberry",
    description: "Cadbury Bournville Cranberry Dark Chocolate Bar, 3 x 80 g Multipack",
    price: 180,
    image: [cranberry],
     category:"Kids",
    subCategory:"Food "
  },
  {
    _id: "aaaac",
    name: "basmatiRice",
    description: "Daawat Basmati Rice/Basmati Akki - Traditional, 1 kg Pouch",
    price: 1800,
    image: [basmatiRice],
     category:"Men",
    subCategory:"Food "
  },
  {
    _id: "aaaad",
    name: "ghee",
    description: "Amul Ghee/Tuppa, 2 L",
    price: 1600,
    image: [ghee],
     category:"Women",
    subCategory:"Food "
  },
  {
    _id: "aaaae",
    name: "kanan",
    description: "Tata Tea Kanan Devan Tea, 500 g",
    price: 180,
    image: [kanan],
     category:"Women",
    subCategory:"Food "
  },
  {
    _id: "aaaaf",
    name: "pampers",
    description: "Pampers Diaper Pants - Medium, All Round Protection, Anti-rash Blanket, New & Improved, 11 pcs",
    price: 190,
    image: [pampersDiaper,pampers1,pampers2,pampers3,pampers4],
     category:"Baby",
    subCategory:"BabyCare ",
  },
  {
    _id: "aaaag",
    name: "patanjali",
    description: "Patanjali Virgin Groundnut Oil, 5 L Jar",
    price: 1500,
    image: [patanjaliOil],
     category:"Women",
    subCategory:"Food "
  },
  {
    _id: "aaaah",
    name: "safe",
    description: "Wipro Safewash Liquid Detergent - Front Load, 2x1 kg ",
    price: 180,
    image: [safewash],
     category:"Women",
    subCategory:"Beauty&care "
  },
];


export default assets
// export {logo,profile,cart,search,menu,drop_left,super_mart, exchange,Return,Customer,dropdown}
export {logo, profile, cart, search, menu, drop_left, super_mart, babySoap, cranberry, basmatiRice, ghee, kanan, pampersDiaper, patanjaliOil, safewash,exchange,Return,Customer,dropdown,cross,dullStar,starIcone,about,contact };