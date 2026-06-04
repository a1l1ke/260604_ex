// commonjs es-module
const express = require("express");
// 자동으로 안잡히면 터미널에서 `npm i express`를 안한 것

const app = express(); // 호출

// 이미 실행 중인 3000 포트가 있다면 3001이나 3333 등 대체 포트로 실행
app.listen(3000, () => {
  console.log("3000에서 서버 실행 중");
});
// 터미널에
// node 01_express.js
