import styled from "styled-components";
import type {DogImage} from "../interfaces/DogImage.ts";

const AllDogsDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: linen;
`;

const SingleDogDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: saddlebrown;
    color: white;
    border: 3px darkred solid;
    font: italic small-caps bold calc(2px + 1vw) "Times New Roman";
    text-align: center;
`;

const DogImg = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;


export default function ScottishTerrier(props: { data: DogImage[] }) {
    return (
        <AllDogsDiv>
            {
                props.data.map((dog: DogImage) =>
                    <SingleDogDiv key={dog.id}>
                        <h1>#{dog.id}</h1>
                        <p>Scottish Terrier</p>
                        <p>{dog.filename}</p>
                        <DogImg src={dog.url} alt={`Scottish Terrier ${dog.id}`}/>
                    </SingleDogDiv>
                )
            }
        </AllDogsDiv>
    );
}
