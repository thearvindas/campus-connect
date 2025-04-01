import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const FindPartners = () => {
  const { toast } = useToast();
  const [filters, setFilters] = useState({
    faculty: '',
    facultyName: '',
    skills: [],
    interests: []
  });
  const [searchResults, setSearchResults] = useState([]);
  const [skillSearch, setSkillSearch] = useState('');
  const [showSkillSuggestions, setShowSkillSuggestions] = useState(false);
  const skillInputRef = useRef(null);

  const skills = [
    'JavaScript', 'Python', 'Java', 'C++', 'React', 'Node.js', 'SQL',
    'Machine Learning', 'Data Analysis', 'UI/UX Design', 'Project Management',
    'Database Management', 'Cloud Computing', 'DevOps', 'System Design',
    'Agile Methodologies', 'Version Control', 'API Development', 'Testing',
    'Security', 'Mobile Development', 'Web Development', 'Backend Development',
    'Frontend Development', 'Full Stack Development', 'Data Structures',
    'Algorithms', 'Object-Oriented Programming', 'Functional Programming',
    'RESTful APIs', 'GraphQL', 'Docker', 'Kubernetes', 'CI/CD',
    'Microservices Architecture', 'Blockchain', 'IoT', 'AR/VR',
    'Game Development', 'Natural Language Processing', 'Computer Vision'
  ];

  const interests = [
    'Web Development', 'Mobile Development', 'AI/ML', 'Data Science',
    'Cybersecurity', 'Cloud Computing', 'Game Development', 'IoT',
    'Blockchain', 'DevOps', 'UI/UX Design', 'Research Collaborations',
    'Hackathon Partners', 'Study Groups', 'Technical Skills Exchange',
    'Project Collaboration', 'Code Review', 'Pair Programming',
    'Mentorship', 'Career Development', 'Industry Networking',
    'Open Source Contributions', 'Technical Writing', 'Public Speaking',
    'Leadership', 'Innovation', 'Entrepreneurship', 'Social Impact',
    'Environmental Sustainability', 'Healthcare Technology',
    'Financial Technology', 'Educational Technology', 'Smart Cities',
    'Digital Transformation', 'Emerging Technologies'
  ];

  // Mock data for search results
  const mockResults = [
    {
      id: 1,
      name: 'Sarah Chen',
      faculty: 'Schulich School of Engineering',
      major: 'Software Engineering',
      skills: ['React', 'Node.js', 'Python', 'Machine Learning'],
      interests: ['Web Development', 'AI/ML', 'Study Groups'],
      classes: ['CPSC 559', 'CPSC 581'],
      matchScore: 95
    },
    {
      id: 2,
      name: 'Michael Brown',
      faculty: 'Schulich School of Engineering',
      major: 'Computer Science',
      skills: ['Java', 'Python', 'Data Structures', 'Algorithms'],
      interests: ['Study Groups', 'Project Collaboration'],
      classes: ['CPSC 559', 'CPSC 581'],
      matchScore: 85
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (skillInputRef.current && !skillInputRef.current.contains(event.target)) {
        setShowSkillSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = () => {
    // In a real app, this would be an API call
    setSearchResults(mockResults);
  };

  const handleSkillSearch = (value) => {
    setSkillSearch(value);
    setShowSkillSuggestions(true);
  };

  const handleSkillSelect = (skill) => {
    if (!filters.skills.includes(skill)) {
      setFilters(prev => ({
        ...prev,
        skills: [...prev.skills, skill]
      }));
    }
    setSkillSearch('');
    setShowSkillSuggestions(false);
  };

  const handleSkillRemove = (skill) => {
    setFilters(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== skill)
    }));
  };

  const handleInterestToggle = (interest) => {
    setFilters(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const filteredSkills = skills.filter(skill =>
    skill.toLowerCase().includes(skillSearch.toLowerCase()) &&
    !filters.skills.includes(skill)
  );

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Find Study Partners</h1>

      <Card>
        <CardHeader>
          <CardTitle>Search Filters</CardTitle>
          <CardDescription>Find your perfect study partner</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="faculty">Faculty</Label>
              <Input
                id="faculty"
                value={filters.faculty}
                onChange={(e) => setFilters({ ...filters, faculty: e.target.value })}
                placeholder="e.g., Schulich School of Engineering"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="facultyName">Faculty Name</Label>
              <Input
                id="facultyName"
                value={filters.facultyName}
                onChange={(e) => setFilters({ ...filters, facultyName: e.target.value })}
                placeholder="e.g., John Doe"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Skills</Label>
            <div className="relative" ref={skillInputRef}>
              <Input
                value={skillSearch}
                onChange={(e) => handleSkillSearch(e.target.value)}
                placeholder="Search for skills..."
                onFocus={() => setShowSkillSuggestions(true)}
              />
              {showSkillSuggestions && filteredSkills.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-48 overflow-y-auto">
                  {filteredSkills.map((skill) => (
                    <div
                      key={skill}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSkillSelect(skill)}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {filters.skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary"
                  className="flex items-center gap-1"
                >
                  {skill}
                  <button
                    onClick={() => handleSkillRemove(skill)}
                    className="text-xs hover:text-red-500"
                  >
                    ×
                  </button>
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Interests</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-h-48 overflow-y-auto p-2 border rounded-md">
              {interests.map((interest) => (
                <div key={interest} className="flex items-center space-x-2">
                  <Checkbox
                    id={interest}
                    checked={filters.interests.includes(interest)}
                    onCheckedChange={() => handleInterestToggle(interest)}
                  />
                  <Label htmlFor={interest} className="text-sm">{interest}</Label>
                </div>
              ))}
            </div>
          </div>

          <Button onClick={handleSearch} className="w-full">
            Search Partners
          </Button>
        </CardContent>
      </Card>

      {searchResults.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Search Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {searchResults.map((result) => (
              <Card key={result.id}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{result.name}</span>
                    <Badge variant="secondary">{result.matchScore}% Match</Badge>
                  </CardTitle>
                  <CardDescription>{result.faculty} - {result.major}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {result.skills.map((skill) => (
                        <Badge key={skill} variant="outline">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {result.interests.map((interest) => (
                        <Badge key={interest} variant="outline">{interest}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Classes</h3>
                    <div className="flex flex-wrap gap-2">
                      {result.classes.map((className) => (
                        <Badge key={className} variant="outline">{className}</Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full">Connect</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FindPartners; 