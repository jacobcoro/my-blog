import DefaultLayout from '~/layouts/DefaultLayout.vue';
import EmptyLayout from '~/layouts/EmptyLayout.vue';

import BootstrapVue from 'bootstrap-vue';

import VueFuse from 'vue-fuse';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

import '~/resources/scss/theme.scss';

import 'prismjs/themes/prism.css';
import '~/resources/scss/prism-theme.scss';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

config.autoAddCss = false;

library.add(fas);
library.add(fab);

export default function(Vue, { head, router }) {
  Vue.component('DefaultLayout', DefaultLayout);
  Vue.component('EmptyLayout', EmptyLayout);
  Vue.component('font-awesome', FontAwesomeIcon);

  // // overwrite the scrollBehavior function with custom one
  // router.options.scrollBehavior = function(to, from) {
  //   console.log(to, from);

  //   if (to.hash) {
  //     return {
  //       selector: to.hash,
  //     };
  //   }
  //   if (
  //     (from.name == 'project' && to.name == 'project') ||
  //     (from.name == 'work' && to.name == 'project')
  //   ) {
  //     return window.scrollHeight;
  //   }
  //   return { x: 0, y: 0 };
  // };
  Vue.use(BootstrapVue);

  Vue.use(VueFuse);

  head.meta.push({
    charset: 'utf-8',
  });

  head.meta.push({
    name: 'viewport',
    content: 'width=device-width, initial-scale=1',
  });
}
