class JokeApi{
    constructor(){
        this.baseURL = "https://api.chucknorris.io/";
        this.myAxios = axios.create({
            baseURL : this.baseURL,
        });
    }

    async getRandomJoke(){

        try
        {
            const jokeResponce = await this.myAxios.get("/jokes/random");

            console.log(jokeResponce.data.value);

            return jokeResponce.data.value;
        }
        catch (error) {console.log(error);}
        
    }
}