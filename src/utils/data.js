import { advanced, arcade, pro } from "../assets"

export const data = [
    {
        numb: 1,
        title:"YOUR INFO",
        subtitle:"STEP 1",
    },
    {
        numb: 2,
        title:"SELECT PLAN",
        subtitle:"STEP 2",
    },
    {
        numb: 3,
        title:"ADD-ONS",
        subtitle:"STEP 3",
    },
    {
        numb: 4,
        title:"SUMMARY",
        subtitle:"STEP 4",
    },
]

export const plan =[
    {
        ico: arcade,
        title:"Arcade",
        price:9
    },
    {
        ico: advanced,
        title:"Advanced",
        price:12
    },
    {
        ico:pro,
        title:"Pro",
        price:15
    },
]

export const addOns = [
    {
        title:"Online service",
        desc:"Access to multiplayer games",
        selected: true,
        price: 1
    },
    {
        title:"Larger storage",
        desc:"Extra 1TB of cloud save",
        selected: true,
        price: 2
    },
    {
        title:"Customizable Profile",
        desc:"Custom theme on your profile",
        selected: false,
        price: 2
    },
]