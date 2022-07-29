import React from 'react'
import { useState } from 'react'
import CharacterForm from '../components/CharacterForm';
import CharacterInformationTest from '../components/CharacterInformationTest';

export default function CharacterSheet({characterInformation, characterSetters}) {


  return (
    <>
      <CharacterForm characterInformation={characterInformation} characterSetters={characterSetters} />
      <CharacterInformationTest information={characterInformation}/>
    </>
  )
}
