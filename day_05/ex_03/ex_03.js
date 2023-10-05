window.onload = function() {
  let paragraphs = document.getElementsByTagName('p');
  let newParagraph = document.createElement('p');
  newParagraph.innerHTML = "Now featuring a headphone jack!";

  paragraphs[paragraphs.length-1].appendChild(newParagraph);
}
