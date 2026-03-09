async function fetchProductData() {
  try {
    const response = await fetch("data/products.json");

    // Check for HTTP errors
    if (!response.ok) {
      console.log(`Error: ${response.status}`);
      return;
    }

    const data = await response.json();

    console.log(data); // see in console
    displayProducts(data);

  } catch (error) {
    console.error("Fetch error:", error);
  }
}

fetchProductData();


// Function to display products
function displayProducts(productsArray) {
  const container = document.getElementById("products-container");
  let htmlOutput = "";

  productsArray.forEach(product => {
    htmlOutput += `
      <p>
        <b>${product.name}</b><br>
        Price: $${product.price}<br>
        Available: ${product.inStock ? "In Stock" : "Out of Stock"}
      </p>
    `;
  });

  container.innerHTML = htmlOutput;
}