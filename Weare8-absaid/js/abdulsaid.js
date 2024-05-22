function saveUserName() {
    // Get the user input
    var userName = document.getElementById('userName').value;

    // Save the user input to localStorage
    localStorage.setItem('userName', userName);

    // Redirect to the display page
    window.location.href = 'abdulsaidProfile.html';
}