function getCharacter(counter) {
  const url = "https://swapi.co/api/people/" + counter;

  return fetch(url).then(function(response) {
    return response.json();
  });
}

const renderData = function(data) {
  const {name, height, gender, mass: weight} = data;
  console.log(data);
  const $height = document.querySelector(".js-height");
  const $weight = document.querySelector(".js-weight");
  const $gender = document.querySelector(".js-gender");
  const $name = document.querySelector(".js-name");

  $name.textContent = name;
  $gender.textContent = gender;
  $weight.textContent = `${weight} kg`;
  $height.textContent = `${height} sm`;

  document.querySelector(".sw__loading").style.display = "none";
  document.querySelector(".sw__container").style.opacity = "1";
};

const displayError = function(err) {
  document.querySelector(".js-error").style.opacity = '1';
  document.querySelector(".js-error").textContent = err;
};

let counter = 1;
getCharacter(counter)
  .then(renderData)
  .catch(displayError);

document.querySelector(".js-left").addEventListener("click", () => {
  if (counter === 1) {
    return;
  }
  counter -= 1;
  document.querySelector(".sw__container").style.opacity = "0";
  document.querySelector(".js-error").style.opacity = '0';
  document.querySelector(".sw__loading").style.display = "block";
  getCharacter(counter)
    .then(renderData)
    .catch(displayError);
});

document.querySelector(".js-right").addEventListener("click", () => {
  if (counter === 16) {
    return;
  }
  counter += 1;
  document.querySelector(".sw__container").style.opacity = "0";
  document.querySelector(".js-error").style.opacity = '0';
  document.querySelector(".sw__loading").style.display = "block";
  getCharacter(counter)
    .then(renderData)
    .catch(displayError);
});
