import React, { useState } from 'react'
import styles from '../App.css'

export default function CharacterForm({characterInformation, characterSetters}) {
  const {characterName, characterLevel, characterBackground, abilityScoreStrength, abilityScoreDexterity, abilityScoreConstitution, abilityScoreWisdom, abilityScoreIntelligence, abilityScoreCharisma} = characterInformation;

  const {setCharacterName, setCharacterBackground, setCharacterLevel, setAbilityScoreCharisma, setAbilityScoreConstitution, setAbilityScoreDexterity, setAbilityScoreIntelligence, setAbilityScoreStrength, setAbilityScoreWisdom} = characterSetters;
  return (
    <section className={styles['form-container']}>
    <div>CharacterForm!</div>
    <input type="text" value={characterName} onChange={({target}) => setCharacterName(target.value)}/>
    </section>
  )
}
