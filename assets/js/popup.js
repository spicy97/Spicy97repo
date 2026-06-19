// VBS Popup — shows once per browser session using sessionStorage
(function () {
  'use strict';

  var STORAGE_KEY = 'vbs_popup_seen';
  var popup       = document.getElementById('vbs-popup');
  var closeBtn    = document.getElementById('popup-close');
  var dismissBtn  = document.getElementById('popup-dismiss');

  if (!popup) return;

  function openPopup() {
    popup.removeAttribute('hidden');
    popup.focus();
    document.body.style.overflow = 'hidden';
  }

  function closePopup() {
    popup.setAttribute('hidden', '');
    document.body.style.overflow = '';
    sessionStorage.setItem(STORAGE_KEY, '1');
  }

  // Only show if not already seen this session
  if (!sessionStorage.getItem(STORAGE_KEY)) {
    // Short delay so the page loads first
    setTimeout(openPopup, 1200);
  }

  // Close on X button
  if (closeBtn) closeBtn.addEventListener('click', closePopup);

  // Close on "Not right now" button
  if (dismissBtn) dismissBtn.addEventListener('click', closePopup);

  // Close on overlay click (but not on card click)
  popup.addEventListener('click', function (e) {
    if (e.target === popup) closePopup();
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !popup.hasAttribute('hidden')) closePopup();
  });

  // Track register button click in GA4
  var ctaBtn = popup.querySelector('.popup-cta');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', function () {
      if (typeof gtag === 'function') {
        gtag('event', 'popup_register_click', {
          event_category: 'VBS Registration',
          event_label: 'Popup CTA'
        });
      }
      closePopup();
    });
  }
})();
