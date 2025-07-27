//Popup Button
var addpopupbutton = document.getElementById("add-popup-button")
var popup = document.querySelector(".popup")
var popupbox = document.querySelector(".popup-box")

addpopupbutton.addEventListener("click",function(){
    popup.style.display="block"
    popupbox.style.display="block"
})

//Cancel Button
var cancelPopup = document.getElementById("cancel-popup")

cancelPopup.addEventListener("click",function(event){
    event.preventDefault() 
    popup.style.display="none"
    popupbox.style.display="none"
})

//Add Button
var container = document.querySelector(".container")
var booktitle = document.getElementById("book-title")
var bookauthor = document.getElementById("book-author")
var bookrating = document.getElementById("book-rating")
var bookdescription = document.getElementById("book-description")
var addbook = document.getElementById("add-book")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    
    let stars = "";
    for (let i = 0; i < bookrating.value; i++) {
        stars += `<i class="fas fa-star" style="color: #bf69cf;"></i> `;
    }

    if (!booktitle.value.trim() || !bookauthor.value.trim() || !bookdescription.value.trim()) {
        alert("Please fill in all the fields before adding the book.");
        return;
    }

    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML = `<h1>${booktitle.value}</h1>
                     <h3>${bookauthor.value}</h3>
                     <p>${stars}</p>
                     <p>${bookdescription.value}</p>
                     <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popup.style.display="none"
    popupbox.style.display="none"

    booktitle.value = ""
    bookauthor.value = ""
    bookdescription.value = ""
})

//Delete Button
// function deletebook(event){
//     event.target.parentElement.remove()
// }
function deletebook(event){
    const bookCard = event.target.closest('.book-container');
    if (bookCard) {
        bookCard.remove();
    }
}

 
//Search Button
var searchBar = document.getElementById("search-bar");

searchBar.addEventListener("input", function () {
    var searchItem = searchBar.value.toLowerCase();
    var books = document.querySelectorAll(".book-container");

    books.forEach(function (book) {
        var title = book.querySelector("h1").innerText.toLowerCase();
        var author = book.querySelector("h3").innerText.toLowerCase();

        if (title.includes(searchItem) || author.includes(searchItem)) {
            book.style.display = "inline-block";
        } else {
            book.style.display = "none";
        }
    });
});



