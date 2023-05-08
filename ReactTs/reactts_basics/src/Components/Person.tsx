import React, { FC } from "react";

//the way we define props for ts is by using interface
//do not export if you are only using it in this component
interface Props {
    name:string
    age:number 
    email: string
}
// then to call Props use it inside the brackets as props: Props
export const Person: FC<Props> = ({name, age, email}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{email}</h1>
    </div> 
  );
}
