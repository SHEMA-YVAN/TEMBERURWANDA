<script setup>
import { state, t } from "../i18n"
</script>

<template>

<!-- HERO -->
<section class="relative h-96 md:h-160 flex items-center justify-center text-white overflow-hidden">

  <img
    src="/src/Assets/Image/nyungwe.jpg"
    class="absolute inset-0 w-full h-full object-cover object-center"
  />

  <div class="absolute inset-0 bg-black/50"></div>

  <div class="relative text-center px-6">
    <h1 class="text-5xl font-bold mb-3">
      {{ t[state.lang].southTitle }}
    </h1>

    <p class="text-green-200 text-lg">
      {{ t[state.lang].southSubtitle }}
    </p>
  </div>

</section>

<!-- INTRO -->
<section class="py-16 px-6 md:px-24 bg-white">

  <div class="max-w-4xl mx-auto text-center">

    <h2 class="text-3xl font-bold text-green-800 mb-4">
      {{ t[state.lang].southIntroTitle }}
    </h2>

    <p class="text-gray-600 leading-7">
      {{ t[state.lang].southIntroText }}
    </p>

  </div>

</section>

<!-- ATTRACTIONS -->
<section class="bg-gray-50 py-16 px-6 md:px-24">

  <h2 class="text-4xl font-bold text-center text-green-800 mb-12">
    {{ t[state.lang].attractions }}
  </h2>

  <div class="grid md:grid-cols-3 gap-8">

    <!-- Nyungwe -->
    <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src="/src/Assets/Image/nyungwe1.jpg" class="h-48 w-full object-cover" />
      <div class="p-5">
        <h3 class="text-xl font-bold text-green-800 mb-2">
          {{ t[state.lang].nyungwePark }}
        </h3>
        <p class="text-gray-600">
          {{ t[state.lang].nyungweText }}
        </p>
      </div>
    </div>

    <!-- Canopy Walk -->
    <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src="/src/Assets/Image/canopy.jpg" class="h-48 w-full object-cover" />
      <div class="p-5">
        <h3 class="text-xl font-bold text-green-800 mb-2">
          {{ t[state.lang].canopyWalk }}
        </h3>
        <p class="text-gray-600">
          {{ t[state.lang].canopyText }}
        </p>
      </div>
    </div>

    <!-- Kamiranzovu -->
    <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src="/src/Assets/Image/fall.jpg" class="h-48 w-full object-cover" />
      <div class="p-5">
        <h3 class="text-xl font-bold text-green-800 mb-2">
          {{ t[state.lang].kamiranzovu }}
        </h3>
        <p class="text-gray-600">
          {{ t[state.lang].kamiranzovuText }}
        </p>
      </div>
    </div>

    <!-- King's Palace -->
    <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src="/src/Assets/Image/king.jpg" class="h-48 w-full object-cover" />
      <div class="p-5">
        <h3 class="text-xl font-bold text-green-800 mb-2">
          {{ t[state.lang].kingsPalace }}
        </h3>
        <p class="text-gray-600">
          {{ t[state.lang].kingsText }}
        </p>
      </div>
    </div>

    <!-- Ethnographic Museum -->
    <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src="/src/Assets/Image/eth.jpg" class="h-48 w-full object-cover" />
      <div class="p-5">
        <h3 class="text-xl font-bold text-green-800 mb-2">
          {{ t[state.lang].ethnoMuseum }}
        </h3>
        <p class="text-gray-600">
          {{ t[state.lang].ethnoText }}
        </p>
      </div>
    </div>

    <!-- Kibeho -->
    <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src="/src/Assets/Image/kibeho.jpg" class="h-48 w-full object-cover" />
      <div class="p-5">
        <h3 class="text-xl font-bold text-green-800 mb-2">
          {{ t[state.lang].kibeho }}
        </h3>
        <p class="text-gray-600">
          {{ t[state.lang].kibehoText }}
        </p>
      </div>
    </div>

  </div>

</section>

<!-- CTA -->
<section class="bg-green-800 text-white text-center py-16 px-6">

  <h2 class="text-3xl font-bold mb-4">
    {{ t[state.lang].southCTA }}
  </h2>

  <p class="text-green-200 mb-6">
    {{ t[state.lang].southCTAText }}
  </p>

  <RouterLink
    to="/contact"
    class="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400"
  >
    {{ t[state.lang].contact }}
  </RouterLink>

</section>

</template>
