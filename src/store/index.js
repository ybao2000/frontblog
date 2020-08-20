import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blogs: []
  },
  mutations: {
    initBlogs (state, mblogs) {
      state.blogs = mblogs
    },
    addBlog (state, blog) {
      state.blogs.push(blog)
    }
  },
  actions: {
    initBlogs (context, mblogs) {
      context.commit('initBlogs', mblogs)
    },
    addBlog (context, blog) {
      context.commit('addBlog', blog)
    }
  },
  modules: {
  },
  getters: {
    allBlogs (state) {
      return state.blogs
    }
  }
})
