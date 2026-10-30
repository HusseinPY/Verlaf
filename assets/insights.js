/* Verlaf Insights — staggered release.
   To release papers one at a time, set a date (YYYY-MM-DD, Dubai time) for each paper below.
   Before its date, a paper's card on the homepage and the Insights page shows "Coming <date>" instead of a link.
   Leave a value as null to show the paper immediately. */
(function(){
  var RELEASES = {
    'supply-before-quotas': null,
    'scholarships-to-strategic-investment': null,
    'academies-national-capability': null,
    'nursing-first-choice-career': null
  };
  var ar = document.documentElement.lang === 'ar';
  var now = new Date();
  document.querySelectorAll('.paper-card[data-slug]').forEach(function(card){
    var d = RELEASES[card.getAttribute('data-slug')];
    if (!d) return;
    var when = new Date(d + 'T00:00:00+04:00');
    if (now >= when) return;
    card.classList.add('upcoming');
    var soon = card.querySelector('.soon');
    if (soon) {
      var label = when.toLocaleDateString(ar ? 'ar-AE-u-nu-latn' : 'en-GB', {day:'numeric', month:'long', year:'numeric', timeZone:'Asia/Dubai'});
      soon.textContent = (ar ? 'قريبًا · ' : 'Coming ') + label;
      soon.hidden = false;
    }
  });
})();
