class UnSplashApi{
    constructor(){
        this.baseURL = "https://api.unsplash.com";
        this.clientID = "Client-ID YCnr-i_TE8XYQkgwGnGK25S9kuhRYbAkMcnlUS9P9o0";
        this.myAxios = axios.create({
            baseURL : this.baseURL,
            headers: {
                Authorization : this.clientID
            },
            params :{
                query : "animal"
            }
        });
    }

    async getRandomPitcure()
    {

        try
        {
            const pictureResponce = await this.myAxios.get("/photos/random");

            console.log(pictureResponce.data.urls.regular);

            return pictureResponce.data.urls.regular;
        }
        catch (error) {console.log(error);}
        
    }
}