let btn = document.getElementById("btn");
let number = 0;

btn.addEventListener("click", async function GetProducts() {
  try {
    number++;
    let response = await fetch(`https://fakestoreapi.com/products/${number}`);
    let product = await response.json();
    let p = document.createElement("p");
    p.textContent = product.title;
    document.body.appendChild(p);
  } catch (error) {
    console.error("თასქი არარის შესრულებული");
  }
});

