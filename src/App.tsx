import {useEffect, useState} from "react";
import ScottishTerrier from "./components/ScottishTerrier.tsx";
import styled from "styled-components";
import type { DogImage } from "./interfaces/DogImage.ts";

const ParentDiv = styled.div`
    width: 80vw;
    margin: auto;
    border: 5px saddlebrown solid;
`;

export default function App() {

    const[data, setData]= useState<DogImage[]>([]);

    useEffect(() => {
        async function fetchData() {
            /* fetching data from HTTP, must await*/
            const rawData = await fetch("https://dog.ceo/api/breed/terrier/scottish/images"); /* place the API link in the quotes*/
            const {message}: {message: string[]} = await rawData.json();
            // the slice function here tells us the index of the image in the array to start and end at
            const formatted: DogImage[] = message.slice(20, 45).map((url,index) => ({
                // our 3 components that we need to get
                // ** since the Dog CEO API returns only image URLs, id and filename are derived from the URL. **
                id: index + 1,
                url: url,
                // split creates an array of strings separated by '/' and pop gives us the last element, which is
                // ultimately the original file name
                filename: url.split("/").pop() || "unknown",
            }));
            setData(formatted);
        }

        // we created the fetch data function, now invoke it with try/catch error handling
        fetchData()
            .then(() => console.log("Everything is good"))
            .catch((e) => console.log("This error occurred: " + e));

    }, [data.length])

    return (
    <ParentDiv>
        <ScottishTerrier data={data}/>
    </ParentDiv>
  )
}