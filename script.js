const inp=document.getElementById("inp");


function addlist(){
    const ol = document.getElementById("ol");
    const li = document.createElement("li");
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




