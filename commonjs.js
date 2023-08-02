  // toggle Back to top button
  function toggleBackToTopButton() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    const getInTouchBtn = document.getElementById('getInTouchBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopBtn.style.display = 'block';
      getInTouchBtn.style.display = 'flex';
    } else {
      backToTopBtn.style.display = 'none';
      getInTouchBtn.style.display = 'none';
    }
  }
  
  // Function to scroll back to the top when the button is clicked
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  // Attach the "toggleBackToTopButton" function to the scroll event
  window.onscroll = function () {
    toggleBackToTopButton();
  };
  
  // Attach the "scrollToTop" function to the button's click event
  document.getElementById('backToTopBtn').onclick = function () {
    scrollToTop();
  };

  

 