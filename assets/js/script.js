function showMenu(){
    
    let menuNameList = document.querySelectorAll("body > main > aside > nav > h2");
    let menuList = document.querySelectorAll("body > main > aside > nav > ul");
    
    for(let i=0; i<menuNameList.length; i++){
        
        menuNameList[i].addEventListener("click", function(){
            
            menuList[i].classList.toggle("d-none");
        })
    }
}

function showAside(){
    
    let showAsideBtn = document.getElementById("show-aside-btn");
    let menuListAside = document.getElementById("menu-list-aside");
    let headerLogoSection = document.getElementById("header-logo-section");
    
    showAsideBtn.addEventListener("click", function(){
        
        menuListAside.classList.toggle("d-none");
        headerLogoSection.classList.toggle("open");
    })
}

function displayUsers(users){
    
    let tableBody = document.querySelector("body > main > section > section:last-of-type > table > tbody");
    
    for(let i=0; i<users.length; i++){
        
        let tr = document.createElement("tr");
        
        let tdId = document.createElement("td");
        let id = document.createTextNode(users[i].id);
        tdId.appendChild(id);
        
        let tdName = document.createElement("td");
        let name = document.createTextNode(users[i].name);
        tdName.appendChild(name);
        
        let tdAge = document.createElement("td");
        let age = document.createTextNode(users[i].age);
        tdAge.appendChild(age);
        
        let tdStatus = document.createElement("td");
        let statusSpan = document.createElement("span");
        
        if(users[i].isActive === true){
            
            statusSpan.classList.add("bi-person-fill-up");
            statusSpan.setAttribute("aria-labelledby", "Actif");
            
        }else{
            
            statusSpan.classList.add("bi-person-fill-down");
            statusSpan.setAttribute("aria-labelledby", "Inactif");
        }
        
        tdStatus.appendChild(statusSpan);
        
        let tdAction = document.createElement("td");
        
        let viewLink = document.createElement("a");
        viewLink.setAttribute("href", "#");
        let viewSpan = document.createElement("span");
        viewSpan.classList.add("bi-eye");
        viewSpan.setAttribute("aria-labelledby", "Voir l'utilisateur");
        viewLink.appendChild(viewSpan);
        
        let editLink = document.createElement("a");
        editLink.setAttribute("href", "#");
        let editSpan = document.createElement("span");
        editSpan.classList.add("bi-pen");
        editSpan.setAttribute("aria-labelledby", "Modifier l'utilisateur");
        editLink.appendChild(editSpan)
        
        let delButton = document.createElement("button");
        let delSpan = document.createElement("span");
        let delBtnId = delButton.id;
        delSpan.classList.add("bi-trash3");
        delSpan.setAttribute("aria-labelledby", "Supprimer l'utilisateur");
        delButton.appendChild(delSpan);
        delButton.id = `del-user-btn-${users[i].id}`;
        delButton.setAttribute("data-user", users[i].id);
        
        delUser();
        
        tdAction.appendChild(viewLink);
        tdAction.appendChild(editLink);
        tdAction.appendChild(delButton);
        
        tr.appendChild(tdId);
        tr.appendChild(tdName);
        tr.appendChild(tdAge);
        tr.appendChild(tdStatus);
        tr.appendChild(tdAction);
        
        tableBody.appendChild(tr);
    }
}

function delUser(delUserBtnId){
    
    delUserBtnId.addEventListener("click", function(){
        
        
    })
}

let users = [  
    {  
        id: 0,  
        isActive: false,  
        age: 24,    
        name: "Marsh Obrien" 
    },  
    {  
        id: 1,  
        isActive: false,  
        age: 21,    
        name: "Rios Gibson" 
    },  
    {  
        id: 2,  
        isActive: false,  
        age: 29,  
        name: "Morgan Buchanan"
    },  
    {  
        id: 3,  
        isActive: true,  
        age: 25,    
        name: "Franklin Dyer" 
    },  
    {  
        id: 4,  
        isActive: false,  
        age: 30, 
        name: "Keller Pitts" 
    },  
    {  
        id: 5,  
        isActive: false,  
        age: 25,  
        name: "Davenport Maddox"  
    },  
    {  
        id: 6,  
        isActive: true,  
        age: 31,  
        name: "Judith Graves"
    },  
    {  
        id: 7,  
        isActive: true,  
        age: 26,  
        name: "Hoffman Hess" 
    },  
    {  
        id: 8,  
        isActive: true,  
        age: 22,  
        name: "Sheena Goff"
    },  
    {  
        id: 9,  
        isActive: false,  
        age: 39,  
        name: "Rose Lawrence" 
    }  
];

window.addEventListener("DOMContentLoaded", function(){
    
    showMenu();
    showAside();
    displayUsers(users);
})
    
