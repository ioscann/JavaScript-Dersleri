const myPromise = new Promise((resolve, reject) => {
   
    // uzun sürecek işlemburaya yazılır

    setTimeout(() => {

        //resolve("işlem bitti");
        //reject("hata");

    },3000);
});

// myPromise
// .then(result => {console.log(result);})
// .catch(err => {console.log(err);});


function getStudents() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            let arr = [];

            for (let i = 0; i<10; i++) {
                arr.push({ad :"ogrenci" + (i+1), id : (i+1)});
            }

            resolve(arr); // işlem başarılıysa bunu döndür
            reject("Hata"); // yoksa bunu

        }, 2000);
    })
}

// getStudents()
// .then(arr => { console.log(arr);})
// .catch(err => { console.log(err);});

function getUser(id) {
    console.log(`${id} ID' li kullanıcının bilgisi getiriliyor`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ad : "İso", id : id});
        }, 2000);
    })
}

//const user = getUser(31);
//console.log(user);

// getUser(31)
// .then(user => {console.log(user);})
// .catch(err => {console.log(err);});

function getCourses(user){
    console.log(`${user} adlı kişinin kursları getiriliyor`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            resolve(["js","java","c#"]);
            reject("kurs yok aq");

        }, 2000);
    })
}

//const newUser = getCourses("İso");

// getCourses("İso")
// .then(user => {console.log(user)})
// .catch(err => {console.log(err);});

function getCommnets(user){
    console.log(`${user} adlı kursun yorumları getiriliyor`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            resolve({ad : user, comment :" yarrak gibi"});
            reject("yorum yok amk");

        }, 2000);
    })
}

// getCommnets("İso")
// .then(user => {console.log(user);})
// .catch(err => {console.log(err);});

// getUser(31)
// .then(user => getCourses(user.ad))
// .then(courses => getCommnets(courses[0]))
// .then(myComment => console.log(myComment.comment))
// .catch(err => {console.log(err);});

async function getNewCommnets()
{
    try
    {
        const userObject = await getUser(31);
        const courses = await getCourses(userObject.ad);
        const comments = await getCommnets(courses[0]);
        console.log(comments.comment);
    }
    catch (err) {console.log(err);}
}

getNewCommnets();