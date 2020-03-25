<template>
  <section>
    <b-container id="projects-body">
      <b-row id="featured-row">
        <b-col md="6">
          <h1 class="project-title">Inter Planetary Flash Cards Webapp</h1>
          <b-container class="project-box">
            <b-row>
              <b-col cols="6">
                <g-image
                  width="100%"
                  height="100%"
                  class="ml-4"
                  src="~/resources/images/IPFC-logo.svg"
                ></g-image>
                <p class="mt-2 mr-n3">
                  IFPC is the core of an EdTech ecosystem designed to empower
                  self directed learning and help teachers flip their classroom.
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
        </b-col>
        <b-col md="6">
          <h1 class="project-title">
            Inter Planetary Flash Cards Browser Extension
          </h1>

          <b-container class="project-box">
            <b-row>
              <b-col cols="6">
                <g-image
                  width="100%"
                  height="100%"
                  class="ml-4"
                  src="~/resources/images/IPFC-logo.svg"
                ></g-image>
                <p class="mt-2 mr-n3">
                  IFPC is the core of an EdTech ecosystem designed to empower
                  self directed learning and help teachers flip their classroom.
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
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {};
</script>

<style>
#projects-body {
  max-width: none;
  padding: 0;
  margin: 0;
  text-align: center;
  color: white;
}
#featured-row {
  background-color: #878787;
  max-width: none;
}
.project-title {
  margin-top: 2rem;
}
.project-box {
  box-shadow: 0px 0px 250px rgba(255, 204, 0, 0.5);

  padding: 1rem;
  background-color: white;
}
</style>
