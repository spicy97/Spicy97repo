---
# Front matter — Jekyll reads this YAML block to configure the page.
# layout: which template wraps this page (_layouts/default.html)
# title: shown in the browser tab; also used by the SEO plugin for <title> and OG tags
# description: the meta description shown in Google search results (~155 chars ideal)
# permalink: the exact URL path for this page (/vbs/)
layout: default
title: VBS Event
description: "Full details for the 3-Day Surprise Party VBS at Christ Central Buffalo — August 21–23, 2026. Schedule, activities, cost, and registration information."
permalink: /vbs/
---

<!-- Skip link: allows keyboard-only users to jump straight to the main content,
     bypassing the header/nav. The link is visually hidden until focused (see .skip-link in vbs.scss). -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- Page Header: gradient banner at the top of every inner page.
     Uses the .page-header class (styled in vbs.scss) for the navy→blue gradient. -->
<header class="page-header">
  <div class="container">
    <span class="hero-eyebrow" style="margin-bottom:1rem; display:inline-block;">🎉 VBS 2026</span>
    <h1>3-Day Surprise Party VBS</h1>
    <p>August 21–23, 2026 &nbsp;·&nbsp; Christ Central Buffalo &nbsp;·&nbsp; Ages 4–12 &nbsp;·&nbsp; $5 per child</p>
  </div>
</header>

<!-- Decorative rainbow stripe between the header and first section -->
<div class="color-stripe" aria-hidden="true"></div>

<!-- Theme Section: describes the VBS theme and includes the theme Bible verse -->
<section class="section" aria-labelledby="theme-heading">
  <div class="container">
    <div class="section-intro">
      <h2 id="theme-heading" class="section-title">About the Theme</h2>
    </div>

    <div style="max-width: 760px; margin: 0 auto;">
      <p style="font-size: 1.1rem; line-height: 1.8; color: #555566; margin-bottom: 1.5rem;">
        Kids dive into the Bible, discover how Jesus welcomed <em>all kinds</em> of people, and learn that
        God's love is freely given — not earned. Every day brings a new surprise, a new story, and a
        new reminder that God's party has a place for everyone.
      </p>
      <p style="font-size: 1.05rem; line-height: 1.8; color: #555566; margin-bottom: 1.5rem;">
        Through games, crafts, music, snacks, and laughter, children will explore the heart of the
        Gospel in an age-appropriate, joyful setting. This is also a wonderful opportunity for
        families to meet the church, connect with other parents, and see what Christ Central Buffalo
        is all about.
      </p>
    </div>

    <!-- Theme verse block: styled like a dark card with the scripture quote.
         role="complementary" marks this as supplemental content for screen readers. -->
    <div class="verse-block" role="complementary" aria-label="Theme verse">
      <blockquote>
        "Then Levi held a great banquet for Jesus at his house, and a large crowd of tax collectors
        and others were eating with them."
      </blockquote>
      <cite>Luke 5:29 — Theme Verse</cite>
    </div>
  </div>
</section>

<!-- Schedule Section: three day-by-day schedule cards.
     .highlight-band gives the section a polka-dot patterned background (see vbs.scss). -->
<section class="section highlight-band" aria-labelledby="schedule-heading">
  <div class="container">
    <div class="section-intro">
      <h2 id="schedule-heading" class="section-title">Event Schedule</h2>
      <p class="section-subtitle">Three full days of fun, faith, and friendship. Come for one day or all three!</p>
    </div>

    <!-- .schedule is a flex column container; each .schedule-day has a colored left border
         (Day 1=blue, Day 2=red, Day 3=green via nth-child in vbs.scss) -->
    <div class="schedule">
      <article class="schedule-day">
        <div class="day-label">🎉 Day 1 — Friday, August 21</div>
        <div class="day-date">August 21, 2026</div>
        <div class="day-time">⏰ 9:00 AM – 3:00 PM</div>
        <p>The party begins! Drop-off at 9 AM for a full day of surprise activities, crafts, games, and worship. Lunch provided. Pickup by 3 PM.</p>
      </article>

      <article class="schedule-day">
        <div class="day-label">🎊 Day 2 — Saturday, August 22</div>
        <div class="day-date">August 22, 2026</div>
        <div class="day-time">⏰ 9:00 AM – 3:00 PM</div>
        <p>More surprises, more fun! Another full day of Bible lessons, crafts, games, and music. Lunch provided. Pickup by 3 PM.</p>
      </article>

      <article class="schedule-day">
        <div class="day-label">🏡 Day 3 — Sunday, August 23</div>
        <div class="day-date">August 23, 2026</div>
        <div class="day-time">⏰ 10:30 AM – 1:00 PM</div>
        <p>Join us for Sunday worship at 10:30 AM, followed by a joyful festival with a bounce house and great food for the <em>entire family</em>!</p>
      </article>
    </div>
  </div>
</section>

<!-- Activities Section: six activity cards in a responsive grid.
     .card-grid goes 1→2→3 columns as the screen gets wider (see vbs.scss).
     Each card uses a color modifier (card--blue, --red, etc.) for the top border accent. -->
<section class="section" aria-labelledby="activities-heading">
  <div class="container">
    <div class="section-intro">
      <h2 id="activities-heading" class="section-title">What's Included</h2>
      <p class="section-subtitle">Every day is packed with age-appropriate fun for kids ages 4–12.</p>
    </div>

    <div class="card-grid">
      <article class="card card--blue">
        <span class="card-icon" aria-hidden="true">🎨</span>
        <h3>Crafts</h3>
        <p>Creative hands-on projects that reinforce the day's Bible story and give kids something to take home.</p>
      </article>

      <article class="card card--red">
        <span class="card-icon" aria-hidden="true">🏃</span>
        <h3>Games</h3>
        <p>Active, energetic games that get kids moving and build teamwork while having a blast.</p>
      </article>

      <article class="card card--yellow">
        <span class="card-icon" aria-hidden="true">🎵</span>
        <h3>Music</h3>
        <p>Upbeat, kid-friendly worship songs that are easy to learn and hard to forget.</p>
      </article>

      <article class="card card--green">
        <span class="card-icon" aria-hidden="true">🍕</span>
        <h3>Lunch &amp; Snacks</h3>
        <p>Lunch and snacks are provided on Friday and Saturday. No need to pack food! On Sunday, join us for a joyful festival with service, a bounce house, and great food for families.</p>
      </article>

      <article class="card card--pink">
        <span class="card-icon" aria-hidden="true">📖</span>
        <h3>Bible Stories</h3>
        <p>Engaging, age-appropriate lessons showing how Jesus invited everyone to His table — just like He invites us today.</p>
      </article>

      <article class="card card--navy">
        <span class="card-icon" aria-hidden="true">🎪</span>
        <h3>Sunday Party</h3>
        <p>Bounce house, outdoor food, and a family celebration to wrap up a week full of surprises!</p>
      </article>
    </div>
  </div>
</section>

<!-- Info Table Section: structured event details in a two-column table.
     .info-table styles are in vbs.scss; scope="row" on <th> improves screen reader navigation. -->
<section class="section highlight-band" aria-labelledby="info-heading">
  <div class="container">
    <div style="max-width: 760px; margin: 0 auto;">
      <h2 id="info-heading" class="section-title">Event Details</h2>

      <table class="info-table" aria-label="VBS event details">
        <tbody>
          <tr>
            <th scope="row">Event Name</th>
            <td>3-Day Surprise Party VBS</td>
          </tr>
          <tr>
            <th scope="row">Dates</th>
            <td>Friday–Saturday, August 21–22 &amp; Sunday, August 23, 2026</td>
          </tr>
          <tr>
            <th scope="row">Times</th>
            <td>Fri &amp; Sat: 9:00 AM – 3:00 PM · Sun: 10:30 AM – 1:00 PM (worship service + festival)</td>
          </tr>
          <tr>
            <th scope="row">Age Range</th>
            <td>Children ages 4–12</td>
          </tr>
          <tr>
            <th scope="row">Cost</th>
            <td>$5 per child</td>
          </tr>
          <tr>
            <th scope="row">Location</th>
            <td>Christ Central Buffalo — 1407 N Forest Rd, Williamsville, NY 14221</td>
          </tr>
          <tr>
            <th scope="row">Registration</th>
            <td>Online — $5 per child</td>
          </tr>
          <tr>
            <th scope="row">Questions?</th>
            <td>
              <a href="mailto:jonathan.choi@christcentralbuffalo.com">jonathan.choi@christcentralbuffalo.com</a>
              &nbsp;|&nbsp;
              <a href="tel:7162180777">716-218-0777</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<!-- Registration CTA: full-width gradient band with register button. -->
<section class="cta-band" aria-labelledby="register-heading">
  <div class="container">
    <h2 id="register-heading">Save Your Spot Today!</h2>
    <p>Spots fill up fast — register your child today. $5 per child.</p>
    <a href="/vbs-registration/" class="btn btn-primary">Register Now →</a>
    <p style="margin-top: 1.5rem; font-size: 0.9rem; opacity: 0.75;">
      Questions? Contact Jonathan Choi at
      <a href="mailto:jonathan.choi@christcentralbuffalo.com" style="color: #fdd31b;">jonathan.choi@christcentralbuffalo.com</a>
      or <a href="tel:7162180777" style="color: #fdd31b;">716-218-0777</a>
    </p>
  </div>
</section>

<!-- JSON-LD Event structured data: tells Google this is a local event.
     Google uses this to show a rich result (event card with dates, location, and cost)
     directly in search results — significant visibility boost for a local event.
     See: https://schema.org/Event and https://developers.google.com/search/docs/appearance/structured-data/event
     NOTE: {% raw %} / {% endraw %} tags wrap this block to prevent Jekyll's Liquid
     templating engine from misinterpreting the { } characters in the JSON as Liquid tags. -->
{% raw %}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "3-Day Surprise Party VBS",
  "description": "A 3-day Vacation Bible School for children ages 4–12 at Christ Central Buffalo. Games, crafts, music, snacks, and Bible stories. $5 per child.",
  "startDate": "2026-08-21T09:00:00-04:00",
  "endDate": "2026-08-23T13:00:00-04:00",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "Christ Central Buffalo",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1407 N Forest Rd",
      "addressLocality": "Williamsville",
      "addressRegion": "NY",
      "postalCode": "14221",
      "addressCountry": "US"
    }
  },
  "organizer": {
    "@type": "Organization",
    "name": "Christ Central Buffalo",
    "url": "https://christcentralbuffalo.com"
  },
  "offers": {
    "@type": "Offer",
    "name": "VBS Registration",
    "price": "5",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": "https://vbs.christcentralbuffalo.com/vbs-registration/",
    "validFrom": "2026-01-01"
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "Children ages 4-12"
  },
  "url": "https://vbs.christcentralbuffalo.com/vbs/"
}
</script>
{% endraw %}
