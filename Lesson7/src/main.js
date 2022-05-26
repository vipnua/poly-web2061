import Navigo from "navigo";
// Component
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/home";
import { apiGet, apiGetCallback, getImage, getImagePromise } from "./api";
// styles
import "../style.css";

// Config router
const router = new Navigo("/", { linksSelector: "a" });

router.on({
  "/": function () {
    print(Home);
  },
  "/san-pham": function () {
    console.log("Sản phẩm");
  },
});
router.resolve();
// End config router

async function print(content) {
  document.querySelector("#header").innerHTML = Header.render();
  document.querySelector("#app").innerHTML = await content.render();
  document.querySelector("#footer").innerHTML = Footer.render();
}

// Asynchronous
// console.log("start");
// setTimeout(function () {
//   console.log("doing some things");
//   // console.log("The end")
// }, 0);
// setTimeout(function () {
//   console.log("The end");
// }, 1000);

// Callback
// Get image into img tag
// getImage("https://picsum.photos/3000/2000", function (data) {
//   document.querySelector("#img-01").src = data.url;
//   getImage("https://picsum.photos/300/200", function (data) {
//     document.querySelector("#img-02").src = data.url;
//     getImage("https://picsum.photos/300/200", function (data) {
//       document.querySelector("#img-03").src = data.url;
//     });
//   });
// });

// Promise
// getImagePromise('https://picsum.photos/3000/2000')
// .then(data => document.querySelector("#img-01").src = data.url)
// .then(() => getImagePromise('https://picsum.photos/300/200'))
// .then(data => document.querySelector("#img-02").src = data.url)
// .then(() => getImagePromise('https://picsum.photos/300/200'))
// .then(data => document.querySelector("#img-03").src = data.url)

// Async Await
// const data1 = await getImagePromise('https://picsum.photos/3000/2000')
// document.querySelector("#img-01").src = data1.url
// const data2 = await getImagePromise('https://picsum.photos/3000/2000')
// document.querySelector("#img-02").src = data2.url
// const data3 = await getImagePromise('https://picsum.photos/3000/2000')
// document.querySelector("#img-03").src = data3.url
