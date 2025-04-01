import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Plus, Users, Calendar, BookOpen, Clock } from 'lucide-react';

const StudyGroups = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [newGroup, setNewGroup] = useState({
    name: '',
    course: '',
    description: '',
    schedule: '',
    maxMembers: 5
  });

  // Mock data for study groups
  const studyGroups = [
    {
      id: 1,
      name: 'CPSC 559 Study Group',
      course: 'CPSC 559',
      description: 'Weekly study sessions for CPSC 559. Focus on algorithms and data structures.',
      schedule: 'Mon, Wed 2-4 PM',
      members: 3,
      maxMembers: 5,
      topics: ['Algorithms', 'Data Structures', 'Problem Solving'],
      nextSession: '2024-04-03 14:00'
    },
    {
      id: 2,
      name: 'SENG 513 Project Group',
      course: 'SENG 513',
      description: 'Project collaboration group for SENG 513. Working on a full-stack application.',
      schedule: 'Tue, Thu 3-5 PM',
      members: 4,
      maxMembers: 6,
      topics: ['React', 'Node.js', 'Database Design'],
      nextSession: '2024-04-04 15:00'
    }
  ];

  const handleCreateGroup = () => {
    // In a real app, this would be an API call
    toast({
      title: "Study Group Created",
      description: "Your study group has been successfully created.",
    });
    setNewGroup({
      name: '',
      course: '',
      description: '',
      schedule: '',
      maxMembers: 5
    });
  };

  const filteredGroups = studyGroups.filter(group =>
    group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    group.course.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Study Groups</h1>
          <p className="text-muted-foreground">Find or create study groups for your courses</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Group
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Study Group</DialogTitle>
              <DialogDescription>
                Create a new study group for your course
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Group Name</Label>
                <Input
                  id="name"
                  value={newGroup.name}
                  onChange={(e) => setNewGroup({ ...newGroup, name: e.target.value })}
                  placeholder="e.g., CPSC 559 Study Group"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="course">Course</Label>
                <Input
                  id="course"
                  value={newGroup.course}
                  onChange={(e) => setNewGroup({ ...newGroup, course: e.target.value })}
                  placeholder="e.g., CPSC 559"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  value={newGroup.description}
                  onChange={(e) => setNewGroup({ ...newGroup, description: e.target.value })}
                  placeholder="Describe your study group"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="schedule">Schedule</Label>
                <Input
                  id="schedule"
                  value={newGroup.schedule}
                  onChange={(e) => setNewGroup({ ...newGroup, schedule: e.target.value })}
                  placeholder="e.g., Mon, Wed 2-4 PM"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="maxMembers">Maximum Members</Label>
                <Input
                  id="maxMembers"
                  type="number"
                  value={newGroup.maxMembers}
                  onChange={(e) => setNewGroup({ ...newGroup, maxMembers: parseInt(e.target.value) })}
                  min="2"
                  max="10"
                />
              </div>
              <Button onClick={handleCreateGroup} className="w-full">
                Create Group
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search groups by name or course..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredGroups.map((group) => (
            <Card key={group.id}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{group.name}</span>
                  <Badge variant="secondary">
                    {group.members}/{group.maxMembers} members
                  </Badge>
                </CardTitle>
                <CardDescription>{group.course}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{group.description}</p>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{group.schedule}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>Next session: {new Date(group.nextSession).toLocaleString()}</span>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.topics.map((topic) => (
                      <Badge key={topic} variant="outline">{topic}</Badge>
                    ))}
                  </div>
                </div>
                <Button className="w-full">
                  {group.members >= group.maxMembers ? 'Group Full' : 'Join Group'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyGroups; 