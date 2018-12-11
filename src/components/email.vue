<template>
  <div id="email-container">
    <div id="email-form">
      <button class="close" @click="showEmail()"></button>
      <form @submit.prevent="send()">
        <div class="nom-prenom">
          <div>
            <label for="nom">Nom</label> <br/><br/>
            <input type="text" name="nom" required="" v-model="nom" placeholder="Smith"/>
          </div>
          <div>
            <label for="prenom">Prénom</label> <br/><br/>
            <input type="text" name="prenom" required="" v-model="prenom" placeholder="John"/>
          </div>
        </div>
        <br/>
        <label for="email">Email</label> <br/>
        <input type="email" name="email" required="" v-model="email" placeholder="john@smith.fr" class="input-width"/>
        <br/>
        <label for="message">Message</label> <br/>
        <textarea name="message" required="" v-model="message.text" :maxlength="message.maxlength" rows="6" class="input-width"/>
        <br/>
        <input type="submit" value="Soumettre" class="submit"/>
      </form>
    </div>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  data() {
    return {
      nom: '',
      prenom: '',
      email: '',
      message: {
        text: '',
        maxlength: 2000,
      },
    };
  },
  methods: {
    send() {
      const data = {
        'nom': this.nom,
        'prenom': this.prenom,
        'email': this.email,
        'message': this.message.text,
      };
      const headers = {
          'Content-Type': 'application/x-www-form-urlencoded',
      };
      axios({
        method: 'post',
        url: '/api/email',
        data,
        config: {
          headers,
        },
      }).then(data => console.log(data));
    },
  },
  props: ['showEmail'],
}
</script>

<style>
  #email-container {
    display: flex;
    position: fixed;
    z-index: 1;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  #email-form {
    position: relative;
    background-color: #f1f1f1;
    height: auto;
    width: 50%;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .nom-prenom {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
  }

  .close {
    position: absolute;
    right: 0;
    top: 0;
    margin: 20px;
    width: 40px;
    height: 40px;
    border: hidden;
    border-radius: 50%;
    background: url('../assets/close.png');
    background-repeat: no-repeat;
    background-size: 40px;
  }

  .close:hover {
    background-color: darkgray;
  }

  .input-width {
    text-align: left;
    width: 100%;
  }

  .submit {
    width: fit-content;
    padding: 10px 20px;
    background-color: #f1f1f1;
    border: 1px darkgray solid;
  }
  
  .submit:hover {
    background-color: #8f8f8f;
  }

</style>
