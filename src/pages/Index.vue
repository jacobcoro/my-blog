<template>
  <DefaultLayout>
    <SectionHeaderBanner></SectionHeaderBanner>

    <SectionFeaturedSection></SectionFeaturedSection>

    <SectionAboutSection></SectionAboutSection>
  </DefaultLayout>
</template>

<script>
import SectionHeaderBanner from '~/layouts/sections/index/HeaderBanner.vue';
import SectionFeaturedSection from '~/layouts/sections/index/FeaturedSection.vue';
import SectionAboutSection from '~/layouts/sections/index/AboutSection.vue';

export default {
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
