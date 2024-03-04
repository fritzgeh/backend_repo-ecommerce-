const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const product = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        color: [
            {
            code: "black",
            img: "./img/air.png",
            },
            {
                code: "dark",
                imge: "./img/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Jordan",
        price: 149,
        color: [
            {
            code: "grey",
            img: "./img/jordan.png",
            },
            {
                code: "green",
                imge: "./img/jordan2.png",
            },
        ],
    },   
    {
        id: 3,
        title: "Blazer",
        price: 109,
        color: [
            {
            code: "blue",
            img: "./img/blazer.png",
            },
            {
                code: "dark",
                imge: "./img/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Hippie",
        price: 100,
        color: [
            {
            code: "blue",
            img: "./img/hippie.png",
            },
            {
                code: "dark",
                imge: "./img/hippie2.png",
            },
        ],
    },
]

let chooseProduct = product[0]

const currentProductImg = document.querySelector(".productImg")
const currentProductPrice = document.querySelector(".productPrice")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductColors = document.querySelector(".color")
const currentProductSize = document.querySelector(".size")

menuItems.array.forEach((item, index) => {
    item.addEventListener("click", () => {
        
        chooseProduct = products[index]
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = "$" + choosenProduct.price
        currentProductImg.scr = choosenProduct.colors[0].img
    
    })
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.scr = choosenProduct.colors[index].img
    })
})

currentProductSize.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductsize.forEach((size) => {
            size.style.backgroundColor = "white"
            size.style.color = "black"
        })
        size.style.backgroundColor = "black"
        size.sytle.color = "white"
    })
})

const ProductButton = document.querySelector(".productButton")
const payment = document.querySelector(".payment")

productButton.addEventListener("click", () => {
    payment.sytle.display = "PAID"
})