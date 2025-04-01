import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { MessageSquare, UserPlus } from "lucide-react";

const ProfileView = () => {
  const { id } = useParams();

  // Mock data - will be replaced with real data from backend
  const profile = {
    id: 1,
    name: 'John Doe',
    university: 'Stanford',
    department: 'Computer Science',
    yearOfStudy: '3',
    bio: 'Passionate about web development and machine learning. Looking for study partners for upcoming hackathons and projects.',
    skills: [
      { name: 'React', proficiency: 'Advanced' },
      { name: 'Node.js', proficiency: 'Intermediate' },
      { name: 'Python', proficiency: 'Advanced' },
      { name: 'Machine Learning', proficiency: 'Intermediate' }
    ],
    interests: [
      'Web Development',
      'AI/ML',
      'Data Science',
      'Mobile Development'
    ],
    matchScore: 95
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="container py-8"
    >
      <Card>
        <CardHeader className="flex flex-row items-start justify-between space-y-0">
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${profile.name}`} alt={profile.name} />
              <AvatarFallback>{getInitials(profile.name)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-2xl">{profile.name}</CardTitle>
              <div className="mt-1 text-muted-foreground">
                {profile.university} - {profile.department}
                <br />
                Year {profile.yearOfStudy}
              </div>
            </div>
          </div>
          <Badge variant="secondary" className="h-fit">
            {profile.matchScore}% Match
          </Badge>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Bio */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">About</h2>
            <p className="text-muted-foreground">{profile.bio}</p>
          </div>

          <Separator />

          {/* Skills */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">Skills</h2>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {profile.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-between rounded-lg border p-3 text-sm"
                >
                  <span className="font-medium">{skill.name}</span>
                  <Badge variant="secondary">{skill.proficiency}</Badge>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Interests */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">Interests</h2>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((interest) => (
                <Badge key={interest} variant="outline">
                  {interest}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3">
            <Button variant="outline" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              Message
            </Button>
            <Button className="gap-2">
              <UserPlus className="h-4 w-4" />
              Connect
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProfileView; 