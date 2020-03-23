<template>
  <section class="height-700 bg-dark text-white bg-color-yellow">
    <b-container>
      <b-row class="justify-content-center text-center">
        <b-col md="10" lg="8" class="pt-3 pb-3">
          <p class="display-4 mb-0">Articles</p>
          <p class="lead">
            We have currently {{ totalCount }} articles in our list
          </p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  props: ['totalCount'],
};
</script>
