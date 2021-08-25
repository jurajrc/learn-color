let colorForm = document.querySelector('#game-form')
let inputText = document.querySelector('.text')
let styleInputText = getComputedStyle(inputText)
let heading = document.querySelector('h2')

colorForm.addEventListener('submit', function(event) {
    event.preventDefault()

    console.log(event.target.color.value);
    let bacColor = (event.target.color.value).toLowerCase()

    document.querySelector('body').style.background = bacColor
    heading.textContent = bacColor.toUpperCase()

    event.target.color.value = ""

    console.log(bacColor);

    if (bacColor === 'black' ) {
        inputText.style.boxShadow = "rgb(255, 255, 250) 0px 0px 6px 6px"
        inputText.style.border = "none"
        heading.style.color = "white"
    } 
    if (bacColor !== 'black' ) {
        inputText.style.boxShadow = "rgb(0, 0, 0) 5px 5px 10px 0px"
        heading.style.color = "rgba(0, 0, 0, 0.4)"
    }
})

function setUp() {
    $('body').children('div').last().css("display", "none");
    inputText.focus()
}