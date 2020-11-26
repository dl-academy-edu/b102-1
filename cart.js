
; (function () {
  var header = document.querySelector('.header')

  var form = document.querySelector('.main-form')


  async function handleSubmit(event) {
    event.preventDefault();
    var formData = new FormData(form)
    console.log(Array.from(formData))

    var object = {};
    formData.forEach(function (value, key) {
      object[key] = value;
    });
    var json = JSON.stringify(object);
    var res = await fetch('https://js-simple-6efdf.firebaseio.com/forms.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: json
    })
    try {
      console.log(res)
      if (res.status === 400) {
        console.log('error')
      }
    } catch (err) {
      console.log(err)
    }
  }

  form.addEventListener('submit', handleSubmit)


  fetch('./html.json')
    .then((res) => {
      return res.json()
    }).then((res) => {
      // console.log(res)
      // // var arrayFromObject = Object.values(res)
      // // var html = arrayFromObject[2].note
      // // console.log(html.slice(1, 0))
      // setTimeout(() => {
      //   header.insertAdjacentHTML('afterend', res.html)
      // }, 1000)

      // render(arrayFromObject)
    })

  function render(data) {
    data.map(element => {
      var newLi = createElements(element)
      root.append(newLi)
    });
  }


  function createElements(item) {
    var li = document.createElement('li')
    var img = document.createElement('img')
    var h3 = document.createElement('h3')
    var span = document.createElement('span')
    var span2 = document.createElement('span')
    h3.innerText = item.name
    img.src = item.img
    span.innerText = item.price
    span2.innerText = item.quantity
    li.append(img, h3, span, span2)
    return li
  }




})()