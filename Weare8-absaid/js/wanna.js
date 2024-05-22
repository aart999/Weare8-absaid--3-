const menuButton = document.querySelector('.burger')
if (menuButton) {
    const menuBody = document.querySelector('.menu')
    menuButton.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock')
        menuButton.classList.toggle('_active')
        menuBody.classList.toggle('_active')
    })
}








function login(event) {

    event.preventDefault();


    var name = document.getElementById('name').value;


    window.location.href = "home.html?name=" + encodeURIComponent(name);

}



  function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}


var username = getQueryParam('name');
document.getElementById('hello').innerText = "Hey," + username;














function calculateDaysDifference() {

    var myDateStr = document.getElementById("myDate").value;
    var myDateObj = new Date(myDateStr);


    var userDateStr = document.getElementById("userDate").value;
    var userDateObj = new Date(userDateStr);


    var timeDiff = Math.abs(userDateObj.getTime() - myDateObj.getTime());


    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));


    document.getElementById("result").textContent = "it has been: " + diffDays + " days since i did the projects";
}










//loader


setTimeout(() => {
    const body = document.getElementById('body');
    
    body.style.display = 'none';
  
  }, 900); 
  

  