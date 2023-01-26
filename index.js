// javascripts
const navigation = document.querySelector(".primary-navigation")
const navToggle = document.querySelector(".mobile-nav-toggle")

navToggle.addEventListener("click", () => {
    // if the navigation is open, close it 
    const visiblty = navigation.getAttribute("data-visible");
   

    if(visiblty === "false"){
        navigation.setAttribute("data-visible", true)
        navToggle.setAttribute("aria-expanded", true)
    }
    else{
        navigation.setAttribute("data-visible" , false)
        navToggle.setAttribute("aria-expanded", false)
    }

    console.log(navToggle.getAttribute('aria-expanded'))
    // if the navigation is close , open it 
    // console.log(visiblty);
 
})
// when someone click the hambarger butto 
