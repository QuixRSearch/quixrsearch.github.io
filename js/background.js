const backgrounds= [
    "url('/images/forest-on-cliff.jpg')",
    "url('/images/smooth-water-with-cool-sky.jpg')",
    "url('/images/snowy-hill.jpg')",
    "url('/images/sydney-opera-house.jpg')",
]

var randomback = Math.floor(Math.random() * backgrounds.length);
document.querySelector("body").style.backgroundImage = backgrounds[randomback];