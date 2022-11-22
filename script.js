function updateH2(newH2) {
    let h2 = document.querySelector("h2");
    h2.innerHTML = newH2;
}

function getInspired() {
    let name = prompt("What is you name?");
    let artNdesign = prompt("Do you like fantasy movies?");
    if (
        artNdesign === "yes" ||
        artNdesign === "Yes" ||
        artNdesign === "YES" ||
        artNdesign === "yep" ||
        artNdesign === "YEP" ||
        artNdesign === "Yep" ||
        artNdesign === "I do" ||
        artNdesign === "I DO"
    ) {
        watchMe(name);
    } else {
        alert("Well, " + name + ", you might like watching Stranger Things");
    }
}

function watchMe(name) {
    let interest = prompt("Would you like to watch this series?");
    if (
        interest === "yes" ||
        interest === "YES" ||
        interest === "yep" ||
        interest === "Yes" ||
        interest === "Yep" ||
        interest === "definitely" ||
        interest === "maybe"
    ) {
        alert(
            "You're magic, " +
            name +
            "! 😍✨ You can find trailers and Netflix URL on this web-page. Enjoy it, beautiful soul! 🦄"
        );
    } else {
        alert(
            "Okay, " +
            name +
            ". You're always welcome back if you change your mind! You can find trailers and Netflix URL on this web-page. 🙃 "
        );
    }
}
let magicButton = document.querySelector("button");
magicButton.addEventListener("click", getInspired);