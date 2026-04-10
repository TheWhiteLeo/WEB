<template>
  <div class="relative bg-white w-full rounded-xl shadow-lg border border-gray-100 overflow-hidden flex flex-col animate-pulse">
    <div class="absolute top-0 left-0 right-0 h-1.5 bg-gray-200"></div>

    <div class="p-8 grow flex flex-col">
      <div class="h-6 bg-gray-200 rounded-md w-1/2 mb-4"></div>

      <div class="h-5 bg-gray-200 rounded-md w-1/3 mb-2"></div>

      <div class="h-10 bg-gray-200 rounded-md w-2/3 mb-2"></div>

      <div class="h-4 bg-gray-200 rounded-md w-1/2 mb-3"></div>

      <div class="h-8 bg-gray-200 rounded-md w-1/3 mb-6"></div>

      <div class="h-12 bg-gray-200 rounded-md w-full mb-8"></div>

      <div class="space-y-4 grow">
        <div v-for="i in 5" :key="i" class="flex items-start">
          <div class="w-4 h-4 bg-gray-200 rounded-full mt-0.5 shrink-0"></div>
          <div class="ml-3 w-full">
            <div class="h-4 bg-gray-200 rounded-md w-full mb-1.5"></div>
            <div class="h-3 bg-gray-200 rounded-md w-2/3"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
