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
          <ul class="v-2 mx-0">
            <li>Save highlights and flashcards from around the web.</li>
            <li>
              View card and highlights that others have made, and instantly add
              them to your own collection.
            </li>
            <li>
              Create beautiful cards with text formatting and inserted media.
            </li>
            <li>And much more ...</li>
          </ul>
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
