<template>
  <b-card md="6" class="project-box">
    <b-container id="my-blog">
      <b-row>
        <b-col cols="10" class="p-0 d-flex">
          <h4 class="project-title align-self-center">My website</h4></b-col
        >
      </b-row>
      <hr class="my-1" />
      <b-row class="my-1">
        <b-col sm="12">
          <p>
            A personal website to host my blog and showcase my web development
            work. The site was built with Vue.js, using Gridsome and Bootstrap
            4. Design mockups were done on Figma.
          </p>
        </b-col>
        <b-col sm="12" class="d-flex">
          <g-image
            class="m-auto align-self-center"
            src="~/resources/images/my-blog-cover.png"
          ></g-image>
        </b-col>
      </b-row>
      <b-row class="py-1 px-3">
        <a
          href="https://github.com/Jewcub/my-blog"
          target="_blank"
          class="nav-link project-link text-dark"
          alt="Github"
          rel="noopener"
          >Github
          <font-awesome :icon="['fab', 'github']"></font-awesome>
        </a>
        <g-link
          to="/"
          class="nav-link project-link text-dark"
          alt="Github"
          rel="noopener"
          >Site
          <font-awesome icon="link"></font-awesome>
        </g-link>
      </b-row>
    </b-container>
  </b-card>
</template>
