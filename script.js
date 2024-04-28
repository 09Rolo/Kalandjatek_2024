let loading = document.getElementById("loading")

function loaded_oldal(what) {
    loading.style.display = "none"


    if (what) {
        if (what != "index") {
            beuszas()
        }
    } else {
        beuszas()
    }
}




function loaded() {
    loaded_oldal("index")
    
    let udv = document.getElementById("udv")
    let bevezeto = document.getElementById("bevezeto")

    loading.style.display = "none"
    bevezeto.style.display = "none"


    setTimeout(() => {
        udv.style.display = "none"

        bevezeto.style.display = ""
    }, 3000);
}










function beuszas() {

    let bali = document.getElementsByClassName("bali")
    let jobbi = document.getElementsByClassName("jobbi")

    bali[0].id = "bali_1"
    jobbi[0].id = "jobbi_1"

    setTimeout(() => {
        document.getElementById("bali_1").style.animationPlayState = "running"
        document.getElementById("jobbi_1").style.animationPlayState = "running"


        setTimeout(() => {
            
        document.getElementById("bali_1").style.animationName = "lebeges"
        document.getElementById("bali_1").style.animationIterationCount = "infinite"
        document.getElementById("bali_1").style.animationDuration = "3s"

        document.getElementById("jobbi_1").style.animationName = "lebeges"
        document.getElementById("jobbi_1").style.animationIterationCount = "infinite"
        document.getElementById("jobbi_1").style.animationDuration = "3s"
        
        }, 1000);
    }, 1000);
    





    let balok = document.getElementsByClassName("bal")
    let jobbok = document.getElementsByClassName("jobb")

    console.log(balok)
    console.log(jobbok)



    for (let i = 0; i < balok.length; i++) {
        console.log(balok[i])

        balok[i].id = "bal_" + i;
    }


    for (let i = 0; i < jobbok.length; i++) {
        console.log(jobbok[i])

        jobbok[i].id = "jobb_" + i;
    }





    for (let i = 0; i < balok.length; i++) {

        setTimeout(() => {
            let element = document.getElementById("bal_" + i);

            element.style.animationPlayState = "running";
        }, 1000 + i*2000);
    }


    for (let i = 0; i < jobbok.length; i++) {

        setTimeout(() => {
            let element = document.getElementById("jobb_" + i);

            element.style.animationPlayState = "running";
        }, 1600 + i*2000);
    }



    iras("kozep_p")
}





function iras(elem) {
    var p = document.getElementById(elem)

    if (p) {
        var txt = p.innerHTML

        p.innerHTML = ""


        var speed = 30;

        for (let i = 0; i < txt.length; i++) {
            setTimeout(() => {
                p.innerHTML += txt.charAt(i);  
            }, 1500 + i*speed);
        }
    }

}












/*--------------------------------------------------------------------------*/

function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}










function alexfeladvany(megoldas) {
    let book = document.getElementById("book")

    
    if (!megoldas) {
        book.style.display = "flex"
        book.style.animationPlayState = "running"
    } else {
        let element = document.getElementById("dragto_1").getElementsByClassName("dragthis")[0];
        let src = element.src.split('/').length
        let srcje = element.src.split('/')[src - 1]


        if (srcje == "alex-ans_1.png") {
            //jó
            let buttons = document.querySelector(".buttons")

            buttons.innerHTML = `
                <a href="./hatodik_jo.html">Tovább</a>
            `
        } else {
            //rossz
            let buttons = document.querySelector(".buttons")

            buttons.innerHTML = `
                <a href="./hatodik_rossz.html">Tovább</a>
            `
        }


        book.style.display = "none"
        book.style.animationPlayState = "paused"
    }
}

