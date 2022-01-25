import { useState, useEffect } from "react";
import axios from "axios";
import { MainTitle, Screen, Card, Info } from "./App-styles.js";
import Image from "./components/characters-image";
import Name from "./components/characters-name";
import Status from "./components/characters-status";
import Location from "./components/characters-location";

const baseURL = "https://rickandmortyapi.com/api/character?page=1";

function App() {
  const [charactersInfo, setCharactersInfo] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(baseURL)
      .then((res) => {
        const data = res.data.results;
        setCharactersInfo(data);
      })
      .catch((error) => console.log(`Error: ${error}`));
  };

  return (
    <Screen className="App">
      <MainTitle>Rick and Morty characters</MainTitle>
      {charactersInfo.map((info) => (
        <Card key={`${info.id}-${info.name}`}>
          <Image image={info.image} name={info.name} />
          <Info>
            <Name name={info.name} />
            <Status status={info.status} species={info.species} />
            <Location location={info.location.name} />
          </Info>
        </Card>
      ))}
    </Screen>
  );
}

export default App;
