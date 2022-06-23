//importing the items from anothe js file.
import groceryItemsList from "/Items.js";

//Getting the elements using id's
const groceryDiv = document.getElementById("groceryList");

groceryItemsList.map((item) => {
  groceryDiv.innerHTML += `
    <div class="p-10 border border-2 ">
        <p>${item.name}</p>
        <p>${item.price}</p>
        <button>Add To Cart</button>
    </div>
    `;
});
