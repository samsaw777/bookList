console.log("Hello World");

//Getting the elements using id's
const groceryDiv = document.getElementById("groceryList");

//Some array of objects.
const groceryItemsList = [
  {
    name: "Milk",
    price: 200,
  },
  {
    name: "Milk",
    price: 200,
  },
  {
    name: "Milk",
    price: 200,
  },
];

groceryItemsList.map((item) => {
  groceryDiv.innerHTML += `
    <div class="p-10 border border-2 ">
        <p>${item.name}</p>
        <p>${item.price}</p>
        <button>Add To Cart</button>
    </div>
    `;
});
