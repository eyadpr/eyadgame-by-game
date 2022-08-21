var menuicon = document.getElementById("menu-item");
var list = document.getElementById("list1");
var menustatus;
var leftarrow = document.getElementById("left");
var rightarrow = document.getElementById("right");
var slider = document.getElementById("maincontent");
var images = ["slide-1.jpg","post2.jpg","post3.jpg"];
var i;
i = 0;



menustatus = "closed";

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
};


window.onscroll = function() {
    menuicon.src = "list.png";
    list.style.display = "none";
    menustatus = "close";
    
    if(window.pageYOffset > 0){
       leftarrow.style.display = "none"; 
       rightarrow.style.display = "none";
        console.log("hello");
        
    } else {
        leftarrow.style.display = "block";
        rightarrow.style.display ="block";
    }
   
}
 




slider.style.backgroundImage = "url("+images[i]+")";

leftarrow.onclick = function() {
    
    if(i>0){
   slider.style.backgroundImage = "url("+images[i-1]+")";
    i = i - 1;   
}
  
};
rightarrow.onclick = function() {
  if(i<images.length-1){
   slider.style.backgroundImage = "url("+images[i+1]+")";
  i = i + 1;  
}
};