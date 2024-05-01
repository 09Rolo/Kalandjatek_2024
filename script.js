let loading = document.getElementById("loading")

function loaded_oldal(what) {
    loading.style.display = "none"


    if (what) {
        if (what != "index") {
            if (what != "gameover") {
                beuszas()
            }
        }
        
        if (what == "gameover") {
            let bgvid = document.getElementById("bgvideo")

            bgvid.style.zIndex = 5

            setTimeout(() => {
                bgvid.style.zIndex = -1
            }, 2500);

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


/* Nem saját */

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

/**/








/* Saját */


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






function bohocugras() {
    let content = document.getElementById("content")

    content.innerHTML = `
        <h1 id="szivroham_bohoc">Az arcodba ugrott egy bohóc, és szívrohamot kaptál... kár érted</h1>
        <img id="bohoc" src="../imgs/bohoc.jpg">
    `

    let bohoc = document.getElementById("bohoc")

    bohoc.style.animationPlayState = "running"




    let curr_loc = window.location.href
    let loc_len = curr_loc.length
    let loc_split = curr_loc.split("/")
    let loc_slice_that = loc_split[loc_split.length - 1]

    let locslice = curr_loc.slice(0, loc_len - loc_slice_that.length)
    /* huhh */

    console.log(locslice)


    setTimeout(() => {
        //game overre
        window.location.replace(locslice + "gameover.html")
    }, 7000);
}






let keys = []

function kuzdelem_vaassal(oke) {
    let book = document.getElementById("book")

    if (!oke) {
        book.style.display = "flex"
        book.style.animationPlayState = "running"

        let maxms = 8
        for (let i = 0; i <= maxms; i++) {
            setTimeout(() => {
                document.getElementById("msbillhez").innerHTML = maxms - i
            }, i*1000)
        }


        setTimeout(() => {
            let curr_loc = window.location.href
            let loc_len = curr_loc.length
            let loc_split = curr_loc.split("/")
            let loc_slice_that = loc_split[loc_split.length - 1]

            let locslice = curr_loc.slice(0, loc_len - loc_slice_that.length)
            
            window.location.replace(locslice + "gameover.html")
        }, maxms*1000)


        window.addEventListener(
            "keydown",
            (event) => {
              if (event.defaultPrevented) {
                return;
              }
          
              let handled = false;
              if (event.key !== undefined) {
                

                keys += event.key

                
                console.log(keys)

                
                handled = true;
              } else if (event.keyCode !== undefined) {
                handled = true;
              }
          
              if (handled) {
                event.preventDefault();
              }
            },
            true,
          );

    } else if (oke == "reset") {

        window.location.reload()

    } else if (oke == "oke") {

        if (keys == "bklj") {
            //oké
            let curr_loc = window.location.href
            let loc_len = curr_loc.length
            let loc_split = curr_loc.split("/")
            let loc_slice_that = loc_split[loc_split.length - 1]
        
            let locslice = curr_loc.slice(0, loc_len - loc_slice_that.length)

            window.location.replace(locslice + "nyolcadik.html")

        } else {
            //nemoké
            let curr_loc = window.location.href
            let loc_len = curr_loc.length
            let loc_split = curr_loc.split("/")
            let loc_slice_that = loc_split[loc_split.length - 1]
        
            let locslice = curr_loc.slice(0, loc_len - loc_slice_that.length)

            window.location.replace(locslice + "gameover.html")

        }
        
    }
}