<script setup>
import { ref } from "vue"
import { state, t } from "../i18n"
import heroPoster from "../Assets/Image/about1.jpg"

const heroVideo = ref(null)

const playHeroVideo = () => {
  heroVideo.value?.play().catch(() => {})
}

const recoverHeroVideo = () => {
  if (!heroVideo.value) return

  heroVideo.value.load()
  playHeroVideo()
}
</script>

<template>

<section class="relative h-96 md:h-170 flex items-center justify-center text-white overflow-hidden">

  <!-- VIDEO -->
  <video
    ref="heroVideo"
    class="absolute inset-0 w-full h-full object-cover object-center"
    autoplay
    loop
    muted
    playsinline
    preload="auto"
    :poster="heroPoster"
    @canplay="playHeroVideo"
    @stalled="recoverHeroVideo"
    @error="recoverHeroVideo"
  >
    <source src="/video6.mp4" type="video/mp4" />
  </video>

  <!-- DARK OVERLAY -->
  <div class="absolute inset-0 bg-black/50"></div>

  <!-- TEXT -->
  <div class="relative text-center px-6 max-w-3xl">

    <h1 class="text-4xl md:text-6xl font-bold mb-4">
      {{ t[state.lang].homeTitle }}
    </h1>

    <p class="text-xl text-green-200 mb-6">
      {{ t[state.lang].homeSubtitle }}
    </p>

    <button class="bg-white border border-black text-black px-6 py-3 rounded-lg hover:bg-yellow-500">

      <RouterLink to="/about">
        {{ t[state.lang].learnMore }}
      </RouterLink>

    </button>

  </div>

</section>

<!-- TOP 5 ATTRACTIONS -->
<section class="py-16 px-6 md:px-20 bg-white">

  <h2 class="text-4xl font-bold text-center text-green-800 mb-10">
    {{ t[state.lang].topAttractions }}
  </h2>

  <div class="grid md:grid-cols-3 gap-8">

    <div class="shadow-lg rounded-xl overflow-hidden">
      <img src="/src/Assets/Image/virunga.jpg" class="h-56 w-full object-cover" />
      <div class="p-4">
        <h3 class="text-xl font-bold text-green-800">
          {{ t[state.lang].volcanoes }}
        </h3>
        <p class="text-gray-600">
          {{ t[state.lang].volcanoesText }}
        </p>
      </div>
    </div>

    <div class="shadow-lg rounded-xl overflow-hidden">
      <img src="/src/Assets/Image/lake.jpg" class="h-56 w-full object-cover" />
      <div class="p-4">
        <h3 class="text-xl font-bold text-green-800">
          {{ t[state.lang].lakeKivu }}
        </h3>
        <p class="text-gray-600">
          {{ t[state.lang].lakeKivuText }}
        </p>
      </div>
    </div>

    <div class="shadow-lg rounded-xl overflow-hidden">
      <img src="/src/Assets/Image/nyungwe.jpg" class="h-56 w-full object-cover" />
      <div class="p-4">
        <h3 class="text-xl font-bold text-green-800">
          {{ t[state.lang].nyungwe }}
        </h3>
        <p class="text-gray-600">
          {{ t[state.lang].nyungweText }}
        </p>
      </div>
    </div>

    <div class="shadow-lg rounded-xl overflow-hidden">
      <img src="/src/Assets/Image/akagera.jpg" class="h-56 w-full object-cover" />
      <div class="p-4">
        <h3 class="text-xl font-bold text-green-800">
          {{ t[state.lang].akagera }}
        </h3>
        <p class="text-gray-600">
          {{ t[state.lang].akageraText }}
        </p>
      </div>
    </div>

    <div class="shadow-lg rounded-xl overflow-hidden">
      <img src="/src/Assets/Image/kigali.jpg" class="h-56 w-full object-cover" />
      <div class="p-4">
        <h3 class="text-xl font-bold text-green-800">
          {{ t[state.lang].kigali }}
        </h3>
        <p class="text-gray-600">
          {{ t[state.lang].kigaliText }}
        </p>
      </div>
    </div>

  </div>

</section>

</template>
