var submitIntro = document.getElementById("submitIntro")
var submitButton = document.getElementById("submit")
var nyalainButton = document.getElementById("nyalain")
var submitSecond = document.getElementById("submitSecond")
var submitThird = document.getElementById("submitThird")
var kataButton = document.getElementById("kataButton")
var headerName = document.getElementById("name")
var keisyaName = document.getElementById("keisya")
var pilganButton = document.querySelector('.pilganButton')
var intro = document.querySelector('.intro')
var login = document.querySelector('.login')
var siapa = document.querySelector('.siapa')
var hewan = document.querySelector('.hewan')
var cowo = document.querySelector('.cowo')
var gelap = document.querySelector('.gelap')
var main = document.querySelector('.main')
var videoAca = document.getElementById("videoaca")

var giftFirstButton = document.getElementById("giftFirstButton")
var giftTwoButton = document.getElementById("giftTwoButton")
var giftThreeButton = document.getElementById("giftThreeButton")
var giftFourButton = document.getElementById("giftFourButton")
var giftFiveButton = document.getElementById("giftFiveButton")
var giftSixButton = document.getElementById("giftSixButton")
var giftSevenButton = document.getElementById("giftSevenButton")


const intenseAudio = document.querySelector("#intense");
const birthdayAudio = document.querySelector("#birthday");



function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

submitIntro.addEventListener("click", (event) => {
  intenseAudio.play();
  intro.style.display = "none";
  login.style.display = "block";
});

nyalainButton.addEventListener("click", (event) => {
  gelap.classList.add("none");
  document.body.style.backgroundColor = "white";
  intenseAudio.pause();
  birthdayAudio.volume = 0.1
  birthdayAudio.play();
  sleep(2000).then(() => { main.classList.remove("none"); });
  
});


submitButton.addEventListener("click", (event) => {
    var name = document.getElementById("searchTxt").value
    if (name == 1936) {
        
        login.style.display = "none";
        siapa.style.display = "block";
      } else {
        headerName.innerHTML = `${name} itu pin siapa anjir`;
      }
    
  });

  submitSecond.addEventListener("click", (event) => {
    var nameSecond = document.getElementById("searchTxtSecond").value.toLowerCase();
    console.log(nameSecond)
    if (nameSecond === "keisya bilqis alhena") {
        document.body.style.backgroundColor = "black";

        siapa.style.display = "none";
        hewan.classList.remove("none");
        // sleep(2000).then(() => { gelap.classList.remove("none"); });

        

        
      } else {
        nameSecond.innerHTML = `${nameSecond} siapa cok, kaga spesial elu buat gua`;
      }
    
  });

  submitThird.addEventListener("click", (event) => {
    var nameThird = document.getElementById("searchTxtThird").value.toLowerCase();
    if (nameThird === "kupu-kupu" || nameThird === "kupu kupu" || nameThird === "kupukupu") {
        document.body.style.backgroundColor = "black";

        hewan.style.display = "none";
        cowo.classList.remove("none");
        // sleep(2000).then(() => { gelap.classList.remove("none"); });

        

        
      } else {
        keisyaName.innerHTML = `${nameSecond} siapa cok, kaga spesial elu buat gua`;
      }
    
  });


  giftFirstButton.addEventListener("click", (event) => {
    var name = document.getElementById("giftFirst").value;
    var header = document.getElementById("resultFirst");

    header.innerHTML = "1. " + name;

  });

  giftTwoButton.addEventListener("click", (event) => {
    var name = document.getElementById("giftTwo").value;
    var header = document.getElementById("resultTwo");

    header.innerHTML = "2. " + name;

  });

  giftThreeButton.addEventListener("click", (event) => {
    var name = document.getElementById("giftThree").value;
    var header = document.getElementById("resultThree");

    header.innerHTML = "3. " + name;

  });

  giftFourButton.addEventListener("click", (event) => {
    var name = document.getElementById("giftFour").value;
    var header = document.getElementById("resultFour");

    header.innerHTML = "4. " + name;

  });

  giftFiveButton.addEventListener("click", (event) => {
    var name = document.getElementById("giftFive").value;
    var header = document.getElementById("resultFive");

    header.innerHTML = "5. " + name;

  });

  giftSixButton.addEventListener("click", (event) => {
    var name = document.getElementById("giftSix").value;
    var header = document.getElementById("resultSix");

    header.innerHTML = "6. " + name;

  });

  giftSevenButton.addEventListener("click", (event) => {
    var name = document.getElementById("giftSeven").value;
    var header = document.getElementById("resultSeven");

    header.innerHTML = "7. " + name;

  });

  videoAca.addEventListener("click", (event) => {

    birthdayAudio.pause();
  });

  pilganButton.addEventListener("click", (event) => {

    cowo.style.display = "none";
    sleep(2000).then(() => { gelap.classList.remove("none"); });

    
  });

  kataButton.addEventListener("click", (event) => {

    var kataHeader = document.getElementById("kataHeader")

    kataButton.style.display = "none";
    kataHeader.classList.remove("none");

  });