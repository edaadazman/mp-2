import Shows from "./components/Shows.tsx";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Show } from "./interfaces/Show.ts";
import './App.css'

const ParentDiv = styled.div`
    width: 80vw;
    margin: auto;
    border: 5px pink solid;
`;

export default function App() {
  const [data, setData] = useState<Show[]>([]);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const rawData = await fetch("https://api.tvmaze.com/shows");
      const results: Show[] = await rawData.json();
      setData(results)
    }
    fetchData()
      .then(() => console.log("Data fetched successfully"))
      .catch((e: Error) => console.log("There was the error: " + e));
  }, [data.length]);

  return (
    <ParentDiv>
      <Shows data={data} />
    </ParentDiv>
  );
}
