function showContent(id) {
    document.getElementById(id).style.visibility = 'visible';
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('dugme');
    button.addEventListener('click', function() {
      window.location.href = 'start.html';
    });
  });