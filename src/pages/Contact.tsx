import React, { useState } from "react";
import {
  Send,
  Mail,
  MapPin,
  Linkedin,
  MessageSquare,
  Clock,
  Coffee,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "himanshipuri07@gmail.com",
      href: "mailto:himanshipuri07@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Delhi, India",
      href: null,
    },
    {
      icon: Clock,
      label: "Response time",
      value: "Within 24 hours",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/himanshii7/",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/himanshi-puri-7a0aba223",
    },
  ];

  const projectTypes = [
    "VR Experience",
    "AR Application",
    "Mixed Reality",
    "Data Visualization",
    "Training Simulation",
    "Product Visualization",
    "Other",
  ];

  const availability = [
    { label: "Preferred hours", value: "10 AM – 6 PM IST" },
    { label: "Collaboration style", value: "Remote + in-person workshops" },
    { label: "Let’s connect over", value: "Chai, coffee, or Figma files" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = `Project Inquiry from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "Not provided"}
Project Type: ${formData.project || "Not specified"}

Message:
${formData.message}

---
This message was sent via himanshipuri.com contact form.
    `.trim();

    const mailtoLink = `mailto:himanshipuri07@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    toast({
      title: "Email client opened!",
      description:
        "Your default email application should now be open with the message pre-filled. Please send the email to complete your inquiry.",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      project: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-minimal-sage/40 via-background to-minimal-warm/30">
        <div className="absolute inset-0">
          <div className="absolute -top-24 left-1/3 h-56 w-56 rounded-full bg-white/50 blur-3xl" />
          <div className="absolute bottom-0 right-16 h-72 w-72 rounded-full bg-minimal-cool/35 blur-3xl" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-minimal-sage/40 bg-white/70 px-5 py-2 shadow-sm backdrop-blur">
              <MessageSquare className="h-4 w-4 text-minimal-sage-foreground" />
              <span className="text-sm font-medium text-foreground/80">
                Let’s create something immersive
              </span>
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-heading bg-gradient-to-r from-foreground via-minimal-warm-foreground to-minimal-sage-foreground bg-clip-text text-transparent">
              Get In Touch
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Share your idea, prototype, or research challenge. I’ll help craft
              immersive solutions that balance storytelling, interaction, and
              tangible impact.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm text-muted-foreground/80">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-2 shadow-sm ring-1 ring-border/50">
                <Clock className="h-4 w-4 text-minimal-sage-foreground" />
                Replies within 24 hours
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-2 shadow-sm ring-1 ring-border/50">
                <Coffee className="h-4 w-4 text-minimal-warm-foreground" />
                Based in Delhi · IST
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-6 h-64 w-64 rounded-full bg-minimal-warm/25 blur-3xl" />
          <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-minimal-cool/25 blur-3xl" />
        </div>
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <Card className="border-none rounded-3xl bg-white/80 backdrop-blur-xl shadow-xl shadow-black/5">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-foreground flex items-center">
                    <Send className="mr-3 h-5 w-5 text-minimal-warm-foreground" />
                    Share your project details
                  </CardTitle>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Tell me about the experience you’re envisioning and I’ll
                    follow up with ideas, timelines, and ways we can collaborate.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="rounded-xl border-border/60 bg-white/80 focus:border-minimal-warm focus:ring-2 focus:ring-minimal-warm/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</nLabel>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                          className="rounded-xl border-border/60 bg-white/80 focus:border-minimal-warm focus:ring-2 focus:ring-minimal-warm/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company or team name"
                        className="rounded-xl border-border/60 bg-white/80 focus:border-minimal-warm focus:ring-2 focus:ring-minimal-warm/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="project">Project Type</Label>
                      <select
                        id="project"
                        name="project"
                        value={formData.project}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-border/60 bg-white/80 px-3 py-2 text-sm transition-colors focus:border-minimal-warm focus:ring-2 focus:ring-minimal-warm/20"
                      >
                        <option value="">Select an option</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Share the goals, timeline, or challenges you’d like to solve."
                        rows={6}
                        required
                        className="rounded-xl border-border/60 bg-white/80 focus:border-minimal-warm focus:ring-2 focus:ring-minimal-warm/20 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-full bg-gradient-to-r from-minimal-warm to-minimal-sage text-foreground font-medium shadow-lg shadow-black/5 transition-all hover:from-minimal-warm/90 hover:to-minimal-sage/90 focus-visible:ring-minimal-warm/40"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                          Preparing email…
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                    <p className="text-center text-xs text-muted-foreground">
                      I typically respond within one business day.
                    </p>
                  </form>
                </CardContent>
              </Card>

              <Card className="border-none rounded-3xl bg-white/75 backdrop-blur-xl shadow-lg shadow-black/5">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    Working style
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {availability.map((item) => (
                      <li
                        key={item.label}
                        className="flex items-start justify-between gap-4 rounded-2xl border border-border/60 bg-white/80 px-4 py-3"
                      >
                        <span className="font-medium text-foreground">
                          {item.label}
                        </span>
                        <span className="text-right">
                          {item.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="border-none rounded-3xl bg-white/80 backdrop-blur-xl shadow-xl shadow-black/5">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    Direct contact
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Prefer a quick hello? Drop an email or reach out for an in-person conversation over chai.
                  </p>
                </CardHeader>
                <CardContent className="space-y-5">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    const content = (
                      <div className="flex items-center gap-4 rounded-2xl border border-border/50 bg-white/80 px-4 py-4 transition-all duration-200 hover:border-minimal-warm/50 hover:bg-white">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-minimal-sage/20 text-minimal-sage-foreground">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-medium text-foreground">
                            {info.label}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    );

                    return info.href ? (
                      <a key={info.label} href={info.href} className="block">
                        {content}
                      </a>
                    ) : (
                      <div key={info.label}>{content}</div>
                    );
                  })}
                </CardContent>
              </Card>

              <Card className="border-none rounded-3xl bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    Follow along
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Behind-the-scenes, prototypes, and daily sketches.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/60 bg-white/80 text-muted-foreground transition-all duration-200 hover:border-minimal-warm/50 hover:text-foreground hover:shadow-md"
                          aria-label={social.label}
                        >
                          <Icon className="h-5 w-5" />
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none rounded-3xl bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    Let’s collaborate on
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {projectTypes.map((type) => (
                    <span
                      key={type}
                      className="rounded-full bg-minimal-sage/20 px-3 py-1 text-xs font-medium text-foreground/80"
                    >
                      {type}
                    </span>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default Contact;