window.addEventListener('scroll', () => {
    const verticalScrollPx = window.scrollY || window.pageYOffset;
  
    if (verticalScrollPx > 1900) {
      document.body.style.backgroundColor = '#fff';
      document.getElementById("changecolor").style.color = '#002B31'; // cooperation section maintext div
      document.getElementById("searchcolor").style.backgroundColor = '#fff'; // white bg for slider
      document.body.style.transition = 'all .5s ease';
    }
    else if (verticalScrollPx > 100 && verticalScrollPx < 1900) {
        document.body.style.backgroundColor = '#002B31';
        document.getElementById("changecolor").style.color = '#fff';
        document.getElementById("searchcolor").style.backgroundColor = '#002B31'; // green bg for slider
      }
  });

