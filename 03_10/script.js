/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);

const trainingPack = new Backpack(
  "Training Backpack",
  30,
  "black",
  20,
  20,
  20,
  true
);

console.log("The trainingPack object:", trainingPack);
console.log("The pocketNum value:", trainingPack.lidOpen);

export default Backpack;
