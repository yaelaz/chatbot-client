export const getWelcomeMessage = () => {
  return fetch('/welcome')
    .then(data => data.json());
}

export const getAnswer = (param) => {
  return fetch(`/answer/${encodeURIComponent(param)}`)
    .then(data => data.json());
}
