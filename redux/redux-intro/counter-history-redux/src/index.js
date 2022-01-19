import "./index.scss";
import { store, increment, reset, decrement } from "./store";

const resultElem = document.querySelector(".counter__result");

const getActionBtnElem = (actionType) =>
  document.querySelector(`[data-action=${actionType}]`);

const onIncrement = () => store.dispatch(increment());
const onReset = () => store.dispatch(reset());
const onDecrement = () => store.dispatch(decrement());

getActionBtnElem("increment").onclick = onIncrement;
getActionBtnElem("reset").onclick = onReset;
getActionBtnElem("decrement").onclick = onDecrement;

store.subscribe(() => {
  const nums = store.getState().history;
  const strNums = nums.map((num) => (num === 1 ? "+1" : num));
  const sum = nums.reduce((acc, num) => acc + num, 0);

  resultElem.textContent = `${strNums.join("")} = ${sum}`;
});
