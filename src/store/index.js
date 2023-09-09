import { createStore } from 'vuex'
import post from "@/store/post";
import categories from "@/store/categories";

export default createStore({
  modules : {
    post:post,
    categories:categories,

  }
})
