<template>
  <div>
    <slot />
    <FooterPartial @scroll-to-contact="toggleScrollToContact()" />
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
import FooterPartial from '~/layouts/partials/Footer.vue';
//import GoTop from '@inotom/vue-go-top';

export default {
  methods: {
    toggleScrollToContact() {
      this.$emit('scroll-to-contact');
    },
  },
  components: {
    FooterPartial,
  },
  metaInfo: {},
};
</script>
<style scoped></style>
