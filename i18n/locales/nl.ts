export default defineI18nLocale(async locale => {
  return {
    general: {
      restaurant: {
        name: 'entrepot del tartufo',
        slogan: 'italiaanse gerechten met een toets van truffel'
      },
      hour: {
        lunch: '10h - 12h',
        parmigiano: '18h - 20h'
      },
      date: {
        lunch: 'ma / do / vr',
        dinner: 'ma / di / do / vr / za / zo',
        weekend: 'za / zo',
        closed: 'di / wo'
      },
      seperator: {
        or: 'of'
      },
    },
    index: {
      title: 'welkom in restaurant entrepot del tartufo',
      subtitle: 'italiaanse gerechten met een toets van truffel',
      welcome: 'Van harte welkom op onze website! Restaurant Entrepot del Tartufo is gevestigd in een oude opslagplaats in het gezellige hemelrijk straatje te Hasselt. In een ongedwongen sfeer kan u genieten van de puurheid van de Italiaanse keuken met een touch of truffle in combinatie met steengoede wijnen.',
      info_button: 'meer informatie',
      reservation_button: 'reserveren',
      dinner_button: 'bekijk diner menu',
      lunch: {
        description: 'lunch ervaring',
        two_courses: 'twee gangen',
        three_courses: 'drie gangen',
        two_courses_price: '€ 30',
        three_courses_price: '€ 40',
        disclaimer: 'lunch kan dagelijks variëren en is afhankelijk van het markt aanbod'
      },
      contact: {
        get_in_touch: 'get in touch!',
        further_questions: 'Heeft u nog verdere vragen? Aarzel niet om contact op te nemen via',
        contact_button: 'the contact form',
        email_button: 'sending an email'
      },
      subject: {
        title_1: `lunch {'@'} entrepot`,
        title_2: `parmigiano {'@'} casa`
      }
    },
    footer: {
      closed: 'gesloten'
    },
  }
})