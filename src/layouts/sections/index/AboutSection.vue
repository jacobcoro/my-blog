<template>
  <section class="overflow-hidden">
    <b-container id="about-head">
      <div id="about-centering">
        <g-image src="~/resources/images/mountain.png"></g-image>
        <p class="title lg-txt">ABOUT</p>
      </div>
    </b-container>
    <b-container id="about-body">
      <b-row>
        <b-col id="programming-chops" class="home-page-section" lg="6">
          <b-container class="max-width-400"
            ><b-row class="ml-n4"
              ><b-col cols="6"
                ><g-image
                  id="cleaver"
                  src="~/resources/images/cleaver.png"
                ></g-image></b-col
              ><b-col cols="6" class="ml-n4 mt-5">
                <p class="title sm-txt mb-n2 mt-5">Programming</p>
                <p class="title lg-txt mb-3">Chops</p>
              </b-col>
            </b-row>
            <b-row>
              <p class="about-p mt-n3">
                I can make websites and web apps. Starting with some UX
                brainstorming techniques, I make basic designs using Photoshop
                and Figma, create Javascript front-ends mostly with Vue.js, and
                build backends mostly with Python Flask or Node.js Koa/Express,
                and connect to PostgreSQL, MondoDB, and ThreadsDB databases.
              </p>
              <p class="about-p mb-5">
                I’ve used a wide variety of frameworks and libraries like
                Bootstrap, JQuery, Nuxt and Gridsome. I’ve solved tricky logical
                problems like a handwritten cloud sync merge with conflict
                resolution. I’ve explored cutting edge technologies like
                distributed and decentralized architecture and integrated them
                in my projects in a meaningful way.
              </p>
              <div class="bottom-space"></div>
            </b-row>
          </b-container>
        </b-col>
        <b-col id="education-accumen" class="home-page-section" lg="6">
          <b-container class="max-width-400"
            ><b-row class="ml-n4"
              ><b-col style="z-index:500" cols="6" class="ml-n3 mt-3  ">
                <p class="title sm-txt mb-n2">Education</p>
                <p class="title lg-txt">Accumen</p> </b-col
              ><b-col cols="6"
                ><g-image
                  id="apple"
                  src="~/resources/images/apple.png"
                ></g-image
              ></b-col>
            </b-row>
            <b-row>
              <p class="about-p mt-2">
                Over 10 years, I’ve taught students from ages 4 to 74 English,
                Art, Social Studies and Psychology, in public and private
                schools, 1 on 1 and in groups of 60. I challenge students to
                think critically and creatively, and to be practical and
                ethical.
              </p>
              <p class="about-p">
                Based on my teaching research and my own experience learning
                Chinese and programming, I’m a strong proponent of
                project-based-learning accompanied by computer assisted review
                and memorization. Technology will play an ever greater role in
                education and I’m excited to be on the forefront of this change.
              </p></b-row
            >
            <b-row>
              <g-image
                id="taco"
                class="mt-2"
                src="~/resources/images/taco.png"
              ></g-image>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
      <b-row>
        <b-col id="my-story" class="home-page-section" lg="6">
          <b-container class="max-width-400">
            <b-row>
              <p class="about-p mt-5">
                I’m from Ithaca, NY and live in Fuzhou, China. I’m fluent in
                Chinese. I started a Mexican restaurant by selling burritos on
                the street in Fuzhou. At 5 years, 3 locations and 50 employees,
                we were the largest and longest running foreign run
                establishment in our city of 8 million.
              </p>
              <p class="about-p">
                I studied Psychology and Ceramic Art in college, which remain
                interests of mine. I love playing guitar and piano. I used to
                love cooking.
              </p>
              <p class="about-p">
                I'm currently working at
                <a href="https://en.fjmu.edu.cn/">Fujian Medical University</a>
                as an English Language Instructor, and at Bitcoin
                <a href="https://www.mempool.com/">mining</a> and
                <a href="https://dotwallet.com">wallet</a> company
                <a href="https://www.boquaninc.com"
                  >Fuzhou Boquan Network Technology Co., Ltd</a
                >
                doing developer outreach, front-end development, and translation
                of technical documentation.
              </p></b-row
            >
            <b-row class="mt-3 ml-0 mr-0 ">
              <b-col cols="4" class="p-0">
                <p class="title sm-txt mb-n2">
                  What a long strange
                </p>
                <p class="title lg-txt mt-n2">trip</p>
                <div class="bottom-space"></div>
              </b-col>
              <b-col cols="8" class="p-0 align-self-center">
                <g-image id="road" src="~/resources/images/road.png"> </g-image>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
        <b-col class="contact-section home-page-section" lg="6">
          <b-container class="max-width-400">
            <a></a>
            <b-row>
              <g-image
                id="the-touch"
                src="~/resources/images/the-touch.png"
              ></g-image>
            </b-row>
            <b-row class="ml-n4 contact-info-row">
              <p class="title sm-txt mt-4">get in</p>
              <p class="title lg-txt mt-n2 ml-1">touch</p>
              <p class="about-p mt-n5">
                jacob@jacobcohen-rosenthal.me
              </p>
              <div id="contact" class="bottom-space"></div>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  props: {
    scrollToContact: { type: Boolean, default: false },
  },
  watch: {
    scrollToContact() {
      this.startScroll();
    },
  },
  methods: {
    startScroll() {
      var elmnt = document.getElementById('contact');
      elmnt.scrollIntoView();
    },
  },
  mounted() {
    if (window.location.hash === '#contact') {
      this.$nextTick(() => {
        this.startScroll();
      });
    }
  },
};
</script>

<style>
#about-head {
  max-width: none;
  height: 700px;
  background-color: #ffcc00;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
#about-body {
  max-width: none;
}
.about-p {
  color: white;
}
#programming-chops {
  background-color: #cc6600;
}
#education-accumen {
  background-color: #339cd0;
}
#my-story {
  background-color: #cc9999;
}
.contact-section {
  background-color: #ffcc00;
}

.bottom-space {
  height: 85px;
}
#cleaver {
  mix-blend-mode: darken;
  opacity: 0.5;
}
#apple {
  margin-top: -159px;
  margin-left: 28px;
}
#taco {
  max-width: 100%;
  max-height: 100%;
}
#road {
  max-width: 100%;
  max-height: 100%;
  margin-bottom: 80px;
}
#the-touch {
  mix-blend-mode: darken;
  opacity: 0.5;
  max-width: 100%;
  max-height: 100%;
}
.contact-info-row {
  margin-top: -50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
