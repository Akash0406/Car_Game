const btnNew = document.querySelector(".btn--new");
const btnNext = document.querySelector(".btn--next");
const currentPetrol = document.querySelector(".petrol");
const currentDistance = document.querySelector(".distance");
const board = document.querySelector(".board");

let distanceTravel = 0;
let remeningPetrol = 50;
let move = 0;
let playing = true;

let petrolPump = [];

for (let i = 0; i < 6; i++) {
  let pump = Math.trunc(Math.random() * 100) + 1;
  petrolPump.push(pump);
}

btnNext.addEventListener("click", function () {
  if (playing) {
    move++;

    let travel = Math.trunc(Math.random() * 7);
    distanceTravel += travel;
    currentDistance.textContent = distanceTravel;
    if (petrolPump.includes(distanceTravel)) {
      remeningPetrol += 30;
    }

    let petrolConsume = travel * 2;
    remeningPetrol = remeningPetrol - petrolConsume;
    if (remeningPetrol < 0) {
      remeningPetrol = 0;
    }
    currentPetrol.textContent = remeningPetrol;

    console.log(`move ${move} - car at ${distanceTravel}, petrol remaining ${remeningPetrol}.`);

    if (remeningPetrol <= 0 && distanceTravel != 100) {
      board.textContent = "You Lost";
      console.log("You Lost");
      playing = false;
    }
    if (remeningPetrol >= 0 && distanceTravel >= 100) {
      board.textContent = "You Won";
      console.log("You won");
      playing = false;
    }
  }
  if (!playing) {
    console.log("restart again ");
  }
});

btnNew.addEventListener("click", function () {
  window.location.reload();
});
