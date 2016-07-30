/* ============
 * Pagination Component
 * ============
 */

export default {
  props: {
    switchFunction: {
      type: Function,
      required: true,
    },
    pagination: {
      type: Object,
      required: true,
    },
  },

  computed: {
    previousDisabled() {
      return this.pagination.currentPage <= 1;
    },
    nextDisabled() {
      return this.pagination.currentPage >= this.pagination.totalPages;
    },
  },

  methods: {
    goToPage(page) {
      this.switchFunction(page, this.pagination.limit);
    },
    previousPage() {
      if (!this.previousDisabled) {
        this.goToPage(this.pagination.currentPage - 1);
      }
    },
    nextPage() {
      if (!this.nextDisabled) {
        this.goToPage(this.pagination.currentPage + 1);
      }
    },
  },
};
