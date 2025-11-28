const inp=document.getElementById("inp");


function addlist(){
    const ol = document.getElementById("ol");
    const li = document.createElement("li");
     if(inp.value===""){
    alert("type something BOZO")
    return;
     }
    li.textContent=inp.value;
    inp.value="";
    const button = document.createElement("button")
    button.textContent = "X"
    li.appendChild(button);
    ol.appendChild(li);
    button.addEventListener("click",()=>{
        li.remove();
     })
   
}






