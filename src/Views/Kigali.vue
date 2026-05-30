<script setup>
import { state, t } from "../i18n"
</script>

<template>

<!-- HERO -->
<section class="relative h-screen flex items-center justify-center text-white overflow-hidden">

  <img
    src="/src/Assets/Image/kigali.jpg"
    class="absolute inset-0 w-full h-full object-cover object-center"
  />

  <div class="absolute inset-0 bg-black/50"></div>

  <div class="relative text-center px-6">
    <h1 class="text-5xl font-bold mb-3">
      {{ t[state.lang].kigaliTitle }}
    </h1>

    <p class="text-green-200 text-lg">
      {{ t[state.lang].kigaliSubtitle }}
    </p>
  </div>

</section>

<!-- INTRO -->
<section class="py-16 px-6 md:px-24 bg-white">

  <div class="max-w-4xl mx-auto text-center">

    <h2 class="text-3xl font-bold text-green-800 mb-4">
      {{ t[state.lang].kigaliDiscover }}
    </h2>

    <p class="text-gray-600 leading-7">
      {{ t[state.lang].kigaliIntroText }}
    </p>

  </div>

</section>

<!-- ATTRACTIONS -->
<section class="bg-gray-50 py-16 px-6 md:px-24">

  <h2 class="text-4xl font-bold text-center text-green-800 mb-12">
    {{ t[state.lang].kigaliAttractions }}
  </h2>

  <div class="grid md:grid-cols-3 gap-8">

    <!-- Genocide Memorial -->
    <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src="/src/Assets/Image/gisozi.jpg" class="h-48 w-full object-cover" />
      <div class="p-5">
        <h3 class="text-xl font-bold text-green-800 mb-2">
          {{ t[state.lang].genocideMemorial }}
        </h3>
        <p class="text-gray-600">
          {{ t[state.lang].genocideText }}
        </p>
      </div>
    </div>

    <!-- Inema Arts Center -->
    <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src="/src/Assets/Image/inema.jpg" class="h-48 w-full object-cover" />
      <div class="p-5">
        <h3 class="text-xl font-bold text-green-800 mb-2">
          {{ t[state.lang].inema }}
        </h3>
        <p class="text-gray-600">
          {{ t[state.lang].inemaText }}
        </p>
      </div>
    </div>

    <!-- Mount Kigali -->
    <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src="/src/Assets/Image/mount.jpg" class="h-48 w-full object-cover" />
      <div class="p-5">
        <h3 class="text-xl font-bold text-green-800 mb-2">
          {{ t[state.lang].mountKigali }}
        </h3>
        <p class="text-gray-600">
          {{ t[state.lang].mountKigaliText }}
        </p>
      </div>
    </div>

    <!-- Kimironko -->
    <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src="/src/Assets/Image/kimi.jpg" class="h-48 w-full object-cover" />
      <div class="p-5">
        <h3 class="text-xl font-bold text-green-800 mb-2">
          {{ t[state.lang].kimironko }}
        </h3>
        <p class="text-gray-600">
          {{ t[state.lang].kimironkoText }}
        </p>
      </div>
    </div>

    <!-- Nyamirambo -->
    <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src="/src/Assets/Image/nyami.jpg" class="h-48 w-full object-cover" />
      <div class="p-5">
        <h3 class="text-xl font-bold text-green-800 mb-2">
          {{ t[state.lang].nyamirambo }}
        </h3>
        <p class="text-gray-600">
          {{ t[state.lang].nyamiramboText }}
        </p>
      </div>
    </div>

    <!-- Presidential Palace -->
    <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src="/src/Assets/Image/pres.jpg" class="h-48 w-full object-cover" />
      <div class="p-5">
        <h3 class="text-xl font-bold text-green-800 mb-2">
          {{ t[state.lang].presidentialPalace }}
        </h3>
        <p class="text-gray-600">
          {{ t[state.lang].presidentialText }}
        </p>
      </div>
    </div>

    <!-- Fazenda -->
    <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src="/src/Assets/Image/fazenda.jpg" class="h-48 w-full object-cover" />
      <div class="p-5">
        <h3 class="text-xl font-bold text-green-800 mb-2">
          {{ t[state.lang].fazenda }}
        </h3>
        <p class="text-gray-600">
          {{ t[state.lang].fazendaText }}
        </p>
      </div>
    </div>

    <!-- Golf -->
    <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src="/src/Assets/Image/golf.jpg" class="h-48 w-full object-cover" />
      <div class="p-5">
        <h3 class="text-xl font-bold text-green-800 mb-2">
          {{ t[state.lang].golf }}
        </h3>
        <p class="text-gray-600">
          {{ t[state.lang].golfText }}
        </p>
      </div>
    </div>

  </div>

</section>

<!-- CTA -->
<section class="bg-green-800 text-white text-center py-16 px-6">

  <h2 class="text-3xl font-bold mb-4">
    {{ t[state.lang].exploreKigali }}
  </h2>

  <p class="text-green-200 mb-6">
    {{ t[state.lang].kigaliCTA }}
  </p>

  <RouterLink
    to="/contact"
    class="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400"
  >
    {{ t[state.lang].contact }}
  </RouterLink>

</section>

</template>
