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

      <section className="relative py-24  overflow-hidden">
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

      <section className="py-16 bg-gradient-to-r from-sky-50 via-white to-rose-50">
        <div className="container mx-auto px-4 grid gap-8 max-w-8xl">
          {/* the ask */}
          <section className="py-16 ">
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
          <section className="py-16 ">
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
          <section className="py-16 ">
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

          

          {/* Key Insights Map Section */}
          <div className="mb-16 rounded-3xl shadow bg-white p-8">
            <h2 className="text-3xl text-center font-bold mb-4">Research Methodology</h2>
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="bg-blue-50 text-black rounded-xl p-6 font-bold flex flex-col items-center">
                <img src="/Photos/Ethnography/3.png" alt="icon1" className="w-34 h-42 mb-2" />
               Quantitative Analysis
                <span className="text-xs mt-2">Numerical data and statistical methods to measure and evaluate patterns, relationships, and trends.</span>
              </div>
              <div className="bg-blue-50 text-gray-900 rounded-xl p-6 font-bold flex flex-col items-center">
                <img src="/Photos/Ethnography/4.png" alt="icon2" className="w-34 h-42 mb-2" />
                Qualitative Analysis
                <span className="text-xs mt-2 text-gray-500">Examining non-numerical data to understand concepts, opinions, or experiences by identifying patterns, themes, and meanings.</span>
              </div>
              <div className="bg-blue-50 text-gray-900 rounded-xl p-6 font-bold flex flex-col items-center">
                <img src="/Photos/Ethnography/2.png" alt="icon4" className="w-34 h-42 mb-2" />
               Participatory Method
                <span className="text-xs mt-2 text-gray-500">Involve stakeholders in decision-making to create inclusive and collaborative outcomes.</span>
              </div>
              <div className="bg-blue-50 text-black rounded-xl p-6 font-bold flex flex-col items-center">
                <img src="/Photos/Ethnography/5.png" alt="icon5" className="w-34 h-42 mb-2" />
               Observational Study
                <span className="text-xs mt-2">Watching and recording behaviors or outcomes without manipulating variables, to understand natural occurrences or correlations.</span>
              </div>
                <div className=" rounded-xl p-6 font-bold flex flex-col items-center">
                
              </div>
            </div>
            <div className="text-center text-lg italic text-gray-700">“Value and trust outweigh variety and timeliness in students’ food preferences.”</div>
          </div>



          {/* Research Sections - New UI */}
      <section className="py-24 bg-white">
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

          {/* 3D Pipeline Section - short, more images, no cards */}
      <section className="py-16 max-w-6xl mx-auto bg-white rounded-xl shadow p-2">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-2 gap-6">
          <div className="max-w-6xl mx-auto text-left mb-10">
            <h2 className="text-xl font-semibold text-left mb-2">Interview Questions </h2>
            <p className="text-left text-muted-foreground mb-8 max-w-3xl mx-auto">
              Here are some of the questions we asked during our interviews to understand student preferences and challenges regarding food options on campus.
            </p>
            <ul className="list-auto ml-2 font-bold text-left text-sm text-muted-foreground">
                  <li className="mb-4">
                    Where do you currently stay—hostel, PG, or rental apartment?
                  </li>
                  <li className="mb-4">What are your usual food options in a day (mess, tiffin, cook, canteen, or outside)? </li>
                  <li>
                    If you eat at the mess, what do you like or dislike about it?
                  </li>
                  <li className="mb-4">
                    Have you ever faced any issues with mess food (quality, hygiene, variety)?
                  </li>
                  <li className="mb-4">If you use a tiffin service, which one do you use and why did you choose it? </li>
                  <li className="mb-4">
                    How do you place your order and make payments (daily, monthly, online, offline)?
                  </li>
                  <li className="mb-4" >What do you usually do on weekends when mess/tiffin is unavailable?</li>
                  <li className="mb-4">What’s most important to you when choosing a food option—price, taste, health, or convenience?</li>
                  <li className="mb-4">Do you think cultural or native food options are available here in Loni?</li>
                </ul>
          </div>
           <img
              src="/Photos/Ethnography/10.png"
              alt="Modeling in Maya"
              className="rounded-lg shadow w-fit object-cover aspect-9/16 bg-blue-50 p-4"
            />
        </div>
      </section>

      {/* 3D Pipeline Section - short, more images, no cards */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-10">
            <h2 className="text-xl font-semibold text-center mb-2">2. Participatory Method</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
              Modeling, texturing, rigging, and environment building
            </p>
            <img
              src="/Photos/Ethnography/2 copy.jpg"
              alt="Modeling in Maya"
              className="rounded-lg shadow w-full object-cover aspect-16/9 bg-white p-10"
            />
          </div>
        </div>
      </section>

      



          {/* 2. Secondary Research */}
          <div className="mb-16 max-w-8xl mx-auto ">
            <h3 className="text-xl font-semibold text-center mb-2">
              3. Secondary Research
            </h3> 
            
            
            
            <div className="text-sm text-muted-foreground max-w-6xl mx-auto">
                 <h2 className="text-center text-muted-foreground mb-8 ">   </h2>
                </div>

            <div className="container items-center max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-2 gap-6 bg-white rounded-3xl p-8 shadow ">
              <div className="max-w-7xl mx-auto  text-xl text-left mb-10 p-4">
                <div className="font-bold mb-4">Tiffin Services Providers</div>
                <p className="text-left text-sm text-muted-foreground mb-8 max-w-3xl mx-auto">
              We also spoke to local tiffin service providers in and around Loni to understand their operations, challenges, and connection with students. Most providers shared that their demand spikes during exam season and after incidents of dissatisfaction with hostel mess food. Services like Magar Tiffin rely on WhatsApp groups for daily coordination, where students confirm orders 3–4 hours in advance and pay monthly. Providers highlighted challenges such as last-minute cancellations, delivery delays, and balancing affordability with quality. Despite these hurdles, they see students as their most loyal and consistent customer base, especially those staying in PGs or rental apartments.
            </p>
              </div>
              <div className=" rounded-3xl">
                <div className="font-bold mb-4">    
                  <img
              src="/Photos/Ethnography/9.png"
              alt="Modeling in Maya"
              className="rounded-lg w-full object-cover aspect-16/9 p-10"/></div>   
              </div>
            </div>
          </div>
        </div>


        {/* Interviews */}
          <section className="py-2 bg-white-100">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto text-center mb-10">
                <h2 className="text-3xl font-bold mb-4"></h2>
                <p className="text-lg text-muted-foreground mb-6"></p>
                <img
                  src="/Photos/Ethnography/8.jpg"
                  alt="Checklist for interaction planning"
                  className="rounded-xl shadow-lg w-full object-cover"
                />
              </div>
            </div>
          </section>
      </section>




      {/* Outcomes & Impact - moved from ShootingRange */}
      <section className="py-12  bg-blue-50 ">
        <div className="container max-w-6xl  mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-2xl font-bold mb-4 text-black">
                Key Insights
              </h2>
              <p className="text-lg text-muted-foreground">
                Based on 15 in-depth interviews and 27 survey responses, we uncovered key patterns in students’ eating habits, preferences, and their growing shift from mess food to tiffin services.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 shadow text-center">
                <div className="text-2xl text-lg font-bold text-blue-400 p-4">57% of students living in PGs or rentals</div>
                <div className="text-sm font-semibold mb-2">
                  preferred tiffin services over hiring cooks, citing reliability, time-saving, and consistent taste as key reasons.
                </div>
                <p className="text-sm text-muted-foreground">
                
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow text-center">
                <div className="text-2xl text-lg font-bold text-blue-400 p-4">Nearly 70% of tiffin users rely on WhatsApp groups</div>
                <div className="text-sm font-semibold mb-2">
                   to confirm meals daily and make monthly payments, this shows how informal digital systems power local food networks.
                </div>
                <p className="text-sm text-muted-foreground">
                  
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow text-center">
                <div className="text-2xl text-lg font-bold text-blue-400 p-4">
                 85% of students agreed that affordability 
                </div>
                <div className="text-sm font-semibold mb-2"> was a key factor in their daily food decisions, even more than variety or nutrition.</div>
                <p className="text-sm text-muted-foreground">
                  {" "}
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

          <div className="py-8 px-34 mx-auto mb-2 rounded-xl max-w-7xl">
            <h3 className="text-3xl md:text-2xl font-bold text-black text-center">
              Pain Points
            </h3> 
             <div className="mb-4 max-w-8xl rounded-3xl p-8 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow items-center">
              <h3 className="text-xl text-blue-400 font-bold mb-4">Students</h3>
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
            <div className="bg-white rounded-xl p-8 shadow text-black items-center">
              <h3 className="text-xl text-blue-400 font-bold mb-4">Tiffin Providers</h3>
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
          </div>


        </div>
      </section>

      




      {/* Insights container 
            <div className="bg-blue-100 rounded-3xl shadow p-8 max-w-8xl items-center">
              
          <div className="py-4 px-34 mx-auto mb-2 rounded-xl max-w-7xl">
            <h3 className="text-3xl md:text-2xl font-bold text-black text-center">
              Pain Points
            </h3> 
             <div className="mb-4 max-w-8xl rounded-3xl p-2 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow items-center">
              <h3 className="text-xl text-blue-400 font-bold mb-4">Students</h3>
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
            <div className="bg-white rounded-xl p-8 shadow text-black items-center">
              <h3 className="text-xl text-blue-400 font-bold mb-4">Tiffin Providers</h3>
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
          </div>
          </div> */}




          

    

          {/* Key Insights Map Section 
          <div className="mb-16 rounded-3xl shadow bg-gray-50 p-8">
            <h2 className="text-2xl font-bold mb-4">Key Insights Map</h2>
            <div className="grid md:grid-cols-5 gap-4 mb-6">
              <div className="bg-orange-500 text-white rounded-xl p-6 font-bold flex flex-col items-center">
                <img src="/Photos/Ethnography/3.png" alt="icon1" className="w-12 h-12 mb-2" />
                Affordability & Value
                <span className="text-xs mt-2">₹50-80 per meal is the sweet spot</span>
              </div>
              <div className="bg-white text-gray-900 rounded-xl p-6 font-bold flex flex-col items-center">
                <img src="/Photos/Ethnography/2.png" alt="icon2" className="w-12 h-12 mb-2" />
                Quality & Hygiene
                <span className="text-xs mt-2 text-gray-500">Inconsistency across providers</span>
              </div>
              <div className="bg-black text-white rounded-xl p-6 font-bold flex flex-col items-center">
                <img src="/Photos/Ethnography/1.png" alt="icon3" className="w-12 h-12 mb-2" />
                Variety & Customization
                <span className="text-xs mt-2 text-gray-300">Students want options beyond routine</span>
              </div>
              <div className="bg-white text-gray-900 rounded-xl p-6 font-bold flex flex-col items-center">
                <img src="/Photos/Ethnography/4.png" alt="icon4" className="w-12 h-12 mb-2" />
                Logistics & Timeliness
                <span className="text-xs mt-2 text-gray-500">Irregular delivery times, Poor communication</span>
              </div>
              <div className="bg-orange-500 text-white rounded-xl p-6 font-bold flex flex-col items-center">
                <img src="/Photos/Ethnography/5.png" alt="icon5" className="w-12 h-12 mb-2" />
                Trust & Transparency
                <span className="text-xs mt-2">Payment + Credibility issues</span>
              </div>
            </div>
            <div className="flex justify-center gap-4 mb-4">
              <img src="/Photos/Ethnography/insight-icon1.png" alt="icon1" className="w-12 h-12" />
              <img src="/Photos/Ethnography/insight-icon2.png" alt="icon2" className="w-12 h-12" />
              <img src="/Photos/Ethnography/insight-icon3.png" alt="icon3" className="w-12 h-12" />
              <img src="/Photos/Ethnography/insight-icon4.png" alt="icon4" className="w-12 h-12" />
            </div>
            <div className="text-center text-lg italic text-gray-700">“Value and trust outweigh variety and timeliness in students’ food preferences.”</div>
          </div> */}

          
          {/* Opportunities Section */}
          <div className="mb-16  shadow bg-blue-400 p-12 text-white text-center">
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
          <div className="mb-16 rounded-3xl shadow bg-blue-400 p-12 text-white">
            <h2 className="text-xl font-bold mb-2">Concept</h2>
            <div className="mb-4 font-bold">Our Approach</div>
            <div className="mb-4">Introducing the MIT Tiffin finder app - <span className="font-bold">Desi Dabba</span><br />A one-stop solution for students to explore, review, and choose the best tiffin services nearby.<br />Discover home-like meals, compare options, and order with ease!</div>
            <div className="text-4xl font-bold mb-6">Explore.Customize.<br />Order <span className="inline-block align-middle"></span></div>
            <div className=" items-center justify-center mb-8">
              <img src="/Photos/Ethnography/tiffin.png" alt="App UI 1" className="max-w-2xl mx-auto rounded-xl aspect-1/2 object-fit" />
            </div>
            <div className=" justify-center mb-8 text-white text-lg">
              <div className="text-center">Explore local tiffin services with reviews, ratings, and clear insights on affordability, hygiene, and variety.</div>
              <div className="text-center">Customize meals to dietary needs, place orders easily, and track deliveries with flexible payments.</div>
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
