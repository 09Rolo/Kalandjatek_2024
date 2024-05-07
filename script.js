/* Minden sort próbáltam én saját magam megírni, van vagy 35 amit nem én írtam, a többi saját */


kurzor()

let loading = document.getElementById("loading")

function loaded_oldal(what) {
    loading.style.display = "none"


    if (what) {
        if (what != "index") {
            if (what != "gameover") {
                if (what != "victory") {
                    if (what != "withnagykep") {
                        beuszas()
                    }
                }
            }
        }
        
        if (what == "gameover") {
            let bgvid = document.getElementById("bgvideo")

            bgvid.style.zIndex = 5

            setTimeout(() => {
                bgvid.style.zIndex = -1
            }, 2500);

        }




        if (what == "victory") {
            let bgvid = document.getElementById("bgvideo")

            bgvid.style.zIndex = 5

            setTimeout(() => {
                bgvid.style.zIndex = -1
            }, 2500);


            startstablista()
        }



        if (what == "withnagykep") {

            let curr_loc = window.location.href
            let loc_len = curr_loc.length
            let loc_split = curr_loc.split("/")
            let loc_slice_that = loc_split[loc_split.length - 1]
        
            let locslice = curr_loc.slice(0, loc_len - loc_slice_that.length)
            /* huhh */
        
            console.log(locslice)
        
        
            setTimeout(() => {
                window.location.replace(locslice + "tizennegyedik.html")
            }, 8000);
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












function kurzor() {
    let body = document.querySelector("body")
    body.id = "body"
    body = document.getElementById("body")
    


    body.innerHTML += `
        <div class='cursor'></div>
        <div class='cursor-border cursor_pulse'></div>
    `

    
    
    const cursor = document.querySelector(".cursor")
    const cursor_border = document.querySelector(".cursor-border")

    document.addEventListener("mousemove", (merre) => {
    
        const posX = merre.clientX
        const posY = merre.clientY
    
        
        //cursor.setAttribute("style", "top: " + merre.clientY + "px" +    "; left: " + merre.clientX + "px;")
        cursor.style.left = posX + "px"
        cursor.style.top = posY + "px"
    
        cursor_border.style.left = posX + "px"
        cursor_border.style.top = posY + "px"
    
    
        cursor_border.animate({
            left: posX + "px",
            top: posY + "px"
        }, {duration: 500, fill: "forwards"})
    })




    document.addEventListener("click", (args) => {
        console.log(args)

        if (args.target.localName == "img") {
            console.log("img")


            cursor_border.classList.add("clicked_img")


            setTimeout(() => {
                cursor_border.classList.remove("clicked_img")
            }, 1000)


        } else {
            cursor_border.classList.add("clicked_cursor")

            setTimeout(() => {
                cursor_border.classList.remove("clicked_cursor")
            }, 400)
        }

        
    })













    setTimeout(() => {

        let balok = document.getElementsByClassName("bal")
    

        for(let i = 0; i < balok.length; i++) {
            let bal_valamelyik = document.getElementById("bal_" + i)
    
    
            bal_valamelyik.addEventListener("mouseenter", () => {
                cursor.classList.remove("mouse_enter_buttons")
                cursor.classList.remove("mouse_leave_buttons")

                cursor.classList.remove("mouse_leave")
                cursor.classList.add("mouse_enter")
                cursor_border.style.border = "none"
                cursor_border.classList.remove("cursor_pulse")
            })
    
            
    
            bal_valamelyik.addEventListener("mouseleave", () => {
                cursor.classList.remove("mouse_enter_buttons")
                cursor.classList.remove("mouse_leave_buttons")
                
                cursor.classList.add("mouse_leave")
                cursor.classList.remove("mouse_enter")
                cursor_border.style.border = "2px solid rgba(255, 255, 255, 0.5)"
                cursor_border.classList.add("cursor_pulse")
            })
        }
    }, 2000)




    setTimeout(() => {

        let jobbok = document.getElementsByClassName("jobb")

        for(let v = 0; v < jobbok.length; v++) {
            let jobb_valamelyik = document.getElementById("jobb_" + v)
    
    
            jobb_valamelyik.addEventListener("mouseenter", () => {
                cursor.classList.remove("mouse_enter_buttons")
                cursor.classList.remove("mouse_leave_buttons")

                cursor.classList.remove("mouse_leave")
                cursor.classList.add("mouse_enter")
                cursor_border.style.border = "none"
                cursor_border.classList.remove("cursor_pulse")
            })
    
            
    
            jobb_valamelyik.addEventListener("mouseleave", () => {
                cursor.classList.remove("mouse_enter_buttons")
                cursor.classList.remove("mouse_leave_buttons")

                cursor.classList.add("mouse_leave")
                cursor.classList.remove("mouse_enter")
                cursor_border.style.border = "2px solid rgba(255, 255, 255, 0.5)"
                cursor_border.classList.add("cursor_pulse")
            })
        }

    }, 2000)




    setTimeout(() => {

        let kozep = document.getElementById("kozep_p")

    
        if(kozep) {
            kozep.addEventListener("mouseenter", () => {
                cursor.classList.remove("mouse_enter_buttons")
                cursor.classList.remove("mouse_leave_buttons")

                cursor.classList.remove("mouse_leave")
                cursor.classList.add("mouse_enter")
                cursor_border.style.border = "none"
                cursor_border.classList.remove("cursor_pulse")
            })
        

        
            kozep.addEventListener("mouseleave", () => {
                cursor.classList.remove("mouse_enter_buttons")
                cursor.classList.remove("mouse_leave_buttons")

                cursor.classList.add("mouse_leave")
                cursor.classList.remove("mouse_enter")
                cursor_border.style.border = "2px solid rgba(255, 255, 255, 0.5)"
                cursor_border.classList.add("cursor_pulse")
            })
        }

    }, 2000)





    setTimeout(() => {

        let megnevezesek = document.getElementsByClassName("megnevezes")

        for(let v = 0; v < megnevezesek.length; v++) {
            megnevezesek[v].id = "megnevezes_" + v

            let megnevezes_valamelyik = document.getElementById("megnevezes_" + v)
    
    
            megnevezes_valamelyik.addEventListener("mouseenter", () => {
                cursor.classList.remove("mouse_enter_buttons")
                cursor.classList.remove("mouse_leave_buttons")

                cursor.classList.remove("mouse_leave")
                cursor.classList.add("mouse_enter")
                cursor_border.style.border = "none"
                cursor_border.classList.remove("cursor_pulse")
            })
    
            
    
            megnevezes_valamelyik.addEventListener("mouseleave", () => {
                cursor.classList.remove("mouse_enter_buttons")
                cursor.classList.remove("mouse_leave_buttons")

                cursor.classList.add("mouse_leave")
                cursor.classList.remove("mouse_enter")
                cursor_border.style.border = "2px solid rgba(255, 255, 255, 0.5)"
                cursor_border.classList.add("cursor_pulse")
            })
        }

    }, 2000)






    setTimeout(() => {
        let buttons = document.getElementsByTagName("button")

        for(let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("mouseenter", () => {
                cursor.classList.remove("mouse_enter")
                cursor.classList.remove("mouse_leave")

                cursor.classList.remove("mouse_leave_buttons")
                cursor.classList.add("mouse_enter_buttons")
                cursor_border.style.border = "3px solid red"
                cursor_border.style.width = "30px"
                cursor_border.style.height = "30px"
                cursor_border.classList.remove("cursor_pulse")
            })
    
            
    
            buttons[i].addEventListener("mouseleave", () => {
                cursor.classList.remove("mouse_enter")
                cursor.classList.remove("mouse_leave")

                cursor.classList.add("mouse_leave_buttons")
                cursor.classList.remove("mouse_enter_buttons")
                cursor_border.style.width = "50px"
                cursor_border.style.height = "50px"
                cursor_border.style.border = "2px solid rgba(255, 255, 255, 0.5)"
                cursor_border.classList.add("cursor_pulse")
            })
        }




        let ak = document.getElementsByTagName("a")

        for(let i = 0; i < ak.length; i++) {
            ak[i].addEventListener("mouseenter", () => {
                cursor.classList.remove("mouse_enter")
                cursor.classList.remove("mouse_leave")

                cursor.classList.remove("mouse_leave_buttons")
                cursor.classList.add("mouse_enter_buttons")
                cursor_border.style.border = "3px solid red"
                cursor_border.style.width = "30px"
                cursor_border.style.height = "30px"
                cursor_border.classList.remove("cursor_pulse")
            })
    
            
    
            ak[i].addEventListener("mouseleave", () => {
                cursor.classList.remove("mouse_enter")
                cursor.classList.remove("mouse_leave")

                cursor.classList.add("mouse_leave_buttons")
                cursor.classList.remove("mouse_enter_buttons")
                cursor_border.style.width = "50px"
                cursor_border.style.height = "50px"
                cursor_border.style.border = "2px solid rgba(255, 255, 255, 0.5)"
                cursor_border.classList.add("cursor_pulse")
            })
        }

    }, 2000);


}







menufelul()

function menufelul() {

    window.addEventListener("keydown", (event) => {
          if (event.defaultPrevented) {
            return;
          }
      
          let handled = false;
          if (event.key !== undefined) {
            
            if (event.key == "Escape") {
                openmenufelul()
            }

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
}




function openmenufelul() {

    if (!document.getElementById("menufelul")) {
        let div = document.createElement('div');
        div.id = "menufelul"

        div.innerHTML = `
            <div id="kurzorvaltas">
                <button onclick="changeKurzor()">Kurzor váltása</button>
            </div>

            <div id="fullscreenbe">
                <button onclick="fullscreenmod()">Teljes képernyős mód</button>
            </div>

            <div id="exitmenufelul">
                <button onclick="exitmenufelul()">Bezárás</button>
            </div>
        `

        document.body.appendChild(div);
    


        document.getElementById("menufelul").style.animationPlayState = "running"

        setTimeout(() => {
            document.getElementById("menufelul").style.animationPlayState = "paused"
        }, 1000)


    } else {
        exitmenufelul()
    }
}




function exitmenufelul() {
    let menu = document.getElementById("menufelul")

    menu.style.animationName = "closemenu"
    menu.style.animationPlayState = "running"

    setTimeout(() => {
        menu.style.animationPlayState = "paused"
        document.getElementById("menufelul").remove()
    }, 900)
}











/* Meg kellene tartani a megváltoztatott kurzort, hogyaha átlép valaki egy másik oldalra, akkor is a megváltoztatott maradjon */

checkCookieCursor()



//Nem saját

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

//Saját innen


function checkCookieCursor() {
    console.log(document.cookie)


    let cursor = getCookie("cursor");

    if (cursor != "") {
        if (cursor == "none") {
            changeKurzor("first")
        }
    } else {
        //semmi
    }
}

function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";";
}











function changeKurzor(first) {
    if (!first) {
        exitmenufelul()
    }

    let body = document.getElementById("body")
    
    
    const cursor = document.querySelector(".cursor")
    const cursor_border = document.querySelector(".cursor-border")
    

    if (document.querySelector(".cursor")) {
        setCookie("cursor", "none")


        cursor.remove()
        cursor_border.remove()

        body.style.cursor = "url('../imgs/cursor.png'), auto"



        let ak = document.querySelector("a")
        let buttons = document.querySelector("button")

        if (buttons) {
            buttons.classList.add("button_with_changed_cursor")
        }

        if (ak) {
            ak.classList.add("button_with_changed_cursor")
        }
       


    } else {
        setCookie("cursor", "megcuccolt")


        body.style.cursor = "none"
        let ak = document.querySelector("a")
        let buttons = document.querySelector("button")

        if (buttons) {
            buttons.classList.remove("button_with_changed_cursor")
        }

        if (ak) {
            ak.classList.remove("button_with_changed_cursor")
        }

        kurzor()
    }
    
}








function fullscreenmod(first) {
    if (!first) {
        exitmenufelul()
    }

    
    let doc = document.documentElement


    if (doc.requestFullscreen) {
        doc.requestFullscreen()
    } else if (doc.webkitRequestFullscreen) { /* Safari --ezek szerint más is kell :) */
        doc.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 --ezek szerint más is kell :)*/
        doc.msRequestFullscreen();
    }
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








function readbeforeplay() {
    setTimeout(() => {
        
        let foszovegbox = document.getElementById("bal_1")
        let foszovegbox_szoveg = document.querySelectorAll("#bal_1 > *")

        if (foszovegbox) {
            foszovegbox.style.minWidth = "100%"
            foszovegbox.style.minHeight = "100vh"
            foszovegbox.style.borderRadius = "0px"
            foszovegbox.style.backgroundColor = "black"
            
            foszovegbox.style.display = "flex"
            foszovegbox.style.flexDirection = "column"
            foszovegbox.style.justifyContent = "center"
            foszovegbox.style.alignItems = "center"
            foszovegbox.style.alignContent = "center"
            
            foszovegbox_szoveg.forEach(elem => {
                elem.style.textAlign = "center"
            });
            
        }


    }, 200)
}








function startstablista() {

    setTimeout(() => {
        let stablista = document.getElementById("stablista")
        let stablistaszovegek = document.querySelectorAll("#szereplok > *")

        stablistaszovegek.forEach(elem => {
            elem.style.animationPlayState = "running"
        });

        if (stablista) {
            stablista.style.animationPlayState = "running"
        }
    }, 5500)



    setTimeout(() => {
        let stablistaszereplok = document.getElementById("szereplok")

        stablistaszereplok.style.animationName = "stablistagorgetes"
        stablistaszereplok.style.animationDuration = "500s"
        stablistaszereplok.style.animationPlayState = "running"

    }, 9000);


    setTimeout(() => {
        let osszszereplo = document.getElementById("osszszereplo")
        osszszereplo.style.display = ""

        let stablista = document.getElementById("stablista")
        stablista.style.display = "none"
    }, 60*1000)

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








/* Innentől megint */


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

        let maxms = 15
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






        window.addEventListener("keyup", (event) => {
            if (event.isComposing || event.keyCode === 229) {
              return;
            }
            
            keys += event.key

                
            console.log(keys)
        });


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








let key = null

function kihalmeg(oke) {
    let book = document.getElementById("book")

    if (!oke) {
        book.style.display = "flex"
        book.style.animationPlayState = "running"

        let maxms = 10
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






        window.addEventListener("keyup", (event) => {
            if (event.isComposing || event.keyCode === 229) {
              return;
            }
            
            key = event.key

                
            console.log(key)
        });


    } else if (oke == "reset") {

        window.location.reload()

    } else if (oke == "oke") {

        if (key == "a") {
            //Péter Miklós
            let curr_loc = window.location.href
            let loc_len = curr_loc.length
            let loc_split = curr_loc.split("/")
            let loc_slice_that = loc_split[loc_split.length - 1]
        
            let locslice = curr_loc.slice(0, loc_len - loc_slice_that.length)

            window.location.replace(locslice + "tizenhatodik_pm.html")

        } else if (key == "f") {
            //Nemes Tamás
            let curr_loc = window.location.href
            let loc_len = curr_loc.length
            let loc_split = curr_loc.split("/")
            let loc_slice_that = loc_split[loc_split.length - 1]
        
            let locslice = curr_loc.slice(0, loc_len - loc_slice_that.length)

            window.location.replace(locslice + "tizenhatodik_nt.html")

        }
        
    }
}
