const h1Element = document.querySelector("h1");
const Allh2Elements = document.querySelectorAll("h2")
const h6_all_elements = document.getElementsByClassName("container > h6")
const heroImage = document.getElementById("hero-img")
const allPElements = document.getElementsByTagName("p")
const h1OnLoadValue = h1Element.textContent;
const mainTag = document.querySelector("main")
const buttonBlackYellowTheme = document.querySelector("button")
/* welcome message */
// heroImage.addEventListener("mouseover",function(){
//     h1Element.innerHTML = "Welcome to My Page!"
// });
// heroImage.addEventListener("mouseout",()=>{h1Element.textContent=h1OnLoadValue})

/* changes the color of the H1 on click, resets it when the mouse moves away. */



buttonBlackYellowTheme.addEventListener("click",()=>{
    // const doc = document.getElementsByTagName("body")
    // doc.style.backgroundColor
    if(buttonBlackYellowTheme.textContent === "🌕"){
        document.body.style.backgroundColor = "black"
        mainTag.style.backgroundColor = "#474747"
        mainTag.style.color = "white"
        buttonBlackYellowTheme.textContent = "🌑"
        h1Element.style.color = "#AD343E"
        heroImage.style.border = "2px solid #AD343E"
        document.querySelector("p>span").style.color = "#AD343E"
        h1Element.addEventListener("click",()=>{h1Element.style.color = "#F2AF29"})
        h1Element.addEventListener("mouseout",()=>{h1Element.style.color = "#AD343E"})
        buttonBlackYellowTheme.style.backgroundColor = "#474747"
        buttonBlackYellowTheme.style.padding = "0"
        buttonBlackYellowTheme.style.height = "0"
        buttonBlackYellowTheme.style.width = "0"
        buttonBlackYellowTheme.style.fontSize = "3rem"
        buttonBlackYellowTheme.style.textAlign = "3rem"

    }else{
        document.body.style.backgroundColor = "474747"
        mainTag.style.backgroundColor = "#E0E0CE"
        mainTag.style.color = "#474747"
        buttonBlackYellowTheme.textContent = "🌕"
        heroImage.style.border = "2px solid #F2AF29"
        heroImage.addEventListener("mouseover",function(){h1Element.innerHTML = "Welcome to My Page!"});
        buttonBlackYellowTheme.style.backgroundColor = "#E0E0CE"
        buttonBlackYellowTheme.style.padding = "20px"
        heroImage.addEventListener("mouseout",()=>{h1Element.textContent=h1OnLoadValue})
        h1Element.addEventListener("click",()=>{h1Element.style.color = "#AD343E"})
        h1Element.addEventListener("mouseout",()=>{h1Element.style.color = "#F2AF29"})

        buttonBlackYellowTheme.style.padding = "0"
        buttonBlackYellowTheme.style.height = "0"
        buttonBlackYellowTheme.style.width = "0"
        buttonBlackYellowTheme.style.fontSize = "3rem"
        buttonBlackYellowTheme.style.textAlign = "3rem"
    }

})
