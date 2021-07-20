import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";
import { Slot } from "./Slot";

export function FruitMachine() {
  const [slot1, setSlot1] = React.useState("");
  const [slot2, setSlot2] = React.useState("");
  const [slot3, setSlot3] = React.useState("");
  const [slot4, setSlot4] = React.useState("");
  const [winner, setWinner] = React.useState(false);
  const [clicks, setClicks] = React.useState(0);

  function checkForWin() {
    if (slot1.length > 0) {
      if (slot1 === slot2) {
        // console.log("slot1 is the same as slot2", slot1, slot2);
        if (slot2 === slot3) {
          if (slot3 === slot4) {
            setWinner(true);
          }
        }
      }
    }
  }

  function getRandomColour(colours: Array<string>): string {
    const randIndex: number = Math.floor(Math.random() * colours.length);
    return colours[randIndex];
  }

  function handleClick() {
    let colours: Array<string> = ["yellow", "red", "green", "blue"];
    setSlot1(getRandomColour(colours));
    setSlot2(getRandomColour(colours));
    setSlot3(getRandomColour(colours));
    setSlot4(getRandomColour(colours));
    checkForWin();
    setClicks(clicks + 1);
    console.log(slot1, slot2, slot3, slot4, winner);
    console.log("winner?", winner);
  }

  React.useEffect(() => {
    checkForWin();
  }, [slot1, slot2, slot3, slot4]);

  return (
    <>
      <div className='slotContainer'>
        <Slot slotColour={slot1} />
        <Slot slotColour={slot2} />
        <Slot slotColour={slot3} />
        <Slot slotColour={slot4} />
      </div>

      {clicks > 0 && !winner ? <p>Try again?</p> : ""}

      {winner ? (
        <p>You've won!!</p>
      ) : (
        <button onClick={handleClick}>Play!</button>
      )}
    </>
  );
}
