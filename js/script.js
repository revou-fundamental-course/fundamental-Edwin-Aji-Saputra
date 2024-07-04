function validateForm () {
    let firstName = document.getElementById('firstname').value;
    let lastName = document.getElementById('lastname').value;

    console.log(firstname);
    console.log(lastname);

    if (firstName != '' && lastName != '' ) {
        document.querySelector('#result').innerHTML = firstName + ' ' + lastName;
    } else {
        alert('Inputan ada yang kosong');
    }
}


function showSlide() {
    document.getElementsByClassName('banner-item')[0].computedStyleMap.display = 'none';
    document.getElementsByClassName('banner-item')[1].computedStyleMap.display = 'block';
}