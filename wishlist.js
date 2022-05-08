var wishlistArr=JSON.parse(localStorage.getItem("Wishlist_Data"));

var CartArr=JSON.parse(localStorage.getItem("Cart_Data")) || [];   

var Products=document.querySelector("#container");
display(wishlistArr);


function display(wishlistArr) {

                        
    document.querySelector("#container").innerHTML = ""

    wishlistArr.forEach(function (elem,i) {
        var card = document.createElement("div");

        var image = document.createElement("img");
        image.src = elem.image_url;

        var h4 = document.createElement("h4");
        h4.innerText = elem.name;

        var p = document.createElement("p");
        p.innerText = "₹"+" "+elem.price;

        var sub = document.createElement("div")
        sub.setAttribute("id","sub")

        var Remove = document.createElement("button")
        Remove.innerText = "Remove"
        Remove.addEventListener("click", function () {
            removeFn(elem,i)
        })
        var button = document.createElement("button");
        button.innerText = "Add to Cart";
        button.addEventListener("click", function () {
            cartFunc(elem);
        })
        sub.append(Remove, button)
        card.append(image, h4, p, sub)
        
        Products.append(card)

    })
}

function cartFunc(elem) {

    var bag = CartArr.filter(function (data) {
        return data == elem;
    })

    console.log(bag.length)
    if (bag.length == 0) {
        CartArr.push(elem)
        var cart = localStorage.setItem("Cart_Data", JSON.stringify(CartArr));
        alert("Product Added Successfully");
        
    }

    else {
        alert("Product already in Cart");
        
    }

}

function removeFn(elem,i)
{
    wishlistArr.splice(i,1);
    console.log(wishlistArr);
    localStorage.setItem("Wishlist_Data",JSON.stringify(wishlistArr));
    window.location.reload()
}
