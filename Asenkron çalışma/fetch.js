const getData = document.querySelector(".getData");
const setData = document.querySelector(".setData");
const label = document.querySelector(".text")
const container = document.querySelector(".container");

getData.addEventListener("click", getJSONfromAPI);
setData.addEventListener("click", setDatafromAPI);

console.log(this);

function getText(e)
{

    //uzun hali
    const fetchConculusion = fetch("deneme.txt")

    fetchConculusion
    .then(responce => {
        const responceText = responce.text();

        responceText.then(message => {console.log(message);})
    })
    .catch(err => {console.log(err);});


    //kısa hali
    fetch("deneme.txt")
    .then(responce => responce.text())
    .then(text => {console.log(text);})
    .catch(err => {console.log(err);})

    getJSON();
}

function getJSON(e)
{
    fetch("students.json").then(responce => responce.json())
    .then(text => {

        let output = "";

        text.forEach(element => {
            output += `ID -> ${element.id + " "} Ad -> ${element.ad + " "} Soyad -> ${element.soyad + " "} Yaş -> ${element.yas + "\n"}`;
        })

        label.innerText = output;
    })
}

function getJSONfromAPI(e){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(responce => responce.json())
    .then(result => printSite(result))
}

async function setDatafromAPI(e){
    const responce = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method : "POST",
        body : JSON.stringify({
            title : "Başlık",
            body : "Body",
            userID : 31
        }),
        headers : {
            "Content-type" : "application/json; charset=UTF-8",
        }
    })

    const result = await responce.json()
    console.log(result);
}

function printSite(data) {
    let output = " ";

    data.forEach(user => {
        output += `<li> ${user.name} </li>`
    });

    container.innerHTML = output;
}