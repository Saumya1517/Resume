document.querySelector('#preview-btn').addEventListener('click', function() {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const address = document.querySelector('#address').value;
    const summary = document.querySelector('#summary').value;
    const experience = document.querySelector('#experience').value;
    const education = document.querySelector('#education').value;

    
    document.querySelector('#resume-name').innerText = name;
    document.querySelector('#resume-email').innerText = email;
    document.querySelector('#resume-phone').innerText = phone;
    document.querySelector('#resume-address').innerText = address;
    document.querySelector('#resume-summary').innerText = summary;
    document.querySelector('#resume-experience').innerText = experience;
    document.querySelector('#resume-education').innerText = education;

    
    document.querySelector('#form-container').classList.add('hidden');
    document.querySelector('#resume-container').classList.remove('hidden');
});

document.querySelector('#edit-btn').addEventListener('click', function() {

    document.querySelector('#resume-container').classList.add('hidden');
    document.querySelector('#form-container').classList.remove('hidden');
});
