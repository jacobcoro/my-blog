<template>
  <section class="overflow-hidden">
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

            <div
              @click="
                $router.push({
                  path:
                    '/blog/learning-how-to-learn-programming-by-programming-a-learning-program',
                })
              "
              class="bg-white p-3 feature-box"
              id="article-box"
            >
              <g-link
                to="/blog/learning-how-to-learn-programming-by-programming-a-learning-program"
              >
                <h1>
                  Learning how to Learn Programming by Programming a Learning
                  Program
                </h1>
              </g-link>
              <p>
                Developers we are in a unique position. Learning is a core and
                continuous part of our work. Mislead by the oft-cited 10,000
                hour rule, you might be inclined to think that just putting in
                enough...
              </p>
            </div>
            <g-link to="/blog">
              <p class="title sm-txt mt-3">view all articles...</p>
            </g-link>
          </div>
        </b-col>
        <b-col
          @click="$router.push({ path: '/projects/#ipfc-webapp' })"
          id="featured-project"
          class="p-4 overflow-hidden home-page-section"
          lg="6"
        >
          <div class="max-width-400">
            <b-container class="mb-2 p-0">
              <b-row>
                <b-col>
                  <p class="title sm-txt mb-n3 mt-3">showcase</p>
                  <p class="title lg-txt mb-3">Project</p>
                </b-col>
                <b-col>
                  <g-image
                    id="demo-gif"
                    class="mt-n3 "
                    src="~/resources/images/ray-group2.png"
                    alt="rays"
                  />
                </b-col>
              </b-row>
            </b-container>

            <div
              class="bg-white p-3 feature-box overflow-hidden"
              id="project-box"
            >
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
                      IFPC is the core of an EdTech ecosystem designed to
                      empower self directed learning and help teachers flip
                      their classroom.
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
  overflow: hidden;
}
#article-box {
  box-shadow: 0px 0px 150px rgba(255, 204, 0, 0.51);
}
#project-box {
  box-shadow: 0px 0px 150px rgba(255, 204, 0, 0.83);
}
#demo-gif {
  max-width: 100%;
  max-height: 100%;
}
</style>
