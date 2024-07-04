const makeJokeButton = document.querySelector(".make-joke");
const result = document.querySelector(".result");

makeJokeButton.addEventListener("click", getJoke);

async function getJoke(e){

    const myJoke = await new JokeApi().getRandomJoke();

    const myPicture = await new UnSplashApi().getRandomPitcure();

    result.innerHTML = `
    
    <div class="card">
                        <div class="card-image">
                          <figure class="image is-4by3">
                            <img
                              src="${myPicture}"
                              alt="Placeholder image"
                            />
                          </figure>
                        </div>
                        <div class="card-content">
                          <div class="media">
                            <div class="media-left">
                              <figure class="image is-48x48">
                                <img
                                  src="Resimler/enginar.png"
                                  alt="Placeholder image"
                                />
                              </figure>
                            </div>
                            <div class="media-content">
                              <p class="title is-4">Chuck Norris</p>
                              <p class="subtitle is-6">@chuckbibeşlik</p>
                            </div>
                          </div>
                      
                          <div class="content">
                            <p class="title is-4 has-text-primary joke"> ${myJoke} </p>
                          </div>
    
                        </div>

                      </div>   
                
                    </div>  

    `
}