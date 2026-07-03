---
# Front matter — Jekyll reads this YAML block to configure the page.
# layout: which template wraps this page (_layouts/default.html)
# title: shown in the browser tab and used by the SEO plugin
# description: meta description for Google search results (~155 chars ideal)
# permalink: the exact URL path for this page (/about/)
layout: default
title: About Our Church
description: "Learn about Christ Central Buffalo — a welcoming, family-friendly church community in Buffalo, NY. We'd love to meet your family at VBS 2026!"
permalink: /about/
---

<!-- Skip link: hidden until focused; lets keyboard users jump past the header/nav -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- Page Header: gradient banner (styles in .page-header in vbs.scss) -->
<header class="page-header">
  <div class="container">
    <h1>About Christ Central Buffalo</h1>
    <p>A welcoming community where everyone has a seat at the table.</p>
  </div>
</header>

<!-- Decorative rainbow stripe -->
<div class="color-stripe" aria-hidden="true"></div>

<!-- Who We Are Section: two-column grid on desktop (text left, values list right).
     .about-grid switches from 1→2 columns at the $bp-md breakpoint (768px) in vbs.scss. -->
<section class="section" aria-labelledby="who-heading">
  <div class="container">
    <div class="about-grid">

      <!-- Left column: descriptive paragraphs about the church -->
      <div class="about-text">
        <h2 id="who-heading" class="section-title">Who We Are</h2>
        <p>
          Christ Central Buffalo is a church community rooted in the Gospel and committed to
          welcoming all kinds of people — exactly the way Jesus did. We believe that following
          Jesus is meant to be lived out in community, and we're passionate about helping
          families grow together in faith.
        </p>
        <p>
          The 3-Day Surprise Party VBS is one of our favorite ways to open our doors to the
          neighborhood. Whether your family attends church regularly or you're exploring faith
          for the first time, you are warmly welcome here.
        </p>
        <p>
          We'd love for you to come for VBS — and we hope you'll stick around on Sunday, August 23rd (10:30 AM – 1:00 PM) for our worship service followed by a joyful festival with a bounce house and great food for the whole family!
        </p>
      </div>

      <!-- Right column: church values list.
           role="list" on the container and role="listitem" on each item is redundant with
           the div elements, but adds explicit ARIA semantics for older screen readers. -->
      <div class="values-list" role="list" aria-label="Our values">
        <div class="value-item" role="listitem">
          <span class="value-icon" aria-hidden="true">❤️</span>
          <div>
            <h4>Gospel-Centered</h4>
            <p>Everything we do flows from the good news that God's love is freely given — not earned.</p>
          </div>
        </div>

        <div class="value-item" role="listitem">
          <span class="value-icon" aria-hidden="true">🤝</span>
          <div>
            <h4>Radically Welcoming</h4>
            <p>Whoever you are and wherever you're coming from, there's a place for you at our table.</p>
          </div>
        </div>

        <div class="value-item" role="listitem">
          <span class="value-icon" aria-hidden="true">👨‍👩‍👧</span>
          <div>
            <h4>Family-Oriented</h4>
            <p>We love families and are committed to supporting parents as they raise their kids in faith.</p>
          </div>
        </div>

        <div class="value-item" role="listitem">
          <span class="value-icon" aria-hidden="true">🌆</span>
          <div>
            <h4>Community-Rooted</h4>
            <p>We're invested in Buffalo — building relationships and serving our neighbors with joy.</p>
          </div>
        </div>

        <div class="value-item" role="listitem">
          <span class="value-icon" aria-hidden="true">📖</span>
          <div>
            <h4>Bible-Based</h4>
            <p>Our teaching is grounded in Scripture, applied to everyday life in practical, accessible ways.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- VBS Connection Section: three cards explaining how VBS benefits families too.
     .highlight-band gives this section the polka-dot pattern background. -->
<section class="section highlight-band" aria-labelledby="vbs-connect-heading">
  <div class="container">
    <div class="section-intro">
      <h2 id="vbs-connect-heading" class="section-title">VBS is for Families Too</h2>
      <p class="section-subtitle">
        VBS isn't just for kids — it's an invitation for your whole family to connect with us.
      </p>
    </div>

    <!-- Three-column card grid (1→2→3 columns on small→medium→large screens) -->
    <div class="card-grid">
      <article class="card card--blue">
        <span class="card-icon" aria-hidden="true">☕</span>
        <h3>Meet Other Parents</h3>
        <p>While kids enjoy VBS, parents are welcome to hang out, connect, and get to know the church community.</p>
      </article>

      <article class="card card--yellow">
        <span class="card-icon" aria-hidden="true">🏡</span>
        <h3>Sunday Festival</h3>
        <p>Day 3 ends with a joyful festival — join us for service, a bounce house, and great food for the entire family!</p>
      </article>

      <article class="card card--green">
        <span class="card-icon" aria-hidden="true">⛪</span>
        <h3>Sunday Service</h3>
        <p>Join us for Sunday worship at 10:30 AM on August 23rd, followed by festivities until 1:00 PM. Experience Christ Central Buffalo firsthand!</p>
      </article>
    </div>
  </div>
</section>

<!-- CTA Band: full-width gradient banner with links to register or contact -->
<section class="cta-band" aria-labelledby="about-cta-heading">
  <div class="container">
    <h2 id="about-cta-heading">We'd Love to Meet Your Family!</h2>
    <p>Register for VBS and come see what Christ Central Buffalo is all about. No pressure, just a warm welcome.</p>
    <!-- &amp; is the HTML entity for & — always use entities inside HTML attributes and content -->
    <a href="/vbs/" class="btn btn-primary">See VBS Details &amp; Register →</a>
    <p style="margin-top: 1.25rem;">
      <a href="/contact/" class="btn btn-outline">Get in Touch</a>
    </p>
  </div>
</section>
