/* toggle style switcher */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", ()=> {
    document.querySelector(".style-switcher").classList.toggle("open");
})
//hide style - switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
/* themes colors   */
const alternateStyles = document.querySelectorAll(".alternate-style");
const colors = ["color-1", "color-2", "color-3", "color-4", "color-5"];
let currentColorIndex = 0;

function setActiveStyle(color)
{
    alternateStyles.forEach((style)=>{
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}

// Auto-rotate skin every 5 seconds
function autoRotateSkin()
{
    setActiveStyle(colors[currentColorIndex]);
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}

// Start auto-rotation on page load
window.addEventListener("load", () => {
    setInterval(autoRotateSkin, 5000);
});
/* theme light and dark mode  */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", ()=> {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})