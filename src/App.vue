<template>
  <div id="app">
    <div class="outer-container" :class="{dim: emailDisplay, clear: !emailDisplay}">
      <images />
      <!-- <img :src="pic" /> -->
      <h1>{{ header }}</h1>
      <div class="p-container">
        <p class="paragraph">
          Nous rencontrons tous le même problème :  Nous avons besoin d’un électricien, d’un plombier, d’un peintre, pour une réparation ou pour des travaux ponctuels chez nous, et nous ne savons pas qui appeler.  Qui est fiable, compétent, et pas trop cher ?
        </p>
        <p>
          Une initiative locale (sans objet lucratif) vient à notre secours :  <span class="inline-title">Travaux chez moi</span>.
        </p>
        <p>
          Travaux chez moi vous permet de savoir quelles ont été les expériences récentes de vos voisins avec les entreprises offrant des services chez eux.  Organisées par métier, et comprenant également des services comme architecte ou le transport à l’aéroport, Travaux chez moi vous fournit des informations clés pour chaque entreprise notée :
        </p>
        <ul>
          <li v-for="el in list" :key="el.id">
            {{el.text}}
            <ul v-if="el.li">
              <li v-for="el1 in el.li" :key="el1.id">
                {{el1.text}}
              </li>
            </ul>
          </li>
        </ul>
        <p>
          Les informations communiquées sont celles fournies par les clients eux-mêmes, mais elles restent entièrement anonymes.  
        </p>
        <p>
          Afin d’avoir accès à Travaux chez moi, il suffit de transmettre à <a href="#" @click.prevent="showEmail()">Travauxchezmoi78@gmail.com</a> les informations listées ci-dessus pour au moins deux entreprises qui ont travaillé chez vous.  Vous recevrez ensuite par retour de mail le document Travaux chez moi présentant tous les commentaires reçus sur toute la gamme d’entreprises.  Au fur et mesure que de nouvelles informations seront reçues, vous recevrez un document actualisé.  Toute est gratuit ; il n’y aucune publicité.
        </p>
        <p>
          Les entreprises sont également invitées à demander que leurs noms paraissent dans Travaux chez moi, et que leurs prestations soient évaluées.  Elles peuvent aussi demander une synthèse des évaluations leur concernant (les évaluations resteront toujours anonymes).  
        </p>
        <p>
          Nous vous conseillons de faire savoir aux entreprises avec qui vous travaillez que vous faites partie du réseau Travaux chez moi. Ainsi, elles sauront que vos expériences, bonnes ou mauvaises, seront diffusées dans votre quartier.  Une bonne méthode pour améliorer la qualité des services, et pour récompenser ceux qui travaillent bien !
        </p>
      </div>
    </div>
    <transition name="fade">
      <email v-if="emailDisplay" v-bind="{showEmail}"/>
    </transition>
  </div>
</template>

<script>
import email from './components/email.vue';
import Images from './components/Images.vue';

export default {
  name: 'app',
  data () {
    return {
      // pic: `https://picsum.photos/200/300/?image=${1 + Math.floor(Math.random() * 1084)}`,
      emailDisplay: false,
      header: 'Travaux chez moi',
      subtitle: 'Subtitle Here',
      list: [
        {
          id: 0,
          text: `Le nom de l’entreprise et son domaine d’intervention`,
        },
        {
          id: 1,
          text: `Un « score » :`,
          li: [
            {
              id: 0,
              text: '1 = à recommander',
            },
            {
              id: 1,
              text: '2 = expérience mitigée',
            },
            {
              id: 2,
              text: '3 = entreprise non recommandée',
            },
          ]
        },
        {
          id: 2,
          text: `L’année de l’intervention`,
        },
        {
          id: 3,
          text: `Des commentaires justifiant la note`,
        }
      ],
    }
  },
  components: {
    email,
    Images,
  },
  methods: {
    showEmail() {
      this.emailDisplay = !this.emailDisplay;
      document.getElementsByTagName('body')[0].style.overflow = this.emailDisplay? 'hidden' : 'auto';
    },
  }
}
</script>

<style lang="scss">

@import './assets/animate.min.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
  padding-bottom: 60px;
  background-image: url('./assets/background-brick.png');
}

.outer-container {
  border: 2px black solid;
  background-color: #e7e3e0;
  margin: 0 10% 0 10%;
  padding: 5%;
}

.dim {
  transition: filter 0.5s;
  filter: blur(3px);
}

.clear {
  transition: filter 0.5s;
  filter: blur(0);
}

h1, h2 {
  font-weight: normal;
}

.p-container {
  font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.inline-title {
  font-weight: 900;
}

.fade-enter-active {
  animation: fadeIn 0.5s;
}

.fade-leave-active {
  animation: fadeOut 0.5s;
}
</style>
