import styled from "styled-components";
import { Show } from "../interfaces/Show.ts";

const AllShowsDiv = styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: rgb(31, 31, 31);
`;

const SingleShowDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: red;
    color: yellow;
    border: 3px pink solid;
    text-align: center;
`;

export default function Shows(props: { data: Show[] }) {
  return (
    <AllShowsDiv>
      {props.data.map((show: Show) =>
        <SingleShowDiv key={show.id}>
          <h1>{show.name}</h1>
          {/* The summary had html tags so the replace method is used to strip those away and just return plain text */}
          <p>{show.summary.replace(/<[^>]+>/g, '')}</p>
          <p>Language: {show.language}</p>
        </SingleShowDiv>
      )}
    </AllShowsDiv>
  );
}
