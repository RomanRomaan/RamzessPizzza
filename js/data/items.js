export const items = [
    // --- PIZZA
    { id: 234567, title: "Pepperoni", category: "pizza", price: 15, img: "img/pizza/pepperoni.jpg", time: "16–25" },
    { id: 234568, title: "Margherita", category: "pizza", price: 13, img: "img/pizza/margherita.jpg", time: "16–25", veg: true },
    { id: 234569, title: "Four Cheese", category: "pizza", price: 16, img: "img/pizza/4cheese.jpg", time: "18–28" },
    { id: 234570, title: "BBQ Chicken", category: "pizza", price: 17, img: "img/pizza/bbq.jpg", time: "18–28" },
    { id: 234571, title: "Hawaiian", category: "pizza", price: 14, img: "img/pizza/hawaiian.jpg", time: "16–25" },
    { id: 234572, title: "Veggie", category: "pizza", price: 14, img: "img/pizza/veggie.jpg", time: "16–25", veg: true },
    { id: 234573, title: "Diavola", category: "pizza", price: 16, img: "img/pizza/diavola.jpg", time: "18–28", spicy: true },
    { id: 234574, title: "Mushroom", category: "pizza", price: 14, img: "img/pizza/mushroom.jpg", time: "16–25" },

    // --- BURGER
    { id: 345671, title: "Big Beef", category: "burger", price: 12, img: "img/burger/cheese.jpg", time: "10–18" },
    { id: 345672, title: "Double Beef", category: "burger", price: 15, img: "img/burger/double.jpg", time: "12–20" },
    { id: 345673, title: "Chicken", category: "burger", price: 11, img: "img/burger/chicken.jpg", time: "10–18" },
    { id: 345674, title: "Veggie Burger", category: "burger", price: 10, img: "img/burger/veggie.jpg", time: "10–18", veg: true },

    // --- FRIES / SIDES
    { id: 456781, title: "Classic Fries", category: "fries", price: 4, img: "img/fries/classic.jpg", time: "6–10" },
    { id: 456782, title: "Cheese Fries", category: "fries", price: 5, img: "img/fries/cheese.jpg", time: "6–10" },
    { id: 456783, title: "Wedges", category: "fries", price: 5, img: "img/fries/wedges.jpg", time: "6–10" },
    { id: 456784, title: "Onion Rings", category: "fries", price: 5, img: "img/fries/onion.jpg", time: "6–10" },

    // --- PACKS (комбо)
    {
        id: 567891, title: "Couple Pack", category: "pack",
        price: 24, priceOld: 29, img: "img/packs/couple.jpg", time: "18–28",
        includes: [{ ref: 234568, qty: 1 }, { ref: 456781, qty: 2 }, { name: "Cola 0.5L", qty: 2 }]
    },
    {
        id: 567892, title: "Family Pack", category: "pack",
        price: 39, priceOld: 48, img: "img/packs/family.jpg", time: "22–32",
        includes: [{ ref: 234571, qty: 1 }, { ref: 234569, qty: 1 }, { ref: 456782, qty: 2 }, { name: "Cola 1L", qty: 1 }]
    },
    {
        id: 567893, title: "Burger Pack", category: "pack",
        price: 28, priceOld: 33, img: "img/packs/burger.jpg", time: "16–26",
        includes: [{ ref: 345671, qty: 2 }, { ref: 456781, qty: 2 }, { name: "Sauce Mix", qty: 1 }]
    },
    {
        id: 567894, title: "Party Pack", category: "pack",
        price: 59, priceOld: 72, img: "img/packs/party.jpg", time: "28–38",
        includes: [{ ref: 234567, qty: 2 }, { ref: 234572, qty: 1 }, { ref: 345672, qty: 2 }, { ref: 456783, qty: 2 }, { name: "Cola 1.5L", qty: 2 }]
    }
];
