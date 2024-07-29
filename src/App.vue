<script setup>
// --------------------追加したやつ-----------------------------------
import { ref, computed, onMounted } from 'vue';
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { useCollection } from 'vuefire'
// -----------------------------------------------------------------

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collectionGroup } from 'firebase/firestore/lite';
import { orderByPriority } from 'firebase/database';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtv1gb9AjCoYFwh48LUorst0RexUznRWY",
  authDomain: "vue3-chat-f3d4e.firebaseapp.com",
  projectId: "vue3-chat-f3d4e",
  storageBucket: "vue3-chat-f3d4e.appspot.com",
  messagingSenderId: "624341074146",
  appId: "1:624341074146:web:160f603fd578ccaf231ebb",
  measurementId: "G-YDCDK44R4J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const messagesCollection = collection(db, 'messages');
const messagesCollectionRef = useCollection(messagesCollection);

const name = ref("");
const content = ref("");

async function send() {
    const date = new Date();
    const message = {
        name: name.value,
        content: content.value,
        timestamp: date.getTime()
    };
    
    try {
        await addDoc(messagesCollection, message);
        name.value = "";
        content.value = "";
    } catch (error) {
        console.error('Error adding document: ', error);
    }
}

const sortedMessages = computed(() => {
    
});


// const sortedMessages = computed(()=> {
//     // メッセージをタイムスタンプで並べ替えて取得

    // return messagesCollectionRef
//     return messagesQuery;
//     // // onSnapshotでリアルタイムにメッセージを取得
//     // onSnapshot(messagesQuery, (snapshot) => {
//     //     const sortedMessages = snapshot.docs.map(doc => doc.data());
//     //     return sortedMessages; // 並べ替えられたメッセージをコンソールに表示
//     // });
// })



</script>

<template>
    <!-- 入力欄 -->
    名前: <input type="text" class="form-control" style="width:250px" v-model="name">
    内容: <input type="text" class="form-control" style="width:400px" v-model="content"><br>
    <!-- 送信ボタン -->
    <button class="btn btn-primary" @click="send">送信</button>
    <!-- 送信済みメッセージリスト -->
    <p v-for="(message, index) in messagesCollectionRef" :key="index">{{ message.name }} > {{ message.content }}</p>
</template>
