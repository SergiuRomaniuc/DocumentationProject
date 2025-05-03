
window.onscroll = onScroll;


var previousPosition = 0;

function onScroll() {

  var removeActiveClass = function (elements) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.remove('active');
    }
  }

  var currentTop = document.documentElement.scrollHeight;
  const navAnchors = document.querySelectorAll('#navbar a');
  var currentPosition = 0;
  for(var i = 0; i < navAnchors.length; i++ ) {
    const theID = navAnchors[i].getAttribute("href").replace('#','');
    const currentOffset = document.getElementById(theID).getBoundingClientRect().top;

    if (currentTop > currentOffset && currentOffset >= 0) {
      currentTop = currentOffset;
      currentPosition = i;
    }

    if (currentPosition !== previousPosition) {
      const heightRemaining = (document.documentElement.scrollHeight - window.scrollY) / document.documentElement.scrollHeight * 100;
      if (heightRemaining <= 9) {
        //the case of the last element on the page
        removeActiveClass(navAnchors);
        navAnchors[navAnchors.length - 1].classList.add('active');
      } else {
        removeActiveClass(navAnchors);
        navAnchors[currentPosition - 1].classList.add('active');
      }
    }
  }
}
