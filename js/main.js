
function seleccionar(link){
    let x = document.getElementById("nav")
    x.className = "";
}
// MMenu hamburgesa
function responsiveMenu(){
    let x = document.getElementById('nav');
    if(x.className===""){
        x.className ="responsive"
    } else{
        x.className =""
    }
}
