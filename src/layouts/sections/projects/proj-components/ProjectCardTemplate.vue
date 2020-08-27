<template>
  <b-card md="6" class="project-box">
    <b-container id="ipfc-webapp">
      <b-row>
        <b-col cols="10" class="p-0 d-flex">
          <h4 class="project-title align-self-center">
            Title
          </h4></b-col
        >
        <!-- logo -->
        <b-col cols="2" class="pl-0 py-2 d-flex">
          <g-image width="100%" src="~/resources/images/IPFC-logo.svg"></g-image
        ></b-col>
      </b-row>
      <hr class="my-1" />
      <b-row class="my-1 ">
        <b-col cols="5" class="d-flex">
          <!-- image -->
          <g-image
            class="align-self-center"
            width="138px"
            src="~/resources/images/IPFC-demo.gif"
          ></g-image>
        </b-col>
        <b-col cols="7">
          <!-- description -->
          <p class="mt-2 ml-n3">
            description
          </p>
        </b-col>
      </b-row>
      <b-row class="py-1 px-3">
        <a
          href="https://github.com/IPFC/Inter-Planetary-Flash-Cards"
          target="_blank"
          class="nav-link project-link text-dark"
          alt="Github"
          rel="noopener"
          >Github
          <font-awesome :icon="['fab', 'github']"></font-awesome>
        </a>
        <a
          href="https://ipfc.tech"
          target="_blank"
          class="nav-link project-link text-dark"
          alt="Github"
          rel="noopener"
          >Project site
          <font-awesome icon="link"></font-awesome>
        </a>
      </b-row>
    </b-container>
  </b-card>
</template>

<script>
export default {};
</script>

<style></style>
