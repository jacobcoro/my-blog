<template id="app">
  <div>
    <DefaultLayout @scroll-to-contact="toggleScrollToContact()">
      <SectionHeaderBanner></SectionHeaderBanner>

      <SectionProjectsSection></SectionProjectsSection>
    </DefaultLayout>
  </div>
</template>

<script>
import SectionHeaderBanner from '~/layouts/sections/projects/HeaderBanner.vue';
import SectionProjectsSection from '~/layouts/sections/projects/ProjectsSection.vue';

export default {
  data() {
    return {
      scrollToContact: false,
    };
  },
  methods: {
    toggleScrollToContact() {
      this.scrollToContact = !this.scrollToContact;
    },
  },
  components: {
    SectionHeaderBanner,
    SectionProjectsSection,
  },
  metaInfo: {
    title: 'Home',
  },
};
</script>
<style scoped>
#app {
  position: fixed;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
