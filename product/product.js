const products = [
    {
        name: "Samsung Galaxy S25 Ultra",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSPDBiUhUiRpakEWpdAmD4BKPegtsizeyllCX7oISFSA&s=10",
        description: "Experience flagship performance with a stunning AMOLED display, Snapdragon processor, AI camera, and long-lasting battery.",
        price: "₹1,29,999"
    },
    {
        name: "iPhone 16 Pro",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
        description: "Apple's latest iPhone with the A18 Pro chip, ProMotion display, and an advanced triple-camera system.",
        price: "₹1,39,900"
    },
    {
        name: "Google Pixel 9 Pro",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500",
        description: "Capture amazing photos with AI-powered cameras and enjoy the clean Android experience.",
        price: "₹1,09,999"
    },
    {
        name: "OnePlus 13",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500",
        description: "Fast Snapdragon processor, smooth 120Hz AMOLED display, and ultra-fast charging.",
        price: "₹69,999"
    }
]

document.getElementById("buttons").onclick = function () {

    const randomIndex = Math.floor(Math.random() * products.length);

    document.querySelector(".card img").src = products[randomIndex].image;
    document.querySelector(".content h2").textContent = products[randomIndex].name;
    document.querySelector(".description").textContent = products[randomIndex].description;
    document.querySelector(".price").textContent = products[randomIndex].price;
}