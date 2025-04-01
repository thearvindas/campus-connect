import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from '@/context/AuthContext';

const Home = () => {
  const { user } = useAuth();

  const stats = [
    { label: 'Profile Completion', value: '80%' },
    { label: 'Active Connections', value: '12' },
    { label: 'Pending Requests', value: '3' },
  ];

  const recentActivity = [
    { type: 'connection', name: 'Sarah Chen', action: 'accepted your connection request', time: '2 hours ago' },
    { type: 'match', name: 'Alex Kim', action: 'was matched with you for CPSC 559', time: '5 hours ago' },
    { type: 'request', name: 'Jordan Lee', action: 'sent you a connection request', time: '1 day ago' },
  ];

  const suggestedPartners = [
    { name: 'Emma Wilson', major: 'Computer Science', commonClasses: ['CPSC 559', 'SENG 513'] },
    { name: 'Michael Brown', major: 'Software Engineering', commonClasses: ['ENSF 592'] },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Welcome back, {user?.name || 'Student'}</h1>
        <Button asChild>
          <Link to="/find-partners">Find Partners</Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest interactions and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div>
                    <p className="text-sm font-medium">{activity.name}</p>
                    <p className="text-sm text-muted-foreground">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Suggested Partners</CardTitle>
            <CardDescription>People you might want to connect with</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {suggestedPartners.map((partner, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{partner.name}</p>
                    <p className="text-sm text-muted-foreground">{partner.major}</p>
                    <p className="text-xs text-muted-foreground">
                      Common classes: {partner.commonClasses.join(', ')}
                    </p>
                  </div>
                  <Button variant="outline" size="sm">Connect</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home; 