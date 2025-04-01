import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Plus, Calendar, Clock, Users, BookOpen } from 'lucide-react';

const Schedule = () => {
  const { toast } = useToast();
  const [newSession, setNewSession] = useState({
    title: '',
    partner: '',
    date: '',
    time: '',
    duration: '60',
    topic: '',
    description: ''
  });

  // Mock data for upcoming sessions
  const upcomingSessions = [
    {
      id: 1,
      title: 'CPSC 559 Algorithms Review',
      partner: 'Sarah Chen',
      date: '2024-04-03',
      time: '14:00',
      duration: '120',
      topic: 'Algorithms',
      description: 'Review of sorting algorithms and complexity analysis',
      status: 'confirmed'
    },
    {
      id: 2,
      title: 'SENG 513 Project Planning',
      partner: 'Michael Brown',
      date: '2024-04-04',
      time: '15:00',
      duration: '60',
      topic: 'Project Management',
      description: 'Planning the next sprint of our full-stack project',
      status: 'pending'
    }
  ];

  const handleCreateSession = () => {
    // In a real app, this would be an API call
    toast({
      title: "Session Scheduled",
      description: "Your study session has been successfully scheduled.",
    });
    setNewSession({
      title: '',
      partner: '',
      date: '',
      time: '',
      duration: '60',
      topic: '',
      description: ''
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Schedule Study Session</h1>
          <p className="text-muted-foreground">Plan and manage your study sessions</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Session
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Schedule New Study Session</DialogTitle>
              <DialogDescription>
                Create a new study session with a partner
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="title">Session Title</Label>
                <Input
                  id="title"
                  value={newSession.title}
                  onChange={(e) => setNewSession({ ...newSession, title: e.target.value })}
                  placeholder="e.g., CPSC 559 Algorithms Review"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="partner">Study Partner</Label>
                <Input
                  id="partner"
                  value={newSession.partner}
                  onChange={(e) => setNewSession({ ...newSession, partner: e.target.value })}
                  placeholder="Enter partner's name"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={newSession.date}
                    onChange={(e) => setNewSession({ ...newSession, date: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Time</Label>
                  <Input
                    id="time"
                    type="time"
                    value={newSession.time}
                    onChange={(e) => setNewSession({ ...newSession, time: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Duration (minutes)</Label>
                <Input
                  id="duration"
                  type="number"
                  value={newSession.duration}
                  onChange={(e) => setNewSession({ ...newSession, duration: e.target.value })}
                  min="30"
                  max="240"
                  step="30"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="topic">Topic</Label>
                <Input
                  id="topic"
                  value={newSession.topic}
                  onChange={(e) => setNewSession({ ...newSession, topic: e.target.value })}
                  placeholder="e.g., Sorting Algorithms"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  value={newSession.description}
                  onChange={(e) => setNewSession({ ...newSession, description: e.target.value })}
                  placeholder="Describe what you'll be studying"
                />
              </div>
              <Button onClick={handleCreateSession} className="w-full">
                Schedule Session
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Sessions</CardTitle>
          <CardDescription>Your scheduled study sessions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingSessions.map((session) => (
              <Card key={session.id}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{session.title}</span>
                    <Badge variant={session.status === 'confirmed' ? 'default' : 'secondary'}>
                      {session.status}
                    </Badge>
                  </CardTitle>
                  <CardDescription>With {session.partner}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(session.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>{session.time} ({session.duration} minutes)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BookOpen className="h-4 w-4" />
                    <span>{session.topic}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{session.description}</p>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">
                      Edit
                    </Button>
                    <Button variant="destructive" className="flex-1">
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Schedule; 