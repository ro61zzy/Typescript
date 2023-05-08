import React from "react";
//Enums in React Typescript
export interface Props {}

enum HairColor {
  Blonde = "Blondee, niice",
  Black = "I s the best",
  Brunnete = "Cool",
}

export function Someone(props: Props) {
  return (
    <div>
      <h2>Ni Saawa</h2>
      <p>{HairColor.Blonde}</p>
    </div>
  );
}
