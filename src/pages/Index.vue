<template>
  <DefaultLayout>
    <SectionHeaderBanner></SectionHeaderBanner>

    <SectionFeaturedSection></SectionFeaturedSection>

    <SectionContribute></SectionContribute>

    <SectionInfoBoxes></SectionInfoBoxes>

    <SectionOpenSource></SectionOpenSource>
  </DefaultLayout>
</template>

<script>
import SectionHeaderBanner from '~/layouts/sections/index/HeaderBanner.vue';
import SectionFeaturedSection from '~/layouts/sections/index/FeaturedSection.vue';

import SectionContribute from '~/layouts/sections/index/Contribute.vue';
import SectionInfoBoxes from '~/layouts/sections/index/InfoBoxes.vue';
import SectionOpenSource from '~/layouts/sections/index/OpenSource.vue';

export default {
  components: {
    SectionHeaderBanner,
    SectionFeaturedSection,
    SectionContribute,
    SectionInfoBoxes,
    SectionOpenSource,
  },
  metaInfo: {
    title: 'Home',
  },
};
</script>
