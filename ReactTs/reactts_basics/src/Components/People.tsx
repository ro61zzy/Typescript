import React, { ChangeEvent, FC, useState } from "react";
// using state with react typescript
export interface Props {
    location:string
    address:number
}
 
const People = ({location,address}:Props) => {
    //to accept more than one type
    const [country, setCountry] = useState<string  | null>("")
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value)
    }

  return (
    <div>
        <h1>Welcome</h1>
        {/* In Javascript 
        <input placeholder="Where are you from?,.." onChange={(event) => {setCountry(event.target.value
            )}} />*/}
            {/* In Ts you need to specify the types ,,,but if the function had been defined on top it wouldn't work without the event:bla bla because  */}
            {/* <input placeholder="Where are you from?,.." onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setCountry(event.target.value
            )}} /> */}
            <input placeholder="Where do you live...?" onChange={handleChange} />
        {country}
        <h4>{location}</h4>
        <h4>{address}</h4>
    </div>
  );
}
export default People;