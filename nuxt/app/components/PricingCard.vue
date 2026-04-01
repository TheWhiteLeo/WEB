<template>
  <div class="w-full max-w-6xl mx-auto mb-16 pt-8 flex flex-col items-center">
    <div class="w-full flex items-center justify-between mb-6">
      <div class="text-left">
        <h1 class="text-2xl sm:text-3xl font-bold text-gray-800 tracking-tight">
          Start Your 3 Day Free Trial
        </h1>
      </div>

      <div class="flex items-center">

        <div class="relative flex flex-col items-end mr-4">
          <svg class="w-5 h-5 text-green-500 absolute -top-4 -right-1 rotate-25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 20V18.6C4 15.2397 4 13.5595 4.65396 12.2761C5.2292 11.1471 6.14708 10.2292 7.27606 9.65396C8.55953 9 10.2397 9 13.6 9H20M20 9L15 14M20 9L15 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="text-green-500 font-medium text-sm tracking-wide">Save up to 20%</span>
        </div>

        <UTabs
          v-model="selectedTab"
          :items="billingOptions"
          :content="false"
          class="w-45"
          :ui="{
            list: 'bg-gray-100 border border-gray-200 p-0.5 rounded-md',
            indicator: 'hidden',
            trigger: 'transition-all duration-300 data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-gray-900 data-[state=inactive]:text-gray-500 hover:data-[state=inactive]:text-gray-700'
          }"/>

      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
      <div
        v-for="plan in plans"
        :key="plan.id"
        class="relative bg-white w-full rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
      >
        <div class="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-[#70e000] to-[#00bbf9]"></div>

        <div class="p-8 grow flex flex-col">
          <h2 class="text-xl font-bold text-gray-900 mb-4">
            {{ plan.name }} <span v-if="isAnnual">- Annual</span><span v-else>- Monthly</span>
          </h2>

          <div class="mb-2">
          <span class="bg-gray-100 text-gray-500 text-[11px] font-medium px-2 py-1 rounded">
            3-days free then:
          </span>
          </div>

          <div class="flex items-baseline mb-2">
            <span class="text-4xl font-extrabold text-gray-900 tracking-tight">
              ${{ isAnnual ? plan.annualPriceMonth : plan.monthlyPrice }}
            </span>
            <span class="text-gray-500 text-sm ml-1 font-medium">/month</span>
          </div>

          <div v-if="isAnnual" class="h-5 mb-3">
            <p class="text-gray-500 text-[13px]">
              billed yearly at
              <span class="line-through mr-1">${{ plan.originalYearlyTotal }}</span>
              <span class="font-bold text-gray-900">${{ plan.annualPriceTotal }}</span>
            </p>
          </div>

          <div v-if="isAnnual && plan.savings" class="h-8 mb-6">
            <span  class="bg-[#e2e8f0] text-green-600 text-[13px] font-bold px-3 py-1.5 rounded-md inline-block">
              {{ plan.savings }} in savings
            </span>
          </div>

          <div class="mb-8">
            <button class="w-full bg-linear-to-r from-[#ffd813] to-[#ff8b0b] text-gray-900 py-3 font-bold text-[14px] rounded-md transition-colors duration-200 cursor-pointer">
              Try It Free
            </button>
          </div>

          <ul class="space-y-3.5 grow">
            <li v-for="(feature, fIndex) in plan.features" :key="fIndex" class="flex items-start">
              <svg class="w-4 h-4 text-[#70e000] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z"/>
              </svg>
              <div class="ml-3">
                <p class="text-[13px] font-semibold text-gray-700 leading-snug" v-html="feature.text"></p>
                <p v-if="feature.subtext" class="text-gray-400 text-[12px] mt-0.5">{{ feature.subtext }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { TabsItem } from '@nuxt/ui'

const { data: plans } = await useFetch('/api/plans')

const billingOptions = ref<TabsItem[]>([
  {
    label: 'Annual'
  },
  {
    label: 'Monthly'
  }
])

const selectedTab = ref('0')
const isAnnual = computed(() => selectedTab.value === '0')
</script>
