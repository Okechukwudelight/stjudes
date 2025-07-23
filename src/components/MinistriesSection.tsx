import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Music, Users, Heart, Baby, Briefcase, ArrowRight } from 'lucide-react';
import youthImage from '@/assets/youth-fellowship.jpg';

const MinistriesSection = () => {
  const ministries = [
    {
      icon: Music,
      title: "Choir Ministry",
      description: "Join our voices in praise through traditional hymns and contemporary worship songs. We rehearse on Thursday evenings and lead worship every Sunday.",
      leader: "Mr. Adebayo Oyejide",
      contact: "choir@stjudesomole.org"
    },
    {
      icon: Users,
      title: "Youth Fellowship",
      description: "Dynamic ministry for teenagers and young adults featuring Bible study, fun activities, leadership development, and community service projects.",
      leader: "Bro. Niyi",
      contact: "youth@stjudesomole.org"
    },
    {
      icon: Heart,
      title: "Women's Guild",
      description: "Empowering women through Bible study, fellowship, mentorship, and community outreach. Monthly meetings with special events throughout the year.",
      leader: "Mrs. Sarah Johnson",
      contact: "womens@stjudesomole.org"
    },
    {
      icon: Briefcase,
      title: "Men's Fellowship",
      description: "Building strong Christian men through prayer, Bible study, and brotherhood. Focused on spiritual growth, family leadership, and community impact.",
      leader: "Mr. David Adebayo",
      contact: "mens@stjudesomole.org"
    },
    {
      icon: Baby,
      title: "Children's Ministry",
      description: "Nurturing faith in our youngest members through age-appropriate Bible lessons, crafts, games, and special children's church programs.",
      leader: "Bro. Charles",
      contact: "children@stjudesomole.org"
    },
    {
      icon: Heart,
      title: "Prayer Ministry",
      description: "Intercession and prayer support for our church family and community. Prayer chains, healing services, and spiritual warfare prayer teams.",
      leader: "Bro. Idahosa Osamhanze",
      contact: "prayer@stjudesomole.org"
    }
  ];

  return (
    <section id="ministries" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our <span className="text-accent">Ministries</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover opportunities to serve, grow, and connect in meaningful ministry
          </p>
        </div>

        {/* Featured Ministry Spotlight */}
        <div className="mb-16">
          <Card className="overflow-hidden shadow-xl">
            <div className="grid lg:grid-cols-2">
              <div className="relative">
                <img
                  src={youthImage}
                  alt="Youth Fellowship at St Jude's"
                  className="w-full h-[400px] lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent"></div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-8 w-8 text-accent" />
                  <span className="text-sm font-semibold text-accent uppercase tracking-wider">Featured Ministry</span>
                </div>
                <h3 className="text-3xl font-bold text-primary mb-4">Youth Fellowship</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our vibrant youth ministry is making a lasting impact in young lives. Through weekly gatherings, 
                  outdoor adventures, mission trips, and leadership development, we're raising up the next generation 
                  of Christian leaders.
                </p>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-fit group">
                  Join Youth Fellowship
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Ministries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <ministry.icon className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <CardTitle className="text-xl text-primary">{ministry.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">{ministry.description}</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-semibold text-primary">Leader: </span>
                    <span className="text-muted-foreground">{ministry.leader}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-primary">Contact: </span>
                    <a href={`mailto:${ministry.contact}`} className="text-accent hover:underline">
                      {ministry.contact}
                    </a>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-secondary p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">Ready to Get Involved?</h3>
            <p className="text-muted-foreground mb-6">
              Every ministry needs dedicated volunteers. Whether you're looking to serve, lead, or simply explore 
              your calling, there's a place for you in our church family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Volunteer Today
              </Button>
              <Button variant="outline">
                Contact Ministry Leaders
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinistriesSection;