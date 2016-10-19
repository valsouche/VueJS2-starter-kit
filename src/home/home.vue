<template>
  <div>
    <div class="callout large">
      <div class="row columns text-center">
        <div class="home-title-filter">
          <h1>{{title}}</h1>
          <img src="../assets/logo.png" />
          <p class="lead"></p>
          <a href="tel:+33102030405" class="button large hollow">Button 1</a>
          <a class="button large hollow">Button 2</a>
        </div>
      </div>
    </div>
    <section>
      <gallery></gallery>
    </section>
  </div>
</template>

<script>
  import galleryComponent from './../shared/gallery/gallery.vue'

  export default {
  name: 'home',
  data () {
    return {
      title: 'VUE2JS Starter Kit',
    }
  },
  components: {
    'gallery': galleryComponent
  },
  methods: {}
}
</script>
