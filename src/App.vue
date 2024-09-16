<template>
  <header class="header">
    <img
      src="/images/logo-118x28.png"
      alt="logo"
      aria-label="Meet logo"
      class="header__logo"
      width="118"
      height="28"
    />
  </header>
  <body>
    <header class="content-header">
      <div v-if="!isDesktop()" class="content-header__image-container">
        <img
          class="content-header__image"
          src="/images/tablet/image-hero.png"
          alt="hero image"
          aria-label="Group of people having meet"
          width="820"
          height="303"
        />
      </div>
      <img
        v-if="isDesktop()"
        class="content-header__image"
        src="/images/desktop/image-hero-left.png"
        alt="hero image"
        aria-label="Group of people having meet left"
        width="820"
        height="303"
      />
      <img
        v-if="isDesktop()"
        class="content-header__image"
        src="/images/desktop/image-hero-right.png"
        alt="hero image"
        aria-label="Group of people having meet right"
        width="820"
        height="303"
      />
      <section class="content-header__content">
        <h1 class="title content-header__title">Group Chat for Everyone</h1>
        <p class="description">
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device.
        </p>
        <section class="content-header__buttons-container">
          <button class="button button--download">
            Download <span class="version">v1.3</span>
          </button>
          <button class="button button--purple">What is it?</button>
        </section>
      </section>
    </header>
    <main class="hero">
      <section class="separator">
        <div class="separator__line"></div>
        <div class="separator__circle">01</div>
      </section>
      <section class="hero__image-container">
        <img
          src="/images/desktop/image-woman-in-videocall.jpg"
          alt="hero image"
          aria-label="Woman having meet using laptop"
          class="hero__image"
          width="500"
          height="500"
        />
        <img
          src="/images/desktop/image-women-videochatting.jpg"
          alt="hero image"
          aria-label="Womens having meet using phone"
          class="hero__image"
          width="500"
          height="500"
        />
        <img
          src="/images/desktop/image-men-in-meeting.jpg"
          alt="hero image"
          aria-label="Man having meet using laptop"
          class="hero__image"
          width="500"
          height="500"
        />
        <img
          src="/images/desktop/image-man-texting.jpg"
          alt="hero image"
          aria-label="Man having meet using phone"
          class="hero__image"
          width="500"
          height="500"
        />
      </section>
      <section class="hero__content">
        <header class="hero__content-header">
          <p class="hero__introduction">Built for modern use</p>
          <h2 class="hero__subtitle">Smarter meetings, all in one place</h2>
        </header>
        <p class="description">
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
      </section>
    </main>
  </body>
  <footer class="footer">
    <section class="separator footer__separator">
      <div class="separator__line"></div>
      <div class="separator__circle">02</div>
    </section>
    <section class="footer__hero">
      <div class="footer__hero-inner">
        <h2>Experience more together</h2>
        <p class="description footer__description">
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group video sessions.
        </p>
        <button class="button button--download button--purple">
          Download <span class="version">v1.3</span>
        </button>
      </div>
    </section>
  </footer>
</template>
<script>
import "./assets/styles/main.scss";
export default {
  name: "App",
  components: {},
  methods: {
    isDesktop() {
      return window.innerWidth > 1024;
    },
  },
};
</script>
