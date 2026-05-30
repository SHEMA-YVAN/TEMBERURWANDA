<script setup>
import { state, t } from "../i18n"

const galleryImages = Object.entries(
  import.meta.glob("../Assets/Image/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
  })
)
  .filter(([path]) => {
    const lowerPath = path.toLowerCase()
    return !lowerPath.includes("/logo.") && !lowerPath.includes("/map.")
  })
  .map(([path, src]) => ({
    src,
    alt: path
      .split("/")
      .pop()
      .replace(/\.[^/.]+$/, "")
      .replace(/[_-]+/g, " "),
  }))

const galleryTileClasses = [
  "h-120",
  "h-80",
  "h-96",
  "h-72",
  "h-112",
  "h-88",
  "h-128",
  "h-84",
  "h-96",
]
</script>

<template>

<!-- HERO -->
<section class="relative h-96 md:h-160 flex items-center justify-center text-white overflow-hidden">

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
<section class="py-20 px-5 md:px-10 lg:px-16 bg-gray-50">

  <div class="max-w-7xl mx-auto columns-1 md:columns-2 xl:columns-3 2xl:columns-4 gap-5 space-y-5">

    <figure
      v-for="(image, index) in galleryImages"
      :key="image.src"
      class="group relative mb-5 break-inside-avoid overflow-hidden rounded-lg bg-white shadow-lg"
      :class="galleryTileClasses[index % galleryTileClasses.length]"
    >
      <img
        :src="image.src"
        :alt="image.alt"
        class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 opacity-0 transition duration-300 group-hover:opacity-100">
        <figcaption class="text-sm font-semibold text-white line-clamp-2">
          {{ image.alt }}
        </figcaption>
      </div>
    </figure>

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
