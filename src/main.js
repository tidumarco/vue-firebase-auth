import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as firebase from 'firebase';


import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'

Vue.config.productionTip = false

const firebaseConfig = {
    apiKey: "AIzaSyAeqvoSZWs8FyGbufsEsrrV3IcnsVFue8M",
    authDomain: "vie-firebase-auth.firebaseapp.com",
    projectId: "vie-firebase-auth",
    storageBucket: "vie-firebase-auth.appspot.com",
    messagingSenderId: "51948497371",
    appId: "1:51948497371:web:0ebd850e2ab18587ae9ffe",
    measurementId: "G-MV3FDJT09Z"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')