<template>
  <div id="email-form">
    <form @submit.prevent="send">
      <label for="name">Nom</label>
      <input type="text" name="nom" required="" v-model="nom"/>
      <br/>
      <label for="name">Prénom</label>
      <input type="text" name="prenom" required="" v-model="prenom"/>
      <br/>
      <label for="email">Email</label>
      <input type="email" name="email" required="" v-model="email"/>
      <br/>
      <label for="message">Message</label>
      <textarea name="message" required="" v-model="message.text" :maxlength="message.maxlength"/>
      <br/>
      <input type="submit" value="Soumettre"/>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nom: '',
      prenom: '',
      email: '',
      message: {
        text: '',
        maxlength: 100,
      },
    };
  },
  methods: {
    send() {
      console.log('hi');
    }
  }
}
</script>

<style>
  #email-form {
    position: absolute;
    z-index: 1;
    display: flex;
    margin: 25vh;
    background-color: blanchedalmond;
  }
</style>
