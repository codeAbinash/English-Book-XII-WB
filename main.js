var searchBox = document.querySelector("section .search");
var searchInput = document.querySelector("section .search input");
var nav = document.querySelector("body section .nav");
var header = document.querySelector("header");

function search(){
    searchBox.style.zIndex="1001";
    searchBox.style.top = "-0.1px";
    setTimeout(() => {
        searchInput.focus();
    },100);
    nav.style.bottom = "0px";
}
function reverseSearch(){
    searchBox.style.top = "-60px";
    setTimeout(() => {searchBox.style.zIndex="";}, 200);
    searchInput.blur();
    nav.style.bottom = "-61px";
}

function clicked(elem){
    elem.style.height="100vh";
    elem.style.width="95vw";
    elem.style.opacity="0";
    header.style.top="-70px"
}

