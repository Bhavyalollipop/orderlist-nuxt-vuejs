<template>
  <!-- component -->
  <div class="overflow-x-auto">
    <div class="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
      <table class="min-w-full">
        <!--  table header details for order -->
        <thead>
          <tr>
            <th v-for="list in header" :key="list.key" class="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 tracking-wider">
              {{ list.title }}
            </th>
            <th class="px-6 py-3 border-b-2 border-gray-300" />
          </tr>
        </thead>
        <tbody class="bg-white">
          <tr v-for="item in items" :key="item.key">
            <td v-for="(detail,index) in header" :key="detail.key" class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
              <div v-if="index === 0" class="flex items-center">
                <div>
                  <div class="text-sm leading-5 text-gray-800">
                    #{{ item.id }}
                  </div>
                </div>
              </div>
              <span v-else-if="detail.value === 'status'" class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight cursor-pointer" @click="() => $emit('changestatus',{id: item.id, status: item.status})">
                <span aria-hidden class="absolute inset-0 opacity-50 rounded-full " :class="{'bg-green-600' : item.status ===3 ,'bg-orange-400': item.status === 2, 'bg-yellow-300': item.status === 1} " />
                <span class="relative text-xs ">{{ item.status === 1 ? 'Order Received' : (item.status === 2 ? 'Preparing' : 'Ready to Serve') }}</span>
              </span>
              <span v-else-if="detail.value === 'total'">
                ₹ {{ item[detail.value] | currencyFormat }}
              </span>
              <span v-else>
                {{ item[detail.value] }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
              <button class="px-5 py-2 border-blue-500 border rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none" @click="() => $emit('opendetail',item)">
                View Details
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">
        <div>
          <p class="text-sm leading-5 text-blue-700">
            Showing
            <span class="font-medium">{{ ((pagination.current_page - 1) * 5) + 1 }}</span>
            to
            <span class="font-medium">{{ ( (pagination.current_page - 1) * 5) + items.length }}</span>
            of
            <span class="font-medium">{{ total }}</span>
            results
          </p>
        </div>
        <!--  pagination div of datatable -->
        <div>
          <nav class="relative z-0 inline-flex shadow-sm pb-2">
            <div :class="{'pointer-events-none' : pagination.current_page === 1 }">
              <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Previous" @click.prevent="() => $emit('pageHandler', {page: pagination.current_page - 1 } )">
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
            <div :class="{'pointer-events-none' : pagination.current_page >= (total / 5) }">
              <a href="#" class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Next" @click.prevent="() => $emit('pageHandler', {page: pagination.current_page + 1 } )">
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: { // table td list
      type: Array,
      default: () => []
    },
    header: { // table th list
      type: Array,
      default: () => []
    },
    total: {
      type: Number,
      default: 0
    },
    pagination: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
