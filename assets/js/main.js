// Minimal JS: handle contact form and a simple directory search demo
document.addEventListener('DOMContentLoaded',function(){
  var form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thank you! This is a demo contact form. Hook it to a backend to collect submissions.');
      form.reset();
    });
  }

  var btn = document.getElementById('doSearch');
  if(btn){
    btn.addEventListener('click', function(){
      var q = document.getElementById('search').value.toLowerCase();
      var results = document.getElementById('results');
      if(!q){ alert('Enter a search term.'); return; }
      // very small demo filter: hide non-matching company nodes
      Array.from(results.querySelectorAll('.company')).forEach(function(node){
        var t = node.textContent.toLowerCase();
        node.style.display = t.includes(q) ? '' : 'none';
      });
    });
  }
});
