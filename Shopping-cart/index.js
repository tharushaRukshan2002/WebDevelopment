var addTocartBtn = document.getElementsByClassName("add-to-cart");
var Globaltable = document.getElementsByClassName("table")[0];
var ShoppingCartArea = document.getElementsByClassName("shoppingCartSection")[0];

var GlobalFinalTotal = 0
var GlobalFinalQuantity = 0

var GlobalFinalTotalColunm = document.getElementById("final-total")
var GlobalFinalQuantityColunm = document.getElementById("final-quantity")

// console.log(addTocartBtn);

//add row to table btn action
for (var i = 0; i < addTocartBtn.length; i++) {
	var btn = addTocartBtn[i];

	btn.addEventListener("click", function (evt) {
		var parent = evt.target.parentElement;
		var itemPrice = parent.getElementsByClassName("price-txt")[0].textContent;
		var itemName = parent.getElementsByClassName("item-name")[0].textContent;
		var imageSrc = parent.parentElement
			.getElementsByClassName("shop-item-img")[0]
			.getAttribute("src");

		updateCart(itemPrice, itemName, imageSrc);
		// console.log(imageSrc);
	});
}



function removeCartItem(event) {
	var buttonClicked = event.target;
	buttonClicked.parentElement.parentElement.parentElement.remove();
	var tableRowCount = Globaltable.rows.length;

	if (tableRowCount == 2) {
		ShoppingCartArea.classList.add("hidden");
        GlobalFinalQuantity= 0
        GlobalFinalTotal= 0
	}
}

function updateCart(itemPrice, itemName, imageSrc) {
	var tableRowCount = Globaltable.rows.length;
    console.log(tableRowCount)
    //with the header and total row the beginning count is 2
	if (tableRowCount == 2) {
        addNewRow(itemPrice, itemName, imageSrc);
		return;
	}

	var cartItemsName = Globaltable.getElementsByClassName("added-item");
	console.log(cartItemsName);
	for (var i = 0; i < cartItemsName.length; i++) {
		var prodName = cartItemsName[i].getElementsByClassName("prod-item-name")[0]?.innerText;

		if (prodName == itemName) {
            //updating quantity
            var currentCount = cartItemsName[i].getElementsByClassName("item-Quan")[0].innerText;
            cartItemsName[i].getElementsByClassName("item-Quan")[0].innerText = ++currentCount;

            //Getting price
            var price = cartItemsName[i].getElementsByClassName("item-Price")[0];
            price = parseFloat(price.innerText.replace('$', ''))

            //calculate and set price
            price = (Math.round((price * currentCount) * 100) / 100).toFixed(2);
            cartItemsName[i].getElementsByClassName("item-Total")[0].innerText ="$" + price

            IncrementFinalPriceAndQuantity(itemPrice)
			return true;
		}      
	}
    addNewRow(itemPrice, itemName, imageSrc);
	return false;
}

function addNewRow(itemPrice, itemName, imageSrc) {
	var tableRow = document.createElement("tbody");
	tableRow.classList.add("added-item");
	ShoppingCartArea.classList.remove("hidden");

    //template of the row this is connected wih the table in html
	var listItemToAdd = `
    <td  scope="row">
        <div class="prod-col">
            <img src="${imageSrc}" alt="shirt image" class="table-img" />

            <p class="mb-auto mt-auto prod-item-name">${itemName}</p>
        </div>
    </td>
    <td><p class="mb-auto mt-auto item-Price">${itemPrice}</p></td>
    <td><p class="mb-auto mt-auto item-Quan">1</p></td>
    <td><p class="mb-auto mt-auto item-Total">${itemPrice}</p></td>
    <td class="table-btn">
    <button type="button" class="btn btn-danger" 
        ><i class="far fa-trash-alt"></i
    ></button>
    </td>`;
    var target = document.getElementById("final-price");
	tableRow.innerHTML = listItemToAdd;
    target.parentNode.insertBefore(tableRow, target)


	tableRow
		.getElementsByClassName("btn-danger")[0]
		.addEventListener("click", removeCartItem);

        IncrementFinalPriceAndQuantity(itemPrice)
        
}
function IncrementFinalPriceAndQuantity(itemPrice){
        GlobalFinalQuantity++
        GlobalFinalQuantityColunm.innerText = GlobalFinalQuantity;

        //getting the current item price
        var newItemPrice = parseFloat(itemPrice.replace('$', ''))
        // console.log("newItemPrice", newItemPrice)

        //getting the current total
        var currentTotal = GlobalFinalTotalColunm.innerText
        currentTotal =  parseFloat(currentTotal.replace('$', ''))

        //if the total is 0. for the very first time setting the total and 
        if(currentTotal == 0){
            var price = (Math.round((newItemPrice) * 100) / 100).toFixed(2);
            GlobalFinalTotalColunm.innerText = "$" + price
            GlobalFinalTotal = newItemPrice
        
        //if the total is greter than 0 comes to this block
        }else{
            GlobalFinalTotal = GlobalFinalTotal + newItemPrice
            var price = (Math.round((GlobalFinalTotal) * 100) / 100).toFixed(2);
            GlobalFinalTotalColunm.innerText = "$" + price
        }

        // console.log(GlobalFinalTotal)
}
