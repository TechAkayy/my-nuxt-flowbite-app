export const useFlowbite = (callback) => {
  if (import.meta.client /* or process.client*/) {
    import('flowbite').then((flowbite) => {
      callback(flowbite)
    })
  }
}
