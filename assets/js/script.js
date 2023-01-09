function showMenu(){
    
    let menuNameList = document.querySelectorAll("body > main > aside > nav > h2");
    let menuList = document.querySelectorAll("body > main > aside > nav > ul");
    
    for(let i=0; i>menuNameList.length; i++){
        
        menuNameList[0].addEventListener("click", function(){
            
            menuList[0].classList.toggle("d-none");
        })
    }
}

window.addEventListener("DOMContentLoaded", function(){
    
    showMenu();
})