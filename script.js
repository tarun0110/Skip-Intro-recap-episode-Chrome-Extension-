console.log("Testing Skip");


// content_script.js

// Function to click on the identified element
function clickSkipElement() {
    // Replace 'your-selector' with the actual CSS selector of the element you found
    let skipButton = document.querySelector('.atvwebplayersdk-skipelement-button');
    let nextEpisode = document.querySelector('.atvwebplayersdk-nextupcard-button');
    if (skipButton) {
        skipButton.click();
    }
    if(nextEpisode){
        nextEpisode.click();
    }
}

// Call the function when the page is loaded or when the intro/recap element appears dynamically
document.addEventListener('DOMContentLoaded', function() {
    clickSkipElement();
});

// If the element appears dynamically after the initial page load, you might need to listen for changes in the DOM
// Example using MutationObserver
const observer = new MutationObserver(function(mutationsList) {
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            clickSkipElement();
        }
    }
});

// Observe changes in the DOM
observer.observe(document.body, { childList: true, subtree: true });