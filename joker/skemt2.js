//Definierar klass

class JokeHandlerRequest {
    //skapar constructor som startas när man skapar ett objekt av klassen

    constructor(adress) {
        this.adress = adress
    }

    //Skapar en method som det heter när man gör klasser, annars heter det function
    async getJoke() {

        let jokestring = "This is not a joke!"

        await fetch(
            
            this.adress, 
            {
                method: "GET",
                headers: new Headers({
                    Accept: "application/json"
                })
            }
        )
            .then(res => res.json())
            .then(response => {
                
                //console.log(`${response.joke}`)
                //let joke = response.joke
                //p_joke.innerHTML = joke;
                jokestring = response.joke
    
                
            })
            .catch(error => console.log(error));

            return jokestring
    
    }//end of getJoke()

}//end of JokeHandlerRequest


//Kör programmet
const jokebutton = document.getElementById("jokebutton")
jokebutton.addEventListener("click", getJoke)

const p_joke = document.getElementById("pjoke")

async function getJoke(e) {
    //console.log(e.target.id)

    const t_adress = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

    let joke_objekt = new JokeHandlerRequest(t_adress)
    p_joke.innerHTML = await joke_objekt.getJoke()

}