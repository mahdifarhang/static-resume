export default {
  capitalize: (state) => {
    return (input) => {
      return input.toUpperCase()
    }
  },
  getName: (state) => {
    return () => {
      return `${state.firstname} ${state.lastname}`
    }
  }
}
