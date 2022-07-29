import React, { useState } from 'react'

export default function CharacterForm({characterInformation, characterSetters}) {
  const {characterName, characterLevel, characterBackground, abilityScoreStrength, abilityScoreDexterity, abilityScoreConstitution, abilityScoreWisdom, abilityScoreIntelligence, abilityScoreCharisma} = characterInformation;

  const {setCharacterName, setCharacterBackground, setCharacterLevel, setAbilityScoreCharisma, setAbilityScoreConstitution, setAbilityScoreDexterity, setAbilityScoreIntelligence, setAbilityScoreStrength, setAbilityScoreWisdom} = characterSetters;
  return (
    <>
    <div>CharacterForm!</div>
    <input type="text" value={characterName} onChange={({target}) => setCharacterName(target.value)}/>
    </>
  )
}
