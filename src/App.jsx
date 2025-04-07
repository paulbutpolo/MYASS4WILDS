import { useState } from 'react';
import SkillSearch from './components/SkillSearch';
import SelectedSkills from './components/SelectedSkills';
import './index.css';

function App() {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSelectSkill = (skill) => {
    setSelectedSkills([...selectedSkills, skill]);
  };

  const handleRemoveSkill = (skillId) => {
    setSelectedSkills(selectedSkills.filter(skill => skill.id !== skillId));
  };

  return (
    <div className="app">
      <h1>MY ASS 4 BASE WILDS</h1>
      <div className="search-container">
        <SkillSearch 
          onSelectSkill={handleSelectSkill} 
          selectedSkills={selectedSkills} 
        />
      </div>
      <SelectedSkills 
        skills={selectedSkills} 
        onRemoveSkill={handleRemoveSkill} 
      />
    </div>
  );
}

export default App;