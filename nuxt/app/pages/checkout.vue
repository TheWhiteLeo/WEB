<template>
  <div class="min-h-screen bg-white">
    <Head>
      <Title>Checkout - Start Your 3-Day Free Trial</Title>
    </Head>

    <header class="w-full bg-[#3f3f3f] py-4 flex justify-center shadow-md">
      <h1 class="text-white font-semibold text-lg">Checkout</h1>
    </header>

    <div class="max-w-6xl mx-auto px-4 py-8">

      <div class="mb-8">
        <button @click="$router.back()" class="text-gray-500 hover:text-gray-800 flex items-center text-sm mb-6 transition-colors cursor-pointer">
          &lt;&lt; back
        </button>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          You're Almost In - Start Your 3-Day Free Trial Now!
        </h2>
        <p class="text-gray-600">
          Set up your account to gain instant access! You won't be charged if you decide to cancel within 3 days
        </p>
      </div>

      <div v-if="pending" class="flex justify-center py-12">
        <div class="animate-pulse flex space-x-4">
          <div class="h-12 w-12 bg-gray-200 rounded-full"></div>
          <div class="space-y-3">
            <div class="h-4 bg-gray-200 rounded w-48"></div>
            <div class="h-4 bg-gray-200 rounded w-32"></div>
          </div>
        </div>
      </div>

      <div v-else-if="checkoutData?.plan" class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        <div class="lg:col-span-4">
          <PricingCardBody
            :plan="checkoutData.plan"
            :isAnnual="checkoutData.isAnnual"
            :show-button="false"
          />
        </div>

        <div class="lg:col-span-8">
          <CheckoutForm
            :plan="checkoutData.plan"
            :isAnnual="checkoutData.isAnnual"
          />
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Сторінка тепер максимально легка, жодної логіки форми!
useHead({
  title: 'Checkout - Start Your 3-Day Free Trial'
})

const route = useRoute()

const { data: checkoutData, pending } = await useFetch('/api/checkout-data', {
  lazy: true,
  query: {
    planId: route.query.planId,
    annual: route.query.annual
  }
})
</script>
