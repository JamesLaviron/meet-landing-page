<template>
  <header class="header">
    <img
      src="../images/logo-118x28.png"
      alt="logo"
      aria-label="Meet logo"
      class="logo header__logo"
      width="118"
      height="28"
    />
  </header>
  <body>
    <header class="content-header">
      <img
        class="content-header__image"
        src="../public/images/tablet/image-hero.png"
        alt="hero image"
        aria-label="Group of people having meet"
        width="820"
        height="303"
      />
      <section class="content-header__content">
        <h1 class="title content__header__title">Group Chat for Everyone</h1>
        <p class="description content-header__description">
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device.
        </p>
        <section class="content-header__buttons-container">
          <button
            class="button button-download content-header__button-download"
          >
            Download v1.3
          </button>
          <button class="button content-header__button-question">
            What is it?
          </button>
        </section>
      </section>
    </header>
    <main class="hero">
      <header class="hero__header">
        <img
          src="../images/logo-118x28.png"
          alt="separator"
          class="hero__separator"
        />
      </header>
      <section class="hero__image-container">
        <img
          src="../public/images/desktop/image-woman-in-videocall.jpg"
          alt="hero image"
          aria-label="Woman having meet using laptop"
          class="hero__image"
          width="500"
          height="500"
        />
        <img
          src="../public/images/desktop/image-women-videochatting.jpg"
          alt="hero image"
          aria-label="Womens having meet using phone"
          class="hero__image"
          width="500"
          height="500"
        />
        <img
          src="../public/images/desktop/image-men-in-meeting.jpg"
          alt="hero image"
          aria-label="Man having meet using laptop"
          class="hero__image"
          width="500"
          height="500"
        />
        <img
          src="../public/images/desktop/image-man-texting.jpg"
          alt="hero image"
          aria-label="Man having meet using phone"
          class="hero__image"
          width="500"
          height="500"
        />
      </section>
      <section class="hero__content">
        <p class="hero__introduction">Built for modern use</p>
        <h2 class="title hero__subtitle">Smarter meetings, all in one place</h2>
        <p class="description hero__description">
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
      </section>
    </main>
  </body>
  <footer class="footer">
    <header class="footer__header">
      <img
        src="../images/logo-118x28.png"
        alt="separator"
        class="footer__separator"
      />
    </header>
    <section class="footer__hero">
      <h2 class="footer__title">Experience more together</h2>
      <p class="description footer__description">
        Stay connected with reliable HD meetings and unlimited one-on-one and
        group video sessions.
      </p>
      <button class="button button-download footer__button">
        Download v1.3
      </button>
    </section>
  </footer>
</template>
<script>
import "./assets/styles/main.scss";
export default {
  name: "App",
  components: {},
};
</script>
