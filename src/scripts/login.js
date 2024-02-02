const button = document.getElementById("btn");
const btnLoading = document.getElementById("btnLoading");
const btnText = document.getElementById("btnText");
const toast = document.getElementById("liveToast")
  
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toast);

button.onclick = (e) =>{
    e.preventDefault();
    
    btnLoading.classList.toggle("d-none");
    btnText.innerHTML = "چند لحظه صبر کنید";
    toastBootstrap.show();

    setTimeout(()=>{
        btnLoading.classList.toggle("d-none");
        window.location.href = "panel_financialInfo.html"
    }, 2000);
}