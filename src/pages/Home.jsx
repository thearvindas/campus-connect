import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from '@/context/AuthContext';
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from 'react-router-dom';
import { 
  UserPlus, 
  BookOpen, 
  Calendar, 
  MessageSquare, 
  Settings,
  Users,
  GraduationCap,
  ArrowRight
} from 'lucide-react';

const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Mock data for profile completion
  const profileCompletion = {
    total: 100,
    completed: 75,
    items: [
      { name: 'Basic Info', completed: true },
      { name: 'Skills', completed: true },
      { name: 'Interests', completed: true },
      { name: 'Classes', completed: false },
      { name: 'Study Preferences', completed: false }
    ]
  };

  // Mock data for recent activity
  const recentActivity = [
    {
      id: 1,
      type: 'connection',
      message: 'Sarah Chen accepted your connection request',
      time: '2 hours ago'
    },
    {
      id: 2,
      type: 'study',
      message: 'Study session scheduled with Michael Brown',
      time: '5 hours ago'
    },
    {
      id: 3,
      type: 'message',
      message: 'New message from Alex Wilson',
      time: '1 day ago'
    }
  ];

  // Mock data for suggested partners
  const suggestedPartners = [
    {
      id: 1,
      name: 'Sarah Chen',
      faculty: 'Schulich School of Engineering',
      major: 'Software Engineering',
      skills: ['React', 'Node.js', 'Python'],
      interests: ['Web Development', 'AI/ML'],
      classes: ['CPSC 559', 'CPSC 581'],
      matchScore: 95
    },
    {
      id: 2,
      name: 'Michael Brown',
      faculty: 'Schulich School of Engineering',
      major: 'Computer Science',
      skills: ['Java', 'Python', 'Data Structures'],
      interests: ['Study Groups', 'Project Collaboration'],
      classes: ['CPSC 559', 'CPSC 581'],
      matchScore: 85
    }
  ];

  const quickActions = [
    { icon: <UserPlus className="h-5 w-5" />, label: 'Find Partners', path: '/find-partners' },
    { icon: <BookOpen className="h-5 w-5" />, label: 'Study Groups', path: '/study-groups' },
    { icon: <Calendar className="h-5 w-5" />, label: 'Schedule Session', path: '/schedule' }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Welcome back, {user?.name || 'Student'}!
          </h1>
          <p className="text-muted-foreground mt-2">Here's what's happening with your study network</p>
        </div>
        <Button onClick={() => navigate('/profile/edit')} className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
          Edit Profile
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Profile Completion</CardTitle>
            <GraduationCap className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{profileCompletion.completed}%</div>
            <Progress value={profileCompletion.completed} className="mt-2" />
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Connections</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 this week</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
            <UserPlus className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">New this week</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-gradient-to-br from-background to-background/50">
          <CardHeader>
            <CardTitle className="text-xl">Quick Actions</CardTitle>
            <CardDescription>Common tasks and features</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {quickActions.map((action) => (
                <Button
                  key={action.label}
                  variant="outline"
                  className="h-auto py-4 flex flex-col items-center gap-2 hover:bg-primary/5 transition-colors"
                  onClick={() => navigate(action.path)}
                >
                  {action.icon}
                  <span className="text-sm">{action.label}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-background to-background/50">
          <CardHeader>
            <CardTitle className="text-xl">Recent Activity</CardTitle>
            <CardDescription>Your latest interactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="mt-1">
                    {activity.type === 'connection' && <UserPlus className="h-4 w-4 text-green-500" />}
                    {activity.type === 'study' && <BookOpen className="h-4 w-4 text-blue-500" />}
                    {activity.type === 'message' && <MessageSquare className="h-4 w-4 text-purple-500" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.message}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-br from-background to-background/50">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-xl">Suggested Partners</CardTitle>
              <CardDescription>Students who match your interests and classes</CardDescription>
            </div>
            <Button variant="ghost" onClick={() => navigate('/find-partners')} className="text-primary hover:text-primary/80">
              View All <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {suggestedPartners.map((partner) => (
              <Card key={partner.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{partner.name}</span>
                    <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {partner.matchScore}% Match
                    </Badge>
                  </CardTitle>
                  <CardDescription>{partner.faculty} - {partner.major}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {partner.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="bg-primary/5">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {partner.interests.map((interest) => (
                        <Badge key={interest} variant="outline" className="bg-primary/5">{interest}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Classes</h3>
                    <div className="flex flex-wrap gap-2">
                      {partner.classes.map((className) => (
                        <Badge key={className} variant="outline" className="bg-primary/5">{className}</Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                    Connect
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home; 