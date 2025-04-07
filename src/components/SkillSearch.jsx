import { useState, useEffect } from 'react';
import { fetchSkills } from '../api';

const SkillSearch = ({ onSelectSkill, selectedSkills }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (query.trim() === '' || query.trim().length < 4) {
      setResults([]);
      return;
    }

    const searchTimer = setTimeout(async () => {
      setIsSearching(true);
      const skills = await fetchSkills(query);
      const sortedResults = skills.sort((a, b) => {
        const aStartsWith = a.name.toLowerCase().startsWith(query.toLowerCase());
        const bStartsWith = b.name.toLowerCase().startsWith(query.toLowerCase());
        return bStartsWith - aStartsWith || a.name.localeCompare(b.name);
      });
      setResults(sortedResults);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(searchTimer);
  }, [query]);

  const isSelected = (skill) => {
    return selectedSkills.some(s => s.id === skill.id);
  };

  return (
    <div className="skill-search">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for skills..."
        className="search-input"
      />
      
      {isSearching && <div className="loading">Loading...</div>}
      
      {results.length > 0 && (
        <ul className="results-list">
          {results.map((skill) => (
            <li 
              key={skill.id} 
              onClick={() => !isSelected(skill) && onSelectSkill(skill)}
              className={`result-item ${isSelected(skill) ? 'selected' : ''}`}
            >
              <div className="skill-name">{skill.name}</div>
              <div className="skill-kind">{skill.kind}</div>
              {isSelected(skill) && <span className="selected-marker">✓</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SkillSearch;