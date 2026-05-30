<script setup>
import { ref, onMounted, onUnmounted } from "vue"
import { state, t } from "../i18n"
import contactHero1 from "../Assets/Image/gisozi.jpg"
import contactHero2 from "../Assets/Image/inema.jpg"
import contactHero3 from "../Assets/Image/mount.jpg"
import mapImage from "../Assets/Image/map.png"

const contactHeroImages = [contactHero1, contactHero2, contactHero3]
const currentHeroImage = ref(0)
let heroTimer

onMounted(() => {
  heroTimer = setInterval(() => {
    currentHeroImage.value =
      (currentHeroImage.value + 1) % contactHeroImages.length
  }, 3000)
})

onUnmounted(() => {
  clearInterval(heroTimer)
})
</script>

<template>

<!-- HERO -->
<section class="relative h-96 md:h-160 flex items-center justify-center text-white overflow-hidden">

  <img
    :src="contactHeroImages[currentHeroImage]"
    class="absolute inset-0 w-full h-full object-cover object-center"
  />

  <div class="absolute inset-0 bg-black/50"></div>

  <div class="relative text-center px-6">
    <h1 class="text-5xl font-bold mb-3">
      {{ t[state.lang].contactTitle }}
    </h1>

    <p class="text-green-200 text-lg">
      {{ t[state.lang].contactSubtitle }}
    </p>
  </div>

</section>

<!-- CONTACT INFO -->
<section class="py-16 px-6 md:px-20 bg-white">

  <h2 class="text-4xl font-bold text-center text-green-800 mb-12">
    {{ t[state.lang].getInTouch }}
  </h2>

  <div class="grid md:grid-cols-3 gap-8">

    <!-- EMAIL -->
    <div class="bg-green-50 p-8 rounded-xl shadow-lg text-center">
      <h3 class="text-xl font-bold text-green-800 mb-3">
        {{ t[state.lang].email }}
      </h3>
      <p class="text-gray-600">
        temberaurwanda@gmail.com
      </p>
    </div>

    <!-- PHONE -->
    <div class="bg-green-50 p-8 rounded-xl shadow-lg text-center">
      <h3 class="text-xl font-bold text-green-800 mb-3">
        {{ t[state.lang].phone }}
      </h3>
      <p class="text-gray-600">
        +250 788 234 789
      </p>
    </div>

    <!-- ADDRESS -->
    <div class="bg-green-50 p-8 rounded-xl shadow-lg text-center">
      <h3 class="text-xl font-bold text-green-800 mb-3">
        {{ t[state.lang].location }}
      </h3>
      <p class="text-gray-600">
        Kagugu, Kigali, Rwanda
      </p>
    </div>

  </div>

</section>

<!-- CONTACT FORM -->
<section class="bg-gray-50 py-16 px-6 md:px-20">

  <div class="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">

    <h2 class="text-3xl font-bold text-green-800 mb-8 text-center">
      {{ t[state.lang].sendMessage }}
    </h2>

    <form class="space-y-6">

      <input
        type="text"
        :placeholder="t[state.lang].fullName"
        class="w-full border border-gray-300 rounded-lg p-3"
      />

      <input
        type="email"
        :placeholder="t[state.lang].emailAddress"
        class="w-full border border-gray-300 rounded-lg p-3"
      />

      <input
        type="text"
        :placeholder="t[state.lang].subject"
        class="w-full border border-gray-300 rounded-lg p-3"
      />

      <textarea
        rows="5"
        :placeholder="t[state.lang].message"
        class="w-full border border-gray-300 rounded-lg p-3"
      ></textarea>

      <button
        type="submit"
        class="bg-green-800 text-white px-8 py-3 rounded-lg hover:bg-green-700"
      >
        {{ t[state.lang].send }}
      </button>

    </form>

  </div>

</section>

<!-- MAP -->
<section class="py-16 px-6 md:px-20 bg-white">

  <h2 class="text-3xl font-bold text-center text-green-800 mb-8">
    {{ t[state.lang].findUs }}
  </h2>

  <div class="h-96 overflow-hidden rounded-xl shadow-lg">
    <img
      :src="mapImage"
      :alt="t[state.lang].findUs"
      class="h-full w-full object-cover"
      loading="lazy"
    />
  </div>

</section>

<!-- CTA -->
<section class="bg-green-800 text-white text-center py-16 px-6">

  <h2 class="text-3xl font-bold mb-4">
    {{ t[state.lang].readyExplore }}
  </h2>

  <p class="text-green-200 mb-6">
    {{ t[state.lang].contactCTA }}
  </p>

  <RouterLink
    to="/services"
    class="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400"
  >
    {{ t[state.lang].viewServices }}
  </RouterLink>

</section>

</template>
