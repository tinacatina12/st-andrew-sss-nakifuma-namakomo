/* =========================================================
   ST. ANDREW SENIOR SECONDARY SCHOOL — SHARED NAV + FOOTER
   Colors: Royal Blue #1B3578 | Red #CC1C1C | White #FFFFFF
   Motto : Strive for the Future
   Tel   : 0752 842 602 / 0782 434 476
========================================================= */

const LOGO_URL = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhhTWYKJonvPYfuCY8rJmXUM77RDfBgE_b8zfQPFUMawuc6NVCO26VoCQcD0BKBR9fLuAFuZ-qbZcqAqwkHKN9jttvG6uEEpiuHswR3OM6kQKWY9wX36qGeGhr4e-dxTCQ9rhj55pkr1hULzAYtsl617Q9-HKnqRbx79Ed_hgbDJkLnNs2xckCERltvCQ/s5016/ChatGPT%20Image%20Jun%2010,%202026,%2009_49_33%20AM%20%282%29.png';

const NAV_HTML = `
<div id="announcementBar" style="background:linear-gradient(90deg,#1B3578,#243E92);color:rgba(255,255,255,.9);font-size:.78rem;padding:.4rem 0;border-bottom:1px solid rgba(255,255,255,.12)">
  <div class="container">
    <div class="d-flex align-items-center justify-content-between gap-3">
      <div class="d-flex align-items-center gap-2" style="overflow:hidden;flex:1">
        <span style="background:#CC1C1C;color:#fff;font-size:.65rem;font-weight:800;padding:.15rem .55rem;border-radius:3px;white-space:nowrap;flex-shrink:0">NOTICE</span>
        <div style="overflow:hidden;white-space:nowrap;flex:1">
          <span style="display:inline-block;animation:noticeScroll 32s linear infinite">
            📢 2025/2026 Admissions Now Open — Day &amp; Boarding Places Available &nbsp;|&nbsp; 🏆 St. Andrew SSS Tops District UNEB Rankings 2024 &nbsp;|&nbsp; 📅 Term 2 Begins June 2025 &nbsp;|&nbsp; 🎓 Prize-Giving Day: December 2025 &nbsp;|&nbsp; ⚽ Football Team Wins District Championship 2024 &nbsp;|&nbsp; 💻 New ICT Laboratory Now Open &nbsp;|&nbsp; 📞 Admissions: 0752 842 602
          </span>
        </div>
      </div>
      <button onclick="document.getElementById('announcementBar').style.display='none'" style="background:none;border:none;color:rgba(255,255,255,.5);cursor:pointer;flex-shrink:0;padding:0;font-size:.9rem" aria-label="Close">✕</button>
    </div>
  </div>
</div>

<div id="topbar" class="d-none d-md-block" style="background:#1B3578;color:rgba(255,255,255,.75);font-size:.77rem;padding:.42rem 0;border-bottom:1px solid rgba(255,255,255,.1)">
  <div class="container">
    <div class="d-flex justify-content-between align-items-center">
      <span><i class="bi bi-geo-alt-fill me-1" style="color:#CC1C1C"></i>Nakifuma, Namakomo, Uganda &nbsp;·&nbsp; Day &amp; Boarding</span>
      <div class="d-flex gap-4 align-items-center">
        <a href="tel:+256752842602" style="color:rgba(255,255,255,.75);text-decoration:none;transition:color .2s" onmouseover="this.style.color='#CC1C1C'" onmouseout="this.style.color='rgba(255,255,255,.75)'"><i class="bi bi-telephone-fill me-1"></i>0752 842 602</a>
        <a href="tel:+256782434476" style="color:rgba(255,255,255,.75);text-decoration:none;transition:color .2s" onmouseover="this.style.color='#CC1C1C'" onmouseout="this.style.color='rgba(255,255,255,.75)'"><i class="bi bi-telephone-fill me-1"></i>0782 434 476</a>
        <a href="mailto:info@standrewsss.ac.ug" style="color:rgba(255,255,255,.75);text-decoration:none;transition:color .2s" onmouseover="this.style.color='#CC1C1C'" onmouseout="this.style.color='rgba(255,255,255,.75)'"><i class="bi bi-envelope-fill me-1"></i>info@standrewsss.ac.ug</a>
        <div class="d-flex gap-2">
          <a href="#" style="color:rgba(255,255,255,.65);text-decoration:none" onmouseover="this.style.color='#CC1C1C'" onmouseout="this.style.color='rgba(255,255,255,.65)'" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
          <a href="#" style="color:rgba(255,255,255,.65);text-decoration:none" onmouseover="this.style.color='#CC1C1C'" onmouseout="this.style.color='rgba(255,255,255,.65)'" aria-label="Twitter"><i class="bi bi-twitter-x"></i></a>
          <a href="#" style="color:rgba(255,255,255,.65);text-decoration:none" onmouseover="this.style.color='#CC1C1C'" onmouseout="this.style.color='rgba(255,255,255,.65)'" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a>
        </div>
      </div>
    </div>
  </div>
</div>

<nav class="navbar navbar-expand-lg navbar-custom" id="mainNav" style="background:#fff;border-bottom:2px solid #1B3578">
  <div class="container">
    <a class="navbar-brand d-flex align-items-center gap-2 text-decoration-none" href="index.html">
      <img src="${LOGO_URL}" alt="St. Andrew SSS Logo"
           style="width:52px;height:52px;object-fit:contain;border-radius:.5rem;flex-shrink:0"
           onerror="this.style.display='none';document.getElementById('logoFallback').style.display='flex'">
      <div id="logoFallback" style="display:none;width:52px;height:52px;background:#1B3578;border-radius:.75rem;align-items:center;justify-content:center;flex-shrink:0">
        <span style="color:#CC1C1C;font-weight:900;font-size:1.3rem;font-family:Georgia,serif">A</span>
      </div>
      <div>
        <div style="font-family:Georgia,serif;font-weight:700;color:#1B3578;font-size:.95rem;line-height:1.1">St. Andrew SSS</div>
        <div style="font-size:.68rem;color:#CC1C1C;font-weight:600;letter-spacing:.04em">Nakifuma · Namakomo</div>
      </div>
    </a>

    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navMenu">
      <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-0">
        <li class="nav-item"><a class="nav-link nav-link-custom" href="index.html">Home</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link nav-link-custom dropdown-toggle" href="about.html" role="button" data-bs-toggle="dropdown">About</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="about.html#history"><i class="bi bi-clock-history me-2 text-muted"></i>Our History</a></li>
            <li><a class="dropdown-item" href="about.html#vision"><i class="bi bi-eye me-2 text-muted"></i>Vision &amp; Mission</a></li>
            <li><a class="dropdown-item" href="about.html#leadership"><i class="bi bi-person-badge me-2 text-muted"></i>Leadership</a></li>
            <li><a class="dropdown-item" href="about.html#values"><i class="bi bi-stars me-2 text-muted"></i>Core Values</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="alumni.html"><i class="bi bi-mortarboard me-2 text-muted"></i>Alumni Association</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link nav-link-custom dropdown-toggle" href="academics.html" role="button" data-bs-toggle="dropdown">Academics</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="academics.html#curriculum"><i class="bi bi-book me-2 text-muted"></i>O-Level &amp; A-Level</a></li>
            <li><a class="dropdown-item" href="academics.html#departments"><i class="bi bi-grid me-2 text-muted"></i>Departments</a></li>
            <li><a class="dropdown-item" href="academics.html#performance"><i class="bi bi-graph-up me-2 text-muted"></i>UNEB Results</a></li>
            <li><a class="dropdown-item" href="academics.html#calendar"><i class="bi bi-calendar3 me-2 text-muted"></i>Academic Calendar</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="fees.html"><i class="bi bi-cash-coin me-2 text-muted"></i>School Fees</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link nav-link-custom dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">People</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="teachers.html"><i class="bi bi-people me-2 text-muted"></i>Our Teachers</a></li>
            <li><a class="dropdown-item" href="about.html#leadership"><i class="bi bi-person-badge me-2 text-muted"></i>Administration</a></li>
            <li><a class="dropdown-item" href="alumni.html"><i class="bi bi-mortarboard me-2 text-muted"></i>Alumni</a></li>
          </ul>
        </li>
        <li class="nav-item"><a class="nav-link nav-link-custom" href="admissions.html">Admissions</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link nav-link-custom dropdown-toggle" href="school-life.html" role="button" data-bs-toggle="dropdown">School Life</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="school-life.html#sports"><i class="bi bi-trophy me-2 text-muted"></i>Sports</a></li>
            <li><a class="dropdown-item" href="school-life.html#clubs"><i class="bi bi-people me-2 text-muted"></i>Clubs &amp; Societies</a></li>
            <li><a class="dropdown-item" href="school-life.html#leadership"><i class="bi bi-star me-2 text-muted"></i>Student Leadership</a></li>
            <li><a class="dropdown-item" href="facilities.html"><i class="bi bi-building me-2 text-muted"></i>Facilities</a></li>
            <li><a class="dropdown-item" href="events.html"><i class="bi bi-calendar-event me-2 text-muted"></i>Events</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link nav-link-custom dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">More</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="gallery.html"><i class="bi bi-images me-2 text-muted"></i>Gallery</a></li>
            <li><a class="dropdown-item" href="news.html"><i class="bi bi-newspaper me-2 text-muted"></i>News &amp; Events</a></li>
            <li><a class="dropdown-item" href="downloads.html"><i class="bi bi-download me-2 text-muted"></i>Downloads</a></li>
            <li><a class="dropdown-item" href="faq.html"><i class="bi bi-question-circle me-2 text-muted"></i>FAQs</a></li>
            <li><a class="dropdown-item" href="contact.html"><i class="bi bi-envelope me-2 text-muted"></i>Contact Us</a></li>
          </ul>
        </li>
        <li class="nav-item ms-lg-2">
          <a class="btn btn-sm px-4 py-2 fw-bold" href="admissions.html"
             style="background:#CC1C1C;color:#fff;border-radius:.75rem;font-family:var(--font-body);transition:background .2s"
             onmouseover="this.style.background='#A81818'" onmouseout="this.style.background='#CC1C1C'">
            Apply Now <i class="bi bi-arrow-right ms-1"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer>
  <!-- CTA Banner (Red) -->
  <div style="background:linear-gradient(90deg,#CC1C1C,#A81818);padding:1.5rem 0">
    <div class="container">
      <div class="d-flex flex-column flex-md-row align-items-center justify-content-between gap-4">
        <div>
          <h3 style="font-family:Georgia,serif;color:#fff;font-size:1.55rem;font-weight:800;margin-bottom:.3rem">Ready to Join Our School Community?</h3>
          <p style="color:rgba(255,255,255,.85);margin:0;font-size:.92rem">Day &amp; Boarding applications for 2025/2026 are now open. Limited spaces.</p>
        </div>
        <div class="d-flex gap-3 flex-shrink-0 flex-wrap">
          <a href="admissions.html" style="background:#fff;color:#CC1C1C;font-weight:700;padding:.65rem 1.4rem;border-radius:.75rem;text-decoration:none;display:inline-flex;align-items:center;gap:.4rem;font-size:.92rem">Apply Now <i class="bi bi-arrow-right"></i></a>
          <a href="downloads.html" style="background:rgba(255,255,255,.15);border:1.5px solid rgba(255,255,255,.5);color:#fff;font-weight:600;padding:.65rem 1.4rem;border-radius:.75rem;text-decoration:none;display:inline-flex;align-items:center;gap:.4rem;font-size:.92rem">Download Prospectus</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Main Footer (Royal Blue) -->
  <div style="background:#1B3578;" class="text-white py-5">
    <div class="container">
      <div class="row g-5">
        <!-- Brand -->
        <div class="col-lg-4">
          <a href="index.html" class="d-flex align-items-center gap-3 mb-4 text-decoration-none">
            <img src="${LOGO_URL}" alt="St. Andrew SSS Logo" style="width:56px;height:56px;object-fit:contain;border-radius:.5rem"
                 onerror="this.outerHTML='<div style=&quot;width:56px;height:56px;background:rgba(255,255,255,.1);border-radius:.75rem;display:flex;align-items:center;justify-content:center&quot;><span style=&quot;color:#CC1C1C;font-weight:900;font-size:1.5rem;font-family:Georgia,serif&quot;>A</span></div>'">
            <div>
              <p style="font-family:Georgia,serif;font-weight:700;color:#fff;font-size:1.05rem;margin:0;line-height:1.2">St. Andrew Senior</p>
              <p style="font-family:Georgia,serif;font-weight:700;color:#fff;font-size:1.05rem;margin:0;line-height:1.2">Secondary School</p>
              <p style="color:rgba(255,255,255,.55);font-size:.7rem;margin:0">Nakifuma · Namakomo, Uganda</p>
            </div>
          </a>
          <p style="color:rgba(255,255,255,.65);font-size:.88rem;line-height:1.75;margin-bottom:1rem">Providing quality holistic education since our founding — preparing learners to face present and future challenges with discipline, hard work, and confidence.</p>
          <p style="font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;color:#CC1C1C;margin-bottom:.3rem">Our Motto</p>
          <p style="font-family:Georgia,serif;font-size:1rem;font-style:italic;color:#fff;margin-bottom:1.25rem">"Strive for the Future"</p>
          <p style="font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.4);margin-bottom:.3rem">School Slogan</p>
          <p style="font-family:Georgia,serif;font-size:.82rem;font-style:italic;color:rgba(255,255,255,.75);line-height:1.5">"Do the right thing at the right place and at the right time, and the result of that must be SMART."</p>
          <div class="d-flex gap-2 mt-3">
            <a href="#" style="width:36px;height:36px;background:rgba(255,255,255,.1);border-radius:.6rem;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.7);font-size:.95rem;text-decoration:none;transition:all .2s" onmouseover="this.style.background='#CC1C1C';this.style.color='#fff'" onmouseout="this.style.background='rgba(255,255,255,.1)';this.style.color='rgba(255,255,255,.7)'" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
            <a href="#" style="width:36px;height:36px;background:rgba(255,255,255,.1);border-radius:.6rem;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.7);font-size:.95rem;text-decoration:none;transition:all .2s" onmouseover="this.style.background='#CC1C1C';this.style.color='#fff'" onmouseout="this.style.background='rgba(255,255,255,.1)';this.style.color='rgba(255,255,255,.7)'" aria-label="Twitter"><i class="bi bi-twitter-x"></i></a>
            <a href="#" style="width:36px;height:36px;background:rgba(255,255,255,.1);border-radius:.6rem;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.7);font-size:.95rem;text-decoration:none;transition:all .2s" onmouseover="this.style.background='#CC1C1C';this.style.color='#fff'" onmouseout="this.style.background='rgba(255,255,255,.1)';this.style.color='rgba(255,255,255,.7)'" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a>
            <a href="#" style="width:36px;height:36px;background:rgba(255,255,255,.1);border-radius:.6rem;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.7);font-size:.95rem;text-decoration:none;transition:all .2s" onmouseover="this.style.background='#CC1C1C';this.style.color='#fff'" onmouseout="this.style.background='rgba(255,255,255,.1)';this.style.color='rgba(255,255,255,.7)'" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="col-6 col-lg-2">
          <h6 style="font-family:Georgia,serif;font-weight:700;color:#fff;margin-bottom:1rem;padding-bottom:.5rem;border-bottom:2px solid #CC1C1C">Quick Links</h6>
          <div class="d-flex flex-column gap-2">
            <a href="about.html" style="color:rgba(255,255,255,.65);font-size:.88rem;text-decoration:none;transition:color .2s;display:flex;align-items:center;gap:.4rem" onmouseover="this.style.color='#CC1C1C'" onmouseout="this.style.color='rgba(255,255,255,.65)'"><i class="bi bi-chevron-right" style="font-size:.7rem"></i> About Us</a>
            <a href="teachers.html" style="color:rgba(255,255,255,.65);font-size:.88rem;text-decoration:none;transition:color .2s;display:flex;align-items:center;gap:.4rem" onmouseover="this.style.color='#CC1C1C'" onmouseout="this.style.color='rgba(255,255,255,.65)'"><i class="bi bi-chevron-right" style="font-size:.7rem"></i> Our Teachers</a>
            <a href="academics.html" style="color:rgba(255,255,255,.65);font-size:.88rem;text-decoration:none;transition:color .2s;display:flex;align-items:center;gap:.4rem" onmouseover="this.style.color='#CC1C1C'" onmouseout="this.style.color='rgba(255,255,255,.65)'"><i class="bi bi-chevron-right" style="font-size:.7rem"></i> Academics</a>
            <a href="admissions.html" style="color:rgba(255,255,255,.65);font-size:.88rem;text-decoration:none;transition:color .2s;display:flex;align-items:center;gap:.4rem" onmouseover="this.style.color='#CC1C1C'" onmouseout="this.style.color='rgba(255,255,255,.65)'"><i class="bi bi-chevron-right" style="font-size:.7rem"></i> Admissions</a>
            <a href="fees.html" style="color:rgba(255,255,255,.65);font-size:.88rem;text-decoration:none;transition:color .2s;display:flex;align-items:center;gap:.4rem" onmouseover="this.style.color='#CC1C1C'" onmouseout="this.style.color='rgba(255,255,255,.65)'"><i class="bi bi-chevron-right" style="font-size:.7rem"></i> School Fees</a>
            <a href="alumni.html" style="color:rgba(255,255,255,.65);font-size:.88rem;text-decoration:none;transition:color .2s;display:flex;align-items:center;gap:.4rem" onmouseover="this.style.color='#CC1C1C'" onmouseout="this.style.color='rgba(255,255,255,.65)'"><i class="bi bi-chevron-right" style="font-size:.7rem"></i> Alumni</a>
            <a href="downloads.html" style="color:rgba(255,255,255,.65);font-size:.88rem;text-decoration:none;transition:color .2s;display:flex;align-items:center;gap:.4rem" onmouseover="this.style.color='#CC1C1C'" onmouseout="this.style.color='rgba(255,255,255,.65)'"><i class="bi bi-chevron-right" style="font-size:.7rem"></i> Downloads</a>
          </div>
        </div>

        <!-- More Links -->
        <div class="col-6 col-lg-2">
          <h6 style="font-family:Georgia,serif;font-weight:700;color:#fff;margin-bottom:1rem;padding-bottom:.5rem;border-bottom:2px solid #CC1C1C">More Pages</h6>
          <div class="d-flex flex-column gap-2">
            <a href="school-life.html" style="color:rgba(255,255,255,.65);font-size:.88rem;text-decoration:none;transition:color .2s;display:flex;align-items:center;gap:.4rem" onmouseover="this.style.color='#CC1C1C'" onmouseout="this.style.color='rgba(255,255,255,.65)'"><i class="bi bi-chevron-right" style="font-size:.7rem"></i> School Life</a>
            <a href="facilities.html" style="color:rgba(255,255,255,.65);font-size:.88rem;text-decoration:none;transition:color .2s;display:flex;align-items:center;gap:.4rem" onmouseover="this.style.color='#CC1C1C'" onmouseout="this.style.color='rgba(255,255,255,.65)'"><i class="bi bi-chevron-right" style="font-size:.7rem"></i> Facilities</a>
            <a href="events.html" style="color:rgba(255,255,255,.65);font-size:.88rem;text-decoration:none;transition:color .2s;display:flex;align-items:center;gap:.4rem" onmouseover="this.style.color='#CC1C1C'" onmouseout="this.style.color='rgba(255,255,255,.65)'"><i class="bi bi-chevron-right" style="font-size:.7rem"></i> Events</a>
            <a href="gallery.html" style="color:rgba(255,255,255,.65);font-size:.88rem;text-decoration:none;transition:color .2s;display:flex;align-items:center;gap:.4rem" onmouseover="this.style.color='#CC1C1C'" onmouseout="this.style.color='rgba(255,255,255,.65)'"><i class="bi bi-chevron-right" style="font-size:.7rem"></i> Gallery</a>
            <a href="news.html" style="color:rgba(255,255,255,.65);font-size:.88rem;text-decoration:none;transition:color .2s;display:flex;align-items:center;gap:.4rem" onmouseover="this.style.color='#CC1C1C'" onmouseout="this.style.color='rgba(255,255,255,.65)'"><i class="bi bi-chevron-right" style="font-size:.7rem"></i> News</a>
            <a href="faq.html" style="color:rgba(255,255,255,.65);font-size:.88rem;text-decoration:none;transition:color .2s;display:flex;align-items:center;gap:.4rem" onmouseover="this.style.color='#CC1C1C'" onmouseout="this.style.color='rgba(255,255,255,.65)'"><i class="bi bi-chevron-right" style="font-size:.7rem"></i> FAQs</a>
            <a href="contact.html" style="color:rgba(255,255,255,.65);font-size:.88rem;text-decoration:none;transition:color .2s;display:flex;align-items:center;gap:.4rem" onmouseover="this.style.color='#CC1C1C'" onmouseout="this.style.color='rgba(255,255,255,.65)'"><i class="bi bi-chevron-right" style="font-size:.7rem"></i> Contact</a>
          </div>
        </div>

        <!-- Contact -->
        <div class="col-lg-4">
          <h6 style="font-family:Georgia,serif;font-weight:700;color:#fff;margin-bottom:1rem;padding-bottom:.5rem;border-bottom:2px solid #CC1C1C">Get In Touch</h6>
          <div class="d-flex flex-column gap-3 mb-4">
            <div class="d-flex gap-3 align-items-start">
              <div style="min-width:32px;height:32px;background:rgba(255,255,255,.1);border-radius:.5rem;display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="bi bi-geo-alt-fill" style="color:#CC1C1C"></i></div>
              <div><p style="color:#fff;font-size:.88rem;margin:0">Nakifuma, Namakomo, Uganda</p><p style="color:rgba(255,255,255,.5);font-size:.75rem;margin:0">Day &amp; Boarding — 600m off the main road</p></div>
            </div>
            <div class="d-flex gap-3 align-items-center">
              <div style="min-width:32px;height:32px;background:rgba(255,255,255,.1);border-radius:.5rem;display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="bi bi-telephone-fill" style="color:#CC1C1C"></i></div>
              <div><a href="tel:+256752842602" style="color:rgba(255,255,255,.85);font-size:.88rem;text-decoration:none;display:block">0752 842 602</a><a href="tel:+256782434476" style="color:rgba(255,255,255,.85);font-size:.88rem;text-decoration:none;display:block">0782 434 476</a></div>
            </div>
            <div class="d-flex gap-3 align-items-center">
              <div style="min-width:32px;height:32px;background:rgba(255,255,255,.1);border-radius:.5rem;display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="bi bi-whatsapp" style="color:#CC1C1C"></i></div>
              <a href="https://wa.me/256752842602" style="color:rgba(255,255,255,.85);font-size:.88rem;text-decoration:none">WhatsApp Us</a>
            </div>
            <div class="d-flex gap-3 align-items-center">
              <div style="min-width:32px;height:32px;background:rgba(255,255,255,.1);border-radius:.5rem;display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="bi bi-envelope-fill" style="color:#CC1C1C"></i></div>
              <a href="mailto:info@standrewsss.ac.ug" style="color:rgba(255,255,255,.85);font-size:.82rem;text-decoration:none;word-break:break-all">info@standrewsss.ac.ug</a>
            </div>
          </div>
          <p style="color:rgba(255,255,255,.7);font-size:.82rem;font-weight:600;margin-bottom:.5rem">Newsletter</p>
          <div class="d-flex">
            <input type="email" placeholder="Your email address" style="flex:1;padding:.6rem 1rem;border:none;border-radius:.65rem 0 0 .65rem;font-size:.88rem;background:rgba(255,255,255,.12);color:rgba(255,255,255,.9);outline:none" placeholder-color="rgba(255,255,255,.4)">
            <button style="background:#CC1C1C;border:none;padding:.6rem .9rem;border-radius:0 .65rem .65rem 0;cursor:pointer;color:#fff;transition:background .2s" onmouseover="this.style.background='#A81818'" onmouseout="this.style.background='#CC1C1C'" aria-label="Subscribe"><i class="bi bi-send-fill"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Bottom Bar -->
  <div style="background:#152D68;border-top:1px solid rgba(255,255,255,.1);padding:.85rem 0">
    <div class="container d-flex flex-column flex-sm-row align-items-center justify-content-between gap-2">
      <p style="color:rgba(255,255,255,.45);font-size:.78rem;margin:0">© 2025 St. Andrew Senior Secondary School, Namakomo. All rights reserved.</p>
      <div class="d-flex gap-4">
        <a href="faq.html" style="color:rgba(255,255,255,.4);font-size:.78rem;text-decoration:none">FAQ</a>
        <a href="downloads.html" style="color:rgba(255,255,255,.4);font-size:.78rem;text-decoration:none">Downloads</a>
        <a href="contact.html" style="color:rgba(255,255,255,.4);font-size:.78rem;text-decoration:none">Contact</a>
      </div>
    </div>
  </div>
</footer>

<!-- Scroll to top -->
<button id="scrollTop" aria-label="Scroll to top" style="background:#CC1C1C"><i class="bi bi-chevron-up"></i></button>

<!-- WhatsApp float -->
<a href="https://wa.me/256752842602" target="_blank" rel="noopener noreferrer" id="whatsappFloat"
   style="position:fixed;bottom:5rem;right:1.75rem;width:52px;height:52px;background:#25D366;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:1.5rem;z-index:999;box-shadow:0 4px 16px rgba(37,211,102,.5);text-decoration:none"
   aria-label="Chat on WhatsApp"><i class="bi bi-whatsapp"></i></a>

<!-- Lightbox -->
<div id="lightbox"><button id="lightbox-close"><i class="bi bi-x-lg"></i></button><img id="lightbox-img" src="" alt="Gallery image"></div>

<style>
@keyframes noticeScroll { from{transform:translateX(100%)} to{transform:translateX(-100%)} }
</style>`;

document.addEventListener('DOMContentLoaded', () => {
  const nav    = document.getElementById('nav-placeholder');
  const footer = document.getElementById('footer-placeholder');
  if (nav)    nav.innerHTML    = NAV_HTML;
  if (footer) footer.innerHTML = FOOTER_HTML;
});
