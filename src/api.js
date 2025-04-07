export const fetchSkills = async (query = '') => {
  try {
    const queryParam = encodeURIComponent(JSON.stringify({
      name: {
        $like: `%${query}%`
      }
    }));
    
    const response = await fetch(`https://wilds.mhdb.io/en/skills?q=${queryParam}`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Error fetching skills:', error);
    return [];
  }
};