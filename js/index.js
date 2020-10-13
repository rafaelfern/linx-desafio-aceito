let page = 1;
let productsArr = [];

// let responseCheckedField = getElementById('responseCheckedField');
// let emailFriendField = document.getElementById('emailFriendField');
let buttonSendNewsletter = document.getElementById('button-send-newsletter');

function Get(urlApi){
  const  Httpreq = new XMLHttpRequest();
  Httpreq.open("GET",urlApi,false);
  Httpreq.send(null);
  return Httpreq.responseText;
}

function loadApiCall(){

  const response = JSON.parse(Get("https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page="+page));
  page = page++;
  let productItem = "";
  responseNextPage = response.nextPage;
  
  response.products.map((product, i) => {
  
    productItem += "<article class='product-article'>";
    productItem += "<figure><img class='product-image' src="+product.image+" width='200' height='150' alt=''></figure>";
    productItem += "<p class='product-name'>"+product.name+" </p>";
    productItem += "<p class='product-descripion'>"+product.description+"</p>";
    productItem += "<p class='product-old-price'>De: R$ "+product.oldPrice+"</p>";
    productItem += "<p class='product-price'>Por: R$ "+product.price+"</p>";
    productItem += "<p class='product-installments'>ou "+product.installments.count+" de R$ "+product.installments.value+ "</p>";
    productItem += "<button class='button-buy-product'><span>Comprar</span></button>";
    productItem += "</article>";

  });
  productsArr.push(productItem);
  print(productItem);
}

function print(products) {
  document.querySelector('.product-articles-content').innerHTML += products;
}

function setNextProductsItems(){
  page++;
  loadApiCall();
}

function sendNewsletter() {

  
  let responseCheckedField = document.getElementById('responseCheckedField');
  let emailFriendField = document.getElementById('emailFriendField');
  let nameFriendField = document.getElementById('nameFriendField');

  verifyEmptyNewsletterFields(nameFriendField, emailFriendField, responseCheckedField);

  var email = emailFriendField.value;
  if(email !== ''){
    if (!verifyValidEmail(email)) {
      responseCheckedField.innerHTML = 'E-mail não é válido!';
    }else {
      responseCheckedField.innerHTML = '' ;
    }
  }
};

function verifyValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function verifyEmptyNewsletterFields(nameFriendField, emailFriendField) {
  
  if(nameFriendField.value == '' || emailFriendField.value == ''){
    responseCheckedField.innerHTML = 'Todos os campos devem ser preenchidos';
  }else{
    responseCheckedField.innerHTML = '';
  }
}