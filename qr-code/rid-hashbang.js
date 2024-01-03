// Code goes here

window.addEventListener('load', function(e)
{
  as = document.querySelectorAll('a[href^="#"]');
  as.forEach(function(a)
  {
    a.addEventListener('click', function(e)
    {
      e.preventDefault();
      
      var hash = e.target.href.split('#')[1];
      var targetEl = document.getElementById(hash);
      
      window.scrollTo(0, targetEl.offsetTop);
      
      console.log(targetEl.offsetTop)
    });
  });
});
