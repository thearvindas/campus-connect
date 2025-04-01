import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react";

const ProfileEdit = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
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

  const [profile, setProfile] = useState({
    name: '',
    faculty: '',
    major: '',
    currentClass: '',
    classes: [],
    skills: [],
    interests: []
  });

  const handleAddClass = () => {
    if (profile.currentClass.trim()) {
      setProfile(prev => ({
        ...prev,
        classes: [...prev.classes, prev.currentClass.trim()],
        currentClass: ''
      }));
    }
  };

  const handleRemoveClass = (className) => {
    setProfile(prev => ({
      ...prev,
      classes: prev.classes.filter(c => c !== className)
    }));
  };

  const handleSkillToggle = (skill) => {
    setProfile(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleInterestToggle = (interest) => {
    setProfile(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically save the profile data
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
    });
    navigate('/profile');
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Edit Profile</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                placeholder="Your full name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="faculty">Faculty</Label>
              <Input
                id="faculty"
                value={profile.faculty}
                onChange={(e) => setProfile({ ...profile, faculty: e.target.value })}
                placeholder="e.g., Schulich School of Engineering"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="major">Major</Label>
              <Input
                id="major"
                value={profile.major}
                onChange={(e) => setProfile({ ...profile, major: e.target.value })}
                placeholder="e.g., Software Engineering"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Classes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input
                value={profile.currentClass}
                onChange={(e) => setProfile({ ...profile, currentClass: e.target.value })}
                placeholder="Add a class (e.g., CPSC 559)"
                onKeyPress={(e) => e.key === 'Enter' && handleAddClass()}
              />
              <Button 
                type="button"
                onClick={handleAddClass}
              >
                Add
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {profile.classes.map((item) => (
                <Badge 
                  key={item} 
                  variant="secondary"
                  className="flex items-center gap-1"
                >
                  {item}
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => handleRemoveClass(item)}
                  />
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-h-48 overflow-y-auto p-2 border rounded-md">
              {skills.map((skill) => (
                <div key={skill} className="flex items-center space-x-2">
                  <Checkbox
                    id={skill}
                    checked={profile.skills.includes(skill)}
                    onCheckedChange={() => handleSkillToggle(skill)}
                  />
                  <Label htmlFor={skill} className="text-sm">{skill}</Label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Interests</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-h-48 overflow-y-auto p-2 border rounded-md">
              {interests.map((interest) => (
                <div key={interest} className="flex items-center space-x-2">
                  <Checkbox
                    id={interest}
                    checked={profile.interests.includes(interest)}
                    onCheckedChange={() => handleInterestToggle(interest)}
                  />
                  <Label htmlFor={interest} className="text-sm">{interest}</Label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button 
            type="button" 
            variant="outline"
            onClick={() => navigate('/profile')}
          >
            Cancel
          </Button>
          <Button type="submit">Save Changes</Button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEdit; 