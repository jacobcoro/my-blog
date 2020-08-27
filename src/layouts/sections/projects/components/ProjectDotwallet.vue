<template>
  <b-card md="6" class="project-box">
    <b-container id="ipfc-extension">
      <b-row>
        <b-col cols="10" class="p-0 d-flex">
          <h4 class="project-title align-self-center">
            DotWallet
          </h4></b-col
        >
        <b-col cols="2" class="pl-0 py-2 d-flex">
          <g-image
            class="align-center"
            width="100%"
            src="~/resources/images/dotwallet-icon.svg"
          ></g-image
        ></b-col>
      </b-row>
      <hr class="my-1" />
      <b-row class="my-1">
        <b-col sm="12">
          <p class="mt-1">
            DotWallet is the most used Bitcoin SV wallet in the world. In my
            work at the company I have:
          </p>
          <ul class="v-2 mx-0">
            <li>
              Created example apps and tutorials for using the DotWallet APIs in
              Chinese and English
            </li>
            <li>
              Created backend and forntend JavaScript libraries for using
              DotWallet with Vue, Express and Koa
            </li>
            <li>
              Translated the API technical documentation from Chinese to English
            </li>
            <li>And much more ...</li>
          </ul>
        </b-col>
        <b-col sm="12" class="d-flex">
          <g-image
            class="m-auto align-self-center"
            src="~/resources/images/dotwallet-page.png"
          ></g-image>
        </b-col>
      </b-row>
      <b-row class="py-1 px-3">
        <a
          href="https://github.com/dotwallet"
          target="_blank"
          class="nav-link project-link text-dark"
          alt="Github"
          rel="noopener"
          >Github
          <font-awesome :icon="['fab', 'github']"></font-awesome>
        </a>
        <a
          href="https://developers.dotwallet.com/en/"
          target="_blank"
          class="nav-link project-link text-dark"
          alt="Github"
          rel="noopener"
          >Docs page
          <font-awesome icon="link"></font-awesome>
        </a>
        <a
          href="https://dotwallet-test.herokuapp.com/"
          target="_blank"
          class="nav-link project-link text-dark"
          alt="Github"
          rel="noopener"
          >Example app
          <font-awesome icon="link"></font-awesome>
        </a>
      </b-row>
    </b-container>
  </b-card>
</template>
