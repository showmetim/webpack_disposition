import naruto from '../../asset/image/naruto.jpg'
export function setHtml() {
  document.body.insertAdjacentHTML("beforeend", "<h1>hello Webpack !</h1>")
  document.body.insertAdjacentHTML("beforeend", `<img id='imgId' src="${naruto}">`)
  const img = document.querySelector('#imgId')
  img.addEventListener('click', () => {
    alert('你点击了图片')
  })
}