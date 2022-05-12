
/* 
The clicking feature section
*/

const click = document.getElementsByClassName("click");

const image = document.getElementById("image");

const heading = document.getElementById("heading");
const paragraph = document.getElementById("paragraph");

click[0].onclick = function(){
    image.src = "images/illustration-features-tab-1.svg";
    heading.innerHTML = "Bookmark in one click";
    remove();
    this.classList.add("active");
    paragraph.innerHTML = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
}

click[1].onclick = function(){
    image.src = "images/illustration-features-tab-2.svg";
    heading.innerHTML = "Intelligent search";
    remove();
    this.classList.add("active");
    paragraph.innerHTML = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
}

click[2].onclick = function(){
    image.src = "images/illustration-features-tab-3.svg";
    heading.innerHTML = "Share your bookmarks";
    remove();
    this.classList.add("active");
    paragraph.innerHTML = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
}

// Removes the active class list after clicking another controller
function remove(){
    for (a of click){
        a.classList.remove("active");
    }
}



// / FAQ active button hover

const faqstitle = document.querySelectorAll(".faq_title");

faqstitle.forEach(faq_title => {
    faq_title.addEventListener("click", () => {
        faq_title.classList.toggle("active");
        active.style.color = "#ff4500"
    })
})



/* 
Mobile Navigation, navigation logo 
and hamburger menu toggle 
*/

const menu = document.getElementById("mobileNav");
const button = document.getElementById("mobileMenu");
const logo = document.getElementById("logo");

menu.style.display = "none";

button.onclick = function() {
    if (menu.style.display == "none"){
        menu.style.display = "block";
        button.src = "images/icon-close.svg";
        logo.style.filter = "invert(1) brightness(100%)";
        button.style.filter = "invert(0)";
    }
    else{
        menu.style.display = "none"
        button.src = "images/icon-hamburger.svg";
        logo.style.filter = "invert(0)";
    }
}