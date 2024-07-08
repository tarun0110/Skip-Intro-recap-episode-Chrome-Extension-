console.log("Testing Skip");


// content_script.js

// Function to click on the identified element
function clickSkipElement() {
    // Replace 'your-selector' with the actual CSS selector of the element you found
    let skipButton = document.querySelector('.atvwebplayersdk-skipelement-button');
    let nextEpisode = document.querySelector('.atvwebplayersdk-nextupcard-button');
    let netflixSkipButton = document.querySelector('.watch-video--skip-content-button');
    let netflixNextEpisodeButton = document.querySelector('.default-ltr-cache-18ezbm2');
    if (skipButton) {
        skipButton.click();
    }
    if (netflixSkipButton) {
        netflixSkipButton.click();
    }
    if(nextEpisode){
        nextEpisode.click();
    }
    if (netflixNextEpisodeButton) {
        netflixNextEpisodeButton.click();
    }

}
function clickNextShortElement(){
     //youtube skip to next shorts when over
    const progressBar = document.querySelector('.PlayerControlsProgressBarHostProgressBarPlayheadWrapper');
    if (progressBar) {
        const parentWidth = progressBar.parentElement.offsetWidth;

        const marginLeft = window.getComputedStyle(progressBar).marginLeft;
        const marginLeftValue = parseFloat(marginLeft.replace('px', ''));

        if (parentWidth - marginLeftValue < 15) {
            console.log("Skip to the next video");
            let ytShortsNextButton = document.getElementById('navigation-button-down');
            if(ytShortsNextButton){
                console.log("skip to next video");
                ytShortsNextButton.childNodes[1].click();
            }
        }
        
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

setInterval(clickNextShortElement, 1000); 
