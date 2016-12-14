// JS snippit for making nested accordion links.

$('.toggle').click(function(e) {
  	e.preventDefault();
  
    var $this = $(this);
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});

//Hide all the hidables when the page loads.
$(document).ready(function() {
    $('.inner').each(function() {
        var $this = $(this);
        $this.removeClass("show");
        $this.slideUp(350);
    });
});
