let input = document.querySelector(".innput")
let btn = document.querySelector(".bt")
let ul = document.querySelector(".ull")
let clr = document.querySelector(".clear")




btn.addEventListener("click", function(){
    let text = input.value;

    let li = document.createElement("li")
    li.textContent = text


    ul.appendChild(li)

    input.value = " ";

    let dlt = document.createElement("i")
    dlt.classList.add("fa-solid", "fa-trash-can")

    li.appendChild(dlt)

    dlt.addEventListener("click", function(){
        li.remove()
    })

    if ( text === " "){  
       dlt.style.display = "none"       
       alert("ჩაწერეთ თექსტი")

       
    }
})

clr.addEventListener("click", function(){
    ul.innerHTML = " "
})


