console.log('Groetjes');


//Hartje kleur veranderen
var button = document.querySelector('footer > button');

button.addEventListener('click', function(){
    button.classList.toggle('active')
});

