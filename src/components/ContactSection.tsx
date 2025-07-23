import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      info: "No. 5 Ademola Ajasa Street",
      details: "Omole Phase 1, Ikeja, Lagos"
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+2348035063704",
      details: "Mon - Fri: 9:00 AM - 5:00 PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "stjudesanglicanomole1@yahoo.com",
      details: "We'll respond within 24 hours"
    },
    {
      icon: Clock,
      title: "Service Times",
      info: "Sundays: 7:00 AM & 10:00 AM",
      details: "Bible Study: Sun 9:00 AM"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get in <span className="text-accent">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Reach out with questions, prayer requests, or to learn more about our church family.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">Contact Information</h3>
            <div className="grid gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <item.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">{item.title}</h4>
                        <p className="text-foreground font-medium">{item.info}</p>
                        <p className="text-sm text-muted-foreground">{item.details}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Find Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden w-full max-w-full">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d126818.91178645128!2d3.2750012559562003!3d6.635620998710863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x103b93eb6e385d27%3A0xae56270190c818a9!2sNo%205%20Ademola%20Ajasa%20St%2C%20Omole%20Phase%201%2C%20Ikeja%20101233%2C%20Lagos!3m2!1d6.635627899999999!2d3.3574031!5e0!3m2!1sen!2sng!4v1753281128424!5m2!1sen!2sng" 
                    width="100%" 
                    height="100%" 
                    style={{border:0, maxWidth: '100%'}} 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full max-w-full"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-foreground">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="What would you like to discuss?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="mt-1 min-h-[120px]"
                      placeholder="Share your thoughts, prayer requests, or questions..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground group">
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-primary mb-4">Quick Actions</h4>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start">
                  Request Prayer
                </Button>
                <Button variant="outline" className="justify-start">
                  Schedule Visit
                </Button>
                <Button variant="outline" className="justify-start">
                  Join Ministry
                </Button>
                <Button variant="outline" className="justify-start">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;