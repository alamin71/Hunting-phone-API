const LoadPhone = async (searchText) => {
const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
const data = await res.json();
const phones = (data.data);
displyPhones(phones)
}
const displyPhones = phones =>{
    //console.log(phones);
    const phonecontainer = document.getElementById('phone-container');
    //clear phone content card before adding new cards
    phonecontainer.textContent='';
    //display show all btn if there are more then 10 phones
    const showAll = document.getElementById('show-all')
    if(phones.length>12){
         showAll.classList.remove('hidden');
    }
    else{
      showAll.classList.add('hidden')
    }
    //display only 12 phones
    phones = phones.slice(0,12);
    phones.forEach(phones =>{
        //console.log(phones)
        //create a div
        const phoneCard = document.createElement('div')
        phoneCard.classList = `card bg-green-100 p-4 shadow-xl`;
        phoneCard.innerHTML = `
        <figure><img src="${phones.image}" alt="Shoes" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">${phones.phone_name}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
        `;
        phonecontainer.appendChild(phoneCard);
    });
    toggoleLodingSpinner(false);
    

}
//handle search btn
const handleSearch = () => {
  toggoleLodingSpinner(true)
  const searchField = document.getElementById('search-field')
  const searchText = searchField.value;
   console.log(searchText);
  LoadPhone(searchText);

}
//handlersearchbtn2
const handleSerch2 = () =>{
  toggoleLodingSpinner(true)
  const searchfield2 = document.getElementById('seacrh-2');
  const searchText = searchfield2.value;
  console.log(searchText);
  LoadPhone(searchText);
}
const toggoleLodingSpinner= (isLoding) =>{
  const loadingSpinner = document.getElementById('looding-spinner')
 if(isLoding){
  loadingSpinner.classList.remove('hidden')
 }
 else(
loadingSpinner.classList.add('hidden')
 )
}
//LoadPhone();