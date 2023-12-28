var mostrarprojects = document.getElementById("FuncionMostrarProyecto");
var mostrarAboutContent = document.getElementById("ClickAbout");
var clickSkills = document.getElementById("skills");

function FmostrarProject(){
   mostrarprojects.style.display = "flex";
}

function Ocultarmenu(){
    mostrarprojects.style.display = "none";
 }

 function mostrarabout(){
  mostrarAboutContent.style.display = "flex";
 }

 function ocultarabout(){
   mostrarAboutContent.style.display = "none";
 }

 function mostrarSkills(){
   clickSkills.style.display = "flex";
 }

 function ocultarSkills(){
   clickSkills.style.display = "none";
 }

 /*Slider----card----*/


 function SlideR_P_A(){
    Ocultarmenu();
    mostrarabout();
 }

 function SlideR_A_S(){
  ocultarabout();
  mostrarSkills();
}

function SlideR_S_P(){
  ocultarSkills();
  FmostrarProject();
}


function SlideR_P_S_reverse(){
  Ocultarmenu();
  mostrarSkills();
}

function SlideR_A_P_reverse(){
ocultarabout();
FmostrarProject();
}

function SlideR_S_A_reverse(){
ocultarSkills();
mostrarabout();
}


function neworksgmail(){
  var destinatario = "guillermoajv20@gmail.com";
  var urlgmail = "https://mail.google.com/mail/?view=cm&fs=1&to=" + destinatario;
  window.open(urlgmail,"_blank");
}


