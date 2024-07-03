let userInfos,oldName,oldSurname,oldMail;

const nameInput = document.querySelector(".name-input");
const surnameInput = document.querySelector(".surname-input");
const emailInput = document.querySelector(".email-input");
const sendButton = document.querySelector(".btn-send");
const formGuide = document.querySelector(".form-guide");
const infoTable = document.querySelector(".info-table");

sendButton.addEventListener(`click`,sendFunction);
infoTable.addEventListener("click",delOrEditInfo);
document.addEventListener("DOMContentLoaded",readLocalStorage);

function sendFunction (e) 
{
    if (nameInput.value != "" && surnameInput.value != "" && emailInput.value != ""){
        
        const name = nameInput.value;
        const surname = surnameInput.value;
        const email = emailInput.value;

        if (sendButton.innerText == "EKLE"){
            createItem(nameInput.value,surnameInput.value,emailInput.value,false);
        }
        
        if (sendButton.innerText == "GÜNCELLE"){
            deleteAllRows();
            updateFromLocaleStorage(oldName,oldSurname,oldMail,name,surname,email);
            readLocalStorage();

            console.log('count ${this.oldName}');
        }  
    }
}

function createItem(name,surname,mail,mode)
{
    if (mode == false){

        let infoBody = infoTable.getElementsByTagName("tbody")[0];

        let newRow = infoBody.insertRow();

        let nameCell = newRow.insertCell(0);
        let surnameCell = newRow.insertCell(1);
        let mailCell = newRow.insertCell(2);
        let progressCell = newRow.insertCell(3)

        nameCell.innerText = name;
        surnameCell.innerText = surname;
        mailCell.innerText = mail;
        progressCell.innerHTML = '<button class="btn-edit"><i class="fa-solid fa-pen-to-square"></i></button> <button class="btn-delete"><i class="fa-regular fa-trash-can"></i></button>'

        saveToLocalStorage(name,surname,mail);

        nameInput.value = "";
        surnameInput.value = "";
        emailInput.value = "";
    }
    else
    {
        userInfos = JSON.parse(localStorage.getItem("userData")) || [];

        if (userInfos != null){

            userInfos.forEach(data => {

                let infoBody = infoTable.getElementsByTagName("tbody")[0];

                let newRow = infoBody.insertRow();

                let nameCell = newRow.insertCell(0);
                let surnameCell = newRow.insertCell(1);
                let mailCell = newRow.insertCell(2);
                let progressCell = newRow.insertCell(3)

                nameCell.innerText = data.nameData;
                surnameCell.innerText = data.surnameData;
                mailCell.innerText = data.mailData;
                progressCell.innerHTML = '<button class="btn-edit"><i class="fa-solid fa-pen-to-square"></i></button> <button class="btn-delete"><i class="fa-regular fa-trash-can"></i></button>';
            });
        }
    }
}
    
function delOrEditInfo(e)
{
    const clickedTarget = e.target;

    if (clickedTarget.classList.contains("btn-edit")){
        console.log("edite tıkladın");

        sendButton.innerText = "Güncelle";

        let row = clickedTarget.parentNode.parentNode;
        let rowIndex = row.rowIndex;
        
        oldName = infoTable.rows[rowIndex].cells[0].innerText;
        oldSurname = infoTable.rows[rowIndex].cells[1].innerText;
        oldMail = infoTable.rows[rowIndex].cells[2].innerText;

        nameInput.value = oldName;
        surnameInput.value = oldSurname;
        emailInput.value = oldMail;
    }

    if (clickedTarget.classList.contains("btn-delete")){
        console.log("delete tıklandı");

        let row = clickedTarget.parentNode.parentNode;
        let rowIndex = row.rowIndex;
        
        var name = infoTable.rows[rowIndex].cells[0].innerText;
        var surname = infoTable.rows[rowIndex].cells[1].innerText;
        var email = infoTable.rows[rowIndex].cells[2].innerText;

        row.parentNode.removeChild(row);
        deleteFromLocalStorage(name, surname, email);
    }
}

function localToArray()
{
    if (localStorage.getItem("userData") === null){userInfos = [];}

    else {userInfos = JSON.parse(localStorage.getItem("userData"));}
}

function readLocalStorage(mode)
{
    localToArray();

    createItem("","","",true);
}

function saveToLocalStorage(name,surname,mail)
{
    let datas = {
        nameData: name,
        surnameData: surname,
        mailData: mail
    };

    // Var olan veriyi al, yoksa boş bir dizi oluştur
    userInfos = JSON.parse(localStorage.getItem("userData")) || [];
    
    // Var olan veriye yeni veriyi ekle
    userInfos.push(datas);

    // Güncellenmiş veriyi tekrar JSON formatına çevirip localStorage'a kaydet
    localStorage.setItem("userData", JSON.stringify(userInfos));
}

function deleteFromLocalStorage(name, surname, email)
{
    localToArray();

    userInfos = JSON.parse(localStorage.getItem("userData")) || [];

    for (var i = 0; i < userInfos.length; i++) {
        if (userInfos[i].nameData === name &&
            userInfos[i].surnameData === surname &&
            userInfos[i].mailData === email) {
          userInfos.splice(i, 1);
          break;
        }
    }

      // Güncellenmiş veriyi Local Storage'a geri kaydet
    localStorage.setItem("userData", JSON.stringify(userInfos));
}

function updateFromLocaleStorage(oldName,oldSurname,oldMail,newName,newSurname,newMail)
{
    userInfos = JSON.parse(localStorage.getItem("userData")) || [];

    for (let i = 0; i<= userInfos.length; i++)
    {
        if (userInfos[i].nameData === oldName && 
            userInfos[i].surnameData === oldSurname &&
            userInfos[i].mailData == oldMail)
        {
            userInfos[i].nameData = newName;
            userInfos[i].surnameData = newSurname;
            userInfos[i].mailData = newMail;
            break;
        }
    }

    localStorage.setItem("userData",JSON.stringify(userInfos));

    sendButton.innerText = "Ekle";
    nameInput.value = "";
    surnameInput.value = "";
    emailInput.value = "";
}

function deleteAllRows() {
    // Tabloyu temizle
    var tableBody = document.getElementById("info-table").getElementsByTagName('tbody')[0];
    while (tableBody.rows.length > 0) {
        tableBody.deleteRow(0);
    }
}