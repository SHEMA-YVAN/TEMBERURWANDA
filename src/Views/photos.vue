<script setup>
import { state, t } from "../i18n"

const galleryImages = Object.entries(
  import.meta.glob("../Assets/Image/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
  })
)
  .filter(([path]) => !path.toLowerCase().includes("/logo."))
  .map(([path, src]) => ({
    src,
    alt: path
      .split("/")
      .pop()
      .replace(/\.[^/.]+$/, "")
      .replace(/[_-]+/g, " "),
  }))

const galleryHeights = [560, 420, 720, 500, 640, 460, 780, 540, 680]
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
      {{ t[state.lang].galleryTitle }}
    </h1>

    <p class="text-green-200 text-lg">
      {{ t[state.lang].gallerySubtitle }}
    </p>
  </div>

</section>

<!-- GALLERY GRID -->
<section class="py-20 px-5 md:px-10 lg:px-16 bg-white">

  <div class="max-w-7xl mx-auto columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6">

    <img
      v-for="(image, index) in galleryImages"
      :key="image.src"
      :src="image.src"
      :alt="image.alt"
      class="w-full break-inside-avoid object-cover rounded-lg shadow-lg hover:scale-[1.015] transition duration-300"
      :style="{ height: `${galleryHeights[index % galleryHeights.length]}px` }"
      loading="lazy"
    />

  </div>

</section>

<!-- CTA -->
<section class="bg-green-800 text-white text-center py-20">

  <h2 class="text-4xl font-bold mb-4">
    {{ t[state.lang].galleryCTA }}
  </h2>

  <p class="text-green-200 mb-8">
    {{ t[state.lang].galleryCTAText }}
  </p>

  <RouterLink
    to="/contact"
    class="bg-white text-green-800 px-8 py-3 rounded-lg font-bold hover:bg-yellow-400"
  >
    {{ t[state.lang].contact }}
  </RouterLink>

</section>

</template>
