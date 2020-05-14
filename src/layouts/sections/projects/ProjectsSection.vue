<template>
  <section id="projects-section">
    <b-container id="projects-body">
      <b-row id="featured-row">
        <b-card-group columns>
          <b-card md="6" class="project-box">
            <b-container id="ipfc-webapp">
              <b-row>
                <b-col cols="10" class="p-0 d-flex">
                  <h4 class="project-title align-self-center">
                    Inter Planetary Flash Cards Web App
                  </h4></b-col
                >
                <b-col cols="2" class="pl-0 py-2 d-flex">
                  <g-image
                    width="100%"
                    src="~/resources/images/IPFC-logo.svg"
                  ></g-image
                ></b-col>
              </b-row>
              <hr class="my-1" />
              <b-row class="my-1 ">
                <b-col cols="5" class="d-flex">
                  <g-image
                    class="align-self-center"
                    width="138px"
                    src="~/resources/images/IPFC-demo.gif"
                  ></g-image>
                </b-col>
                <b-col cols="7">
                  <p class="mt-2 ml-n3">
                    IFPC is the core of an EdTech ecosystem designed to empower
                    self directed learning and help teachers flip their
                    classroom.
                  </p>
                  <p class="mt-2 ml-n3">
                    IPFC leverages the Inter Planetary File System (IPFS) to
                    give users control over their data and enabling amazing
                    interoperability between EdTech apps
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
          <b-card md="6" class="project-box">
            <b-container id="ipfc-extension">
              <b-row>
                <b-col cols="10" class="p-0 d-flex">
                  <h4 class="project-title align-self-center">
                    Inter Planetary Flash Cards Browser Extension
                  </h4></b-col
                >
                <b-col cols="2" class="pl-0 py-2 d-flex">
                  <g-image
                    class="align-center"
                    width="100%"
                    src="~/resources/images/IPFC-logo.svg"
                  ></g-image
                ></b-col>
              </b-row>
              <hr class="my-1" />
              <b-row class="my-1">
                <b-col sm="12">
                  <ul class="v-2 mx-0">
                    <li>Save highlights and flashcards from around the web.</li>
                    <li>
                      View card and highlights that others have made, and
                      instantly add them to your own collection.
                    </li>
                    <li>
                      Create beautiful cards with text formatting and inserted
                      media.
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
          <b-card md="6" class="project-box">
            <b-container id="my-blog">
              <b-row>
                <b-col cols="10" class="p-0 d-flex">
                  <h4 class="project-title align-self-center">
                    My website
                  </h4></b-col
                >
              </b-row>
              <hr class="my-1" />
              <b-row class="my-1">
                <b-col sm="12">
                  <p>
                    A personal website to host my blog and showcase my web
                    development work. The site was built with Vue.js, using
                    Gridsome and Bootstrap 4.
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
        </b-card-group>
      </b-row>
      <div id="spacer"></div>
    </b-container>
  </section>
</template>

<script>
export default {};
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
