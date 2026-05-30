<script setup>
import { ref, onMounted } from "vue"
import { state, t } from "../i18n"
import about1 from "../Assets/Image/about1.jpg"
import about2 from "../Assets/Image/about2.jpg"
import about3 from "../Assets/Image/about3.jpg"
import whyImage from "../Assets/Image/why.jpg"

const images = [
  about1,
  about2,
  about3,
]

const currentImage = ref(0)

onMounted(() => {
  setInterval(() => {
    currentImage.value =
      (currentImage.value + 1) % images.length
  }, 2500)
})
</script>

<template>

<!-- HERO SECTION -->
<section
  class="relative h-96 md:h-170 bg-cover bg-center flex items-center justify-center text-white transition-all duration-1000"
  :style="{ backgroundImage: `url(${images[currentImage]})` }"
>

  <div class="absolute inset-0 bg-black/50"></div>

  <div class="relative text-center px-6 max-w-2xl">

    <h1 class="text-5xl font-bold mb-4">
      {{ t[state.lang].aboutTitle }}
    </h1>

    <p class="text-xl text-green-200">
      {{ t[state.lang].aboutSubtitle }}
    </p>

  </div>

</section>

<!-- INTRO SECTION -->
<section class="py-16 px-6 md:px-20 bg-white">

  <div class="grid md:grid-cols-2 gap-10 items-center">

    <img
      :src="whyImage"
      class="rounded-xl shadow-lg w-full h-96 object-cover"
    />

    <div>

      <h2 class="text-4xl font-bold text-green-800 mb-6">
        {{ t[state.lang].whoWeAre }}
      </h2>

      <p class="text-gray-700 leading-8 mb-4">
        {{ t[state.lang].aboutText1 }}
      </p>

      <p class="text-gray-700 leading-8">
        {{ t[state.lang].aboutText2 }}
      </p>

    </div>

  </div>

</section>

<!-- MISSION / VISION -->
<section class="bg-green-50 py-16 px-6 md:px-20">

  <div class="text-center mb-12">

    <h2 class="text-4xl font-bold text-green-800">
      {{ t[state.lang].missionVision }}
    </h2>

  </div>

  <div class="grid md:grid-cols-2 gap-8">

    <!-- MISSION -->
    <div class="bg-white p-8 rounded-xl shadow-lg">

      <h3 class="text-2xl font-bold text-green-700 mb-4">
        {{ t[state.lang].mission }}
      </h3>

      <p class="text-gray-600 leading-7">
        {{ t[state.lang].missionText }}
      </p>

    </div>

    <!-- VISION -->
    <div class="bg-white p-8 rounded-xl shadow-lg">

      <h3 class="text-2xl font-bold text-green-700 mb-4">
        {{ t[state.lang].vision }}
      </h3>

      <p class="text-gray-600 leading-7">
        {{ t[state.lang].visionText }}
      </p>

    </div>

  </div>

</section>

<!-- WHY CHOOSE US -->
<section class="py-16 px-6 md:px-20 bg-white">

  <h2 class="text-4xl font-bold text-center text-green-800 mb-12">
    {{ t[state.lang].whyChoose }}
  </h2>

  <div class="grid md:grid-cols-3 gap-8">

    <div class="text-center p-6 shadow-lg rounded-xl">
      <h3 class="text-xl font-bold text-green-700 mb-3">
        {{ t[state.lang].trustedInfo }}
      </h3>
      <p class="text-gray-600">
        {{ t[state.lang].trustedInfoText }}
      </p>
    </div>

    <div class="text-center p-6 shadow-lg rounded-xl">
      <h3 class="text-xl font-bold text-green-700 mb-3">
        {{ t[state.lang].easyAccess }}
      </h3>
      <p class="text-gray-600">
        {{ t[state.lang].easyAccessText }}
      </p>
    </div>

    <div class="text-center p-6 shadow-lg rounded-xl">
      <h3 class="text-xl font-bold text-green-700 mb-3">
        {{ t[state.lang].beautifulExperience }}
      </h3>
      <p class="text-gray-600">
        {{ t[state.lang].beautifulExperienceText }}
      </p>
    </div>

  </div>

</section>

</template>
