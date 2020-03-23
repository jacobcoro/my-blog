<template>
  <DefaultLayout>
    <SectionHeaderBanner></SectionHeaderBanner>

    <SectionLatestArticles></SectionLatestArticles>

    <SectionContribute></SectionContribute>

    <SectionInfoBoxes></SectionInfoBoxes>

    <SectionOpenSource></SectionOpenSource>
  </DefaultLayout>
</template>

<script>
import SectionHeaderBanner from '~/layouts/sections/index/HeaderBanner.vue';
import SectionLatestArticles from '~/layouts/sections/index/LatestArticles.vue';

import SectionContribute from '~/layouts/sections/index/Contribute.vue';
import SectionInfoBoxes from '~/layouts/sections/index/InfoBoxes.vue';
import SectionOpenSource from '~/layouts/sections/index/OpenSource.vue';

export default {
  components: {
    SectionHeaderBanner,
    SectionLatestArticles,
    SectionContribute,
    SectionInfoBoxes,
    SectionOpenSource,
  },
  metaInfo: {
    title: 'Home',
  },
};
</script>
