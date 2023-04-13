let $criptoIcon = document.querySelector('#criptoIcon')
let $valuteIcon = document.querySelector('#valuteIcon')
let $criptoPage = document.querySelector('#criptoPage')
let $valutePage = document.querySelector('#valutePage')

$criptoIcon.addEventListener('click', function(){
    $criptoPage.classList.remove('hide')
    $valutePage.classList.add('hide')
})

$valuteIcon.addEventListener('click', function(){
    $valutePage.classList.remove('hide')
    $criptoPage.classList.add('hide')
})

let $listValute = document.querySelector('#listValute')
let url = "https://www.cbr-xml-daily.ru/daily_json.js"

fetch(url)
    .then(response => response.json())
    .then(data => {
                console.log(data)
                let valute = data.Valute
                for (key in valute){
                    $listValute.insertAdjacentHTML('beforeend', `
                    <div class="nominal">
                         <p>${valute[key].Name} к рублю</p>
                         <p>${valute[key].CharCode} - ${valute[key].Nominal} == ${valute[key].Value} - RUS</p>
                    </div>
               `)
                }
        })