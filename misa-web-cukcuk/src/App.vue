<template>
  <div id="app">
    <TheNavbar/>
    <TheHeader/>
    <TheContent/>
  </div>
</template>

<script>
import TheNavbar from './components/layouts/TheNavbar.vue'
import TheHeader from './components/layouts/TheHeader.vue'
import TheContent from './components/layouts/TheContent.vue'

export default {
  name: 'App',
  components: {
    TheNavbar,
    TheHeader,
    TheContent
  }
}
</script>

<style>
body {
    margin: 0;
}

.bg-primary {
    background-color: #01B075;
}

.text-align-center {
    text-align: center;
}

.text-align-right {
    text-align: right;
}

a {
    text-decoration: none;
    color: #000;
    ;
    cursor: pointer;
}

body {
    font-family: GoogleSans-Regular;
    font-size: 13px;
}

@font-face {
    font-family: 'GoogleSans-Regular';
    src: url('/assets/font/GoogleSans-Regular.otf') format('opentype');
}

@font-face {
    font-family: 'GoogleSans-Bold';
    src: url('/assets/font/GoogleSans-Bold.otf') format('opentype');
}

@font-face {
    font-family: 'GoogleSans-Italic';
    src: url('/assets/font/GoogleSans-Italic.otf') format('opentype');
}

@font-face {
    font-family: 'GoogleSans-BoldItalic';
    src: url('/assets/font/GoogleSans-BoldItalic.otf') format('opentype');
}

</style>
