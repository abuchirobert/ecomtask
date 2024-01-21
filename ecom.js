/* An ecommerce console application 
Features:
Display Products
Add Products to Cart
View Cart
Checkout

Name: Abuchi Robert
Path: Web3
NOTE: This program works only in a web browser console.

*/


//this is the array to hold the products available in the store. 
 const products = [
  { id: 1, name: "T-shirt", price: 15 },
  { id: 2, name: "Coffee Mug", price: 10 },
  { id: 3, name: "Notebook", price: 5 }, 
  { id: 4, name: "Trouser", price: 10},
  { id: 5, name: "Bag", price: 35}, 
  { id: 6, name: "Dumbell", price: 100},
  { id: 7, name: "Basket", price: 20},
  { id: 8, name: "Chair", price: 55}, 
  { id: 9, name: "Pant", price: 25},
  { id: 10, name: "Bulb", price: 15 }
];


//An empty cart is initialised using an empty array which will hold datas that will be pushed to it later.
let cart = [];

;
//this function displays the products that are available, and prints out each of the item stored in the product array
function displayProducts(){
    console.log("Available Products are: ");
    products.forEach(product => {
        console.log(`${product.id}. ${product.name} - $${product.price}`);

    });
}



//this is the add to cart function, it takes the productId as an argument
function addToCart(productId){
    const product = products.find(product => product.id === productId);  //the product.id===productID expression assigns productId to productid from the product array.
    if(product){
        cart.push(product);
        console.log(`${product.name} added to cart`);
    } else {
        console.log(" Product not found");
    }
}


//this function shows the items the user has added to the cart. 
//The IF block checks to know the length of the value of cart variable, if it is empty, it prints your cart is empty and if its not empty, it moves to the ELSE block
function viewCart(){
    console.log("Your Cart: ");
    if (cart.length === 0){
        console.log(" Your cart is empty");
    } else {
        cart.forEach(product => {
            console.log(`${product.name} - $${product.price}`);
        });
        console.log(`Total: $${cart.reduce((total, product) => total + product.price, 0)}`);
    }
    }

function checkout(){
    console.log("Processing.....");
    console.log('Checking out...')
    console.log("Your cart is ready for delivery")
}


console.log("========== Welcome To QuickPay Shop ==========");
const name = prompt("What is your name? ");
console.log(`Hello ${name}, What do you want to buy?`);
displayProducts();



while (true){
   

  const choice = prompt("Enter choice (1: Add to cart, 2: View Cart, 3: Checkout, 4: Exit");

    switch (choice){
        case "1":
            
            const productId = parseInt(prompt("Enter Product ID: "));
            addToCart(productId);
                break;

        case "2":
        viewCart();
        break;

        case "3":
        checkout();
        break;

        case "4":
            console.log("Exiting shop...");
            process.exit();
            break;

            default:
                console.log("Invalid choice");
    }
}
;
