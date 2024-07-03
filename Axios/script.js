const getButton = document.querySelector(".get");
const postButton = document.querySelector(".post");
const pushPatchButton = document.querySelector(".push-patch");
const deleteButton = document.querySelector(".del");
const requestSameTimeButton = document.querySelector(".request-same-time");
const headersButton = document.querySelector(".headers");
const errorButton = document.querySelector(".error");

getButton.addEventListener("click", getData);
postButton.addEventListener("click", postData);
pushPatchButton.addEventListener("click", pushPatchData);
deleteButton.addEventListener("click", deleteData);
requestSameTimeButton.addEventListener("click", requestSameTimeData);
headersButton.addEventListener("click", customHeader);
errorButton.addEventListener("click", errorProcesses);

// Bir axios nesnesi tanımlayıp her seferinde uzun linkler girmek yerine daha kısa linkler girilebilir

const myAxios = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com",
    headers : {"X-Requested-With" : "XMLHttpRequest", "token" : "anananananan"},
});

myAxios.get("./users").then(responce => console.log(responce))

// Bir işlem (get,post vs) yapılmadan önce bir şeyleri değiştirmek istiyorson bunu kullan

axios.interceptors.request.use(config => {

    console.log(`${config.url} adresine ${config.method} isteği yapıldı ve timeout ${config.timeout} olarak ayarlandı`);

    return config;
});

// Bir işlem sonucunda API'den hangi yanıtı aldığını görüp buna göre işlem yapmak istiyorsan bunu kullan 

axios.interceptors.request.use(responce => {

    if (responce.status === 200) {responce.status = 999;}

     return config;
},error => {return Promise.reject(error)});

// Eğer headerlarını önden tanımlamak istiyorsan bunu kullanabilirsin

axios.defaults.headers.common["X-Auth-Token"] = "apitokendegeri";
axios.defaults.headers.common["MyToken"] = "mytoken";
axios.defaults.headers.common["Authorization"] = "ornekdeger";

// Aşağıda get,post,put-patch,header,delete,all vs bütün fonksiyonları bulabilirsin

function getData(){
    console.log("getData --> executed");

    axios({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
        params: {
            _limit: 2 // 2 den fazla veri getirme demek
            // url: "https://jsonplaceholder.typicode.com/users_limit2" de yazabilirsin
        }
    })
    .then(responce => {console.log(responce); printResult(responce)})
    .catch(err => console.log(err))
    .then(() => console.log("Request finished"));
}

function postData(){
    console.log("postData --> executed");

    // axios.post("https://jsonplaceholder.typicode.com/posts",{
    //     title: "Yeni başlık",
    //     body: "Burası body kısmı",
    //     userID: 31
    // })
    // .then(responce => {console.log(responce); printResult(responce)})
    // .catch(error => console.log(error))
    // .then(() => console.log("Post finished"));

    axios.post("https://jsonplaceholder.typicode.com/users",{
        id: 31,
        name: "İsmailcan",
        username: "ioscan",
        email: "anan"
    })
    .then(responce => printResult(responce))
    .catch(error => console.log(error));
}

function pushPatchData(){
    console.log("pushPatchData --> executed");

    // axios.put("https://jsonplaceholder.typicode.com/posts/1",{
    //     name: "İso",
    //     username: "enginar",
    //     email: "baban"
    // })
    // .then(responce => printResult(responce))
    // .catch(error => console.log(error));

    axios.patch("https://jsonplaceholder.typicode.com/posts/1",{ //linkin sonundaki 1 query selector yani 1 numaralı id ye sahip item üzerinde işlem yapılır
        name: "İso",
        username: "enginar",
        email: "baban"
    })
    .then(responce => printResult(responce))
    .catch(error => console.log(error));
}

function deleteData(){
    console.log("deleteData --> executed");

    axios.delete("https://jsonplaceholder.typicode.com/posts/1",)
    .then(responce => printResult(responce))
    .catch(error => console.log(error));
}

function requestSameTimeData(){
    console.log("requestSameTimeData --> executed");

    axios.all([
        axios.get("https://jsonplaceholder.typicode.com/users"),
        axios.get("https://jsonplaceholder.typicode.com/posts")
    ])
    .then(responce => {console.log(responce[0].data); console.log(responce[1].data); printResult(responce[0])})
}

function customHeader(){
    console.log("customHeader --> executed");

    const config = {
        headers: {"Content-Type": "application/json", Authorization: "ornekdeger"}
    }

    axios.post("https://jsonplaceholder.typicode.com/users",{
        name: "İsmailcan",
        username: "ioscan",
        email: "anan"
    },config)
    .then(responce => printResult(responce))
    .catch(error => console.log(error));

}

function errorProcesses(){
    console.log("errorProcesses --> executed");

    axios("https://jsonplaceholder.typicode.com/userss")
    .then(responce => printResult(responce))
    .catch(error => printError(error));
}

function printError(error){
    console.log("printError --> executed");

    document.querySelector(".result").innerHTML = `

    <div class="notification is-danger">
    
    <div class="column is-mobile -is-vcentered">

        <div class="column"><h1 class="subtitle"> Sonuç </h1></div>
        <div class="column"><h1 class="title"> 
            <pre> ${JSON.stringify(error,null,4)} </pre> 
        </h1></div>

        </div>

    </div>
    `
}

function printResult(responce){
    document.querySelector(".result").innerHTML = 
    
    `
    <div class="notification is-info">

            <div class="column is-mobile -is-vcentered">

                <div class="column"><h1 class="subtitle"> Sonuç </h1></div>
                <div class="column"><h1 class="title"> ${JSON.stringify(responce.status)} </h1></div>

            </div>

        </div>
        
        <div class="section">

            <article class="message is-info">
                <div class="message-header">
                    <p>Header</p>
                    <button class="delete" aria-label="delete"></button>
                </div>
        
                <div class="message-body">
                    <pre> ${JSON.stringify(responce.headers,null,4)} </pre>
                </div>
            </article>

        </div>

        <div class="section">

            <article class="message is-warning">
                <div class="message-header">
                    <p>Data</p>
                    <button class="delete" aria-label="delete"></button>
                </div>
        
                <div class="message-body">
                    <pre> ${JSON.stringify(responce.data,null,4)} </pre>
                </div>
            </article>

        </div>
        
            
        <div class="section">

            <article class="message is-primary">
                <div class="message-header">
                    <p>Config</p>
                    <button class="delete" aria-label="delete"></button>
                </div>
        
                <div class="message-body">
                    <pre> ${JSON.stringify(responce.config,null,4)} </pre>
                </div>
            </article>

        </div>
        `
}
