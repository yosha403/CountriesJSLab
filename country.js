class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"])

let countries=[usa,mexico,algeria];
console.log("All countries "+ countries)
console.log("usa"+ usa);
function SwitchCountry() {

    let input= document.getElementById("CountryList").value;
    console.log("Selected country is "+ input);
    for(c of countries){
        if(c.name===input){
            console.log("selected name is "+ c.name);
            console.log("color1: "+c.colors[0]);
            console.log("color2: "+c.colors[1]);
            console.log("color3: "+c.colors[2]);
            document.getElementById("Color1").style.backgroundColor = c.colors[0];
            document.getElementById("Color2").style.backgroundColor = c.colors[1];
            document.getElementById("Color3").style.backgroundColor = c.colors[2];
            document.getElementById("CountryName").innerText=c.name;
            document.getElementById("OfficialLanguage").innerText=c.lang;           
            document.getElementById("HelloWorld").innerText=c.greeting;
    }    

}
}
