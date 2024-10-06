import { Coffee } from "./types";

export const coffees: Coffee[] = [
    {
        id: "e5c7b30b-8b4c-4c9e-b97f-d1b04171e16f",
        name: "Espresso",
        type: "espresso",
        size: "small",
        price: 2.50,
        ingredients: ["coffee beans"],
        isHot: true,
        caffeineContent: 63
    },
    {
        id: "c5b94f2e-18b1-4a34-9053-7765cf8c4b2f",
        name: "Latte",
        type: "latte",
        size: "medium",
        price: 4.00,
        ingredients: ["espresso", "steamed milk", "milk foam"],
        isHot: true,
        caffeineContent: 75
    },
    {
        id: "6e8d05f5-f7ff-4cb7-b5b5-4b2ecabafcf0",
        name: "Cappuccino",
        type: "cappuccino",
        size: "medium",
        price: 4.50,
        ingredients: ["espresso", "steamed milk", "milk foam"],
        isHot: true,
        caffeineContent: 75
    },
    {
        id: "9e5d3b83-c36e-42c4-bae4-dc7fabb0e5e4",
        name: "Americano",
        type: "americano",
        size: "large",
        price: 3.00,
        ingredients: ["espresso", "hot water"],
        isHot: true,
        caffeineContent: 94
    },
    {
        id: "a82f1bcb-2736-4188-bf67-94a6571b8d6a",
        name: "Mocha",
        type: "mocha",
        size: "large",
        price: 4.75,
        ingredients: ["espresso", "steamed milk", "chocolate syrup", "whipped cream"],
        isHot: true,
        caffeineContent: 95
    },
    {
        id: "70bcd87f-bf60-4c0a-8e4e-945e4c2cc1c5",
        name: "Iced Coffee",
        type: "espresso",
        size: "medium",
        price: 3.50,
        ingredients: ["coffee", "ice", "milk"],
        isHot: false,
        caffeineContent: 100
    },
    {
        id: "4b169a62-5b98-4f8e-9e2d-7f4e5d46c6aa",
        name: "Flat White",
        type: "latte",
        size: "medium",
        price: 4.25,
        ingredients: ["espresso", "steamed milk"],
        isHot: true,
        caffeineContent: 75
    },
    {
        id: "c3bcda56-3db8-4f35-bbb9-63d03080c4d1",
        name: "Affogato",
        type: "espresso",
        size: "small",
        price: 5.00,
        ingredients: ["espresso", "vanilla ice cream"],
        isHot: true,
        caffeineContent: 63
    },
    {
        id: "fe74669f-7bc0-4a43-bab2-e5be94d41869",
        name: "Cold Brew",
        type: "espresso",
        size: "large",
        price: 4.00,
        ingredients: ["coffee", "cold water"],
        isHot: false,
        caffeineContent: 200
    },
    {
        id: "d2bb5ab1-0e2d-45cb-b6c5-7cf372ce9b9b",
        name: "Turkish Coffee",
        type: "espresso",
        size: "small",
        price: 3.00,
        ingredients: ["finely ground coffee", "water"],
        isHot: true,
        caffeineContent: 85
    }
];
