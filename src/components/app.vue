<template>
<div class="app page">

  <nav>
    <button @click="openMenu" class="toggle-button"><i class="material-icons">arrow_back</i></button>
    <h1>Spark</h1>
    <h2>{{chatTitle}}</h2>
    <button @click="openSettings" class="toggle-button setting"><i class="material-icons">settings</i></button>
  </nav>

  <div id="messages" class="messages">
    <h1 v-if="loading">Loading</h1>
    <div v-for="message in messages" class="message">
      <div v-bind:class="{ mine: isMine(message) }" class="text">
        <p class="messageText" v-html="richTextParse(message.text)"></p>

      </div>
      <p v-if="!isMine(message)" class="messageSender">{{message.sender.name}} {{time(message)}}</p>

    </div>
  </div>
  <form v-if="messages" class="newMessage" @submit.prevent="send">
    <input autocomplete="off" type="text" name="newMessage" placeholder="Type your message here then press enter to send" v-model="newMessage">
  </form>


</div>
</template>

<script>
import firebase from 'firebase'
const linkify = require('linkifyjs');
const linkifyHtml = require('linkifyjs/html');
const moment = require('moment')

import '../assets/app.scss'

export default {
  name: 'app',
  data() {
    return {
      chats: [],
      chatID: this.$route.params.id,
      messages: [],
      newMessage: '',
      loading: true,
      chatTitle: null
    }
  },

  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        let name, email, photoUrl, uid, emailVerified;
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        uid = user.uid;

        firebase.database().ref('/users/' + uid).on('value', (snapshot) => {
          for (const value of Object.values(snapshot.val())) {
            if (value.id) {
              this.chats.push(value)
            }
          }
          this.loading = false
        });

        if (this.$route.params.id) {
          this.loadChat()
        }
      } else {
        this.$router.replace('/')
      }
    });
  },

  methods: {
    openMenu() {
      this.$router.replace('/c/')
    },
    openSettings() {
      //  console.log('settings');
      this.$router.push('/s/' + this.$route.params.id)
    },

    isMine(message) {
      //  console.log(message);
      let user = firebase.auth().currentUser;
      let uid = user.uid;
      let name = user.displayName;
      if (message.sender.uid) {
        if (message.sender.uid === uid) {
          //console.log(message.sender.uid, uid);
          return true
        } else {
          return false
        }
      } else {
        return false
      }

    },
    loadChat(id = this.$route.params.id) {
      console.log('loading ' + id);
      let user = firebase.auth().currentUser;
      let uid = user.uid;
      let name = user.displayName;

      this.loading = true
      this.messages = []
      let objDiv = document.getElementById("messages");
      let chatRef = firebase.database().ref('chats/' + id + '/mesages/').limitToLast(10);
      chatRef.once('value', (data) => {
        if (data.val()) {
          this.messages = data.val()
          this.loading = false
          let startTime = Date.now()
          objDiv.scrollTop = objDiv.scrollHeight;
          this.scrollBottom()
          firebase.database().ref('chats/' + id).on('value', (snapshot) => {
            if (snapshot.val()) {
              this.chatTitle = snapshot.val().title

              firebase.database().ref('users/' + uid + '/' + id).set({
                title: snapshot.val().title,
                id: id,
                time: Date.now()
              });
              this.messages = snapshot.val().mesages
              //  console.log('first ' + moment().format('h:mm:ss a'));
              objDiv.scrollTop = objDiv.scrollHeight;
              this.scrollBottom();
              let endTime = Date.now()
              console.log(endTime - startTime);
              this.loading = false



            } else {
              this.$router.replace('/c/')
            }

          })
        } else {
          this.$router.replace('/c/')
        }
        //console.log('second ' + moment().format('h:mm:ss a'));




      })





    },

    scrollBottom() {
      let objDiv = document.getElementById("messages");
      setTimeout(function() {
        objDiv.scrollTop = objDiv.scrollHeight;
      }, 500);
    },
    richTextParse(message) {
      return linkifyHtml(message, {
        defaultProtocol: 'https'
      });

    },
    send() {
      let chatID = this.$route.params.id
      let timeStamp = JSON.stringify(moment().utc())
      let user = firebase.auth().currentUser;
      let newMessageRef = firebase.database().ref('chats/' + chatID + '/mesages/').push();
      let name, email, photoUrl, uid, emailVerified;
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
      }
      if (/\S/.test(this.newMessage)) {
        console.log(this.newMessage.length, this.newMessage);
        newMessageRef.set({
          sender: {
            name: name,
            image: photoUrl,
            time: Date.now(),
            uid: uid
          },
          text: this.newMessage
        });
        this.newMessage = ''
        let updates = {}
        updates['chats/' + chatID + '/time/'] = Date.now()
        firebase.database().ref().update(updates);
      }

    },
    time(message) {
      let time = message.sender.time
      if (time) {
        let format = moment(time).format("dddd, MMMM Do, h:mm")
        //console.log(time, format);
        if (format && format != 'Invalid date') {

          //  console.log('there is time');

          return format
        } else {
          return ''
        }
      } else {
        return ''
      }

    }

  }
}
</script>
