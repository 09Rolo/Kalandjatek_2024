let loading = document.getElementById("loading")

function loaded_oldal() {
    loading.style.display = "none"
}




function loaded() {
    loaded_oldal()
    
    let udv = document.getElementById("udv")
    let bevezeto = document.getElementById("bevezeto")

    loading.style.display = "none"
    bevezeto.style.display = "none"


    setTimeout(() => {
        udv.style.display = "none"

        bevezeto.style.display = ""
    }, 3000);
}