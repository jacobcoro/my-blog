<template>
  <section class="">
    <b-container id="featured-main">
      <b-row id="featured-main-row">
        <b-col
          id="featured-article"
          class="p-4 overflow-hidden home-page-section"
          lg="6"
        >
          <div class="max-width-400">
            <b-container class="mb-2 p-0">
              <b-row>
                <b-col cols="7">
                  <p class="title sm-txt mb-n3 mt-3">featured blog</p>
                  <p class="title lg-txt mb-3">Article</p>
                </b-col>
                <b-col cols="4">
                  <g-image
                    class="mt-n3 ml-n3"
                    height="135%"
                    width="135%"
                    src="~/resources/images/ray-group1.png"
                    alt="rays"
                  />
                </b-col>
              </b-row>
            </b-container>

            <div class="bg-white p-3 feature-box" id="article-box">
              <h1>A False Dichotomy</h1>
              <p>
                Rote learning is often seen as the antithesis of creative,
                active, project-based, etc. progressive education philosophies.
                But in reality they can go hand in hand. Like most things in
                life, both “sides” of this debate, are harmful when taken to the
                extreme. People often cite Americans’ low math...
              </p>
            </div>
            <g-link to="/blog">
              <p class="title sm-txt mt-3">view all articles...</p>
            </g-link>
          </div>
        </b-col>
        <b-col
          id="featured-project"
          class="p-4 overflow-hidden home-page-section"
          lg="6"
        >
          <div class="max-width-400">
            <b-container class="mb-2 p-0">
              <b-row>
                <b-col cols="7">
                  <p class="title sm-txt mb-n3 mt-3">showcase</p>
                  <p class="title lg-txt mb-3">Project</p>
                </b-col>
                <b-col cols="3" sm="4">
                  <g-image
                    class="mt-n3 "
                    height="120%"
                    width="140%"
                    src="~/resources/images/ray-group2.png"
                    alt="rays"
                  />
                </b-col>
              </b-row>
            </b-container>

            <div class="bg-white p-3 feature-box" id="project-box">
              <b-container class="p-0">
                <b-row>
                  <b-col cols="6">
                    <g-image
                      width="100%"
                      height="100%"
                      class="ml-4"
                      src="~/resources/images/IPFC-logo.svg"
                    ></g-image>
                    <p class="mt-2 mr-n3">
                      Inter Planetary Flash Cards is the core of an EdTech
                      ecosystem designed to empower self directed learning and
                      help teachers flip their classroom.
                    </p>
                  </b-col>
                  <b-col cols="5">
                    <g-image
                      class="m-auto"
                      width="138px"
                      src="~/resources/images/IPFC-demo.gif"
                    ></g-image>
                  </b-col>
                </b-row>
              </b-container>
            </div>
            <g-link to="/projects">
              <p class="title sm-txt mt-3">view all projects...</p>
            </g-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {};
</script>

<style>
#featured-main {
  padding: 0;
  width: 100%;
  max-width: none;
}
#featured-main-row {
  margin: 0;
}
#featured-article {
  background-color: #4a4a4a;
  height: 100%;
}
#featured-project {
  background-color: #993333;
  height: 100%;
}
.feature-box {
  height: 300px;
  cursor: pointer;
}
#article-box {
  box-shadow: 0px 0px 150px rgba(255, 204, 0, 0.51);
}
#project-box {
  box-shadow: 0px 0px 150px rgba(255, 204, 0, 0.83);
}
</style>
