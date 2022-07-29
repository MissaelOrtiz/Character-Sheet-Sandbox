import { useCharacterContext } from './context/CharacterProvider';
import CharacterSheet from './views/CharacterSheet'

export default function App() {
  const {characterName, setCharacterName, characterLevel, setCharacterLevel, characterBackground, setCharacterBackground, abilityScoreStrength, setAbilityScoreStrength, abilityScoreDexterity, setAbilityScoreDexterity, abilityScoreConstitution, setAbilityScoreConstitution, abilityScoreWisdom, setAbilityScoreWisdom, abilityScoreIntelligence, setAbilityScoreIntelligence, abilityScoreCharisma, setAbilityScoreCharisma} = useCharacterContext()
  return (
  <>
    <CharacterSheet characterInformation={{characterName, setCharacterName, characterLevel, setCharacterLevel, characterBackground, setCharacterBackground, abilityScoreStrength, setAbilityScoreStrength, abilityScoreDexterity, setAbilityScoreDexterity, abilityScoreConstitution, setAbilityScoreConstitution, abilityScoreWisdom, setAbilityScoreWisdom, abilityScoreIntelligence, setAbilityScoreIntelligence, abilityScoreCharisma, setAbilityScoreCharisma}}/>
  </>
  );
}
