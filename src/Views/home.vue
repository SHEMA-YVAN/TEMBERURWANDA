<script setup>
import video from'/video.mp4'
</script>

<template>

<!-- HERO WITH VIDEO BACKGROUND -->
<section class="relative h-screen flex items-center justify-center text-white overflow-hidden">

  <!-- VIDEO -->
  <video
    class="absolute w-full h-full object-cover"
    autoplay
    loop
    muted
    playsinline
  >
    <source :src="video" type="video/mp4" />
  </video>

  <!-- DARK OVERLAY -->
  <div class="absolute inset-0 bg-black/50"></div>

  <!-- TEXT -->
  <div class="relative text-center px-6 max-w-3xl">

    <h1 class="text-4xl md:text-6xl font-bold mb-4">
      Tembera U Rwanda
    </h1>

    <p class="text-xl text-green-200 mb-6">
      Explore nature, culture, and unforgettable adventures
    </p>

    <button class="bg-white border border-black text-black px-6 py-3 rounded-lg hover:bg-yellow-500"><Router-link to="/about">
      Learn more
      </Router-link>
    </button>

  </div>

</section>

<!-- TOP 5 ATTRACTIONS -->
<section class="py-16 px-6 md:px-20 bg-white">

  <h2 class="text-4xl font-bold text-center text-green-800 mb-10">
    Top Attractions
  </h2>

  <div class="grid md:grid-cols-3 gap-8">

    <!-- CARD 1 -->
    <div class="shadow-lg rounded-xl overflow-hidden">
      <img src="/src/Assets/Image/virunga.jpg" class="h-56 w-full object-cover" />
      <div class="p-4">
        <h3 class="text-xl font-bold text-green-800">Volcanoes National Park</h3>
        <p class="text-gray-600">Home of mountain gorillas and volcano hiking.</p>
      </div>
    </div>

    <!-- CARD 2 -->
    <div class="shadow-lg rounded-xl overflow-hidden">
      <img src="/src/Assets/Image/lake.jpg" class="h-56 w-full object-cover" />
      <div class="p-4">
        <h3 class="text-xl font-bold text-green-800">Lake Kivu</h3>
        <p class="text-gray-600">Relax on one of Africa’s most beautiful lakes.</p>
      </div>
    </div>

    <!-- CARD 3 -->
    <div class="shadow-lg rounded-xl overflow-hidden">
      <img src="/src/Assets/Image/nyungwe.jpg" class="h-56 w-full object-cover" />
      <div class="p-4">
        <h3 class="text-xl font-bold text-green-800">Nyungwe Forest</h3>
        <p class="text-gray-600">Walk through one of Africa’s oldest rainforests.</p>
      </div>
    </div>

    <!-- CARD 4 -->
    <div class="shadow-lg rounded-xl overflow-hidden">
      <img src="/src/Assets/Image/akagera.jpg" class="h-56 w-full object-cover" />
      <div class="p-4">
        <h3 class="text-xl font-bold text-green-800">Akagera National Park</h3>
        <p class="text-gray-600">Big five safari experience in Rwanda.</p>
      </div>
    </div>

    <!-- CARD 5 -->
    <div class="shadow-lg rounded-xl overflow-hidden">
      <img src="/src/Assets/Image/kigali.jpg" class="h-56 w-full object-cover" />
      <div class="p-4">
        <h3 class="text-xl font-bold text-green-800">Kigali City</h3>
        <p class="text-gray-600">Clean, modern, and vibrant capital city.</p>
      </div>
    </div>

  </div>

</section>

</template>