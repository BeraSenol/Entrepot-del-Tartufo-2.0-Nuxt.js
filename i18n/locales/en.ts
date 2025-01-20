export default defineI18nLocale(async locale => {
  return {
    general: {
      restaurant: {
        name: 'entrepot del tartufo',
        slogan: 'italian food with a touch of truffle'
      },
      date: {
        lunch: 'mo / th / fr',
        dinner: 'mo / th / fr / sa / su',
        weekend: 'sa / su',
        closed: 'tu / we'
      },
    },
    footer: {
      closed: 'closed'
    },
    index: {
      title: 'welcome in restaurant entrepot del tartufo',
      subtitle: 'italian food with a touch of truffle',
      welcome: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      info_button: 'more infomation',
    }
  }
})