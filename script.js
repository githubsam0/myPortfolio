function myFunction(x) {
    x.classList.toggle("change");
}


setTimeout(function(){
    document.querySelector(".homePage").style.display = "block"; 
}, 5000);

/* i want to make the navbar not show up either, but it won't work --

setTimeout(function(){
    document.querySelector(".navbar").style.display = "inline"; 
}, 3000);
*/



function menu(){
    if(document.querySelector(".menuPage").style.display === "none"){
        document.querySelector(".homePage").style.display = "none";
        document.querySelector(".menuPage").style.display = "block";
    } else {
        document.querySelector(".homePage").style.display = "block";
        document.querySelector(".menuPage").style.display = "none";
    }
}

function contactMenu(){
    if(document.querySelector(".contactPage").style.display === "block"){
        document.querySelector(".contactPage").style.display = "none";
        document.querySelector(".menuPage").style.display = "block";
    }
}

function projectsMenu(){
    if(document.querySelector(".projectsPage").style.display === "block"){
        document.querySelector(".projectsPage").style.display = "none";
        document.querySelector(".menuPage").style.display = "block";
    }
}
function aboutMeMenu(){
    if(document.querySelector(".aboutMePage").style.display === "block"){
        document.querySelector(".aboutMePage").style.display = "none";
        document.querySelector(".menuPage").style.display = "block";
    }
}
function sourcesMenu(){
    if(document.querySelector(".sourcesPage").style.display === "block"){
        document.querySelector(".sourcesPage").style.display = "none";
        document.querySelector(".menuPage").style.display = "block";
    }
}


function toContact(){
    document.querySelector(".contactPage").style.display = "block";
    document.querySelector(".menuPage").style.display = "none";
}
function toProjects(){
    document.querySelector(".projectsPage").style.display = "block";
    document.querySelector(".menuPage").style.display = "none";
}
function toAboutMe(){
    document.querySelector(".aboutMePage").style.display = "block";
    document.querySelector(".menuPage").style.display = "none";
}
function toHome(){
    document.querySelector(".homePage").style.display = "block";
    document.querySelector(".aboutMePage").style.display = "none";
}
function toSources(){
    document.querySelector(".sourcesPage").style.display = "block";
    document.querySelector(".homePage").style.display = "none";
}

function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
// drop down in navbar
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


//projects page




