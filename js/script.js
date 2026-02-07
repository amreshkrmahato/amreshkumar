/* typing animation */
var typed = new Typed(".typing",{
    strings:["","Developer", "Blogger","Designer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})
/* Aside bar */
const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length,
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length;
for(let i=0; i<totalNavList; i++)
{
    const a= navList[i].querySelector("a");
    a.addEventListener("click", function()
    {
        removeBackSection();
        for(let j=0; j<totalNavList; j++)
        {
            if(navList[j].querySelector("a").classList.contains("active"))
            {
                addBackSection(j);
                //allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active")
        }
        this.classList.add("active")
        showSection(this);
        if(window.innerWidth < 1200)
        {
            asideSectionTogglerBtn();
        }
    })
}
function removeBackSection()
{
    for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("back-section");
        }
}
function addBackSection(num)
{
    allSection[num].classList.add("back-section");
}
function showSection(element)
{
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}
function updateNav(element)
{
    for(let i=0; i<totalNavList; i++)
    {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navList[i].querySelector("a").classList.add("active"); 
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function()
{
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex)
})
const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");
      navTogglerBtn.addEventListener("click", () =>
      {
        asideSectionTogglerBtn();
      })
      function asideSectionTogglerBtn()
      {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.toggle('open');
        }
      }

/* Contact Form - EmailJS Integration */
const contactForm = document.getElementById("contactForm");
const sendBtn = document.getElementById("sendBtn");

if(contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        // Change button text to indicate sending
        const originalText = sendBtn.textContent;
        sendBtn.textContent = "Sending...";
        sendBtn.disabled = true;
        
        // Get form values
        const from_name = document.getElementById("from_name").value;
        const email_id = document.getElementById("email_id").value;
        const phone = document.getElementById("phone").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;
        
        // Send email using EmailJS
        emailjs.send("service_ozt7vwg", "template_6t68z5p", {
            from_name: from_name,
            email_id: email_id,
            phone: phone,
            subject: subject,
            message: message,
            to_email: "amreshkrmahato1123@gmail.com"
        }).then(function(response) {
            // Success
            alert("Message sent successfully! I'll get back to you soon.");
            contactForm.reset();
            sendBtn.textContent = originalText;
            sendBtn.disabled = false;
        }, function(error) {
            // Error
            alert("Failed to send message. Please try again later.");
            console.log("EmailJS Error:", error);
            sendBtn.textContent = originalText;
            sendBtn.disabled = false;
        });
    });
}
