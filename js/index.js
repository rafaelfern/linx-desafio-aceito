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

    productItem += "<figure><img class='product-image' src="+product.image+" width='200' height='150' alt=''></figure>";
    productItem += "<p class='product-name'>Nome: "+product.name+" </p>";
    productItem += "<p class='product-description'>"+product.description+"</p>";
    productItem += "<p class=''>De: R$ "+product.oldPrice+"</p>";
    productItem += "<p class=''>Por: R$ "+product.price+"</p>";
    productItem += "<p class=''>ou "+product.installments.count+" de R$ "+product.installments.value+ "</p>";
  });
    
  print(productItem);

}

function print(message) {
  document.querySelector('.product-article').innerHTML = message;
}
