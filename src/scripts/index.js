const button = document.getElementById("btn");
const btnLoading = document.getElementById("btnLoading");
const btnText = document.getElementById("btnText");

const myModal = new bootstrap.Modal('#exampleModal')
  
button.onclick = (e) =>{
    e.preventDefault();
    
    btnLoading.classList.toggle("d-none");
    btnText.innerHTML = "چند لحظه صبر کنید";

    setTimeout(()=>{
        btnLoading.classList.toggle("d-none");
        btnText.innerHTML = "گرفتن اطلاعات";

        myModal.show();
    }, 2000);
}