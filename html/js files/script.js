const themeBtn = document.getElementById("themeBtn");

function showSection(id){

    document.querySelectorAll(".section").forEach(sec=>{
        sec.classList.remove("active");
    });

    document.querySelectorAll(".tab").forEach(btn=>{
        btn.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

    event.target.classList.add("active");
}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerHTML='<i class="fas fa-sun"></i> Light Mode';
    }else{
        themeBtn.innerHTML='<i class="fas fa-moon"></i> Dark Mode';
    }

});