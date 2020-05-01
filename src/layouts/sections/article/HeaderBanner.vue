<template>
  <section class="sticky-header">
    <b-container id="article-header" class="p-1 m-0 d-flex flex-column">
      <g-image id="writing" src="~/resources/images/writing.png"></g-image>
      <b-row class="article-header-row p-0 m-0">
        <b-col cols="12" class="p-0 m-0">
          <p id="article-title" class="title md-txt">{{ record.title }}</p>
        </b-col>
      </b-row>
      <b-row class="article-header-row d-none d-md-block">
        <b-col cols="12" class="p-0 m-0 d-flex justify-content-end">
          <p id="article-header-subtitle" class="title xs-txt mr-1">
            Jacob Cohen-Rosenthal
          </p>
        </b-col></b-row
      >
    </b-container>
  </section>
</template>

<script>
export default {
  props: ['record'],
};
</script>
<style scoped>
.sticky-header {
  position: sticky;
  top: 0;
  width: 100%;
  min-height: 170px;
  z-index: -1;
}
#article-header {
  background-color: #c60;
  justify-content: center;
  width: 100%;
  max-width: none;
  min-height: 170px;
}
#writing {
  position: absolute;
  top: 0;
  left: 0;
  mix-blend-mode: darken;
  margin-right: auto;
  opacity: 0.1;
}
.article-header-row {
  width: 100%;
  height: 50%;
  margin-top: 20px;
}
#article-title {
  text-align: center;
  margin-top: 0px;
  padding: 0;
  font-variant: small-caps;
}
#article-header-subtitle {
  text-align: right;
  align-self: flex-end;
  margin-bottom: 0;
  padding: 0;
}
</style>
