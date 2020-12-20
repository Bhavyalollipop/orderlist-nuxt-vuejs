<template>
  <div v-if="showOverlay" class="fixed inset-0 overflow-hidden" :class="{'w-0' : !showOverlay }">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />
      <section class="absolute inset-y-0 right-0 pl-10 max-w-full flex" aria-labelledby="slide-over-heading">
        <div class="relative w-screen max-w-md">
          <div class="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
            <button class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" @click="() => $emit('closedetail')">
              <span class="sr-only">Close panel</span>
              <!-- Heroicon name: x -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
            <div class="px-4 sm:px-6">
              <h2 id="slide-over-heading" class="text-lg font-medium text-gray-900">
                Order Details - {{ item.name }}
              </h2>
            </div>
            <div class="px-4 sm:px-6 text-sm mt-4">
              <div class="pb-1">
                <span class="font-bold">Order #:</span> {{ item.id }}
              </div>
              <div class="pb-1">
                <span class="font-bold">No. of items:</span> {{ item.ordered_count }}
              </div>
              <div class="pb-1">
                <span class="font-bold">Total:</span> {{ item.total | currencyFormat }}
              </div>
              <div class="pb-1">
                <span class="font-bold">Status:</span>
                <span class="text-black text-xs p-1">{{ item.status === 1 ? 'Order Received' : (item.status === 2 ? 'Preparing' : 'Ready to Serve') }}</span>
              </div>
            </div>
            <p class="pt-4 sm:px-6 text-lg mt-4 font-bold">
              Items
            </p>
            <div class="mt-6 relative flex-1 px-4 sm:px-6">
              <!-- Replace with your content -->
              <div class="absolute inset-0 px-4 sm:px-6">
                <div class="h-full border-2 border-dashed border-gray-200" aria-hidden="true">
                  <table class="w-full">
                    <tr v-for="(detail,index) in item.items" :key="detail.key">
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                        <div class="flex">
                          <img :src="getImgUrl(index)" style="width: 30px">
                          <span class="text-sm italic ml-3"> 1 * </span> {{ detail.product }}
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-right">
                        ₹ {{ detail.price | currencyFormat }}
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2" class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-right">
                        <span class="text-sm italic font-bold">Total: </span> ₹ {{ item.total | currencyFormat }}
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            <!-- /End replace -->
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    showOverlay: {
      type: Boolean,
      default: false
    },
    item: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    getImgUrl (index) {
      const image = index + 1
      return require(`../../assets/images/pizza/${image}.jpg`)
    }
  }
}
</script>
