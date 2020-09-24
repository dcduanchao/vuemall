
import Toast from './Toast1'



const obj = {}

obj.install = function (Vue) {
  // console.log("+++++++++++");
  // document.body.appendChild(Toast.$el)

  const toastContrustor = Vue.extend(Toast)
  const toast = new toastContrustor();
  //挂载
  toast.$mount(document.createElement("div"))
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = toast;

}
export default obj