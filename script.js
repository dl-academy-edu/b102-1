var body = document.querySelector('body');
var buttonMenu = document.querySelector('.main-hero-btn');
var buttonClose = document.querySelector('.btn-close');
var popupWrapper = document.querySelector('.popup-wrapper');
var form = document.querySelector('.main-form2');
var buttonForTest = document.querySelector('.header-link-contact');
var img = document.querySelector('.service-dry-img');

function saveDate(date) {
  localStorage.setItem('date', JSON.stringify(date))
}
// fetch('https://dog.ceo/api/breeds/image/random')
//   .then((res) => res.json())
//   .then(res => {
//     console.log(res)
//     img.src = res.message
//   })

function loadDate() {
  if (localStorage.getItem('date')) {
    var date = JSON.parse(localStorage.getItem('date'))
    Object.keys(date).forEach((it) => {
      document.querySelector('[name=' + it + ']').value = date[it]
    })
  }
}
// loadDate();
if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    // console.log(form)
    var formData = {}

    form.querySelectorAll('input').forEach((it) => {
      formData[it.name] = it.value
      // console.log(it.name, it.value)
      // formData.append(it.name, it.value)
    })
    var textarea = form.querySelector('textarea');
    formData[textarea.name] = textarea.value
    console.log(formData);
    saveDate(formData)
  })


  form.addEventListener('reset', function (event) {
    console.log(event)
  })

}




if (buttonForTest) {
  buttonForTest.addEventListener('click', function (event) {
    event.preventDefault();
    if (!this.classList.contains('btn-purple')) {
      this.classList.add('btn-purple')
    } else {
      this.classList.remove('btn-purple')
    }
  })
}



var openPopup = function (event) {
  body.classList.add('popup-open')
  form.querySelectorAll('input')[0].focus()
}

function closePopup(event) {
  if (event.target === popupWrapper || event.target === buttonClose || event.code === 'Escape') {
    body.classList.remove('popup-open')
  }
}

window.addEventListener('keydown', closePopup)
if (popupWrapper) {
  popupWrapper.addEventListener('click', closePopup)
  buttonClose.addEventListener('click', closePopup)
  buttonMenu.addEventListener('click', openPopup)
}






































function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: { lat: -34.397, lng: 150.644 },
  });
  const geocoder = new google.maps.Geocoder();
  document.getElementById("submit").addEventListener("click", () => {
    geocodeAddress(geocoder, map);
  });
}

function geocodeAddress(geocoder, resultsMap) {
  const address = document.getElementById("address").value;
  geocoder.geocode({ address: address }, (results, status) => {
    if (status === "OK") {
      resultsMap.setCenter(results[0].geometry.location);
      new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location,
      });
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}
