import { createContext, useContext, useState } from "react";

const Context = createContext();

export default function CharacterProvider({ children }) {
  const [characterName, setCharacterName] = useState('Default Name');
  const [characterLevel, setCharacterLevel] = useState(1);
  const [characterBackground, setCharacterBackground] = useState('Default Background');
  const [abilityScoreStrength, setAbilityScoreStrength] = useState(10);
  const [abilityScoreDexterity, setAbilityScoreDexterity] = useState(10);
  const [abilityScoreConstitution, setAbilityScoreConstitution] = useState(10);
  const [abilityScoreWisdom, setAbilityScoreWisdom] = useState(10);
  const [abilityScoreIntelligence, setAbilityScoreIntelligence] = useState(10);
  const [abilityScoreCharisma, setAbilityScoreCharisma] = useState(10);

  const characterInformation = {characterName, setCharacterName, characterLevel, setCharacterLevel, characterBackground, setCharacterBackground, abilityScoreStrength, setAbilityScoreStrength, abilityScoreDexterity, setAbilityScoreDexterity, abilityScoreConstitution, setAbilityScoreConstitution, abilityScoreWisdom, setAbilityScoreWisdom, abilityScoreIntelligence, setAbilityScoreIntelligence, abilityScoreCharisma, setAbilityScoreCharisma};

  const characterSetters = {setCharacterName, setCharacterBackground, setCharacterLevel, setAbilityScoreCharisma, setAbilityScoreConstitution, setAbilityScoreDexterity, setAbilityScoreIntelligence, setAbilityScoreStrength, setAbilityScoreWisdom}

  return <Context.Provider value={{characterInformation, characterSetters}}>
    {children}
  </Context.Provider>;
};

export function useCharacterContext() {
    return useContext(Context);
};