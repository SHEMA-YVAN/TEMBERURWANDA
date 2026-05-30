<script setup>
import { state, t } from "../i18n"
</script>

<template>

<!-- HERO -->
<section class="relative h-96 md:h-[640px] flex items-center justify-center text-white overflow-hidden">

  <img
    src="/src/Assets/Image/virunga.jpg"
    class="absolute inset-0 w-full h-full object-cover object-center"
  />

  <div class="absolute inset-0 bg-black/50"></div>

  <div class="relative text-center px-6">
    <h1 class="text-5xl font-bold mb-3">
      {{ t[state.lang].northTitle }}
    </h1>

    <p class="text-green-200 text-lg">
      {{ t[state.lang].northSubtitle }}
    </p>
  </div>

</section>

<!-- INTRO -->
<section class="py-16 px-6 md:px-24 bg-white">

  <div class="max-w-4xl mx-auto text-center">

    <h2 class="text-3xl font-bold text-green-800 mb-4">
      {{ t[state.lang].northIntroTitle }}
    </h2>

    <p class="text-gray-600 leading-7">
      {{ t[state.lang].northIntroText }}
    </p>

  </div>

</section>

<!-- ATTRACTIONS -->
<section class="bg-gray-50 py-16 px-6 md:px-24">

  <h2 class="text-4xl font-bold text-center text-green-800 mb-12">
    {{ t[state.lang].attractions }}
  </h2>

  <div class="grid md:grid-cols-3 gap-8">

    <!-- Volcanoes -->
    <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src="/src/Assets/Image/5.jpg" class="h-48 w-full object-cover" />
      <div class="p-5">
        <h3 class="text-xl font-bold text-green-800 mb-2">
          {{ t[state.lang].volcanoesPark }}
        </h3>
        <p class="text-gray-600">
          {{ t[state.lang].volcanoesText }}
        </p>
      </div>
    </div>

    <!-- Twin Lakes -->
    <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src="/src/Assets/Image/twin.jpg" class="h-48 w-full object-cover" />
      <div class="p-5">
        <h3 class="text-xl font-bold text-green-800 mb-2">
          {{ t[state.lang].twinLakes }}
        </h3>
        <p class="text-gray-600">
          {{ t[state.lang].twinLakesText }}
        </p>
      </div>
    </div>

    <!-- Musanze Caves -->
    <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src="/src/Assets/Image/cave1.jpg" class="h-48 w-full object-cover" />
      <div class="p-5">
        <h3 class="text-xl font-bold text-green-800 mb-2">
          {{ t[state.lang].musanzeCaves }}
        </h3>
        <p class="text-gray-600">
          {{ t[state.lang].musanzeText }}
        </p>
      </div>
    </div>

    <!-- Mount Bisoke -->
    <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src="/src/Assets/Image/bisoke.jpg" class="h-48 w-full object-cover" />
      <div class="p-5">
        <h3 class="text-xl font-bold text-green-800 mb-2">
          {{ t[state.lang].bisoke }}
        </h3>
        <p class="text-gray-600">
          {{ t[state.lang].bisokeText }}
        </p>
      </div>
    </div>

    <!-- Karisimbi -->
    <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src="/src/Assets/Image/karisimbi.jpg" class="h-48 w-full object-cover" />
      <div class="p-5">
        <h3 class="text-xl font-bold text-green-800 mb-2">
          {{ t[state.lang].karisimbi }}
        </h3>
        <p class="text-gray-600">
          {{ t[state.lang].karisimbiText }}
        </p>
      </div>
    </div>

    <!-- Dian Fossey -->
    <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src="/src/Assets/Image/fossey.jpg" class="h-48 w-full object-cover" />
      <div class="p-5">
        <h3 class="text-xl font-bold text-green-800 mb-2">
          {{ t[state.lang].fossey }}
        </h3>
        <p class="text-gray-600">
          {{ t[state.lang].fosseyText }}
        </p>
      </div>
    </div>

  </div>

</section>

<!-- CTA -->
<section class="bg-green-800 text-white text-center py-16 px-6">

  <h2 class="text-3xl font-bold mb-4">
    {{ t[state.lang].northCTA }}
  </h2>

  <p class="text-green-200 mb-6">
    {{ t[state.lang].northCTAText }}
  </p>

  <RouterLink
    to="/contact"
    class="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400"
  >
    {{ t[state.lang].contact }}
  </RouterLink>

</section>

</template>
