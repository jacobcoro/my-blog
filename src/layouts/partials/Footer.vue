<template>
  <div class="overflow-hidden">
    <div id="navbar">
      <g-link v-if="windowWidth > 450" to="/" class="nav-link text-white">
        <g-image
          src="~/resources/images/my-face-logo-white-border.png"
          id="my-face-logo"
          height="30px"
          width="25px"
          class="mr-1 ml-0"
        />
      </g-link>
      <g-link
        v-if="windowWidth > 616"
        to="/"
        class="nav-link navbar-name mr-auto"
      >
        Jacob Cohen-Rosenthal
      </g-link>
      <g-link v-if="$route.path !== '/'" to="/" class="nav-link" exact
        >Home</g-link
      >

      <g-link v-if="$route.path !== '/blog'" to="/blog" class="nav-link" exact
        >Blog</g-link
      >
      <!-- <g-link
        v-if="$route.path !== '/resources'"
        to="/resources"
        class="nav-link"
        exact
        >Resources</g-link
      > -->
      <g-link
        v-if="$route.path !== '/projects'"
        to="/projects"
        class="nav-link"
        exact
        >Projects</g-link
      >
      <a
        v-if="windowWidth > 400"
        class="nav-link p-0 m-0"
        @click="scrollToContact()"
      >
        <g-link to="/#contact" class="nav-link">Contact</g-link>
      </a>
      <b-navbar-brand v-if="windowWidth > 500" class="d-flex mr-0">
        <a
          href="https://github.com/Jewcub"
          target="_blank"
          class="nav-link text-light"
          alt="Github"
          rel="noopener"
        >
          <font-awesome :icon="['fab', 'github']"></font-awesome>
        </a>
      </b-navbar-brand>
      <Search></Search>
    </div>
  </div>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>
<script>
// import MyFaceLogo from '~/resources/images/my-face-logo-white-border.svg';
import Search from '~/layouts/partials/Search.vue';
let myBody = {
  classList: {},
};

export default {
  components: {
    Search,
    // MyFaceLogo,
  },
  computed: {},
  data() {
    return {
      windowWidth: null,
      locationPath: '/',
    };
  },

  methods: {
    showNavigation() {
      myBody.classList.add('overlay-active');
    },
    hideNavigation() {
      this.$root.$emit('bv::toggle::collapse', 'header-navbar');
      myBody.classList.remove('overlay-active');
    },
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    scrollToContact() {
      this.$emit('scroll-to-contact');
    },
  },
  watch: {},

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },

  mounted() {
    this.windowWidth = window.innerWidth;
    myBody = document.getElementsByTagName('body')[0];
    myBody.classList.remove('overlay-active');
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });
  },
};
</script>
<style>
#navbar {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 45px;
  background-color: black;
  z-index: 50000;
  display: flex;
  justify-content: space-evenly;
  padding: 0.5rem;
}
</style>
