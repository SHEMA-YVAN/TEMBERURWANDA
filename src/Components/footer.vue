<script setup>
import { RouterLink } from "vue-router"
import { state, t } from "../i18n"
</script>

<template>
  <footer class="bg-green-800 text-white px-8 py-10 mt-0">
    <div class="flex flex-wrap justify-between gap-8">
      <div>
        <h3 class="text-yellow-300 font-bold text-lg mb-3">TEMBERA U RWANDA</h3>
        <p class="text-sm text-green-200">
          {{ t[state.lang].footerSubtitle }}
        </p>
      </div>

      <div>
        <h3 class="text-yellow-300 font-bold text-lg mb-3">
          {{ t[state.lang].quickLinks }}
        </h3>
        <ul class="space-y-2 text-sm">
          <li><RouterLink to="/" class="hover:text-yellow-300">{{ t[state.lang].home }}</RouterLink></li>
          <li><RouterLink to="/about" class="hover:text-yellow-300">{{ t[state.lang].about }}</RouterLink></li>
          <li><RouterLink to="/services" class="hover:text-yellow-300">{{ t[state.lang].services }}</RouterLink></li>
          <li><RouterLink to="/contact" class="hover:text-yellow-300">{{ t[state.lang].contact }}</RouterLink></li>
          <li><RouterLink to="/photos" class="hover:text-yellow-300">{{ t[state.lang].locations }}</RouterLink></li>
        </ul>
      </div>

      <div>
        <h3 class="text-yellow-300 font-bold text-lg mb-3">
          {{ t[state.lang].destinations }}
        </h3>
        <ul class="space-y-2 text-sm">
          <li><RouterLink to="/north" class="hover:text-yellow-300">{{ t[state.lang].north }}</RouterLink></li>
          <li><RouterLink to="/south" class="hover:text-yellow-300">{{ t[state.lang].south }}</RouterLink></li>
          <li><RouterLink to="/west" class="hover:text-yellow-300">{{ t[state.lang].west }}</RouterLink></li>
          <li><RouterLink to="/east" class="hover:text-yellow-300">{{ t[state.lang].east }}</RouterLink></li>
          <li><RouterLink to="/kigali" class="hover:text-yellow-300">{{ t[state.lang].kigali }}</RouterLink></li>
        </ul>
      </div>

      <div>
        <h3 class="text-yellow-300 font-bold text-lg mb-3">
          {{ t[state.lang].contactInfo }}
        </h3>
        <ul class="space-y-2 text-green-300">
          <li>temberaurwanda@gmail.com</li>
          <li>+250 788 234 789</li>
          <li>Kagugu, Kigali, Rwanda</li>
        </ul>
      </div>
    </div>

    <div class="border-t border-green-600 mt-8 pt-4 text-sm text-green-200">
      <p class="text-center">
        {{ t[state.lang].copyright }}
      </p>
    </div>
  </footer>
</template>
