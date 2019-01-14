<template>
  <div class="container">
    <img :src="img1" alt="Some pic" class="img">
    <img :src="img2" alt="Some pic" class="img">
    <img :src="img3" alt="Some pic" class="img">
    <img :src="img4" alt="Some pic" class="img">
    <img :src="img5" alt="Some pic" class="img">
    <img :src="img6" alt="Some pic" class="img">
    <img :src="img7" alt="Some pic" class="img">
    <img :src="img8" alt="Some pic" class="img">
    <img :src="img9" alt="Some pic" class="img">
  </div>
</template>

<script>
const bucket = 'https://s3.eu-west-3.amazonaws.com/travaux-chez-moi/';
export default {
  data() {
    return {
      img1: bucket + 'pic1.png',
      img2: bucket + 'pic2.png',
      img3: bucket + 'pic3.png',
      img4: bucket + 'pic4.png',
      img5: bucket + 'pic5.png',
      img6: bucket + 'pic6.png',
      img7: bucket + 'pic7.png',
      img8: bucket + 'pic8.png',
      img9: bucket + 'pic9.png',
    };
  }
}
</script>

<style lang="scss">
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .img {
    height: 10em;
    width: auto;
  }
</style>
