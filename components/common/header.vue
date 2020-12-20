<template>
  <div>
    <nav class="flex items-center justify-between flex-wrap bg-teal p-3">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <!--  dummy company logo -->
        <img src="~/assets/images/dominosLogoBlue.png" style="width: 30px">
      </div>
      <!--  company name -->
      <div class="text-white text-xl italic ">
        PIZZA CORNER
      </div>
    </nav>
    <!--  breadcrumps component on the bottom of header -->
    <Breadcrumps :list="breadcrumps" />
  </div>
  </nav>
  </div>
</template>
<script>
import Breadcrumps from '@/components/common/breadcrumps'
export default {
  components: {
    Breadcrumps
  },
  props: {
    breadcrumps: {
      type: Array,
      default: () => []
    }
  }
}
</script>
