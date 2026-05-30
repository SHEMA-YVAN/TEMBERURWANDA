<script setup>
import { state, t } from "../i18n"
import { RouterLink } from "vue-router"
</script>

<template>

<!-- HERO -->
<section class="relative h-screen flex items-center justify-center text-white overflow-hidden">

  <img
    src="/src/Assets/Image/about1.jpg"
    class="absolute inset-0 w-full h-full object-cover object-center"
  />

  <div class="absolute inset-0 bg-black/60"></div>

  <div class="relative text-center px-6">
    <h1 class="text-5xl md:text-6xl font-bold mb-4">
      {{ t[state.lang].servicesTitle }}
    </h1>

    <p class="text-xl text-green-200 mb-6">
      {{ t[state.lang].servicesSubtitle }}
    </p>
  </div>

</section>

<!-- SERVICES -->
<section class="py-16 px-6 md:px-20 bg-white">

  <h2 class="text-4xl font-bold text-center text-green-800 mb-12">
    {{ t[state.lang].ourServices }}
  </h2>

  <div class="grid md:grid-cols-3 gap-8">

    <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300">
      <img src="/src/Assets/Image/about2.jpg" class="h-56 w-full object-cover" />
      <div class="p-6">
        <h3 class="text-2xl font-bold text-green-800 mb-3">
          {{ t[state.lang].gorillaTrekking }}
        </h3>
        <p class="text-gray-600">
          {{ t[state.lang].gorillaText }}
        </p>
      </div>
    </div>

    <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300">
      <img src="/src/Assets/Image/akagera.jpg" class="h-56 w-full object-cover" />
      <div class="p-6">
        <h3 class="text-2xl font-bold text-green-800 mb-3">
          {{ t[state.lang].safari }}
        </h3>
        <p class="text-gray-600">
          {{ t[state.lang].safariText }}
        </p>
      </div>
    </div>

    <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300">
      <img src="/src/Assets/Image/nyungwe.jpg" class="h-56 w-full object-cover" />
      <div class="p-6">
        <h3 class="text-2xl font-bold text-green-800 mb-3">
          {{ t[state.lang].rainforest }}
        </h3>
        <p class="text-gray-600">
          {{ t[state.lang].rainforestText }}
        </p>
      </div>
    </div>

    <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300">
      <img src="/src/Assets/Image/lake.jpg" class="h-56 w-full object-cover" />
      <div class="p-6">
        <h3 class="text-2xl font-bold text-green-800 mb-3">
          {{ t[state.lang].lakeTours }}
        </h3>
        <p class="text-gray-600">
          {{ t[state.lang].lakeText }}
        </p>
      </div>
    </div>

    <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300">
      <img src="/src/Assets/Image/kigali.jpg" class="h-56 w-full object-cover" />
      <div class="p-6">
        <h3 class="text-2xl font-bold text-green-800 mb-3">
          {{ t[state.lang].cityExperiences }}
        </h3>
        <p class="text-gray-600">
          {{ t[state.lang].cityText }}
        </p>
      </div>
    </div>

    <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300">
      <img src="/src/Assets/Image/travel.jpg" class="h-56 w-full object-cover" />
      <div class="p-6">
        <h3 class="text-2xl font-bold text-green-800 mb-3">
          {{ t[state.lang].travelPlanning }}
        </h3>
        <p class="text-gray-600">
          {{ t[state.lang].travelText }}
        </p>
      </div>
    </div>

  </div>

</section>

<!-- STATISTICS -->
<section class="bg-green-800 py-16">

  <div class="grid md:grid-cols-4 gap-8 px-6 md:px-20 text-center text-white">

    <div>
      <h2 class="text-5xl font-bold mb-2">50+</h2>
      <p>{{ t[state.lang].statsAttractions }}</p>
    </div>

    <div>
      <h2 class="text-5xl font-bold mb-2">1000+</h2>
      <p>{{ t[state.lang].statsVisitors }}</p>
    </div>

    <div>
      <h2 class="text-5xl font-bold mb-2">5</h2>
      <p>{{ t[state.lang].statsRegions }}</p>
    </div>

    <div>
      <h2 class="text-5xl font-bold mb-2">24/7</h2>
      <p>{{ t[state.lang].statsSupport }}</p>
    </div>

  </div>

</section>

<!-- TOUR PACKAGES -->
<section class="py-16 px-6 md:px-20 bg-gray-50">

  <h2 class="text-4xl font-bold text-center text-green-800 mb-12">
    {{ t[state.lang].tourPackages }}
  </h2>

  <div class="grid md:grid-cols-3 gap-8">

    <div class="bg-white rounded-xl shadow-lg overflow-hidden">
      <img src="/src/Assets/Image/virunga.jpg" class="h-56 w-full object-cover" />
      <div class="p-6">
        <h3 class="text-2xl font-bold text-green-800">
          {{ t[state.lang].gorillaPackage }}
        </h3>
        <p class="text-gray-600 mt-2">
          {{ t[state.lang].gorillaPackageText }}
        </p>
        <button class="bg-green-800 text-white px-4 py-2 rounded-lg mt-4 hover:bg-green-700">
          {{ t[state.lang].learnMore }}
        </button>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-lg overflow-hidden">
      <img src="/src/Assets/Image/akagera.jpg" class="h-56 w-full object-cover" />
      <div class="p-6">
        <h3 class="text-2xl font-bold text-green-800">
          {{ t[state.lang].safariPackage }}
        </h3>
        <p class="text-gray-600 mt-2">
          {{ t[state.lang].safariPackageText }}
        </p>
        <button class="bg-green-800 text-white px-4 py-2 rounded-lg mt-4 hover:bg-green-700">
          {{ t[state.lang].learnMore }}
        </button>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-lg overflow-hidden">
      <img src="/src/Assets/Image/lake.jpg" class="h-56 w-full object-cover" />
      <div class="p-6">
        <h3 class="text-2xl font-bold text-green-800">
          {{ t[state.lang].lakePackage }}
        </h3>
        <p class="text-gray-600 mt-2">
          {{ t[state.lang].lakePackageText }}
        </p>
        <button class="bg-green-800 text-white px-4 py-2 rounded-lg mt-4 hover:bg-green-700">
          {{ t[state.lang].learnMore }}
        </button>
      </div>
    </div>

  </div>

</section>

<!-- WHY CHOOSE US -->
<section class="py-16 px-6 md:px-20 bg-white">

  <h2 class="text-4xl font-bold text-center text-green-800 mb-12">
    {{ t[state.lang].whyChoose }}
  </h2>

  <div class="grid md:grid-cols-3 gap-8">

    <div class="bg-white p-8 rounded-xl shadow-lg text-center hover:-translate-y-2 transition duration-300">
      <h3 class="text-2xl font-bold text-green-700 mb-4">
        {{ t[state.lang].trusted }}
      </h3>
      <p class="text-gray-600">
        {{ t[state.lang].trustedText }}
      </p>
    </div>

    <div class="bg-white p-8 rounded-xl shadow-lg text-center hover:-translate-y-2 transition duration-300">
      <h3 class="text-2xl font-bold text-green-700 mb-4">
        {{ t[state.lang].localExpert }}
      </h3>
      <p class="text-gray-600">
        {{ t[state.lang].localExpertText }}
      </p>
    </div>

    <div class="bg-white p-8 rounded-xl shadow-lg text-center hover:-translate-y-2 transition duration-300">
      <h3 class="text-2xl font-bold text-green-700 mb-4">
        {{ t[state.lang].memorable }}
      </h3>
      <p class="text-gray-600">
        {{ t[state.lang].memorableText }}
      </p>
    </div>

  </div>

</section>

<!-- TESTIMONIALS -->
<section class="bg-gray-50 py-16 px-6 md:px-20">

  <h2 class="text-4xl font-bold text-center text-green-800 mb-12">
    {{ t[state.lang].testimonials }}
  </h2>

  <div class="grid md:grid-cols-3 gap-8">

    <div class="bg-white p-6 rounded-xl shadow-lg">
      <p class="mb-4">⭐⭐⭐⭐⭐</p>
      <p>{{ t[state.lang].review1 }}</p>
      <h4 class="font-bold mt-4">Sarah - Kenya</h4>
    </div>

    <div class="bg-white p-6 rounded-xl shadow-lg">
      <p class="mb-4">⭐⭐⭐⭐⭐</p>
      <p>{{ t[state.lang].review2 }}</p>
      <h4 class="font-bold mt-4">John - Uganda</h4>
    </div>

    <div class="bg-white p-6 rounded-xl shadow-lg">
      <p class="mb-4">⭐⭐⭐⭐⭐</p>
      <p>{{ t[state.lang].review3 }}</p>
      <h4 class="font-bold mt-4">Marie - France</h4>
    </div>

  </div>

</section>

<!-- CTA -->
<section class="bg-green-800 text-white text-center py-20">

  <h2 class="text-4xl font-bold mb-4">
    {{ t[state.lang].ctaTitle }}
  </h2>

  <p class="text-green-200 mb-8">
    {{ t[state.lang].ctaSubtitle }}
  </p>

  <RouterLink
    to="/contact"
    class="bg-white text-green-800 px-8 py-3 rounded-lg font-bold hover:bg-yellow-400"
  >
    {{ t[state.lang].contact }}
  </RouterLink>

</section>

</template>
