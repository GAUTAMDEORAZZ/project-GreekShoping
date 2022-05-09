
    var count= localStorage.getItem("counterValue") || 0;
    if (localStorage.getItem("counterValue")==null){
        count=0
    }else{
       count= localStorage.getItem("counterValue")
    }
    document.querySelector("h1").innerText =count;
    document.querySelector("#Inc").addEventListener("click",incfun);

    function incfun(){
        count++
        document.querySelector("h1").innerText=count;
        localStorage.setItem("counterValue", count);
    }

    document.querySelector("#Dec").addEventListener("click",decfun);

function decfun(){
    count--
    document.querySelector("h1").innerText=count;
    localStorage.setItem("counterValue", count);
}

document.querySelector("#button2>#add").addEventListener("click",cardFun)


function cardFun(){
    alert("Product added successfully")
}