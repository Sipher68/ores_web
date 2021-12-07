import React from "react";
import styles from "../styles/Content.module.css";
import { Line, Doughnut } from "react-chartjs-2";
import firebase from "../service/firebase";
import {
  collection,
  connectFirestoreEmulator,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  onSnapshot,
} from "@firebase/firestore";

//init firebase app
firebase;
// init services
const db = getFirestore();

// collection ref
const maritalColRef = collection(db, "maritalStatusCount");

// get collection data for maritalStatus Count
onSnapshot(maritalColRef, (snapshot) => {
  let maritalStatusCount = [];
  snapshot.docs.forEach((doc) => {
    maritalStatusCount.push({
      ...doc.data(),
      id: doc.id,
    });
  });
  console.log(maritalStatusCount);
});

//get Single document
const singleColRef = doc(db, "maritalStatusCount", "Single");

const getSingle = getDoc(singleColRef).then((doc) => {
  const singleCount = doc.get("statusCount");
  // console.log(singleCount);
});

console.log(getSingle);

// onSnapshot(singleColRef, (doc) => {
//   const singleCount = doc.get("statusCount");
//   console.log(singleCount);
//   return singleCount;
// });

//data for bar chart
const data = {
  labels: ["Common Law", "Married", "Separated", "Single"],
  datasets: [
    {
      label: "Gender",
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 0,
      data: [6, 51, 3, 41],
    },
  ],
};

//doughnut chart data set

const data1 = {
  labels: ["Female", "Male"],
  datasets: [
    {
      data: [48, 53],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

function Content() {
  return (
    <div className={styles.contentcontainer}>
      <div className={styles.contentwrapper}>
        <div className={styles.tabs}>
          <div className={styles.categories}>
            <h2>Users</h2>
          </div>
        </div>
      </div>
      <div className={styles.charts}>
        <div className={styles.bar}>
          <h2>Gender Data</h2>
          <Line data={data} width={400} height={400} />
        </div>
        <div className={styles.circle}>
          <h2>Info</h2>
          <Doughnut data={data1} width={400} height={400} />
        </div>
      </div>
    </div>
  );
}

export default Content;
