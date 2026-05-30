<script setup>
import { state, t } from "../i18n"
</script>

<template>

<!-- HERO -->
<section class="relative h-96 md:h-160 flex items-center justify-center text-white overflow-hidden">

  <img
    src="/src/Assets/Image/akagera.jpg"
    class="absolute inset-0 w-full h-full object-cover object-center"
  />

  <div class="absolute inset-0 bg-black/50"></div>

  <div class="relative text-center px-6">
    <h1 class="text-5xl font-bold mb-3">
      {{ t[state.lang].eastTitle }}
    </h1>

    <p class="text-green-200 text-lg">
      {{ t[state.lang].eastSubtitle }}
    </p>
  </div>

</section>

<!-- INTRO -->
<section class="py-16 px-6 md:px-24 bg-white">

  <div class="max-w-4xl mx-auto text-center">

    <h2 class="text-3xl font-bold text-green-800 mb-4">
      {{ t[state.lang].eastIntroTitle }}
    </h2>

    <p class="text-gray-600 leading-7">
      {{ t[state.lang].eastIntroText }}
    </p>

  </div>

</section>

<!-- ATTRACTIONS -->
<section class="bg-gray-50 py-16 px-6 md:px-24">

  <h2 class="text-4xl font-bold text-center text-green-800 mb-12">
    {{ t[state.lang].attractions }}
  </h2>

  <div class="grid md:grid-cols-3 gap-8">

    <!-- Akagera -->
    <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src="/src/Assets/Image/akagera1.jpg" class="h-48 w-full object-cover" />
      <div class="p-5">
        <h3 class="text-xl font-bold text-green-800 mb-2">
          {{ t[state.lang].akagera }}
        </h3>
        <p class="text-gray-600">
          {{ t[state.lang].akageraText }}
        </p>
      </div>
    </div>

    <!-- Lake Ihema -->
    <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src="/src/Assets/Image/ihema.jpg" class="h-48 w-full object-cover" />
      <div class="p-5">
        <h3 class="text-xl font-bold text-green-800 mb-2">
          {{ t[state.lang].ihema }}
        </h3>
        <p class="text-gray-600">
          {{ t[state.lang].ihemaText }}
        </p>
      </div>
    </div>

    <!-- Lake Muhazi -->
    <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src="/src/Assets/Image/muhazi.jpg" class="h-48 w-full object-cover" />
      <div class="p-5">
        <h3 class="text-xl font-bold text-green-800 mb-2">
          {{ t[state.lang].muhazi }}
        </h3>
        <p class="text-gray-600">
          {{ t[state.lang].muhaziText }}
        </p>
      </div>
    </div>

    <!-- Lake Mugesera -->
    <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src="/src/Assets/Image/mugesera.jpg" class="h-48 w-full object-cover" />
      <div class="p-5">
        <h3 class="text-xl font-bold text-green-800 mb-2">
          {{ t[state.lang].mugesera }}
        </h3>
        <p class="text-gray-600">
          {{ t[state.lang].mugeseraText }}
        </p>
      </div>
    </div>

    <!-- Bird Zones -->
    <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src="/src/Assets/Image/birds.jpg" class="h-48 w-full object-cover" />
      <div class="p-5">
        <h3 class="text-xl font-bold text-green-800 mb-2">
          {{ t[state.lang].birdZones }}
        </h3>
        <p class="text-gray-600">
          {{ t[state.lang].birdZonesText }}
        </p>
      </div>
    </div>

  </div>

</section>

<!-- CTA -->
<section class="bg-green-800 text-white text-center py-16 px-6">

  <h2 class="text-3xl font-bold mb-4">
    {{ t[state.lang].eastCTA }}
  </h2>

  <p class="text-green-200 mb-6">
    {{ t[state.lang].eastCTAText }}
  </p>

  <RouterLink
    to="/contact"
    class="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400"
  >
    {{ t[state.lang].contact }}
  </RouterLink>

</section>

</template>
