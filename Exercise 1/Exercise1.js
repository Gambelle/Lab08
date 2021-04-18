document.addEventListener("DOMContentLoaded", () =>{
  document.querySelector("#button1").addEventListener("click", ()=>{
    let txt =document.querySelector("#inp").value;
    let txt2 =document.querySelector("#inp2").value;
    console.log("I'm Here with ",txt);
    let result=true
    if(txt.length<8)
    {
      alert("The passwords are not at least 8 characters long");
      result=false;
    }
    else if (txt!=txt2)
    {
      alert("The passwords entered don't match");
      result=false;
    }
    console.log("I'm Here with ",result);
    if(result){
      document.querySelector("#equation").innerText="Accept Password";}
    else{
      document.querySelector("#equation").innerText="Reject Password";}
    document.querySelector("#inp").value="";
    document.querySelector("#inp2").value="";
  })
})
