<template>
  <section>
    <b-container id="projects-header" class="p-0 m-0">
      <g-image id="writing" src="~/resources/images/wrench.png"></g-image>

      <b-row class="projects-header-row p-0 m-0">
        <b-col cols="12" class="p-0 m-0">
          <p id="projects-title" class="title lg-txt">Projects</p>
        </b-col>
      </b-row>
      <b-row class="projects-header-row">
        <b-col cols="12" class="p-0 m-0 d-flex justify-content-end">
          <p id="projects-header-subtitle" class="title sm-txt mr-1">
            web dev
          </p>
        </b-col></b-row
      >
    </b-container>
  </section>
</template>

<script>
export default {
  props: ['totalCount'],
};
</script>
<style>
#projects-header {
  background-color: #993333;
  justify-content: stretch;
  width: 100%;
  height: 170px;
  max-width: none;
}
#writing {
  position: absolute;
  top: 0;
  left: 0;
  mix-blend-mode: darken;
  margin-right: auto;
  opacity: 0.3;
}
.projects-header-row {
  width: 100%;
  height: 50%;
}
#projects-title {
  text-align: center;
  margin-top: 40px;
  padding: 0;
}
#projects-header-subtitle {
  text-align: right;
  align-self: flex-end;
  margin-bottom: 0;
  padding: 0;
}
</style>
