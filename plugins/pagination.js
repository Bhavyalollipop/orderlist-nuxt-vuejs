export default {
  methods: {
    async pageHandler ({ page }) {
      this.pagination.current_page = await page
      await this.$fetch()
    },
    changestatus (item) {
      this.$store.dispatch('order/changeStatus', item).then(() => {
        this.$fetch()
      })
    }
  }
}
