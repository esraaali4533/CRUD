var productNameInput = document.getElementById('productName');
var productPriceInput = document.getElementById('productPrice');
var productCatagoryInput = document.getElementById('productCatagory');
var productDescriptionInput = document.getElementById('productDescription');
var productsContainer = [];
var addBtn= document.getElementById('addBtn');
var upDateBtn = document.getElementById('upDateBtn');
if(localStorage.getItem('products') !=null ){
    productsContainer = JSON.parse( localStorage.getItem('products'));
    displayProduct(productsContainer)
}
function addProduct() {
    var product ={
        name:productName.value,
        price:productPrice.value,
        category:productCatagoryInput.value,
        description:productDescriptionInput.value
    }
    productsContainer.push(product);
    localStorage.setItem("products", JSON.stringify(productsContainer));
    displayProduct(productsContainer);
    clearForm();
    // console.log(productsContainer)
    
}
function clearForm(){
    productNameInput.value = "";
    productPriceInput.value = "";
    productCatagoryInput.value = "";
    productDescriptionInput.value = "";
}

function displayProduct(arr){
    var cartona=``;
    for(var i=0;i<arr.length;i++){
        cartona +=`<tr>
        <td>${arr[i].name}</td>
        <td>${arr[i].price}</td>
        <td>${arr[i].category}</td>
        <td>${arr[i].description}</td>
        <td><button onclick="setFormForUpdate(${i})" class="btn btn-outline-warning">Update</button></td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger" >Delete</button></td>
        </tr>
        `
    }
    document.getElementById('tableBady').innerHTML=cartona;
}
function deleteProduct(productIndex){
    productsContainer.splice(productIndex,1);
    localStorage.setItem("products", JSON.stringify(productsContainer));
    displayProduct(productsContainer);
}

function searchProducts(term)
{
    var matchedProduct=[];
    for(var i=0 ; i<productsContainer.length ; i++)
    {
        if(productsContainer[i].name.toLowerCase().includes(term.toLowerCase())===true){
            matchedProduct.push( productsContainer[i] );

        }
    }
    displayProduct(matchedProduct);
}
function setFormForUpdate(i)
{
    addBtn.classList.replace('d-block','d-none');
    upDateBtn.classList.replace('d-none','d-block');
    productNameInput.value = productsContainer[i].name;
    productPriceInput.value = productsContainer[i].price;
    productCatagoryInput.value = productsContainer[i].category;
    productDescriptionInput.value = productsContainer[i].description;
}