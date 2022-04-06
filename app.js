const quoteText = document.querySelector(".quote-text");
const generateButton = document.querySelector("button");
const authorName = document.querySelector(".author .author-name");
const soundButton = document.querySelector(".sound");
const copyButton = document.querySelector(".copy");

function randomQuote() {
    generateButton.classList.add("loading");
    generateButton.innerText = "Loading Quote...";
    fetch('https://api.quotable.io/random').then(response => response.json()).then(data => {
        console.log(data);
        quoteText.innerText = data.content;
        authorName.innerText = data.author;
        generateButton.innerText = "New Quote";
        generateButton.classList.remove("loading");
  });
}

soundButton.addEventListener("click", ()=> {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    utterance.pitch = 1;

    speechSynthesis.speak(utterance);
});

copyButton.addEventListener("click", ()=> {
    navigator.clipboard.writeText(quoteText.innerText);
});

generateButton.addEventListener("click", randomQuote);