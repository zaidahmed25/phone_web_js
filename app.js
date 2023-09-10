const phones = [
    {
        brand: "Samsung",
        img: "./assets/samsung.jpg",
        model: "Z Fold",
        ram: 12,
        rom: 265,
        camera: "12 MP",
    },
    {
        brand: "Xiomi",
        img: "./assets/xiaomi2.jpg",
        model: "Mi 12 Pro",
        ram: 12,
        rom: 256,
        camera: "50 MP",
    },
    {
        brand: "Infinix",
        img: "./assets/infinix.jpg",
        model: "Note 12 Vip",
        ram: 8,
        rom: 256,
        camera: "108 MP",
    },
    {
        brand: "Tecno",
        img: "./assets/tecno.jpg",
        model: "Camon 18",
        ram: 8,
        rom: 256,
        camera: "64 MP",
    },
    {
        brand: "Apple Iphone",
        img: "./assets/iphone2.jpg",
        model: "14 Pro Max",
        ram: 6,
        rom: 512,
        camera: "48 MP",
    },
    {
        brand: "Oppo",
        img: "./assets/oppo.jpg",
        model: "Reno 6 Pro",
        ram: 12,
        rom: 256,
        camera: "64 MP",
    },
    {
        brand: "Vivo",
        img: "./assets/vivo.jpg",
        model: "X80",
        ram: 12,
        rom: 256,
        camera: "50 MP",
    },
];
let main_div = document.querySelector("#div");

for (i = 0; i < phones.length; i++) {
    div.innerHTML += `<div class="container"><h1>${phones[i].brand}</h1> <h3><img class="images" src=${phones[i].img}> </br> Brand: ${phones[i].brand} </br> Model: ${phones[i].model} </br> Ram: ${phones[i].ram} </br> Rom: ${phones[i].rom} </br> Camera: ${phones[i].camera}</h3><button class="btn">ADD CART</button></div>`;
}