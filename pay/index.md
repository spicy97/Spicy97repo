---
# Front matter — Jekyll reads this YAML block to configure the page.
# layout: which template wraps this page (_layouts/default.html)
# title: shown in the browser tab and used by the SEO plugin
# description: meta description for Google search results
# permalink: the exact URL path for this page (/pay/)
# Note: this page is intentionally NOT listed in header_pages in _config.yml —
#       it's linked from the registration success screen and the home page footer text,
#       not shown in the main navigation.
layout: default
title: Pay VBS Registration Fee
description: "Pay your $5 per child VBS registration fee for the 3-Day Surprise Party VBS at Christ Central Buffalo — August 21–23, 2026."
permalink: /pay/
---

<!-- Skip link: hidden until focused; lets keyboard users jump past the header/nav -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- Page Header: gradient banner -->
<header class="page-header">
  <div class="container">
    <span class="hero-eyebrow" style="margin-bottom:1rem; display:inline-block;">🎉 VBS 2026</span>
    <h1>Pay Registration Fee</h1>
    <p>3-Day Surprise Party &nbsp;·&nbsp; August 21–23, 2026 &nbsp;·&nbsp; $5 per child</p>
  </div>
</header>

<!-- Decorative rainbow stripe -->
<div class="color-stripe" aria-hidden="true"></div>

<!-- Payment Section: centered content with the payment button and a fallback register prompt.
     .reg-form-wrap constrains the width and centers it (max-width: 760px in vbs.scss). -->
<section class="section" aria-labelledby="pay-heading">
  <div class="container">
    <div class="reg-form-wrap">

      <!-- Payment box: links to the external CollectCheckout payment processor.
           target="_blank" opens in a new tab (standard for external payment pages).
           rel="noopener noreferrer" prevents the new tab from accessing this page via window.opener. -->
      <div class="reg-giving-box" style="margin-bottom: 2rem;">
        <p class="reg-giving-title">💳 Pay Your $5 Per Child Registration Fee</p>
        <p class="reg-giving-desc">Click the button below to pay securely online — no cash needed!</p>
        <a href="https://collectcheckout.com/r/3g2uic1gp65j6n95rz9vyqlx8gih22"
           class="btn btn-primary"
           target="_blank"
           rel="noopener noreferrer"
           style="font-size: 1.15rem; padding: 1rem 2.25rem;">
          Pay $5 Per Child Now →
        </a>
        <!-- Memo instructions: tells parents what to type in the payment note field
             so registrations can be matched to payments. -->
        <div class="reg-giving-memo">
          <p><strong>In the memo / note field, please write:</strong></p>
          <p class="reg-giving-memo-example">[Child's name(s)] — VBS 2026</p>
          <p class="reg-giving-memo-eg">e.g. "Emma &amp; Noah Smith — VBS 2026"</p>
        </div>
      </div>

      <!-- Fallback prompt: shown below the payment button for users who haven't
           registered yet and landed on this page directly. -->
      <div style="text-align: center; padding: 1.5rem; background: #f8f8fc; border-radius: 16px; border: 2px solid #f0f0f4;">
        <h2 id="pay-heading" class="section-title" style="font-size: 1.25rem; margin-bottom: 1rem;">Haven't Registered Yet?</h2>
        <p style="color: #555566; margin-bottom: 1.25rem;">
          Registration only takes 2 minutes! Fill out the form first, then pay the $5 fee.
        </p>
        <a href="/vbs-registration/" class="btn btn-secondary">Register Your Child →</a>
      </div>

      <!-- Contact info at the bottom for questions about payment -->
      <div style="text-align: center; margin-top: 2rem; color: #888899; font-size: 0.9rem;">
        <p>Questions? Contact Jonathan Choi at
          <a href="mailto:jonathan.choi@christcentralbuffalo.com">jonathan.choi@christcentralbuffalo.com</a>
          or <a href="tel:7162180777">716-218-0777</a>
        </p>
      </div>

    </div>
  </div>
</section>
