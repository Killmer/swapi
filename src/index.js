
const obj = {
  test: "1",
  cool: 1,
};


for (var key in obj) {
  window[key] = obj[key];
}



console.log("test");
