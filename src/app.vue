<template>
  <div>
    <div class="title-bar" data-responsive-toggle="fc-menu" data-hide-for="medium">
      <button class="menu-icon" type="button" data-toggle></button>
      <div class="title-bar-title">Menu</div>
    </div>
    <nav class="top-bar" id="fc-menu">
      <div>
        <div class="top-bar-left">
          <ul class="menu vertical medium-horizontal">
            <li><router-link :to="{name: 'home'}">Vue2JS Starter kit</router-link></li>
            <li><router-link :to="{name: 'home'}">Home</router-link></li>
          </ul>
        </div>
        <div class="top-bar-right">
          <ul class="menu">
            <li class="devis-link"><router-link :to="{name: 'view2'}">Second view</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
    <hr>
    <div class="row">
      <div class="top-bar-left">
        <ul class="menu">
          <li><router-link :to="{name: 'home'}">Home</router-link></li>
          <li><router-link :to="{name: 'view2'}">Second view</router-link></li>
        </ul>
      </div>
      <div class="top-bar-right">
        <ul class="menu">
          <li class="devis-link"><a href="">Link right</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>
