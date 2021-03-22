

function addToCart(product: string, price: number): void {
    // console.log("product", product);
    // console.log("price", price);

    var obj = {
        product: product,
        price: price
    }    // empty object

    // console.log(obj);

    var objArray = [];
    var existingData = sessionStorage.getItem("cartdata");

    if (existingData) {
        objArray = JSON.parse(existingData);
        objArray.push(obj);
    } else {
        objArray.push(obj);
    }

    sessionStorage.setItem("cartdata", JSON.stringify(objArray))

    console.log('objArray', objArray);
    this.setCartSize(objArray.length);
}

function setCartSize(size: number) {
    var cartSizeElement = document.getElementById("cartSize");
    var cartSize = "(" + size + ")";
    cartSizeElement.innerHTML = cartSize;
}


function loadSessionData() {
    var objArray = [];
    var existingData = sessionStorage.getItem("cartdata");

    if (existingData) {
        objArray = JSON.parse(existingData);
        this.setCartSize(objArray.length)
       
    } else {
        console.log("Nothing to do")
    }
}

window.onload = () => {
    this.loadSessionData()
};
