const tabList = document.querySelector('[role = "tablist"]');
const tabs = tabList.querySelectorAll('[role= "tab"]');


tabList.addEventListener('Keydown', changeTabFocus);


let tabFocus = 0

tabs.forEach((tabs) =>{
    tabFocus.addEventListener('click', changeTabPanel)

// tabs[tabFocus].setAttribute("tabindex", 0);
// tabs[tabFocus].focuse();

function changeTabFocus(e){
    const KeydownLeft = 37;
    const KeydownRight = 39;
 
 //    change the tab index 
 
 
 if(e.keyCode === KeydownLeft || e.keyCode=== KeydownRight){
     tabs[tabFocus].setAttribute("tabindex", -1)
 }
 // if the right key is pushed moved to the next tab on the the right 
 
 if(e.keyCode=== KeydownRight){
     tabFocus++;
     if(tabFocus >= tabs.length){
         tabFocus = 0;
 
     }
 }
 // if the right key is pushed moved to the next tab on the the left
 if(e.keyCode=== KeydownLeft){
     tabFocus--;
     if(tabFocus < 0)
     {
         tabFocus = tabs.length -1;
     }
  
}
}



 
// function changeTabPanel(e)
// {
//     const targetTab = e.target;
//     const targetPanel = targetTab.getAttribute("aria-controls");

//     const tabConatiner = targetTab.parentNode;
//     const mainContainer = tabConatiner.parentNode;
     


//     mainContainer.querySelector([`#${targetPanel}`]).removeArrtibute('hidden');

//     console.log(targetPanel);
//}








































































































































