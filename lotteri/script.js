const antal_vinster = document.getElementById("antalvister")
const svar = document.getElementById("svar_div")

const vinster = ["8kg rent colombianskt kokain", "Två barnarbetare från Shanghai", "100 tusen kronor i omärkta sedlar", "En Iphone 3g", "Tre stolar från Ikea", "Kronisk fettma", "Aids", "15 gram närodlad cannabis", "En halväten smörgås", "B̴̨̦̪͔̖͌̑́̿͆̓͌̔̐́͝o̵̳͔̦̳͕̫̩̾̽̏̾̑͐̇͒̿́̀̐͝r̶̼̪̲͕͓̈́͐̓͛ͅd̶͍̹̺͇̳̬̹̗̩̄ͅ", "Fler röster i ditt huvud" ]
vinster.length

function buttonClick(e){

    let vinst = `<h3>Du vann:</h3>`;

    let antal_lotter = parseInt(antal_vinster.value);

    //console.log(`${antal_lotter} lotter`);


    if (antal_lotter > 0 && antal_lotter<4){

        for (i=0; i<antal_lotter;){
            let slumptal = Math.floor(Math.random() * vinster.length);
            let t_vinst = vinster[slumptal];

            vinst += `<p> ${t_vinst} </p>`
            i=i+1

        }

        svar.innerHTML = vinst;
    }
    else{

        alert("För många lotter eller 0 valda!")
    }

}