import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";
import { Slot } from "./Slot";

export function FruitMachine() {
  const [slot1, setSlot1] = React.useState("");
  const [slot2, setSlot2] = React.useState("");
  const [slot3, setSlot3] = React.useState("");
  const [slot4, setSlot4] = React.useState("");

  function getRandomColour(colours: Array<string>): string {
    const randIndex: number = Math.floor(Math.random() * colours.length);
    return colours[randIndex];
  }

  function handleClick() {
    let colours: Array<string> = ["black", "red", "green", "blue"];
    setSlot1(getRandomColour(colours));
    setSlot2(getRandomColour(colours));
    setSlot3(getRandomColour(colours));
    setSlot4(getRandomColour(colours));
  }

  // React.useEffect(() => {

  // }, [slot1, slot2, slot3, slot4]);
  return (
    <>
      <div className='slotContainer'>
        <Slot slotColour={slot1} />
        <Slot slotColour={slot2} />
        <Slot slotColour={slot3} />
        <Slot slotColour={slot4} />
      </div>
      <button onClick={handleClick}>Play!</button>
    </>
  );
}
