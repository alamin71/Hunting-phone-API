const LoadPhone = async (searchText, isShowAll) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
  const data = await res.json();
  const phones = (data.data);
  displyPhones(phones, isShowAll)
}
const displyPhones = (phones, isShowAll) => {
  //console.log(phones);
  const phonecontainer = document.getElementById('phone-container');
  //clear phone content card before adding new cards
  phonecontainer.textContent = '';
  //display show all btn if there are more then 12 phones
  const showAll = document.getElementById('show-all')
  if (phones.length > 12 && !isShowAll) {
    showAll.classList.remove('hidden');
  }
  else {
    showAll.classList.add('hidden')
  }
  //display only 12 phones if not showAll
  if (!isShowAll) {
    phones = phones.slice(0, 12);
  }
  phones.forEach(phones => {
    //console.log(phones)
    //create a div
    const phoneCard = document.createElement('div')
    phoneCard.classList = `card bg-green-100 p-4 shadow-xl`;
    phoneCard.innerHTML = `
        <figure><img src="${phones.image}" alt="Shoes" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">${phones.phone_name}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-center">
                        <button onclick="handleShowDetails('${phones.slug}'); ShowDetailModal.showModal()" class="btn btn-primary">Show Details</button>
                      </div>
                    </div>
                  </div>
        `;
    phonecontainer.appendChild(phoneCard);
  });
  toggoleLodingSpinner(false);


}
//handleShowDetails
const handleShowDetails = async (id) => {
  console.log('handleclickd', id);
  //load single data
  const res = await fetch(` https://openapi.programming-hero.com/api/phone/${id}`)
  const data = await res.json();
  const phones = data.data;
  showPhoneDetails(phones)
}
const showPhoneDetails = (phones) => {
  console.log(phones);
  const phoneName = document.getElementById('phone-name-details')
  phoneName.innerText = phones.name;
  const showdetailsContainer = document.getElementById('show-details-container')
  showdetailsContainer.innerHTML = `
  <img src="${phones.image}" alt="" />
  <p><span>Storage: </span>${phones?.mainFeatures?.storage
  }</p>
  <p><span>Display Size: </span>${phones?.mainFeatures?.displaySize
  }</p>
  <p><span>Brand: </span>${phones?.brand
  }</p>
  

  `
  //show modal
  ShowDetailModal.showModal()
}

//handle search btn
const handleSearch = (isShowAll) => {
  toggoleLodingSpinner(true)
  const searchField = document.getElementById('search-field')
  const searchText = searchField.value;
  console.log(searchText);
  LoadPhone(searchText, isShowAll);

}
//handlersearchbtn2
const handleSerch2 = () => {
  toggoleLodingSpinner(true)
  const searchfield2 = document.getElementById('seacrh-2');
  const searchText = searchfield2.value;
  console.log(searchText);
  LoadPhone(searchText);
}
const toggoleLodingSpinner = (isLoding) => {
  const loadingSpinner = document.getElementById('looding-spinner')
  if (isLoding) {
    loadingSpinner.classList.remove('hidden')
  }
  else (
    loadingSpinner.classList.add('hidden')
  )
}
//Handle show all
const showAllcontain = () => {
  handleSearch(true);
}
//LoadPhone();