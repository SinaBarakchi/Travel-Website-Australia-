function showmenu(){
    let btn= document.getElementById("btn");
    if(btn.className ==="nav-list")
        btn.className += " show";
    else
        btn.className ="nav-list";
    
    let pos= document.getElementsByClassName("pos-70")
    pos.style.bottom ="70px";
}