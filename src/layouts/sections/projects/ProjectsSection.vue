<template>
  <section id="projects-section">
    <b-container id="projects-body">
      <b-row id="featured-row">
        <b-card-group columns>
          <ipfc-webapp></ipfc-webapp>
          <eduvault></eduvault>
          <ipfc-extension></ipfc-extension>
          <my-blog></my-blog>
          <dotwallet></dotwallet>
        </b-card-group>
      </b-row>
      <div id="spacer"></div>
    </b-container>
  </section>
</template>

<script>
import { ProjectIPFCWebapp as IpfcWebapp } from './proj-components/ProjectIPFCWebapp';
import { ProjectIPFCExt as IpfcExtension } from './proj-components/ProjectIPFCExt';
import { ProjectMyBlog as MyBlog } from './proj-components/ProjectMyBlog';
import { ProjectEduvault as Eduvault } from './proj-components/ProjectEduVault';
import { ProjectDotwallet as Dotwallet } from './proj-components/ProjectDotwallet';
export default {
  components: {
    IpfcWebapp,
    IpfcExtension,
    MyBlog,
    Eduvault,
    Dotwallet,
  },
};
</script>

<style>
#projects-section {
  background-color: #878787;
  min-height: calc(100vh - 210px);
}
#projects-body {
  max-width: none;
  padding: 0 10px;
  margin: 0;
}
#projects-body .row {
  margin: 0;
}
#featured-row {
  max-width: none;
}
.project-box > .card-body {
  padding: 0;
}
.project-box {
  box-shadow: 0px 0px 40px rgba(65, 53, 3, 0.5);
  border-radius: 15px;
  padding: 10px 0 0 0;
  background-color: white;
  margin: 20px 0;
}
.project-box:hover {
  box-shadow: 0px 0px 40px rgba(255, 204, 0, 0.5);
}
.project-title {
  margin: 5px 0px;
  color: #588191;
}
#spacer {
  height: 40px;
}
</style>
