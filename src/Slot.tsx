import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";

interface SlotProps extends React.HTMLAttributes<Element> {
  // add any custom props, but don't have to specify `children`
  slotColour: string;
}

export function Slot({ slotColour }: SlotProps) {
  return <div className={`${slotColour} slot`}>{slotColour}</div>;
}
