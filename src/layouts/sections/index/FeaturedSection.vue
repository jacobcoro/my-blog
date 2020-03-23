<template>
  <section>
    <b-container id="featured-main">
      <b-row id="featured-main-row">
        <b-col id="featured-article" lg="6"></b-col>
        <b-col id="featured-project" lg="6"></b-col>
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
  height: 100vh;
}
#featured-article {
  background-color: #4a4a4a;
  height: 100%;
}
#featured-project {
  background-color: #993333;
  height: 100%;
}
</style>
