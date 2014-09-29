//h1>My Second Blog Post</h1>
   //   <p>This is a blog post about really awesome stuff I've done in JavaScript.</p>
var newArticle = document.createElement("article");
var header = document.createElement("h1");
var headerText = document.createTextNode("My Second Blog Post");
newArticle.appendChild(header);
header.appendChild(headerText);
header.setAttribute('class', 'special');

var paragraph = document.createElement("p");
var paragraphText = document.createTextNode("This is a blog post about really awesome stuff I've done in JavaScript.");
paragraph.appendChild(paragraphText);
newArticle.appendChild(paragraph);


var currentArticle = document.getElementsByTagName("article")[0];
document.body.insertBefore(newArticle, currentArticle);

var currentArticleTitle = document.createElement('h1');
currentArticleTitle.appendChild(document.createTextNode('My First Blog Post'));
currentArticle.insertBefore(currentArticleTitle, currentArticle.childNodes[0]);


var collectionOfH1s = document.getElementsByTagName("h1");
var arr = Array.prototype.slice.call(collectionOfH1s);
arr.forEach(function(h1) {
  h1.addEventListener("click", function( event ) {
    // display the current click count inside the clicked div
    if (event.target.parentNode.getAttribute('class') === "special") {
      event.target.parentNode.setAttribute('class', '');
    }
    else {event.target.parentNode.setAttribute('class', "special")}
  }, false); //if it is not false reset?
});

var collectionOfPs = document.getElementsByTagName("p");
var paragraphs = Array.prototype.slice.call(collectionOfPs);
paragraphs.forEach(function(p) {
  p.addEventListener('click', function(event){
    if (event.target.parentNode.getAttribute('class') === "highlight") {
      event.target.parentNode.setAttribute('class', '');
    }
    else {event.target.parentNode.setAttribute('class', "highlight")}
  }, false);
});


