export default defineI18nLocale(async locale => {
  return {
    general: {
      restaurant: {
        name: 'entrepot del tartufo',
        slogan: 'italiaanse gerechten met een toets van truffel'
      },
      date: {
        lunch: 'ma / do / vr',
        dinner: 'ma / di / do / vr / za / zo',
        weekend: 'za / zo',
        closed: 'di / wo'
      },
    },
    footer: {
      closed: 'gesloten'
    },
    index: {
      title: 'welkom in restaurant entrepot del tartufo',
      subtitle: 'italiaanse gerechten met een toets van truffel',
      welcome: 'Van harte welkom op onze website! Restaurant Entrepot del Tartufo is gevestigd in een oude opslagplaats in het gezellige hemelrijk straatje te Hasselt. In een ongedwongen sfeer kan u genieten van de puurheid van de Italiaanse keuken met een touch of truffle in combinatie met steengoede wijnen.',
      info_button: 'meer informatie',
    }
  }
})