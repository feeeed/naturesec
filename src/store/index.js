import { createStore } from 'vuex'
import post from "@/store/post";
import categories from "@/store/categories";
import servicesEk from "@/store/servicesEk";
export default createStore({
  modules : {
    post:post,
    categories:categories,
    servicesEk:servicesEk,
  }
})
