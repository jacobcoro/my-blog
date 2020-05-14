<template>
  <b-col style="padding:10px" md="6" lg="4" sm="6">
    <b-card class="record-card" footer-class="border-0 bg-white">
      <g-link class="card-link" :to="recordLink">
        <b-card-title tag="h4">
          {{ record.title }}
        </b-card-title>
      </g-link>

      <b-card-text>
        {{ record.excerpt }}
      </b-card-text>
      <b-card-text>
        <g-link class="card-link" :to="recordLink">Continue reading...</g-link>
      </b-card-text>
      <template v-slot:footer footer-class="border-0 m-0 bg-white p-0">
        <span class="small"
          >{{ record.createdAt }} <strong>&#183;</strong>
          {{ record.timeToRead }} min read</span
        >
      </template>
    </b-card>
  </b-col>
</template>

<script>
export default {
  components: {},
  props: ['record'],
  computed: {
    recordLink() {
      if (this.record.recordType == 'Article') {
        return `/blog/${this.record.slug}`;
      }
      return this.record.path;
    },
  },
};
</script>
<style scoped>
.record-card {
  box-shadow: 0px 0px 40px rgba(65, 53, 3, 0.5);
  border-radius: 15px;
  padding: 0;
  background-color: white;
  margin: 0;
}
.record-card:hover {
  box-shadow: 0px 0px 40px rgba(255, 204, 0, 0.5);
}
</style>
