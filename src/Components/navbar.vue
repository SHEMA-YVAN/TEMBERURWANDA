<script setup>
import { RouterLink } from "vue-router"
import { state, t } from "../i18n"
</script>

<template>
  <nav class="bg-green-800 text-white flex px-8 py-4 items-center justify-between shadow-lg">
    <RouterLink to="/" aria-label="Tembera U Rwanda home">
      <img src="../Assets/Image/logo.png" class="h-10 w-20" />
    </RouterLink>

    <ul class="flex gap-8 text-sm font-medium items-center">
      <li>
        <RouterLink to="/" class="hover:text-yellow-300">
          {{ t[state.lang].home }}
        </RouterLink>
      </li>

      <li>
        <RouterLink to="/about" class="hover:text-yellow-300">
          {{ t[state.lang].about }}
        </RouterLink>
      </li>

      <li>
        <RouterLink to="/services" class="hover:text-yellow-300">
          {{ t[state.lang].services }}
        </RouterLink>
      </li>

      <li class="relative group">
        <button type="button" class="hover:text-yellow-300 cursor-pointer">
          {{ t[state.lang].gallery }} <span aria-hidden="true">&#9662;</span>
        </button>

        <ul
          class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute left-0 top-full bg-white text-green-900 w-48 rounded shadow z-50 transition before:absolute before:left-0 before:right-0 before:-top-3 before:h-3"
        >
          <li class="hover:bg-green-200">
            <RouterLink to="/photos" class="block px-4 py-2">
              {{ t[state.lang].photos }}
            </RouterLink>
          </li>

          <li class="hover:bg-green-200">
            <RouterLink to="/videos" class="block px-4 py-2">
              {{ t[state.lang].videos }}
            </RouterLink>
          </li>
        </ul>
      </li>

      <li class="relative group">
        <button type="button" class="hover:text-yellow-300 cursor-pointer">
          {{ t[state.lang].destinations }} <span aria-hidden="true">&#9662;</span>
        </button>

        <ul
          class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute left-0 top-full bg-white text-green-900 w-56 rounded shadow z-50 transition before:absolute before:left-0 before:right-0 before:-top-3 before:h-3"
        >
          <li class="hover:bg-green-200">
            <RouterLink to="/north" class="block px-4 py-2">
              {{ t[state.lang].north }}
            </RouterLink>
          </li>

          <li class="hover:bg-green-200">
            <RouterLink to="/south" class="block px-4 py-2">
              {{ t[state.lang].south }}
            </RouterLink>
          </li>

          <li class="hover:bg-green-200">
            <RouterLink to="/west" class="block px-4 py-2">
              {{ t[state.lang].west }}
            </RouterLink>
          </li>

          <li class="hover:bg-green-200">
            <RouterLink to="/east" class="block px-4 py-2">
              {{ t[state.lang].east }}
            </RouterLink>
          </li>

          <li class="hover:bg-green-200">
            <RouterLink to="/kigali" class="block px-4 py-2">
              {{ t[state.lang].kigali }}
            </RouterLink>
          </li>
        </ul>
      </li>

      <li>
        <RouterLink to="/contact" class="hover:text-yellow-300">
          {{ t[state.lang].contact }}
        </RouterLink>
      </li>

      <li>
        <select
          v-model="state.lang"
          class="bg-green-700 text-white px-2 py-1 rounded border border-white text-sm"
          aria-label="Choose language"
        >
          <option value="en">ENG</option>
          <option value="rw">KINY</option>
          <option value="fr">FR</option>
        </select>
      </li>
    </ul>
  </nav>
</template>
