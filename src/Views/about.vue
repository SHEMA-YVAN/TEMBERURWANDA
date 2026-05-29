<script setup>
import { ref, onMounted } from "vue"

const images = [
  "/about1.jpg",
  "/about2.jpg",
  "/about3.jpg",
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
  class="relative h-screen bg-cover bg-center flex items-center justify-center text-white transition-all duration-1000"
  :style="{ backgroundImage: `url(${images[currentImage]})` }"
>

  <div class="absolute inset-0 bg-black/50"></div>

  <div class="relative text-center px-6 max-w-2xl">

    <h1 class="text-5xl font-bold mb-4">
      About Tembera u Rwanda
    </h1>

    <p class="text-xl text-green-200">
      Discover who we are and our mission to promote tourism in Rwanda
    </p>

  </div>

</section>



<!-- INTRO SECTION -->
<section class="py-16 px-6 md:px-20 bg-white">

  <div class="grid md:grid-cols-2 gap-10 items-center">

    <img
      src="/src/Assets/Image/why.jpg"
      class="rounded-xl shadow-lg w-full h-96 object-cover"
    />

    <div>

      <h2 class="text-4xl font-bold text-green-800 mb-6">
        Who We Are
      </h2>

      <p class="text-gray-700 leading-8 mb-4">
        Tembera u Rwanda is a tourism platform dedicated to showcasing the beauty,
        culture, wildlife, and landscapes of Rwanda.
      </p>

      <p class="text-gray-700 leading-8">
        We help travelers explore destinations easily and experience the best of
        Rwanda’s natural and cultural heritage.
      </p>

    </div>

  </div>

</section>

<!-- MISSION / VISION -->
<section class="bg-green-50 py-16 px-6 md:px-20">

  <div class="text-center mb-12">

    <h2 class="text-4xl font-bold text-green-800">
      Our Mission & Vision
    </h2>

  </div>

  <div class="grid md:grid-cols-2 gap-8">

    <!-- MISSION -->
    <div class="bg-white p-8 rounded-xl shadow-lg">

      <h3 class="text-2xl font-bold text-green-700 mb-4">
        Our Mission
      </h3>

      <p class="text-gray-600 leading-7">
        To promote tourism in Rwanda by making information about destinations,
        culture, and travel experiences easily accessible to everyone.
      </p>

    </div>

    <!-- VISION -->
    <div class="bg-white p-8 rounded-xl shadow-lg">

      <h3 class="text-2xl font-bold text-green-700 mb-4">
        Our Vision
      </h3>

      <p class="text-gray-600 leading-7">
        To become the leading digital tourism guide for Rwanda, connecting
        travelers with unforgettable experiences across the country.
      </p>

    </div>

  </div>

</section>

<!-- WHY CHOOSE US -->
<section class="py-16 px-6 md:px-20 bg-white">

  <h2 class="text-4xl font-bold text-center text-green-800 mb-12">
    Why Choose Us
  </h2>

  <div class="grid md:grid-cols-3 gap-8">

    <div class="text-center p-6 shadow-lg rounded-xl">
      <h3 class="text-xl font-bold text-green-700 mb-3">Trusted Info</h3>
      <p class="text-gray-600">Accurate and updated tourism information.</p>
    </div>

    <div class="text-center p-6 shadow-lg rounded-xl">
      <h3 class="text-xl font-bold text-green-700 mb-3">Easy Access</h3>
      <p class="text-gray-600">Simple navigation to all destinations.</p>
    </div>

    <div class="text-center p-6 shadow-lg rounded-xl">
      <h3 class="text-xl font-bold text-green-700 mb-3">Beautiful Experience</h3>
      <p class="text-gray-600">Showcasing the best of Rwanda visually.</p>
    </div>

  </div>

</section>

</template>