const codewrap = document.getElementById("code-wrap")
const namewrap = document.getElementById("name-wrap")
const code = document.getElementById("code")
const yourname = document.getElementById("name")
const b_code = document.getElementById("b-code")
const b_next = document.getElementById("b-next")

// Desativando name-wrap
namewrap.style.display = "none"

// Verificar se inseriu um dos códigos
b_code.addEventListener("click", function B_ClassCode() {
    if(code.value == "123")
    {
        codewrap.style.display = "none"
        namewrap.style.display = "block"
    }
})

b_next.addEventListener("click", function B_ClassCode() {
    if(yourname.value != "" || yourname.value != null)
    {
        namewrap.style.display = "none"
    }
})