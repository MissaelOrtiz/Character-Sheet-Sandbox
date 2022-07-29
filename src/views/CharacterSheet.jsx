import React from 'react'
import { useState } from 'react'
import CharacterInformationTest from '../components/CharacterInformationTest';

export default function CharacterSheet({characterInformation}) {
  const {characterName, setCharacterName, characterLevel, setCharacterLevel, characterBackground, setCharacterBackground, abilityScoreStrength, setAbilityScoreStrength, abilityScoreDexterity, setAbilityScoreDexterity, abilityScoreConstitution, setAbilityScoreConstitution, abilityScoreWisdom, setAbilityScoreWisdom, abilityScoreIntelligence, setAbilityScoreIntelligence, abilityScoreCharisma, setAbilityScoreCharisma} = characterInformation;


  return (
    <>
      <div>This div will eventually display a character form!</div>
      <CharacterInformationTest information={{characterName, characterBackground, characterLevel, abilityScoreCharisma, abilityScoreConstitution, abilityScoreDexterity, abilityScoreIntelligence, abilityScoreStrength, abilityScoreWisdom}}/>
    </>
  )
}
