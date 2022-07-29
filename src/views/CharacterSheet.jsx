import React from 'react'
import { useState } from 'react'
import CharacterInformationTest from '../components/CharacterInformationTest';

export default function CharacterSheet({characterInformation, characterSetters}) {


  return (
    <>
      <div>This div will eventually display a character form!</div>
      <CharacterInformationTest information={characterInformation}/>
    </>
  )
}
