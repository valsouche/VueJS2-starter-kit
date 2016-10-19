<template>
  <div>
    <div class="callout large devis">
      <div class="row columns">
        <h1>{{title}}</h1>
        <p>{{text}}</p>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'view2',
    data () {
      return {
        title: "Vue 2",
        text: "Exemple de page avec vue-router"
      }
    },
    methods: {}
  }
</script>
