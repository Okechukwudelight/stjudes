import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Users, Download } from 'lucide-react';

const ProgramsSection = () => {
  const services = [
    {
      title: "Holy Communion Service",
      time: "7:00 AM & 10:00 AM",
      day: "Every Sunday",
      description: "Traditional Anglican service with Holy Communion",
      audience: "Families & newcomers"
    },
    {
      title: "Bible Study",
      time: "9:00 AM", 
      day: "Every Sunday",
      description: "Biblical teaching and spiritual growth for all",
      audience: "Families & newcomers"
    }
  ];

  const weeklyPrograms = [
    {
      title: "Bible Study",
      time: "6:00 PM",
      day: "Tuesdays",
      description: "Deep dive into Scripture with discussion and prayer"
    },
    {
      title: "Prayer Meeting",
      time: "6:00 PM",
      day: "Wednesdays",
      description: "Community prayer time for church and personal needs"
    },
    {
      title: "Youth Fellowship",
      time: "5:00 PM",
      day: "Saturdays",
      description: "Fun, faith-building activities for teenagers"
    },
    {
      title: "Women's Guild",
      time: "10:00 AM",
      day: "First Saturday",
      description: "Fellowship, Bible study, and community service projects"
    }
  ];

  const specialEvents = [
    "Easter Celebration",
    "Harvest Festival", 
    "Christmas Carol Service",
    "Confirmation Classes",
    "Marriage Enrichment Retreats",
    "Community Outreach Programs"
  ];

  return (
    <section id="programs" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Programs & <span className="text-accent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us for worship, learning, and fellowship throughout the week
          </p>
        </div>

        {/* Sunday Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Sunday Services</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-2">
                    <Clock className="h-5 w-5 text-accent" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-foreground">
                      <Calendar className="h-4 w-4 text-accent" />
                      <span className="font-semibold">{service.day} at {service.time}</span>
                    </div>
                    <p className="text-muted-foreground">{service.description}</p>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <Users className="h-4 w-4" />
                      <span>{service.audience}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Weekly Programs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Weekly Programs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weeklyPrograms.map((program, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-semibold text-primary mb-2">{program.title}</h4>
                  <div className="text-accent font-semibold mb-1">{program.day}</div>
                  <div className="text-sm text-muted-foreground mb-3">{program.time}</div>
                  <p className="text-sm text-muted-foreground">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Special Events */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Special Events & Programs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {specialEvents.map((event, index) => (
              <div key={index} className="bg-card p-4 rounded-lg border border-border hover:border-accent transition-colors duration-300">
                <div className="text-center text-foreground font-medium">{event}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Bulletin */}
        <div className="text-center">
          <Card className="max-w-md mx-auto shadow-lg">
            <CardContent className="p-6">
              <Download className="h-12 w-12 text-accent mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-primary mb-2">Weekly Bulletin</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Download our weekly bulletin for service order, announcements, and upcoming events
              </p>
              <Button className="bg-primary hover:bg-primary-dark text-primary-foreground">
                Download This Week's Bulletin
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;