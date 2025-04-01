import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const Connections = () => {
  const { toast } = useToast();
  const [connections, setConnections] = useState([
    {
      id: 1,
      name: 'Sarah Chen',
      faculty: 'Schulich School of Engineering',
      major: 'Software Engineering',
      classes: ['ENSF 592', 'CPSC 559'],
      status: 'pending',
    },
    {
      id: 2,
      name: 'Michael Brown',
      faculty: 'Faculty of Science',
      major: 'Computer Science',
      classes: ['CPSC 559', 'SENG 513'],
      status: 'connected',
    },
    {
      id: 3,
      name: 'Emma Wilson',
      faculty: 'Haskayne School of Business',
      major: 'Business Technology Management',
      classes: ['MGST 655', 'BTMA 601'],
      status: 'pending',
    },
  ]);

  const handleAccept = (connectionId) => {
    setConnections(connections.map(conn => 
      conn.id === connectionId ? { ...conn, status: 'connected' } : conn
    ));
    toast({
      title: "Connection Accepted",
      description: "You are now connected!",
    });
  };

  const handleDecline = (connectionId) => {
    setConnections(connections.filter(conn => conn.id !== connectionId));
    toast({
      title: "Connection Declined",
      description: "The connection request has been declined.",
    });
  };

  const filterConnections = (status) => {
    if (status === 'all') return connections;
    return connections.filter(conn => conn.status === status);
  };

  const ConnectionCard = ({ connection }) => (
    <Card>
      <CardContent className="pt-6">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <h3 className="font-semibold">{connection.name}</h3>
            <p className="text-sm text-muted-foreground">{connection.faculty}</p>
            <p className="text-sm text-muted-foreground">{connection.major}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {connection.classes.map((className) => (
                <Badge key={className} variant="outline">{className}</Badge>
              ))}
            </div>
          </div>
          {connection.status === 'pending' && (
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                onClick={() => handleAccept(connection.id)}
              >
                Accept
              </Button>
              <Button 
                variant="destructive" 
                onClick={() => handleDecline(connection.id)}
              >
                Decline
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">My Connections</h1>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="connected">Connected</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4 mt-6">
          {filterConnections('all').map(connection => (
            <ConnectionCard key={connection.id} connection={connection} />
          ))}
        </TabsContent>

        <TabsContent value="connected" className="space-y-4 mt-6">
          {filterConnections('connected').map(connection => (
            <ConnectionCard key={connection.id} connection={connection} />
          ))}
        </TabsContent>

        <TabsContent value="pending" className="space-y-4 mt-6">
          {filterConnections('pending').map(connection => (
            <ConnectionCard key={connection.id} connection={connection} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Connections; 