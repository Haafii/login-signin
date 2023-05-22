// import React from 'react'

// function Home() {
//   return (
//     <div>
//       its home page
//     </div>
//   )
// }

// export default Home


import React, { useState, useEffect, useRef } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import Header from "../components/Header";

const Home = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("uid", uid)
        console.log(user.displayName);
      } else {
        console.log("user is logged out")
      }
    });

    const intervalID = setInterval(() => {
      // console.log("yes")
    }, 1000)
    return () => clearInterval(intervalID);
  }, [])

  return (
    <div>
      <Header />
      home page
    </div>
  )
}

export default Home