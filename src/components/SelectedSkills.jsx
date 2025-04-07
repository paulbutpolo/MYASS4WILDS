const SelectedSkills = ({ skills, onRemoveSkill }) => {
  return (
    <div className="selected-skills">
      <h3>Selected Skills ({skills.length})</h3>
      
      {skills.length === 0 ? (
        <p className="empty-message">No skills selected yet</p>
      ) : (
        <ul className="skills-list">
          {skills.map((skill) => (
            <li key={skill.id} className="skill-item">
              <div className="skill-info">
                <div className="skill-name">{skill.name}</div>
                <div className="skill-kind">{skill.kind}</div>
                <div className="skill-description">{skill.description}</div>
              </div>
              <button 
                onClick={() => onRemoveSkill(skill.id)}
                className="remove-button"
                aria-label={`Remove ${skill.name}`}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectedSkills;