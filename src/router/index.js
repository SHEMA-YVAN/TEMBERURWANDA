import { createRouter, createWebHistory } from "vue-router"
import Home from "../Views/home.vue"
import About from "../Views/about.vue"
import Services from "../Views/Services.vue"
import Photos from "../Views/photos.vue"
import Videos from "../Views/Videos.vue"
import North from "../Views/Northern.vue"
import South from "../Views/Southern.vue"
import East from "../Views/Eastern.vue"
import West from "../Views/Western.vue"
import Kigali from "../Views/Kigali.vue"
import Contact from "../Views/Contact.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/services",
    alias: "/Services",
    name: "Services",
    component: Services,
  },
  {
    path: "/photos",
    alias: "/Photos",
    name: "Photos",
    component: Photos,
  },
  {
    path: "/videos",
    alias: "/Videos",
    name: "Videos",
    component: Videos,
  },
  {
    path: "/north",
    alias: "/North",
    name: "North",
    component: North,
  },
  {
    path: "/east",
    alias: "/East",
    name: "East",
    component: East,
  },
  {
    path: "/south",
    alias: "/South",
    name: "South",
    component: South,
  },
  {
    path: "/west",
    alias: "/West",
    name: "West",
    component: West,
  },
  {
    path: "/kigali",
    alias: "/Kigali",
    name: "Kigali",
    component: Kigali,
  },
  {
    path: "/contact",
    alias: "/Contact",
    name: "Contact",
    component: Contact,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
