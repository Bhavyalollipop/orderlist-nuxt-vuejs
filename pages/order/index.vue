<template>
  <div>
    <!--  header component -->
    <Header :breadcrumps="breadcrumps" />
    <!--  body component -->
    <DataTable
      :header="header"
      :items="items"
      :total="total"
      :pagination="pagination"
      @opendetail="opendetail"
      @pageHandler="pageHandler"
      @changestatus="changestatus"
    />
    <Overlay :show-overlay="showOverlay" :item="child" @closedetail="closedetail" />
  </div>
</template>
<script>
import DataTable from '@/components/common/datatable'
import Overlay from '@/components/common/overlay'
import Header from '@/components/common/header'
import pagination from '@/plugins/pagination'
import { mapState } from 'vuex'
export default {
  components: {
    DataTable,
    Overlay,
    Header
  },
  mixins: [pagination],
  fetch () {
    this.$store.dispatch('order/getList', { page: this.pagination.current_page })
  },
  data () {
    return {
      title: 'Orders',
      breadcrumps: [
        {
          title: 'Home',
          path: '#'
        },
        {
          title: 'Order',
          path: '/order'
        }
      ],
      header: [
        {
          title: 'Order Id',
          value: 'id'
        },
        {
          title: 'Customer Name',
          value: 'name'
        },
        {
          title: 'Ordered Items',
          value: 'ordered_count'
        },
        {
          title: 'Total Amount',
          value: 'total'
        },
        {
          title: 'Status',
          value: 'status'
        }
      ],
      child: {},
      showOverlay: false,
      pagination: {
        current_page: 1
      }
    }
  },
  computed: {
    ...mapState({
      total: state => state.order.total,
      items: state => state.order.items
    })
  },
  methods: {
    opendetail (item) {
      this.child = item
      this.showOverlay = true
    },
    closedetail () {
      this.showOverlay = false
    }
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>
