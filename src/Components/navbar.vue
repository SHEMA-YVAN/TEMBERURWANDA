<template>
  <nav class="bg-green-800 text-white  flex px-8 py-4 items-center justify-between shadow-lg ">
  <img src="../Assets/Image/logo.png" alt="" class="h-10 w-20">
    <ul class="flex gap-8 text-sm font-medium justify-end">
      <li> <a href="/" class="hover:text-yellow-300">Home</a></li>
      <li><RouterLink to="/about" class="hover:text-yellow-300">About Us</RouterLink></li>
      <li> <RouterLink to="/services" class="hover:text-yellow-300">Services</RouterLink></li>

      <li class="relative group"><a href="#" class="hover:text-yellow-300 relative-group ">Gallery <span>▼</span>
      </a>
<ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100  absolute bg-white text-green-900 rounded shadow w-48 top-2.5  mt-2 z-50 left">
      <li class="block px-4 py-2 hover:bg-green-200 text-green-900"><RouterLink to="/Photos" >Photos</RouterLink></li>
      <li class="block px-4 py-2 hover:bg-green-200 text-green-900"><RouterLink to="/Videos">Videos</RouterLink></li>
    </ul>
    </li>

      <li class="relative group "><a href="#" class="hover:text-yellow-300">Destinations<span>▼</span></a>
      <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100  absolute bg-white text-green-900  rounded  top-2.5 shadow w-48 mt-2 z-50 left">
      <li class="block px-4 py-2 hover:bg-green-200 text-green-900"><RouterLink to="/North">Northern Province</RouterLink></li>
      <li class="block px-4 py-2 hover:bg-green-200 text-green-900"><RouterLink to="/South">Southern Province</RouterLink></li>
      <li class="block px-4 py-2 hover:bg-green-200 text-green-900"><RouterLink to="/West">Western Province</RouterLink></li>
      <li class="block px-4 py-2 hover:bg-green-200 text-green-900"><RouterLink to="/East">Eastern Province</RouterLink></li>
      <li class="block px-4 py-2 hover:bg-green-200 text-green-900"><RouterLink to="/Kigali">Kigali city</RouterLink></li>
    </ul>
      
      </li>
      <li><RouterLink to="/Contact" class="hover:text-yellow-300">Contact Us</RouterLink></li>
    </ul>
  </nav>
</template>