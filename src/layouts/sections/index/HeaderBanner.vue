<template>
  <section class="height-100 bg-warning">
    <b-container id="main-container" class="height-70 justify-content-center">
      <b-row class="text-center justify-content-center">
        <b-col cols="12" class="">
          <p class="home-banner small-txt ">
            Jacob Cohen-Rosenthal
          </p>
        </b-col>
        <b-col
          cols="12"
          id="home-graphic-col"
          class="height-30 justify-content-center"
        >
          <div id="venn-left"></div>
          <my-face-logo id="home-face-logo"></my-face-logo>
          <div id="venn-right"></div>
        </b-col>
        <b-col cols="12" md="10" lg="8" class="justify-content-center">
          <div id="Ed-tech-container">
            <span id="home-education" class="home-banner span"
              ><p class="home-banner large-txt">ED</p>
              <p class="home-banner small-txt">
                ucation
              </p></span
            >
            <span id="home-technology" class="home-banner span"
              ><p id="tech" class="home-banner large-txt ml-auto">TECH</p>
              <p style="" class="home-banner small-txt">
                nology
              </p></span
            >
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import MyFaceLogo from '~/resources/images/my-face-logo.svg';
export default {
  components: {
    MyFaceLogo,
  },
};
</script>

<style>
#venn-left {
  border-radius: 105px;

  width: 210px;
  height: 210px;
  z-index: 2;
  background: rgba(255, 0, 0, 0.5);
}
#venn-right {
  border-radius: 105px;
  width: 210px;
  height: 210px;
  background: #339cd0;
}
#home-face-logo {
  z-index: 3;
  width: 106px;
  height: 124px;
  margin: 40px -115px;
  opacity: 0.5;
}
#Ed-tech-container {
  width: 290px;
  margin: auto;
}
#home-technology {
  margin-top: -15px;
}
</style>
