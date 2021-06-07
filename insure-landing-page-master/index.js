function toggleNav(){
    let navbar=document.getElementById("navbar");
    if(navbar.classList.contains("navbar__action-open")==true)
    {
        navbar.classList.add("navbar__action-close");
        
        navbar.classList.remove("navbar__action-open");
        
    }
    else{
        navbar.classList.add("navbar__action-open");
        navbar.classList.remove("navbar__action-close");
       
    }

}

