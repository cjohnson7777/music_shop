const wrapper = document.querySelector('.sliderWrapper')
const menuItems = document.querySelectorAll('.menuItem')

const products = [
    {
        id: 1,
        title: "Divisive",
        price: 19.99,
        img: './img/Divisive_Cover-FINAL.jpg',

    },
    {
        id: 2,
        title: "Rust in Peace",
        price: 60,
        img: './img/megadeth_rustinpeace_small_dfd5214e-db49-4869-84f8-a1d9adba51d8_700x700-removebg-preview.png',
    },
    {
        id: 3,
        title: "After Life",
        price: 30,
        img: './img/7196s8BdeTL._SX522_-removebg-preview.png',
    }
]

let chosenProduct = products[0]

const currentProductImage = document.querySelector('.productImage')
const currentProductPrice = document.querySelector('.productPrice')
const currentProductTitle = document.querySelector('.productTitle')
const currentProductVersion = document.querySelectorAll('.version')



menuItems.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        wrapper.style.transform = `translateX(${-100 * index}vw)`
        chosenProduct = products[index]
        currentProductTitle.textContent = chosenProduct.title
        currentProductPrice.textContent = '$'+chosenProduct.price
        currentProductImage.src = chosenProduct.img
    })
})

currentProductVersion.forEach((version, index)=>{
    version.addEventListener('click', ()=>{
        currentProductVersion.forEach(version=>{
            version.style.backgroundColor = 'white'
        })
        version.style.backgroundColor = 'gray'
    })
})

const productButton = document.querySelector('.productButton')
const payment = document.querySelector('.payment')
const close = document.querySelector('.close')

productButton.addEventListener('click', ()=>{
    payment.style.display = 'flex'
})

close.addEventListener('click', ()=>{
    payment.style.display = 'none'
})



