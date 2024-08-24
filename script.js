var watchBrands = {
    DarthPrecision: {
      Pakistan: {
        img:"watches/Darth Presicion/darth3.png",
        productName: "Darth Primo",
        price: "8,999"
      },
      Turkey:{
        img:"watches/Galactic Eclipse/galactic1.png",
        productName: "Vader Chrono",
        price: "6,999"
      }
    },
    Quantum: {
      Malaysia: {
        img:"watches/Imperial ChronoTech/imperial3.png",
        productName: "Quantum Nexus",
        price: "8,999"
      },
      Singapore: {
        img:"watches/Quantum/quantum1.png",
        productName: "Nebula Command",
        price: "8,999"
      }
    },
    JediHorizon: {
      China : {
        img:"watches/Jedi Horizon Watches/jedi1.png",
        productName: "Jedi Vanguard",
        price: "7,899"
      },
      Japan :{
        img:"watches/kessel Quartz/quartz1.png",
        productName: "Kessel Nova",
        price: "9,599"
      }
    },
    VaderVortex: {
      Indonesia: {
        img:"watches/Jedi Horizon Watches/jedi2.png",
        productName: "Force Precision",
        price: "9,999"
      }
    },
    SithChronoWorks: {
      Laos: {
        img:"watches/Vader Vortex/vortex1.png",
        productName: "Sidious Era",
        price: "7,200"
      },
      Ireland: {
        img:"watches/Sveston/22.png",
        productName: "Orion Blaze",
        price: "7,200"
      }
    },
    Sveston: {
        Netherlands:{
            img:"watches/Vader Vortex/vortex3.png",
            productName: "Revan Regime",
            price: "9,200"
        }
    },
    KesselQuartz:{
        Scotland: {
            img:"watches/Rogue Titan/rogue1.png",
            productName: "Titan Forge",
            price: "7,800"
        }
    }
}
var main = document.querySelector("#main")
var brand = document.querySelector("#brand")
var country = document.querySelector("#country")
brand.innerHTML = `<option value="">Select Brand</option>`
country.innerHTML = `<option value="">Select Country</option>`

for(var key in watchBrands){
    brand.innerHTML += `<option value="${key}">${key}</option>`
    for(var key1 in watchBrands[key]){

    var obj = watchBrands[key][key1];
    main.innerHTML +=` <div class="card">
            <img src="${obj.img}" class="card-img-top">
            <div class="card-body">
                 <h5 class="card-title">${obj.productName}</h5>
                <p class="card-text">Rs.${obj.price}</p>
                <button class="card-btn">Buy Now</button>
            </div>
          </div>`
    }      
}
function setCountry(){
    country.innerHTML = ""
    country.innerHTML =`<option value ="">Select Country</option>`
    for(var key in watchBrands[brand.value]){
        country.innerHTML +=`<option value ="${key}">${key} </option>`
    }
}

var selectedCard = document.getElementById("selectedCard");

function searchProduct(){
    var userVal = watchBrands[brand.value][country.value];
    selectedCard.innerHTML = `<div class="card-selected">
            <img src="${userVal.img}" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${userVal.productName}</h5>
              <p class="card-text">Rs.${userVal.price}</p>
              <button class="card-btn">Buy Now</button>
            </div>
            </div>`
            main.style.display = 'none';
}
function clearProduct (){
    selectedCard.style.display ='none'
    main.style.display= "flex"
}