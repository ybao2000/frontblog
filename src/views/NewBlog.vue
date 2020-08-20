<template>
  <div>
    <h3>New Blog</h3>

      <div class="form-group ml-5 mr-5">
        <label for="title">Title</label>
        <input type="text" class="form-control mb-3" id="title" aria-describedby="emailHelp" placeholder="Enter title" v-model="blog.title">
        <label for="image">Image</label>
        <select class="form-control mb-3" id="image" v-model="blog.image">
          <option value="blog1.jpg">blog1</option>
          <option value="blog2.jpg">blog2</option>
          <option value="blog3.jpg">blog3</option>
          <option value="blog4.jpg">blog4</option>
        </select>
        <label for="content">content</label>
        <textarea class="form-control" id="content" rows="10" v-model="blog.content"></textarea>
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="submit()">Submit</button>

  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      blog: {
        title: '',
        content: '',
        image: 'blog1.jpg'
      }
    }
  },
  methods: {
    ...mapActions(['addBlog']),
    submit () {
      // console.log(this.blog)
      var formData = new FormData()
      formData.set('title', this.blog.title)
      formData.set('content', this.blog.content)
      formData.set('image', this.blog.image)
      axios({
        method: 'post',
        url: 'https://backblog1.herokuapp.com/api/addblog',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data', 'Access-Control-Allow-Origin': '*' }
      }).then(res => {
        console.log(res)
        this.addBlog(res.data)
      }).catch(err => {
        console.log(err)
      })
      this.$router.push({ name: 'BlogList' })
    }
  }
}
</script>
