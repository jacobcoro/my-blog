<template>
  <DefaultLayout>
    <SectionHeaderBanner
      :totalCount="$page.records.totalCount"
    ></SectionHeaderBanner>
    <section id="blog-body" class="mb-3 pt-2">
      <b-container class="pb-5">
        <div>
          <b-row>
            <RecordCard
              v-for="edge in $page.records.edges"
              :key="edge.node.id"
              :record="edge.node"
            />
          </b-row>
        </div>
      </b-container>

      <Pagination
        baseUrl="/blog"
        :currentPage="$page.records.pageInfo.currentPage"
        :totalPages="$page.records.pageInfo.totalPages"
        :maxVisibleButtons="5"
        v-if="$page.records.pageInfo.totalPages > 1"
      />
    </section>
  </DefaultLayout>
</template>

<script>
import RecordCard from '~/components/RecordCard.vue';
import Pagination from '~/components/Pagination.vue';
import SectionHeaderBanner from '~/layouts/sections/blog/HeaderBanner.vue';

export default {
  components: {
    RecordCard,
    Pagination,
    SectionHeaderBanner,
  },
  metaInfo() {
    return {
      title: `Browse all blog posts`,
    };
  },
};
</script>

<page-query>
  query($page: Int) {
    records: allArticle(
      sortBy: "createdAt"
      order: DESC
      perPage: 9
      page: $page
    ) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          recordType
          title
          path
          slug
          excerpt
          createdAt(format: "Do MMMM YYYY")
          timeToRead
          tags {
            title
            path
          }
        }
      }
    }
  }
</page-query>

<style scoped>
#blog-body {
  background-color: #878787;
  min-height: calc(100vh - 210px);
}
</style>
