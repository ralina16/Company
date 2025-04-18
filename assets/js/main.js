  const reviews = document.querySelectorAll('.review');
  const prevButton = document.getElementById('prevReview');
  const nextButton = document.getElementById('nextReview');

  let currentIndex = 0; 

  function showReview(index) {
      reviews.forEach((review, i) => {
          review.classList.remove('active');
      });

      reviews[index].classList.add('active');
  }

  nextButton.addEventListener('click', () => {
      currentIndex++;
      if (currentIndex >= reviews.length) {
          currentIndex = 0; 
      }
      showReview(currentIndex);
  });

  prevButton.addEventListener('click', () => {
      currentIndex--;
      if (currentIndex < 0) {
          currentIndex = reviews.length - 1;
      }
      showReview(currentIndex);
  });

  showReview(currentIndex);





  document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        item.addEventListener('click', function () {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
            } else {
                accordionItems.forEach(item => {
                    item.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
});