<template>
  <b-card md="6" class="project-box">
    <b-container id="eduvault">
      <b-row>
        <b-col cols="10" class="p-0 d-flex">
          <h4 class="project-title align-self-center">
            EduVault
          </h4></b-col
        >
        <b-col cols="2" class="pl-0 py-2 d-flex">
          <g-image
            class="align-center"
            width="100%"
            src="~/resources/images/eduvault-logo.png"
          ></g-image
        ></b-col>
      </b-row>
      <hr class="my-1" />
      <b-row class="my-1">
        <b-col sm="12">
          <p class="mx-0">
            Own your own data and do more with your educational apps. Eduvault
            stores your data on an encrypted personal cloud, stored on a
            distributed network. Sign in with EduVault and take your learning
            progress with you, syncing automatically between apps.
          </p>
        </b-col>
        <b-col sm="12" class="d-flex">
          <g-image
            class="m-auto align-self-center"
            src="~/resources/images/ipfc-extension-demo.gif"
          ></g-image>
        </b-col>
      </b-row>
      <b-row class="py-1 px-3">
        <a
          href="https://github.com/IPFC/ipfc-extension"
          target="_blank"
          class="nav-link project-link text-dark"
          alt="Github"
          rel="noopener"
          >Github
          <font-awesome :icon="['fab', 'github']"></font-awesome>
        </a>
        <a
          href="https://chrome.google.com/webstore/detail/inter-planetary-flash-car/ffjpplmcceibehbaofplbmcldkmmhcob"
          target="_blank"
          class="nav-link project-link text-dark"
          alt="Github"
          rel="noopener"
          >Chrome
          <font-awesome icon="link"></font-awesome>
        </a>
        <a
          href="https://addons.mozilla.org/en-US/firefox/addon/inter-planetary-flash-cards/"
          target="_blank"
          class="nav-link project-link text-dark"
          alt="Github"
          rel="noopener"
          >Firefox
          <font-awesome icon="link"></font-awesome>
        </a>
      </b-row>
    </b-container>
  </b-card>
</template>
