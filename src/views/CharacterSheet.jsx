import React from 'react'
import { useState } from 'react'
import CharacterForm from '../components/CharacterForm';
import CharacterInformationTest from '../components/CharacterInformationTest';
import styles from '../App.css'
export default function CharacterSheet({characterInformation, characterSetters}) {


  return (
    <section className={styles['main-container']}>
      <CharacterForm characterInformation={characterInformation} characterSetters={characterSetters} />
      <CharacterInformationTest information={characterInformation}/>
    </section>
  )
}
