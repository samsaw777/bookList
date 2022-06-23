//importing the items from anothe js file.
import groceryItemsList from "/Items.js";

//Getting the elements using id's
const groceryDiv = document.getElementById("groceryList");

//displaying the groceryItems list.
groceryItemsList.map((item) => {
  console.log(item.url);
  groceryDiv.innerHTML += `
    <div class="p-10 border border-2 rounded-lg hover:shadow-lg cursor-pointer">
        <img src="${item.url}" alt="product name" class="h-[200px] mx-auto"/>
        <p>${item.name}</p>
        <p>RS. ${item.price}</p>
        <div class="flex justify-between">
        <button class="p-5">-</button>
        <p class="flex justify-center items-center">10</p>
        <button class="p-5">+</button>
        </div>
        <button class="w-full block mx-auto px-10 bg-red-200">Add To Cart</button>
    </div>
    `;
});
