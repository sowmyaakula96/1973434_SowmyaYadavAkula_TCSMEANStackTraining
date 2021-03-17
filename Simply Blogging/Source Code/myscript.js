function addBlog() {
    readFormData();
    resetData();
}

/**
 * Reads the form data
 * @returns 
 */
function readFormData() {
    var obj = {}    // empty object
    obj.title = document.getElementById("title").value;
    obj.description = document.getElementById("desc").value;
    obj.image = document.getElementById("image").value;
    console.log(obj);
    insertNewBlog(obj);

    var objArray = [];
    var existingData = sessionStorage.getItem("blogdata");

    if (existingData) {
        objArray = JSON.parse(existingData);
        objArray.push(obj);
    } else {
        objArray.push(obj);
    }

    sessionStorage.setItem("blogdata", JSON.stringify(objArray))

    return obj;
}

/**
 * Resets the form
 */
function resetData() {
    document.getElementById("title").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("image").value = "";
}

/**
 * Adds single blog 
 * @param {*} data 
 */
function insertNewBlog(data) {
    // Inserts one card
    var blogContainerElement = document.getElementById('blogContainer');
    var blogCard = document.createElement("div");
    blogCard.className = "blogCard card";

    var img = document.createElement('img');
    img.className = "card-img-top";
    img.src = data.image;

    var blogCardBody = document.createElement("div");
    blogCardBody.className = "card-body"

    var blogCardBodyTitle = document.createElement("h5");
    blogCardBodyTitle.className = "card-title"
    blogCardBodyTitle.appendChild(document.createTextNode(data.title));
    blogCardBody.appendChild(blogCardBodyTitle);


    var blogCardBodyDesc = document.createElement("p");
    blogCardBodyDesc.className = "card-text"
    blogCardBodyDesc.appendChild(document.createTextNode(data.description));
    blogCardBody.appendChild(blogCardBodyDesc);

    
    blogCard.appendChild(blogCardBody);
    blogCard.appendChild(img);

    // blogCard.appendChild(document.createTextNode('Sample Blog'));
    blogContainerElement.appendChild(blogCard);
}

/**
 * Adds multiple blogs on first load using the session data
 */
function addBlogCardsOnFirstLoad() {
    var objArray = [];
    var existingData = sessionStorage.getItem("blogdata");

    if (existingData) {
        objArray = JSON.parse(existingData);
        console.log("Ready to add blogs")
        for (var i = 0; i < objArray.length; i++) {
            insertNewBlog(objArray[i])
        }
    } else {
        console.log("Nothing to do")
    }
}

window.onload = () => {
    addBlogCardsOnFirstLoad();
}
