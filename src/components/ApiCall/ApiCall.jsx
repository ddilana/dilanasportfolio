import { useState, useEffect } from "react";
import { ApiList } from "../../components/ApiCall/ApiList";
import { ApiContainer } from "./ApiCallStyled";
import { FaRegSadCry } from "react-icons/fa";
import { BiHappyAlt } from "react-icons/bi";

import axios from "axios";

export const ApiCall = () => {
  const [character, setCharacter] = useState([]);
  const [idToMatch, setIdToMatch] = useState();
  const [showInput, setShowInput] = useState(false);

  const handleInput = () => setShowInput(!showInput);

  const handleApi = async () => {
    const newApi = await axios(
      `https://rickandmortyapi.com/api/character/${idToMatch}`
    );
    console.log(newApi);
    setCharacter([...character, newApi]);
  };

  useEffect(() => console.log(character), [character]);

  return (
    <ApiContainer>
      {showInput ? (
        <>
          <input
            type="text"
            value={idToMatch}
            onChange={(e) => setIdToMatch(e.target.value)}
          />
          <h5>
            Write random number on the input field and click on happy emoji to
            see what Rick and Morty character you'll get{" "}
            <BiHappyAlt className="happy-emoji" onClick={() => handleApi()} />
          </h5>
        </>
      ) : (
        <FaRegSadCry className="sad-emoji" onClick={() => handleInput()} />
      )}
      <ApiList character={character} />
    </ApiContainer>
  );
};
