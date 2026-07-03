---
layout: default
title: VBS Registration
description: "Register your child for the 3-Day Surprise Party VBS at Christ Central Buffalo — August 21–23, 2026."
permalink: /vbs-registration/
---

<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- Page Header -->
<header class="page-header">
  <div class="container">
    <span class="hero-eyebrow" style="margin-bottom:1rem; display:inline-block;">🎉 VBS 2026</span>
    <h1>Register for VBS</h1>
    <p>3-Day Surprise Party &nbsp;·&nbsp; August 21–23, 2026 &nbsp;·&nbsp; $5 per child</p>
  </div>
</header>

<div class="color-stripe" aria-hidden="true"></div>

<!-- Registration Form Section -->
<section class="section" aria-labelledby="register-heading">
  <div class="container">
    <div class="reg-form-wrap">

      <div class="reg-intro">
        <h2 id="register-heading" class="section-title" style="text-align:center;">Sign Up Your Child(ren)</h2>
        <p style="text-align:center; color:#555566; margin-bottom:2.5rem;">
          Fill out the form below. You can register multiple children in one submission — just click <strong>"+ Add Another Child"</strong> after filling in the first child's info.
        </p>
      </div>

      <!-- Success message (hidden until submit) -->
      <div id="reg-success" class="reg-success" hidden aria-live="polite">
        <div class="reg-success-inner">
          <div class="reg-success-emoji">🎉</div>
          <h3>You're registered!</h3>
          <p>Thanks for signing up! We can't wait to see your child(ren) at VBS. See you August 21–23!</p>

          <div class="reg-giving-box">
            <p class="reg-giving-title">💳 Pay Your $5 Per Child Registration Fee</p>
            <p class="reg-giving-desc">You can pay online through our giving page — no cash needed!</p>
            <a href="https://collectcheckout.com/collect-checkout/fields?cartId=c71d9f4d-cec7-4c2a-b525-bebde6e3dafb"
               class="btn btn-primary"
               target="_blank"
               rel="noopener noreferrer">
              Pay Online Now →
            </a>
            <div class="reg-giving-memo">
              <p><strong>In the memo / note field, please write:</strong></p>
              <p class="reg-giving-memo-example">[Child's name(s)] — VBS 2026</p>
              <p class="reg-giving-memo-eg">e.g. "Emma &amp; Noah Smith — VBS 2026"</p>
            </div>
          </div>

          <a href="/vbs/" class="btn btn-secondary" style="margin-top:0.5rem;">Back to VBS Info →</a>
        </div>
      </div>

      <!-- Error message (hidden until needed) -->
      <div id="reg-error" class="reg-error" hidden aria-live="polite">
        <p>⚠️ Something went wrong. Please try again or email us at <a href="mailto:jonathan.choi@christcentralbuffalo.com">jonathan.choi@christcentralbuffalo.com</a>.</p>
      </div>

      <form id="vbs-reg-form" class="reg-form" novalidate>

        <!-- ── Children (first) ───────────────────────────── -->
        <div id="children-container">
          <!-- Child blocks are injected here by JS -->
        </div>

        <!-- Add Child Button -->
        <div class="reg-add-child-wrap">
          <button type="button" id="add-child-btn" class="btn-add-child" aria-label="Add another child">
            <span aria-hidden="true">+</span> Add Another Child
          </button>
        </div>

        <!-- ── Parent / Guardian Information ─────────────── -->
        <div class="reg-section">
          <h3 class="reg-section-title">
            <span class="reg-section-icon">👤</span>
            Parent / Guardian Information
          </h3>
          <p class="reg-section-note">This information is shared for all children in this registration.</p>

          <div class="reg-fields">
            <div class="reg-field reg-field--full">
              <label for="parent-name">Parent / Guardian Name <span class="req" aria-hidden="true">*</span></label>
              <input type="text" id="parent-name" name="parent_name" autocomplete="name" required placeholder="Full name">
            </div>

            <div class="reg-field">
              <label for="parent-email">Email Address <span class="req" aria-hidden="true">*</span></label>
              <input type="email" id="parent-email" name="parent_email" autocomplete="email" required placeholder="you@example.com">
            </div>

            <div class="reg-field">
              <label for="parent-phone">Phone Number <span class="req" aria-hidden="true">*</span></label>
              <input type="tel" id="parent-phone" name="parent_phone" autocomplete="tel" required placeholder="(716) 555-0100">
            </div>

            <div class="reg-field reg-field--full">
              <label for="ec-pickup">Names of people approved for child pickup <span class="req" aria-hidden="true">*</span></label>
              <input type="text" id="ec-pickup" name="ec_pickup" required placeholder="e.g. Jane Smith, Bob Johnson">
              <span class="reg-field-hint">List everyone who is allowed to pick up your child(ren).</span>
            </div>
          </div>
        </div>

        <!-- ── Emergency Contact ──────────────────────────── -->
        <div class="reg-section">
          <h3 class="reg-section-title">
            <span class="reg-section-icon">👪</span>
            Emergency Contact
          </h3>

          <!-- "Same as parent" toggle -->
          <label class="reg-same-label">
            <input type="checkbox" id="ec-same" name="ec_same" checked>
            <span>Emergency contact is the same as parent / guardian above</span>
          </label>

          <!-- Extra EC fields — hidden when checkbox is checked -->
          <div id="ec-different-fields" class="reg-ec-different" hidden>
            <p class="reg-section-note" style="margin-top:1rem;">Please provide a different emergency contact below.</p>
            <div class="reg-fields">
              <div class="reg-field reg-field--full">
                <label for="ec-name">Emergency Contact Name <span class="req" aria-hidden="true">*</span></label>
                <input type="text" id="ec-name" name="ec_name" autocomplete="off" placeholder="Full name">
              </div>
              <div class="reg-field">
                <label for="ec-email">Emergency Contact Email <span class="req" aria-hidden="true">*</span></label>
                <input type="email" id="ec-email" name="ec_email" autocomplete="off" placeholder="you@example.com">
              </div>
              <div class="reg-field">
                <label for="ec-phone">Emergency Contact Phone <span class="req" aria-hidden="true">*</span></label>
                <input type="tel" id="ec-phone" name="ec_phone" autocomplete="off" placeholder="(716) 555-0100">
              </div>
            </div>
          </div>
        </div>

        <!-- Submit -->
        <div class="reg-submit-wrap">
          <button type="submit" id="reg-submit-btn" class="btn btn-primary reg-submit-btn">
            Submit Registration →
          </button>
          <p class="reg-required-note"><span class="req" aria-hidden="true">*</span> Required fields</p>
        </div>

      </form>

    </div><!-- /.reg-form-wrap -->
  </div>
</section>

<!-- Script -->
<script>
(function () {
  // ── CONFIG ────────────────────────────────────────────────────────
  var SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwoMsgV38eZ-MbpZUwaYaRJUKglQ1JW4f2Bkz5UscU4P9lvP06Hh9PL88Q25XZ7ZK68/exec';
  // ─────────────────────────────────────────────────────────────────

  var childCount   = 0;
  var container    = document.getElementById('children-container');
  var addBtn       = document.getElementById('add-child-btn');
  var form         = document.getElementById('vbs-reg-form');
  var submitBtn    = document.getElementById('reg-submit-btn');
  var successBox   = document.getElementById('reg-success');
  var errorBox     = document.getElementById('reg-error');
  var ecSameChk    = document.getElementById('ec-same');
  var ecDiffFields = document.getElementById('ec-different-fields');
  var ecNameEl     = document.getElementById('ec-name');
  var ecEmailEl    = document.getElementById('ec-email');
  var ecPhoneEl    = document.getElementById('ec-phone');

  // ── "Same as parent" toggle ───────────────────────────────────────
  function updateEcVisibility() {
    var same = ecSameChk.checked;
    ecDiffFields.hidden = same;
    // Only require the extra fields when they're visible
    ecNameEl.required  = !same;
    ecEmailEl.required = !same;
    ecPhoneEl.required = !same;
  }
  ecSameChk.addEventListener('change', updateEcVisibility);
  updateEcVisibility(); // run on load

  // ── Dropdown options ──────────────────────────────────────────────
  var AGES   = [4,5,6,7,8,9,10,11,12];
  var GRADES = ['Pre-K','Kindergarten','1st','2nd','3rd','4th','5th','6th'];
  var SHIRT_SIZES = ['Youth XS (4–5)','Youth S (6–8)','Youth M (10–12)','Youth L (14–16)','Adult S','Adult M','Adult L','Adult XL'];

  function optionsHtml(arr) {
    return arr.map(function(v) {
      return '<option value="' + v + '">' + v + '</option>';
    }).join('');
  }

  // ── Build a child block ───────────────────────────────────────────
  function buildChildBlock(index) {
    var num   = index + 1;
    var id    = 'child-' + index;
    var label = 'Child ' + num;

    var block = document.createElement('div');
    block.className = 'reg-child-block';
    block.dataset.index = index;
    block.setAttribute('aria-label', label);

    block.innerHTML =
      '<div class="reg-child-header">' +
        '<h3 class="reg-child-title">' +
          '<span class="reg-child-icon" aria-hidden="true">🎉</span>' +
          '<span class="reg-child-label">' + label + '</span>' +
        '</h3>' +
        (index > 0
          ? '<button type="button" class="reg-remove-btn" aria-label="Remove ' + label + '">' +
              '<span aria-hidden="true">✕</span> Remove' +
            '</button>'
          : '') +
      '</div>' +
      '<div class="reg-fields">' +

        // Child name — full width
        '<div class="reg-field reg-field--full">' +
          '<label for="' + id + '-name">Child\'s Full Name <span class="req" aria-hidden="true">*</span></label>' +
          '<input type="text" id="' + id + '-name" name="child_name[]" required autocomplete="off" placeholder="First and last name">' +
        '</div>' +

        // Age dropdown
        '<div class="reg-field">' +
          '<label for="' + id + '-age">Age <span class="req" aria-hidden="true">*</span></label>' +
          '<select id="' + id + '-age" name="child_age[]" required>' +
            '<option value="" disabled selected>Select age</option>' +
            optionsHtml(AGES) +
          '</select>' +
        '</div>' +

        // Grade dropdown
        '<div class="reg-field">' +
          '<label for="' + id + '-grade">Grade <span class="req" aria-hidden="true">*</span></label>' +
          '<select id="' + id + '-grade" name="child_grade[]" required>' +
            '<option value="" disabled selected>Select grade</option>' +
            optionsHtml(GRADES) +
          '</select>' +
        '</div>' +

        // Shirt size dropdown
        '<div class="reg-field">' +
          '<label for="' + id + '-shirt">Shirt Size <span class="req" aria-hidden="true">*</span></label>' +
          '<select id="' + id + '-shirt" name="child_shirt[]" required>' +
            '<option value="" disabled selected>Select a size</option>' +
            optionsHtml(SHIRT_SIZES) +
          '</select>' +
        '</div>' +

        // Dietary notes — full width
        '<div class="reg-field reg-field--full">' +
          '<label for="' + id + '-dietary">Dietary Restrictions or Special Notes</label>' +
          '<textarea id="' + id + '-dietary" name="child_dietary[]" rows="2" placeholder="Allergies, medical notes, anything we should know..."></textarea>' +
        '</div>' +

        // Photo permissions — full width
        '<div class="reg-field reg-field--full">' +
          '<fieldset class="reg-photo-fieldset">' +
            '<legend>Photo permissions for ' + label + '</legend>' +
            '<div class="reg-photo-row">' +
              '<span class="reg-photo-question">May we photograph your child? <span class="req" aria-hidden="true">*</span></span>' +
              '<label class="reg-radio-label"><input type="radio" name="child_photo_general_' + index + '" value="Yes" required> Yes</label>' +
              '<label class="reg-radio-label"><input type="radio" name="child_photo_general_' + index + '" value="No"> No</label>' +
            '</div>' +
            '<div class="reg-photo-row">' +
              '<span class="reg-photo-question">May we use a photo in a presentation? <span class="req" aria-hidden="true">*</span></span>' +
              '<label class="reg-radio-label"><input type="radio" name="child_photo_presentation_' + index + '" value="Yes" required> Yes</label>' +
              '<label class="reg-radio-label"><input type="radio" name="child_photo_presentation_' + index + '" value="No"> No</label>' +
            '</div>' +
          '</fieldset>' +
        '</div>' +

      '</div>'; // .reg-fields

    // Wire up remove button
    var removeBtn = block.querySelector('.reg-remove-btn');
    if (removeBtn) {
      removeBtn.addEventListener('click', function () {
        block.classList.add('reg-child-removing');
        setTimeout(function () {
          block.remove();
          renumberChildren();
        }, 250);
      });
    }

    return block;
  }

  function renumberChildren() {
    var blocks = container.querySelectorAll('.reg-child-block');
    blocks.forEach(function (block, i) {
      var labelEl = block.querySelector('.reg-child-label');
      if (labelEl) labelEl.textContent = 'Child ' + (i + 1);
    });
  }

  function addChild() {
    var block = buildChildBlock(childCount);
    childCount++;
    container.appendChild(block);

    // Animate in
    requestAnimationFrame(function () {
      block.classList.add('reg-child-visible');
    });

    // Focus first input in the new block
    var firstInput = block.querySelector('input, select, textarea');
    if (firstInput) {
      setTimeout(function () { firstInput.focus(); }, 50);
    }
  }

  // Add first child on load
  addChild();

  addBtn.addEventListener('click', addChild);

  // ── Form Submission ────────────────────────────────────────────────
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    errorBox.hidden = true;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Parent info
    var parentName  = document.getElementById('parent-name').value.trim();
    var parentEmail = document.getElementById('parent-email').value.trim();
    var parentPhone = document.getElementById('parent-phone').value.trim();
    var ecPickup    = document.getElementById('ec-pickup').value.trim();

    // Emergency contact — use parent info if "same" is checked
    var same = ecSameChk.checked;
    var ecName  = same ? parentName  : ecNameEl.value.trim();
    var ecEmail = same ? parentEmail : ecEmailEl.value.trim();
    var ecPhone = same ? parentPhone : ecPhoneEl.value.trim();

    // Collect child blocks
    var blocks   = container.querySelectorAll('.reg-child-block');
    var children = [];

    blocks.forEach(function (block) {
      var nameEl     = block.querySelector('[name="child_name[]"]');
      var ageEl      = block.querySelector('[name="child_age[]"]');
      var gradeEl    = block.querySelector('[name="child_grade[]"]');
      var shirtEl    = block.querySelector('[name="child_shirt[]"]');
      var dietaryEl  = block.querySelector('[name="child_dietary[]"]');
      var photoGenEl = block.querySelector('[name^="child_photo_general_"]:checked');
      var photoPreEl = block.querySelector('[name^="child_photo_presentation_"]:checked');

      children.push({
        name:               nameEl    ? nameEl.value.trim()    : '',
        age:                ageEl     ? ageEl.value.trim()     : '',
        grade:              gradeEl   ? gradeEl.value.trim()   : '',
        shirt:              shirtEl   ? shirtEl.value.trim()   : '',
        dietary:            dietaryEl ? dietaryEl.value.trim() : '',
        photo_general:      photoGenEl ? photoGenEl.value      : '',
        photo_presentation: photoPreEl ? photoPreEl.value      : ''
      });
    });

    var payload = {
      parent_name:  parentName,
      parent_email: parentEmail,
      parent_phone: parentPhone,
      ec_name:      ecName,
      ec_email:     ecEmail,
      ec_phone:     ecPhone,
      ec_pickup:    ecPickup,
      children:     children,
      submitted_on: new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })
    };

    // Disable button to prevent double-submit
    submitBtn.disabled    = true;
    submitBtn.textContent = 'Submitting…';

    fetch(SCRIPT_URL, {
      method:  'POST',
      mode:    'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(payload)
    })
    .then(function () {
      form.hidden       = true;
      successBox.hidden = false;
      successBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (typeof gtag === 'function') {
        gtag('event', 'vbs_registration_submitted', {
          event_category: 'VBS Registration',
          event_label:    'Form Submit',
          value:          children.length
        });
      }
    })
    .catch(function () {
      errorBox.hidden       = false;
      submitBtn.disabled    = false;
      submitBtn.textContent = 'Submit Registration →';
      errorBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

})();
</script>
