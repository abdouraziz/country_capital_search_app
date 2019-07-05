const search = document.getElementById("search")
const listCountry=document.getElementById("list-capital")


const searchCapital= async searchText => {

    const res= await fetch('../docs/country_capital.json')
    const countries= await res.json()
    console.log(countries)

         //get country by filter

         let matches = countries.filter(elem=>{
             const regex=new RegExp(`^${searchText}`,'gi')
             return elem.country.match(regex)
         })

         if(searchText.length===0){
             matches=[]
             listCountry.innerHTML=""
         }

         outPut(matches);

}

const outPut =matches =>{
    if(matches.length >0){

        let country = matches.map(elem=>{
            return `<div class="card-country">
                <h3>${elem.country}</h3>
                <h3>${elem.capital}</h3 >
            </div>`
        }).join('')

        listCountry.innerHTML=country
    }

}

search.addEventListener('input',()=>searchCapital(search.value))