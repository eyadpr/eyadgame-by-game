menuicon = document.getElementById("menu-item");
var list = document.getElementById("list1");
var menustatus

menustatus = "closed"

menuicon.onclick =  function() {
    if(menustatus == "closed"){
       menuicon.src = "close.png";
        console.log(list);
    list.style.display = "block";
    menustatus = "open";
    } else{
       menuicon.src = "list.png";
    list.style.display = "none";
    menustatus = "closed";
    }
}
