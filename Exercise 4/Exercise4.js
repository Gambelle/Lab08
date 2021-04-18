document.addEventListener("DOMContentLoaded", () =>{
  document.querySelector("#button1").addEventListener("click", ()=>{
    let rBorder =document.querySelector("#rinp").value;
    let gBorder =document.querySelector("#ginp").value;
    let bBorder =document.querySelector("#binp").value;
    console.log("I'm Here with ",rBorder);
    let rBackground =document.querySelector("#rinp2").value;
    let gBackground =document.querySelector("#ginp2").value;
    let bBackground =document.querySelector("#binp2").value;
    console.log("I'm Here with ",rBackground);

    var pageTag= document.getElementById("par")

    pageTag.style.borderColor ="rgb("+rBorder+","+gBorder+","+bBorder+")"
    pageTag.style.backgroundColor ="rgb("+rBackground+","+gBackground+","+bBackground+")"

    document.querySelector("#rinp").value="";
    document.querySelector("#ginp").value="";
    document.querySelector("#binp").value="";
    document.querySelector("#rinp2").value="";
    document.querySelector("#ginp2").value="";
    document.querySelector("#binp2").value="";
  })
})
