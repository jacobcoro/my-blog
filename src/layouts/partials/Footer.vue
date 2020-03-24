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
          @click="checkLocation('/')"
        />
      </g-link>
      <g-link
        v-if="windowWidth > 616"
        to="/"
        class="nav-link navbar-name mr-auto"
        @click="checkLocation()"
      >
        Jacob Cohen-Rosenthal
      </g-link>
      <g-link
        v-if="this.locationPath !== '/'"
        to="/"
        class="nav-link"
        exact
        @click="checkLocation('/')"
        >Home</g-link
      >

      <g-link
        v-if="this.locationPath !== '/blog'"
        to="/blog"
        class="nav-link"
        exact
        @click="checkLocation('/blog')"
        >Blog</g-link
      >
      <g-link
        v-if="this.locationPath !== '/resources'"
        to="/resources"
        class="nav-link"
        exact
        @click="checkLocation('/resources')"
        >Resources</g-link
      >
      <g-link
        v-if="this.locationPath !== '/projects'"
        to="/projects"
        class="nav-link"
        exact
        @click="checkLocation('/projects')"
        >Projects</g-link
      >
      <g-link
        v-if="this.locationPath !== '/contact' && windowWidth > 400"
        to="/#contact"
        class="nav-link"
        exact
        @click="checkLocation('/')"
        >Contact</g-link
      >
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
    checkLocation(path = null) {
      console.log(this.locationPath);
      if (!path) this.locationPath = window.location.pathname;
      else this.locationPath = path;
      console.log(this.locationPath);
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
    this.checkLocation();
  },
};
</script>
<style scoped>
#navbar {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: black;
  z-index: 50000;
  display: flex;
  justify-content: space-evenly;
  padding: 0.5rem;
}
</style>
