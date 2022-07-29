import React from 'react'
import { useState } from 'react'
import CharacterInformationTest from '../components/CharacterInformationTest';

export default function CharacterSheet() {
  const [characterName, setCharacterName] = useState('');
  const [characterLevel, setCharacterLevel] = useState(1);
  const [characterBackground, setCharacterBackground] = useState('');
  const [abilityScoreStrength, setAbilityScoreStrength] = useState(10);
  const [abilityScoreDexterity, setAbilityScoreDexterity] = useState(10);
  const [abilityScoreConstitution, setAbilityScoreConstitution] = useState(10);
  const [abilityScoreWisdom, setAbilityScoreWisdom] = useState(10);
  const [abilityScoreIntelligence, setAbilityScoreIntelligence] = useState(10);
  const [abilityScoreCharisma, setAbilityScoreCharisma] = useState(10);


  return (
    <>
      <div>This div will eventually display a character form!</div>
      <CharacterInformationTest information={{characterName, characterBackground, characterLevel, abilityScoreCharisma, abilityScoreConstitution, abilityScoreDexterity, abilityScoreIntelligence, abilityScoreStrength, abilityScoreWisdom}}/>
    </>
  )
}
