export const usePages = () => {
  return ref([
    { label: 'home', to: '/', },
    { label: 'menu', to: '/menu' },
    { label: 'info', to: '/info' },
    { label: 'contact', to: '/contact' },
    { label: 'parmigiano@casa', to: '/parmigiano' }
  ])
}
