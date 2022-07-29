import React from 'react'

export default function CharacterInformationTest({information}) {
  const {characterName, characterBackground, characterLevel, abilityScoreCharisma, abilityScoreConstitution, abilityScoreDexterity, abilityScoreIntelligence, abilityScoreStrength, abilityScoreWisdom} = information;
  return (
    <div>
        <div>This div will show character stats</div>
        <h2>Name: {characterName}</h2>
        <p>Level: {characterLevel}</p>
        <p>Background: {characterBackground}</p>
        <p>Strength: {abilityScoreStrength}; Dexterity: {abilityScoreDexterity}; Constitution: {abilityScoreConstitution}; Wisdom: {abilityScoreWisdom}; Intelligence: {abilityScoreIntelligence}; Charisma: {abilityScoreCharisma}</p>
    </div>
  )
}
