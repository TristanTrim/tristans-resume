// JS snippit for making nested accordion links.

function open(element) {
        element.parent().parent().find('li .inner').removeClass('show');
        element.parent().parent().find('li .inner').slideUp(450);
        element.next().toggleClass('show');
        element.next().slideToggle(350);
        element.context.style.borderBottomStyle="none";
}
function close(element) {
        element.next().removeClass('show');
        element.next().slideUp(450);
        element.context.style.borderBottomStyle="solid";
}

$('.toggle').click(function(e) {
  	e.preventDefault();
  
    var $this = $(this);
    if ($this.next().hasClass('show')) {
      close($this);
    } else {
      open($this);
    }
});

//Hide all the hidables when the page loads.
$(document).ready(function() {
    $('.toggle').each(function() {
        console.log($(this));
        if ($(this).context.classList.contains("stayOpen")){
          $(this).next().toggleClass('show');
        } else {
          close($(this));
        }
    });
});
