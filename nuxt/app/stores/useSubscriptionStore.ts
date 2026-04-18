import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { PricingPlan } from '~/types/pricing'

export const useSubscriptionStore = defineStore('subscription', () => {
  const selectedPlan = ref<PricingPlan | null>(null)
  const isAnnual = ref<boolean>(true)

  function setSubscription(plan: PricingPlan, annual: boolean) {
    selectedPlan.value = plan
    isAnnual.value = annual
  }

  return {
    selectedPlan,
    isAnnual,
    setSubscription
  }
})
