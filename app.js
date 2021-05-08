
let newsCtnbtn = document.querySelector('#newsCtgBtn');
let catCtgBtn = document.querySelector('#catCtgBtn');
let ediCtgBtn = document.querySelector('#ediCtgBtn');

let newspapers = document.querySelector('#newspapers');
let newspapersTypes = document.querySelector('#newspapersTypes');
let city = document.querySelector('#city');

newsCtnbtn.style.borderBottom = "0.15rem solid #ffa500"

newsCtnbtn.addEventListener('click', () => {

    console.log("click");
    newspapers.style.display = "flex"
    newspapersTypes.style.display = "none"
    city.style.display = "none"
    newsCtnbtn.style.borderBottom = "0.15rem solid #ffa500"
    catCtgBtn.style.borderBottom = "0.15rem solid white"
    ediCtgBtn.style.borderBottom = "0.15rem solid white"
});

catCtgBtn.addEventListener('click', () => {

    console.log("click");
    newspapers.style.display = "none"
    newspapersTypes.style.display = "flex"
    city.style.display = "none"
    newsCtnbtn.style.borderBottom = "0.15rem solid white"
    catCtgBtn.style.borderBottom = "0.15rem solid #ffa500"
    ediCtgBtn.style.borderBottom = "0.15rem solid white"

});

ediCtgBtn.addEventListener('click', () => {

    console.log("click");
    newspapers.style.display = "none"
    newspapersTypes.style.display = "none"
    city.style.display = "flex"
    newsCtnbtn.style.borderBottom = "0.15rem solid white"
    catCtgBtn.style.borderBottom = "0.15rem solid white"
    ediCtgBtn.style.borderBottom = "0.15rem solid #ffa500"
});