// pure Vanilla javaScript method 🧠

// regular function definition
function externalLinks() {
  // first define an array into which we store all links found in the document
  let arrayOfLinks = document.getElementsByTagName("a");
  // let i variable exist
  let i;
  // a simple "for loop" function where we iterate "i" through that array
  for (i = 0; i < arrayOfLinks.length; i++) {
    // define a new variable that represent each single individual link
    // contained in the previously created array
    let link = arrayOfLinks[i];
    // get the url attribute of each links of the array
    link.getAttribute("href") &&
      // AND make sure their locations do not equal the location of the actual page
      link.hostname !== location.hostname &&
      // AND set their target attribute to be opened in a new tab
      (link.target = "_blank") &&
      // to prevent "attack surface", when you use target="_blank",
      // always add rel="noopener" or rel="noreferrer"
      (link.rel = "noopener");
  }
}

// call the function
externalLinks();

/*
Source:
https://html.com/attributes/a-target/
https://developers.google.com/web/tools/lighthouse/audits/noopener  
https://codepen.io/anthonysalamin/pen/QPGbWm?editors=1010
*/
