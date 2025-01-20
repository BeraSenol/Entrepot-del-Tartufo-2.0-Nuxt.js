import Seperator from "~/components/Truffle/Seperator.vue"
import Contact from "~/pages/contact.vue"

export default defineI18nLocale(async locale => {
  return {
    general: {
      restaurant: {
        name: 'entrepot del tartufo',
        slogan: 'italian food with a touch of truffle'
      },
      hour: {
        lunch: '10h - 12h',
        parmigiano: '18h - 20h'
      },
      date: {
        lunch: 'mo / th / fr',
        dinner: 'mo / th / fr / sa / su',
        weekend: 'sa / su',
        closed: 'tu / we'
      },
      seperator: {
        or: 'or'
      }
    },
    index: {
      title: 'welcome in restaurant entrepot del tartufo',
      subtitle: 'italian food with a touch of truffle',
      welcome: 'Welcome to our website! Restaurant Entrepot del Tartufo is located in an old warehouse in the cozy heavenly street in Hasselt. In a casual atmosphere you can enjoy the purity of Italian cuisine with a touch of truffle in combination with excellent wines.',
      info_button: 'more infomation',
      reservation_button: 'make a reservation',
      dinner_button: 'see dinner menu',
      lunch: {
        description: 'lunch experience',
        two_courses: 'two courses',
        three_courses: 'three courses',
        two_courses_price: '€ 30',
        three_courses_price: '€ 40',
        disclaimer: 'lunch is available daily vary and depends on the Market offer'
      },
      contact: {
        get_in_touch: 'get in touch!',
        further_questions: 'Do you have any further questions? Do not hesitate to contact us by',
        contact_button: 'the contact form',
        email_button: 'sending an email'
      },
      subject: {
        title_1: `lunch {'@'} entrepot`,
        title_2: `parmigiano {'@'} casa`
      }
    },
    footer: {
      closed: 'closed'
    }
  }
})