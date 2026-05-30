<script setup>
import { state, t } from "../i18n"
import videoPoster from "../Assets/Image/about1.jpg"
</script>

<template>

<!-- HERO -->
<section class="relative h-96 md:h-[640px] flex items-center justify-center text-white overflow-hidden">

  <img
    src="/src/Assets/Image/about1.jpg"
    class="absolute inset-0 w-full h-full object-cover object-center"
  />

  <div class="absolute inset-0 bg-black/60"></div>

  <div class="relative text-center px-6">
    <h1 class="text-5xl font-bold mb-3">
      {{ t[state.lang].videoTitle }}
    </h1>
    <p class="text-green-200 text-lg">
      {{ t[state.lang].videoSubtitle }}
    </p>
  </div>

</section>

<!-- FEATURED VIDEO -->
<section class="py-12 px-6 md:px-20 bg-white">

  <h2 class="text-3xl font-bold text-green-800 mb-6 text-center">
    {{ t[state.lang].featuredExperience }}
  </h2>

  <div class="rounded-2xl overflow-hidden shadow-2xl">

    <video
      class="w-full h-[500px] object-cover"
      autoplay
      muted
      loop
      playsinline
      controls
      preload="metadata"
      :poster="videoPoster"
    >
      <source src="/video7.mp4" type="video/mp4" />
    </video>

  </div>

  <p class="text-center text-gray-600 mt-4">
    {{ t[state.lang].featuredDesc }}
  </p>

</section>

<!-- VIDEO GRID -->
<section class="py-16 px-6 md:px-20 bg-gray-50">

  <h2 class="text-4xl font-bold text-center text-green-800 mb-12">
    {{ t[state.lang].exploreVideos }}
  </h2>

  <div class="grid md:grid-cols-3 gap-6">

    <!-- CARD 1 -->
    <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition">
      <video class="w-full h-56 object-cover" muted loop controls preload="metadata" :poster="videoPoster">
        <source src="/video2.mp4" type="video/mp4" />
      </video>
      <div class="p-4">
        <h3 class="font-bold text-green-800">
          {{ t[state.lang].video1Title }}
        </h3>
        <p class="text-gray-600 text-sm">
          {{ t[state.lang].video1Text }}
        </p>
      </div>
    </div>

    <!-- CARD 2 -->
    <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition">
      <video class="w-full h-56 object-cover" muted loop controls preload="metadata" :poster="videoPoster">
        <source src="/akagera.mp4" type="video/mp4" />
      </video>
      <div class="p-4">
        <h3 class="font-bold text-green-800">
          {{ t[state.lang].video2Title }}
        </h3>
        <p class="text-gray-600 text-sm">
          {{ t[state.lang].video2Text }}
        </p>
      </div>
    </div>

    <!-- CARD 3 -->
    <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition">
      <video class="w-full h-56 object-cover" muted loop controls preload="metadata" :poster="videoPoster">
        <source src="/dance.mp4" type="video/mp4" />
      </video>
      <div class="p-4">
        <h3 class="font-bold text-green-800">
          {{ t[state.lang].video3Title }}
        </h3>
        <p class="text-gray-600 text-sm">
          {{ t[state.lang].video3Text }}
        </p>
      </div>
    </div>

    <!-- CARD 4 -->
    <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition">
      <video class="w-full h-56 object-cover" muted loop controls preload="metadata" :poster="videoPoster">
        <source src="/kivu.mp4" type="video/mp4" />
      </video>
      <div class="p-4">
        <h3 class="font-bold text-green-800">
          {{ t[state.lang].video4Title }}
        </h3>
        <p class="text-gray-600 text-sm">
          {{ t[state.lang].video4Text }}
        </p>
      </div>
    </div>

    <!-- CARD 5 -->
    <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition">
      <video class="w-full h-56 object-cover" muted loop controls preload="metadata" :poster="videoPoster">
        <source src="/nyungwe.mp4" type="video/mp4" />
      </video>
      <div class="p-4">
        <h3 class="font-bold text-green-800">
          {{ t[state.lang].video5Title }}
        </h3>
        <p class="text-gray-600 text-sm">
          {{ t[state.lang].video5Text }}
        </p>
      </div>
    </div>

    <!-- CARD 6 -->
    <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition">
      <video class="w-full h-56 object-cover" muted loop controls preload="metadata" :poster="videoPoster">
        <source src="/kigali.mp4" type="video/mp4" />
      </video>
      <div class="p-4">
        <h3 class="font-bold text-green-800">
          {{ t[state.lang].video6Title }}
        </h3>
        <p class="text-gray-600 text-sm">
          {{ t[state.lang].video6Text }}
        </p>
      </div>
    </div>

  </div>

</section>

<!-- CTA -->
<section class="bg-green-800 text-white text-center py-20">

  <h2 class="text-4xl font-bold mb-4">
    {{ t[state.lang].videoCTA }}
  </h2>

  <p class="text-green-200 mb-8">
    {{ t[state.lang].videoCTAText }}
  </p>

  <RouterLink
    to="/contact"
    class="bg-white text-green-800 px-8 py-3 rounded-lg font-bold hover:bg-yellow-400"
  >
    {{ t[state.lang].contact }}
  </RouterLink>

</section>

</template>
