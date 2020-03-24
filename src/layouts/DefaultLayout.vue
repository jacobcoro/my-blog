<template>
  <div>
    <slot />
    <FooterPartial />
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
  components: {
    FooterPartial,
  },
  metaInfo: {},
};
</script>
<style scoped></style>
