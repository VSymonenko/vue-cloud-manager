export default {
  methods: {
    cleanSelection(elem) {
      const contentButton = document.querySelectorAll(elem)
      contentButton.forEach((element) => { element.classList.remove('toggleBtn') })
    }
  }
}
