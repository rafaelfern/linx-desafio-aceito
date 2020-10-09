function Get(urlApi){
  const  Httpreq = new XMLHttpRequest();
  Httpreq.open("GET",urlApi,false);
  Httpreq.send(null);
  return Httpreq.responseText;
}

function loadApiCall(){
  const response = JSON.parse(Get("https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1"));
  
  let productItem = "";
  // let productsToShow;
  
  response.products.map((product, i) => {
    
    // productsToShow = response.products[i];
    
    productItem += "<article class='product-article'>"
    productItem += "<figure><img class='product-image' src="+product.image+" width='200' height='150' alt=''></figure>";
    productItem += "<p class='product-name'>"+product.name+" </p>";
    productItem += "<p class='product-descripion'>"+product.description+"</p>";
    productItem += "<p class='product-old-price'>De: R$ "+product.oldPrice+"</p>";
    productItem += "<p class='product-price'>Por: R$ "+product.price+"</p>";
    productItem += "<p class='product-installments'>ou "+product.installments.count+" de R$ "+product.installments.value+ "</p>";
    productItem += "<button class='button-buy-product'><span>Comprar</span></button>";
    productItem += "</article>";
  });
    
  print(productItem);

}

function print(message) {
  document.querySelector('.product-articles-content').innerHTML = message;
}
