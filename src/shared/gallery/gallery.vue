<template>
  <div>
    <div class="row">
      <div v-for="pict in pictures" class="small-12 medium-6 large-4 columns gallery">
        <div class="pic">
          <a :data-open="pict.id"><img :src="pict.name"></a>
          <div class="small reveal modal" :id="pict.id" data-reveal>
            <img :src="pict.name"/>
            <button class="close-button" data-close="" aria-label="Close reveal" type="button">
              <span aria-hidden="true">×</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var picSrc = 'src/assets/images/'
var picExt = '.jpg'
var pictures = [
  { name: picSrc + '01' + picExt, id: 'id1'},
  { name: picSrc + '02' + picExt, id: 'id2'},
  { name: picSrc + '03' + picExt, id: 'id3'},
  { name: picSrc + '04' + picExt, id: 'id4'},
  { name: picSrc + '01' + picExt, id: 'id5'},
  { name: picSrc + '02' + picExt, id: 'id6'},
]

export default {
  data () {
    return {
      pictures
    }
  }
}
</script>


<!--You can put style directly in your component-->
<style>
.gallery {
  margin: 0;
  padding: 0;
}
.pic-description {
  z-index: 20;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
}

.pic {
  z-index: 21;
  width: 100%;
  height: 20em;
  background-color: #000;
  overflow: hidden;
}

.pic img {
  width: 100%;
  height: 100%;
  border: 2px solid #fff;
}

.pic img:hover {
  opacity: 0.6;
  transition: 0.4s;
}

.reveal {
  padding: 0;
}

.reveal:focus {
  outline: 0;
}

.close-button {
  text-shadow: 3px #000;
  color: #fff;
}

@media screen and (max-width: 39.9375em) {
  .reveal {
    background: transparent;
  }
}
</style>
