<template>
  <div>
    <DefaultLayout @scroll-to-contact="toggleScrollToContact()">
      <SectionHeaderBanner></SectionHeaderBanner>

      <SectionFeaturedSection></SectionFeaturedSection>

      <SectionAboutSection
        :scrollToContact="scrollToContact"
      ></SectionAboutSection>
    </DefaultLayout>
  </div>
</template>

<script>
import SectionHeaderBanner from '~/layouts/sections/index/HeaderBanner.vue';
import SectionFeaturedSection from '~/layouts/sections/index/FeaturedSection.vue';
import SectionAboutSection from '~/layouts/sections/index/AboutSection.vue';

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
    SectionFeaturedSection,
    SectionAboutSection,
  },
  metaInfo: {
    title: 'Home',
  },
};
</script>
