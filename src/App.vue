<template>
  <div id="app">
    <img src="https://picsum.photos/200/300/?random">
    <h1>{{ header }}</h1>
    <h2>
      {{subtitle}}
    </h2>
    <div class="p-container">
      <p class="paragraph">
        Nous rencontrons tous le même problème :  Nous avons besoin d’un électricien, d’un plombier, d’un peintre, pour une réparation ou pour des travaux ponctuels chez nous, et nous ne savons pas qui appeler.  Qui est fiable, compétent, et pas trop cher ?
        
        Une initiative locale (sans objet lucratif) vient à notre secours :  Travaux chez moi.

        Travaux chez moi vous permet de savoir quelles ont été les expériences récentes de vos voisins avec les entreprises offrant des services chez eux.  Organisées par métier, et comprenant également des services comme architecte ou le transport à l’aéroport, Travaux chez moi vous fournit des informations clés pour chaque entreprise notée :
      </p>
      <ul>
        <li v-for="el in list" :key="el.id">
          {{el.text}}
        </li>
      </ul>
      <p>
        Les informations communiquées sont celles fournies par les clients eux-mêmes, mais elles restent entièrement anonymes.  
      </p>
      <p>
        Afin d’avoir accès à Travaux chez moi, il suffit de transmettre à travauxchezmoi@gmail.com les informations listées ci-dessus pour au moins deux entreprises qui ont travaillé chez vous.  Vous recevrez ensuite par retour de mail le document Travaux chez moi présentant tous les commentaires reçus sur toute la gamme d’entreprises.  Au fur et mesure que de nouvelles informations seront reçues, vous recevrez un document actualisé.  Toute est gratuit ; il n’y aucune publicité.
      </p>
      <p>
        Les entreprises sont également invitées à demander que leurs noms paraissent dans Travaux chez moi, et que leurs prestations soient évaluées.  Elles peuvent aussi demander une synthèse des évaluations leur concernant (les évaluations resteront toujours anonymes).  
      </p>
      <p>
        Nous vous conseillons de faire savoir aux entreprises avec qui vous travaillez que vous faites partie du réseau Travaux chez moi. Ainsi, elles sauront que vos expériences, bonnes ou mauvaises, seront diffusées dans votre quartier.  Une bonne méthode pour améliorer la qualité des services, et pour récompenser ceux qui travaillent bien !
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      header: 'Put Your Header here',
      subtitle: 'Subtitle Here',
      list: [
        {
          id: 0,
          text: `Le nom de l’entreprise et son domaine d’intervention`,
        },
        {
          id: 1,
          text: `Un « score » :  1 = à recommander, 2 = expérience mitigée, 3 = entreprise non recommandée`,
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
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

.p-container {
  font-family: 'Courier New', Courier, monospace;
  display: flex;
  flex-direction: column;
}

p {
  font-size: 14px;
  margin: 10px 10% 10px 10%;
  text-align: left;
}
</style>
