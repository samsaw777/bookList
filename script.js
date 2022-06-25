//importing the items from anothe js file.
import groceryItemsList from "/Items.js";

//Getting the elements using id's
const groceryDiv = document.getElementById("groceryList");

const getId = (name) => {
  console.log(name);
};

//displaying the groceryItems list.
groceryItemsList.map((item) => {
  groceryDiv.innerHTML += `
    <div class="p-10 border border-2 rounded-lg hover:shadow-lg cursor-pointer">
        <img src="${item.url}" alt="product name" class="h-[200px] mx-auto"/>
        <p>${item.name}</p>
        <p>RS. ${item.price}</p>
        <button id="${item.name}">Increase Quantity</button>
        <button class="w-full block mx-auto px-10 bg-red-200">Add To Cart</button>
    </div>
    `;
});

//Increment button.
// <div class="flex justify-between">
// <button class="p-5" onclick="decrementItemsQuantity(itemQuantity)">-</button>
// <p class="flex justify-center items-center">${itemQuantity}</p>
// <button class="p-5" id="${item.name}">+</button>
// </div>

// ${incrementShow()}
