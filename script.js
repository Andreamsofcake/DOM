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

document.getElementById("test").addEventListener("click", function( event ) {
    // display the current click count inside the clicked div
    event.target.innerHTML = "This is a blog post about really awesome stuff I've done in JavaScript.";
  }, false
  //if it is not false reset?
  );