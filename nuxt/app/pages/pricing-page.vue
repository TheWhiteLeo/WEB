<template>
  <div class="w-full max-w-6xl mx-auto mb-16 pt-8 flex flex-col items-center">

    <PricingCardHeader v-model:isAnnual="isAnnual" />

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">

      <template v-if="pending">
        <PricingCardSkeleton v-for="i in 3" :key="'skeleton-' + i" />
      </template>

      <div v-else-if="error" class="col-span-1 md:col-span-3 bg-red-50 border border-red-200 rounded-xl p-8 text-center">
        <svg class="w-12 h-12 text-red-400 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <h3 class="text-lg font-bold text-red-800 mb-1">Oops! We couldn't load the plans.</h3>
        <p class="text-red-600 text-sm">Please check your connection or try refreshing the page.</p>
      </div>

      <template v-else-if="plans && plans.length > 0">
        <PricingCardBody
          v-for="plan in plans"
          :key="plan.id"
          :plan="plan"
          :isAnnual="isAnnual"
        />
      </template>

      <div v-else class="col-span-1 md:col-span-3 text-center text-gray-500 py-8">
        No pricing plans available at the moment.
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Дістаємо pending та error. Додаємо lazy: true, щоб не блокувати рендер сторінки
const { data: plans, pending, error } = await useFetch('/api/plans', {
  lazy: true
})

const isAnnual = ref(true)
</script>
