const button = document.querySelector('.button');
const quote = document.querySelector('.quote');
console.log(button);

const getQuote = () =>{
fetch("https://meowfacts.herokuapp.com/")
.then(res => {
  return res.json();
})
.then((data) => {
    quote.innerHTML = data.getQuote[0]
    }
    )       
}
button.addEventListener('click', getQuote);