var typed = new Typed(".auto-type", {
    strings: [
        "build things for the web.", 
        "create beautiful user interfaces.",
        "develop applications at scale.", 
        "engineer high-performant APIs.",
        "design mobile applications.", 
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

document.addEventListener("visibilitychange", (event) => {
    if (document.visibilityState == "visible") {
        document.title = "Tejas"
    } else {
        document.title = "Tejas is typing..."
    }
});