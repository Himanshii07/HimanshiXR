import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Users, FileText } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const MobileOverlay = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-lg md:hidden">
    <div className="text-center">
      <h2 className="text-2xl md:text-3xl text-red-700 font-heading text-foreground mb-4">
        Uh-oh!
      </h2>
      <p className="text-sm text-muted-foreground max-w-2xl mx-auto font-light">
        Open this website on a bigger screen!
      </p>
    </div>
  </div>
);

const Ethnography = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-rose-50">
      {/* Mobile-only overlay */}
      <MobileOverlay />
      <Navigation />

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-50 to-rose-100/40" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <Button
              asChild
              variant="ghost"
              className="mb-8 text-muted-foreground hover:text-foreground"
            >
              <Link to="/projects">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ethnography: Tiffin Services at MIT College
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              This research explores the tiffin scene at MIT College, focusing
              on student preferences, meal quality, and the performance of
              current services, to identify what defines a great tiffin
              experience on campus.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="outline" className="text-sm">
                <Calendar className="w-3 h-3 mr-1" />
                2025
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Users className="w-3 h-3 mr-1" />
                Team of 3
              </Badge>
              <Badge variant="outline" className="text-sm">
                <FileText className="w-3 h-3 mr-1" />
                Duration: 2 weeks
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid gap-8 max-w-8xl">
          {/* the ask */}
          <section className="py-16 bg-blue-50">
            <div className="container mx-auto px-4">
              <div className="max-w-8xl mx-auto text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">The ask</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Before adding any interactions, we carefully planned and
                  discussed each step to ensure a smooth and intuitive user
                  experience in VR.
                </p>
                <img
                  src="/Photos/Ethnography/3.jpg"
                  alt="Checklist for interaction planning"
                  className="rounded-xl shadow-lg w-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Research Timeline */}
          <section className="py-16 bg-white-100">
            <div className="container mx-auto px-4">
              <div className="max-w-8xl mx-auto text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">Research Timeline</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Before adding any interactions, we carefully planned and
                  discussed each step to ensure a smooth and intuitive user
                  experience in VR.
                </p>
                <img
                  src="/Photos/Ethnography/1.jpg"
                  alt="Checklist for interaction planning"
                  className="rounded-xl shadow-lg w-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Stakeholders */}
          <section className="py-16 bg-blue-50">
            <div className="container mx-auto px-4">
              <div className="max-w-8xl mx-auto text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">Stakeholders</h2>
                <p className="text-lg text-muted-foreground mb-6"></p>
                <img
                  src="/Photos/Ethnography/4.jpg"
                  alt="Checklist for interaction planning"
                  className="rounded-xl shadow-lg w-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Interviews */}
          <section className="py-16 bg-white-100">
            <div className="container mx-auto px-4">
              <div className="max-w-8xl mx-auto text-center mb-10">
                <h2 className="text-3xl font-bold mb-4"></h2>
                <p className="text-lg text-muted-foreground mb-6"></p>
                <img
                  src="/Photos/Ethnography/6.jpg"
                  alt="Checklist for interaction planning"
                  className="rounded-xl shadow-lg w-full object-cover"
                />
              </div>
            </div>
          </section>


          {/* Key Insights Map Section */}
          <div className="mb-16 rounded-3xl shadow bg-gray-50 p-8">
            <h2 className="text-2xl font-bold mb-4">Key Insights Map</h2>
            <div className="grid md:grid-cols-5 gap-4 mb-6">
              <div className="bg-orange-500 text-white rounded-xl p-6 font-bold flex flex-col items-center">
                  <img src="/Photos/Ethnography/insight-icon1.png" alt="icon1" className="w-12 h-12" />
                Affordability & Value <span className="text-xs mt-2">₹50-80 per meal is the sweet spot</span>
                </div>
              <div className="bg-white text-gray-900 rounded-xl p-6 font-bold flex flex-col items-center">   
                <img src="/Photos/Ethnography/insight-icon1.png" alt="icon1" className="w-12 h-12" />
              Quality & Hygiene 
                <span className="text-xs mt-2 text-gray-500">Inconsistency across providers</span></div>
              <div className="bg-black text-white rounded-xl p-6 font-bold flex flex-col items-center">Variety & Customization 
                <span className="text-xs mt-2 text-gray-300">Students want options beyond routine</span></div>
              <div className="bg-white text-gray-900 rounded-xl p-6 font-bold flex flex-col items-center">Logistics & Timeliness 
                <span className="text-xs mt-2 text-gray-500">Irregular delivery times, Poor communication</span></div>
              <div className="bg-orange-500 text-white rounded-xl p-6 font-bold flex flex-col items-center">Trust & Transparency 
                <span className="text-xs mt-2">Payment + Credibility issues</span></div>
            </div>
            <div className="flex justify-center gap-4 mb-4">
              <img src="/Photos/Ethnography/insight-icon1.png" alt="icon1" className="w-12 h-12" />
              <img src="/Photos/Ethnography/insight-icon2.png" alt="icon2" className="w-12 h-12" />
              <img src="/Photos/Ethnography/insight-icon3.png" alt="icon3" className="w-12 h-12" />
              <img src="/Photos/Ethnography/insight-icon4.png" alt="icon4" className="w-12 h-12" />
            </div>
            <div className="text-center text-lg italic text-gray-700">“Value and trust outweigh variety and timeliness in students’ food preferences.”</div>
          </div>
















          {/* Pain Points Section - Casual Style */}
          <div className="bg-pink-50 rounded-xl shadow p-8 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Pain Points</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-red-100 rounded-lg p-4">
                  <h4 className="font-bold text-lg mb-2">Students POV</h4>
                  <ul className="list-disc ml-4 text-sm mb-2">
                    <li>Limited options & info</li>
                    <li>Inconsistent quality</li>
                    <li>Lack of customization</li>
                    <li>Commitment issues</li>
                    <li>No central platform</li>
                    <li>Weird timings</li>
                    <li>Communication gaps</li>
                    <li>Payment trust</li>
                    <li>Taste differences</li>
                    <li>Affordability</li>
                  </ul>
                </div>
                <div className="bg-blue-100 rounded-lg p-4">
                  <h4 className="font-bold text-lg mb-2">
                    Tiffin Provider POV
                  </h4>
                  <ul className="list-disc ml-4 text-sm mb-2">
                    <li>Getting noticed</li>
                    <li>Marketing costs</li>
                    <li>Keeping quality up</li>
                    <li>Customer loyalty</li>
                    <li>Delivery drama</li>
                    <li>Knowing what students want</li>
                    <li>Payment hassles</li>
                    <li>Building trust</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 text-left">
                <p className="font-semibold">Opportunity:</p>
                <p className="text-sm mb-2">
                  A student-friendly app could make ordering easier, let you
                  tweak your meal plan, and give feedback instantly.
                </p>
                <p className="font-semibold">Collaboration:</p>
                <p className="text-sm">
                  Better chats between students and providers = less meal
                  stress, more happy bellies!
                </p>
              </div>
            </div>
          </div>

          {/* Analysis of Tiffin Providers */}
          <div className="bg-card rounded-xl shadow p-6 flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">
                Analysis of Tiffin Providers
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Compared providers on meal quality, punctuality, variety, and
                customer service.
              </p>
              {/* Add info/description here */}
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              {/* Diagram/Image placeholder */}
              <div className="aspect-video w-full max-w-xs bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                Add provider analysis diagram/image
              </div>
            </div>
          </div>

          {/* Key Insights */}
          <div className="bg-card rounded-xl shadow p-6 flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">Key Insights</h2>
              <ul className="text-sm text-muted-foreground list-disc ml-4 mb-4">
                <li>Students value taste, hygiene, and timely delivery.</li>
                <li>Flexibility in meal plans is highly desired.</li>
                <li>
                  Word-of-mouth is the main channel for provider discovery.
                </li>
              </ul>
              {/* Add info/description here */}
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              {/* Diagram/Image placeholder */}
              <div className="aspect-video w-full max-w-xs bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                Add insights diagram/image
              </div>
            </div>
          </div>

          {/* Pain Points */}
          <div className="bg-card rounded-xl shadow p-6 flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">Pain Points</h2>
              <ul className="text-sm text-muted-foreground list-disc ml-4 mb-4">
                <li>Inconsistent meal quality and quantity.</li>
                <li>Lack of transparency in pricing and menu.</li>
                <li>Poor communication during delays or issues.</li>
              </ul>
              {/* Add info/description here */}
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              {/* Diagram/Image placeholder */}
              <div className="aspect-video w-full max-w-xs bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                Add pain points diagram/image
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-card rounded-xl shadow p-6 flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">Recommendations</h2>
              <ul className="text-sm text-muted-foreground list-disc ml-4 mb-4">
                <li>Standardize meal quality and portion sizes.</li>
                <li>Improve communication and feedback channels.</li>
                <li>Offer customizable meal plans and transparent pricing.</li>
              </ul>
              {/* Add info/description here */}
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              {/* Diagram/Image placeholder */}
              <div className="aspect-video w-full max-w-xs bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                Add recommendations diagram/image
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Research Sections - New UI */}
      <section className="py-24 bg-gradient-to-r from-sky-50 via-white to-rose-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Research</h2>
          {/* 1. Interviews and Surveys */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-center mb-2">
              1. Interviews and Surveys
            </h3>
            <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
              We interviewed students from different departments and living situations to capture their food habits, challenges, and opinions on mess food, tiffin services, and outside options.
            </p>
            <div className="grid md:grid-cols-3 gap-8 justify-center max-w-4xl mx-auto ">
              {/* Example cards, add more as needed */}
              <div className="bg-blue-50 rounded-xl shadow p-6 flex flex-col items-start">
                <div className="font-bold text-lg mb-1">Karnika</div>
                <div className="text-xs text-muted-foreground mb-2">
                  Second-Year Student (Film dept.)
                </div>
                <div className="text-sm text-muted-foreground">
                  "There was a news about food poisoning from the hostel mess last year. After that, the food quality dropped badly, and many of us started shifting to tiffin services."
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl shadow p-6 flex flex-col items-start">
                <div className="font-bold text-lg mb-1">Vanshika</div>
                <div className="text-xs text-muted-foreground mb-2">PG Student (Design Dept.) </div>
                <div className="text-sm text-muted-foreground">
                  "I stay in a PG. Our mess is manageable, but I still prefer Magar Tiffin sometimes—it feels more homely than the PG food. "
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl shadow p-6 flex flex-col items-start">
                <div className="font-bold text-lg mb-1">Akshita</div>
                <div className="text-xs text-muted-foreground mb-2">
                 Hostel Student (Design Dept.)
                </div>
                <div className="text-sm text-muted-foreground">
                  "Mess food is always too oily, and there's no non-veg at all. Sometimes we feel FOMO when our friends go out and eat good food while we’re stuck with the same thalis" 
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl shadow p-6 flex flex-col items-start">
                <div className="font-bold text-lg mb-1">Mani</div>
                <div className="text-xs text-muted-foreground mb-2">Hostel Student (Design Dept.)</div>
                <div className="text-sm text-muted-foreground">
                  "We don’t really have a choice—mess food is compulsory for us. Sometimes it’s okay, but we still crave variety and outside options."
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl shadow p-6 flex flex-col items-start">
                <div className="font-bold text-lg mb-1">Pratham</div>
                <div className="text-xs text-muted-foreground mb-2">Rental Apartment (Architecture Dept.)</div>
                <div className="text-sm text-muted-foreground">
                  "I used to manage with a local cook at my rented flat, but it wasn’t consistent. Some days she wouldn’t come, and I had to depend on outside food. That’s when I started tiffin service—it’s more reliable."
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl shadow p-6 flex flex-col items-start">
                <div className="font-bold text-lg mb-1">Karthik</div>
                <div className="text-xs text-muted-foreground mb-2">Pg Student (Engineering Dept.) </div>
                <div className="text-sm text-muted-foreground">
                 "We barely get 45 minutes to eat, so the college canteen is my go-to. The food is delicious and affordable. I've never used a tiffin service, it feels unnecessary because our canteen covers everything."
                </div>
              </div>
            </div>
          </div>

          {/* 2. Secondary Research */}
          <div className="mb-16 max-w-3xl mx-auto ">
            <h3 className="text-xl font-semibold text-center mb-2">
              2. Secondary Research
            </h3> <div className="text-sm text-muted-foreground">
                 <h2 className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">   </h2>
                </div>

            <div className="flex flex-col md:flex-row gap-8 justify-center mb-8">
              <div className="bg-blue-50 rounded-3xl shadow p-8 flex-1">
                <div className="font-bold mb-4">In the textbooks</div>
                <ul className="list-disc ml-4 text-sm text-muted-foreground">
                  <li>
                    Understanding what is taught to 8-10 yr old's in school
                  </li>
                  <li>How is this not enough for them</li>
                  <li>
                    How this kit can seamlessly integrate with the curriculum
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-3xl shadow p-8 flex-1">
                <div className="font-bold mb-4">Market Study</div>
                <ul className="list-disc ml-4 text-sm text-muted-foreground">
                  <li>Studying pre-existing products</li>
                  <li>Building a clear USP</li>
                  <li>
                    Understanding what they are lacking and adding it to this kit
                  </li>
                </ul>
              </div>
            </div>
            {/* Insights container */}
            <div className="bg-blue-100 rounded-3xl shadow p-8 flex flex-col items-center">
              <div className="font-bold text-center mb-6 text-gray-700">
                INSIGHTS
              </div>
              <div className="grid md:grid-cols-2 gap-4 w-full max-w-2xl">
                <div className="bg-white rounded-xl px-6 py-4 shadow text-center text-gray-700">
                  Should be fun and entertaining—having a character could be
                  helpful
                </div>
                <div className="bg-white rounded-xl px-6 py-4 shadow text-center text-gray-700">
                  Making it a DIY kit and using discard school supply material
                </div>
                <div className="bg-white rounded-xl px-6 py-4 shadow text-center text-gray-700">
                  Journaling the growth of the plant can be helpful to retain
                  interest
                </div>
                <div className="bg-white rounded-xl px-6 py-4 shadow text-center text-gray-700">
                  Bringing in the concept of eating what you grow should be
                  incorporated
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes & Impact - moved from ShootingRange */}
      <section className="py-24 bg-gradient-to-r from-sky-50 via-white to-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">
                Analysis
              </h2>
              <p className="text-lg text-muted-foreground">
                Measuring effectiveness and user satisfaction from our
                ethnography research
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 shadow text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">55%</div>
                <div className="text-lg font-semibold mb-2">
                  Students of MIT Design Institute takes tiffin service
                </div>
                <p className="text-sm text-muted-foreground">
                  Rapid fieldwork and analysis
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">42%</div>
                <div className="text-lg font-semibold mb-2">
                  students uses tiffin services daily
                </div>
                <p className="text-sm text-muted-foreground">
                  Collaborative research and interviews
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  Rs. 50 - 80
                </div>
                <div className="text-lg font-semibold mb-2">On Campus Life</div>
                <p className="text-sm text-muted-foreground">
                  Amount for single tiffin meal{" "}
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow">
                <h3 className="text-xl font-bold text-blue-400 mb-2">
                  Opportunity for Improvement
                </h3>
                <p className="text-muted-foreground text-sm">
                  A student-focused app could streamline ordering, customize
                  meal plans, and gather real-time feedback to improve service
                  satisfaction.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow">
                <h3 className="text-xl font-bold text-blue-400 mb-2">
                  Collaboration Potential{" "}
                </h3>
                <p className="text-muted-foreground text-sm">
                  Strengthen communication between students and the tiffin
                  provider to address specific needs (diet preferences, delivery
                  timings) and reduce meal-related hassles for students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Custom Research Sections - Visual Ethnography */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Explore Section */}
          <div className="mb-16 rounded-3xl shadow bg-gray-50 p-8">
            <h2 className="text-3xl font-bold text-center mb-4">Explore</h2>
            <div className="relative flex flex-col items-center justify-center">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] h-[350px] pointer-events-none">
                {/* Arc of keywords */}
                <div className="absolute w-full h-full flex flex-wrap justify-center items-center text-sm text-gray-500" style={{top:0}}>
                  <span className="absolute left-0">Expectations</span>
                  <span className="absolute right-0">Challenges</span>
                  <span className="absolute top-0 left-1/4">Experience</span>
                  <span className="absolute top-0 right-1/4">Meal Preference</span>
                  <span className="absolute bottom-0 left-1/4">Convenience</span>
                  <span className="absolute bottom-0 right-1/4">Routine</span>
                  <span className="absolute top-1/2 left-0">Improve</span>
                  <span className="absolute top-1/2 right-0">Hygiene</span>
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2">Cost</span>
                  <span className="absolute top-1/3 left-1/3">Quality</span>
                  <span className="absolute top-2/3 right-1/3">Taste</span>
                  <span className="absolute bottom-1/3 left-1/3">Nutritional Value</span>
                  <span className="absolute bottom-2/3 right-1/3">Variety</span>
                  <span className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2">Time</span>
                </div>
              </div>
              <div className="relative z-10 flex flex-col items-center justify-center">
                <img src="/Photos/Ethnography/explore-illustration.png" alt="Explore illustration" className="w-72 h-72 object-contain mb-2" />
              </div>
            </div>
          </div>

          {/* Stakeholders Section */}
          <div className="mb-16 rounded-3xl shadow bg-white p-8">
            <h2 className="text-2xl font-bold mb-4">Stakeholders</h2>
            <div className="relative flex flex-col items-center justify-center">
              <img src="/Photos/Ethnography/stakeholders-illustration.png" alt="Stakeholders illustration" className="w-full max-w-xl object-contain mb-4" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700 mt-4">
                <div className="bg-gray-100 rounded-lg p-3">Working Professionals</div>
                <div className="bg-gray-100 rounded-lg p-3">Bachelors</div>
                <div className="bg-gray-100 rounded-lg p-3">Patients & Convalescents</div>
                <div className="bg-gray-100 rounded-lg p-3">Travelers</div>
                <div className="bg-gray-100 rounded-lg p-3">Event Attendees</div>
                <div className="bg-gray-100 rounded-lg p-3">Senior Citizens</div>
                <div className="bg-blue-100 rounded-lg p-3">Hostel & PG Residents</div>
                <div className="bg-blue-100 rounded-lg p-3">Students</div>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-16 rounded-3xl shadow bg-white p-8">
            <h2 className="text-2xl font-bold mb-4">Timeline</h2>
            <img src="/Photos/Ethnography/timeline-illustration.png" alt="Timeline illustration" className="w-full max-w-2xl mx-auto object-contain mb-4" />
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-gray-700">
              <div className="bg-gray-100 rounded-lg p-3">Week 1: Topic Selection, Defining research purpose and stakeholders</div>
              <div className="bg-gray-100 rounded-lg p-3">Week 2: Reviewing findings, Categorizing observations, Editing video & documentation</div>
              <div className="bg-gray-100 rounded-lg p-3">Presentation</div>
            </div>
          </div>

          {/* Key Insights Map Section */}
          <div className="mb-16 rounded-3xl shadow bg-gray-50 p-8">
            <h2 className="text-2xl font-bold mb-4">Key Insights Map</h2>
            <div className="grid md:grid-cols-5 gap-4 mb-6">
              <div className="bg-orange-500 text-white rounded-xl p-6 font-bold flex flex-col items-center">Affordability & Value <span className="text-xs mt-2">₹50-80 per meal is the sweet spot</span></div>
              <div className="bg-white text-gray-900 rounded-xl p-6 font-bold flex flex-col items-center">Quality & Hygiene <span className="text-xs mt-2 text-gray-500">Inconsistency across providers</span></div>
              <div className="bg-black text-white rounded-xl p-6 font-bold flex flex-col items-center">Variety & Customization <span className="text-xs mt-2 text-gray-300">Students want options beyond routine</span></div>
              <div className="bg-white text-gray-900 rounded-xl p-6 font-bold flex flex-col items-center">Logistics & Timeliness <span className="text-xs mt-2 text-gray-500">Irregular delivery times, Poor communication</span></div>
              <div className="bg-orange-500 text-white rounded-xl p-6 font-bold flex flex-col items-center">Trust & Transparency <span className="text-xs mt-2">Payment + Credibility issues</span></div>
            </div>
            <div className="flex justify-center gap-4 mb-4">
              <img src="/Photos/Ethnography/insight-icon1.png" alt="icon1" className="w-12 h-12" />
              <img src="/Photos/Ethnography/insight-icon2.png" alt="icon2" className="w-12 h-12" />
              <img src="/Photos/Ethnography/insight-icon3.png" alt="icon3" className="w-12 h-12" />
              <img src="/Photos/Ethnography/insight-icon4.png" alt="icon4" className="w-12 h-12" />
            </div>
            <div className="text-center text-lg italic text-gray-700">“Value and trust outweigh variety and timeliness in students’ food preferences.”</div>
          </div>

          {/* Pain Points Section */}
          <div className="mb-16 rounded-3xl shadow bg-white p-8 flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-white rounded-xl p-8 shadow">
              <h3 className="text-xl font-bold mb-4">Students</h3>
              <ul className="list-disc ml-4 text-sm text-gray-700">
                <li>Affordability</li>
                <li>Limited options</li>
                <li>Inconsistent quality</li>
                <li>Lack of customization</li>
                <li>Subscription and commitment issues</li>
                <li>Lack of a centralized platform</li>
                <li>Irregular timings</li>
                <li>Poor communication</li>
                <li>Payment options and trust</li>
                <li>Cultural and taste differences</li>
              </ul>
            </div>
            <div className="flex-1 bg-black rounded-xl p-8 shadow text-white">
              <h3 className="text-xl font-bold mb-4">Tiffin Providers</h3>
              <ul className="list-disc ml-4 text-sm">
                <li>Market visibility</li>
                <li>Marketing and promotion costs</li>
                <li>Maintaining consistent quality</li>
                <li>Customer retention</li>
                <li>Logistics and delivery challenges</li>
                <li>Understanding customer preferences</li>
                <li>Payment issues</li>
                <li>Building trust and credibility</li>
              </ul>
            </div>
          </div>

          {/* Opportunities Section */}
          <div className="mb-16 rounded-3xl shadow bg-orange-500 p-12 text-white text-center">
            <h2 className="text-2xl font-bold mb-6">A centralized platform that ensures</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="bg-black rounded-full px-6 py-2 font-semibold">Connection</div>
              <div className="bg-black rounded-full px-6 py-2 font-semibold">Feedback</div>
              <div className="bg-black rounded-full px-6 py-2 font-semibold">Flexibility</div>
              <div className="bg-black rounded-full px-6 py-2 font-semibold">Trust</div>
            </div>
            <div className="text-2xl font-bold mt-4">between students and providers.</div>
          </div>

          {/* Concept Section */}
          <div className="mb-16 rounded-3xl shadow bg-orange-500 p-12 text-white">
            <h2 className="text-xl font-bold mb-2">Concept</h2>
            <div className="mb-4 font-bold">Our Approach</div>
            <div className="mb-4">Introducing the MIT Tiffin finder app - <span className="font-bold">Desi Dabba</span><br />A one-stop solution for students to explore, review, and choose the best tiffin services nearby.<br />Discover home-like meals, compare options, and order with ease!</div>
            <div className="text-4xl font-bold mb-6">Explore.Customize.<br />Order <span className="inline-block align-middle"><img src="/Photos/Ethnography/refresh-icon.png" alt="refresh" className="inline w-6 h-6" /></span></div>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-8">
              <img src="/Photos/Ethnography/app-ui1.png" alt="App UI 1" className="w-64 rounded-xl shadow" />
              <img src="/Photos/Ethnography/app-ui2.png" alt="App UI 2" className="w-64 rounded-xl shadow" />
              <img src="/Photos/Ethnography/app-ui3.png" alt="App UI 3" className="w-64 rounded-xl shadow" />
            </div>
            <div className="flex flex-col md:flex-row gap-8 justify-center mb-8 text-white text-lg">
              <div className="flex-1 text-center">Explore local tiffin services with reviews, ratings, and clear insights on affordability, hygiene, and variety.</div>
              <div className="flex-1 text-center">Customize meals to dietary needs, place orders easily, and track deliveries with flexible payments.</div>
            </div>
            <div className="text-center text-xl italic mt-8">“Good food made simple: affordable, clean, on time, and trusted.”</div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <Button asChild size="lg" variant="outline">
            <Link to="/projects">Back to All Projects</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ethnography;
