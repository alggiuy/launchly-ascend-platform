
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { TrendingUp, Users, Zap, BarChart3, Bell, Package, FileText, Mail, MessageSquare, X, Briefcase, Rocket, PenTool, Github, Twitter, Linkedin } from "lucide-react";

// Import refactored components
import { HeroSection } from "@/components/landing/HeroSection";
import { LiveCounter } from "@/components/landing/LiveCounter";
import { StartupRoadmap } from "@/components/landing/StartupRoadmap";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { EasterEggModal } from "@/components/landing/EasterEggModal";
import { DemoModal } from "@/components/landing/DemoModal";
import { CTAModal } from "@/components/landing/CTAModal";
import { NewsletterSection } from "@/components/landing/NewsletterSection";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";

const Index = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [ctaOpen, setCTAOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentTagline, setCurrentTagline] = useState(0);
  const [selectedPersona, setSelectedPersona] = useState("Founder");
  const [konamiSequence, setKonamiSequence] = useState([]);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { text: "Hey there! How can I help you today?", sender: "bot" },
    { text: "This is a demo assistant — but I still reply fast 😉", sender: "bot" }
  ]);
  const [newMessage, setNewMessage] = useState("");

  const userCount = useAnimatedCounter(13247);
  const ctaClicks = useAnimatedCounter(427, 1500);

  const taglines = [
    "Launch Smarter.",
    "Ship in Days, Not Weeks.",
    "Make Your Idea Real.",
    "Stop Wasting Time."
  ];

  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

  const integrations = [
    { name: "Slack", logo: "/slack.svg" },
    { name: "Notion", logo: "/notion.svg" },
    { name: "Stripe", logo: "/stripe.svg" },
    { name: "Discord", logo: "/discord.svg" },
    { name: "Shopify", logo: "/shopify.svg" },
    { name: "Zapier", logo: "/zapier.svg" },
    { name: "Mailchimp", logo: "/mailchimp.svg" },
    { name: "Google Analytics", logo: "/google_analytics.svg" }
  ];

  // Scroll functions
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline(prev => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKeyPress = (event) => {
      const newSequence = [...konamiSequence, event.code];
      if (newSequence.length > konamiCode.length) {
        newSequence.shift();
      }
      setKonamiSequence(newSequence);

      if (JSON.stringify(newSequence) === JSON.stringify(konamiCode)) {
        setShowEasterEgg(true);
        setTimeout(() => setShowEasterEgg(false), 5000);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [konamiSequence]);

  const dashboardCards = [
    {
      id: 1,
      title: "Revenue Growth",
      value: "$45,280",
      change: "+23%",
      icon: <TrendingUp className="w-6 h-6 text-green-400" />,
      chart: true
    },
    {
      id: 2,
      title: "Active Users",
      value: "8,547",
      change: "+12%",
      icon: <Users className="w-6 h-6 text-blue-400" />
    },
    {
      id: 3,
      title: "Conversion Rate",
      value: "3.2%",
      change: "+0.8%",
      icon: <Zap className="w-6 h-6 text-purple-400" />
    },
    {
      id: 4,
      title: "Performance Score",
      value: "98.5",
      change: "+2.1",
      icon: <BarChart3 className="w-6 h-6 text-orange-400" />
    }
  ];

  const useCases = [
    {
      icon: <Briefcase className="w-8 h-8 text-blue-400" />,
      title: "Freelancers",
      description: "Build your portfolio and client management system. Showcase your work and streamline your business."
    },
    {
      icon: <Rocket className="w-8 h-8 text-blue-400" />,
      title: "Startups",
      description: "Launch your MVP fast and iterate based on real user feedback. Get to market before your competition."
    },
    {
      icon: <PenTool className="w-8 h-8 text-blue-400" />,
      title: "Creators",
      description: "Monetize your content and build a loyal audience. Turn your passion into a profitable business."
    }
  ];

  const comparisonData = [
    { feature: "Setup time", wordpress: "2-4 weeks", launchly: "Hours" },
    { feature: "Performance", wordpress: "Varies", launchly: "🚀" },
    { feature: "Analytics", wordpress: "Plugin Required", launchly: "Built-in" },
    { feature: "Support", wordpress: "Community", launchly: "Real people" }
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setChatMessages(prev => [...prev, { text: newMessage, sender: "user" }]);
      setNewMessage("");
      setTimeout(() => {
        setChatMessages(prev => [...prev, { text: "Thanks for the message! This is just a demo, but in a real app I'd be super helpful! 🚀", sender: "bot" }]);
      }, 1000);
    }
  };

  const handleMagneticCTA = (e: React.MouseEvent) => {
    const button = e.currentTarget as HTMLElement;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
    
    setTimeout(() => {
      button.style.transform = 'translate(0px, 0px) scale(1)';
    }, 150);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <EasterEggModal showEasterEgg={showEasterEgg} setShowEasterEgg={setShowEasterEgg} />
      <DemoModal open={demoOpen} onOpenChange={setDemoOpen} />
      <CTAModal open={ctaOpen} onOpenChange={setCTAOpen} />

      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-lg border-b border-gray-800 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button 
            onClick={scrollToTop}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            Launchly
          </button>
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('features')} className="hover:text-blue-400 transition-colors">Features</button>
            <button onClick={() => scrollToSection('roadmap')} className="hover:text-blue-400 transition-colors">Roadmap</button>
            <button onClick={() => scrollToSection('dashboard')} className="hover:text-blue-400 transition-colors">Dashboard</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-blue-400 transition-colors">Pricing</button>
            <button onClick={() => scrollToSection('newsletter')} className="hover:text-blue-400 transition-colors">Subscribe</button>
          </nav>
          <Button 
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => setDemoOpen(true)}
          >
            Go to Demo
          </Button>
        </div>
      </header>

      <HeroSection 
        selectedPersona={selectedPersona}
        setSelectedPersona={setSelectedPersona}
        ctaClicks={ctaClicks}
        currentTagline={currentTagline}
        taglines={taglines}
        handleMagneticCTA={handleMagneticCTA}
        onCTAClick={() => setCTAOpen(true)}
      />

      <LiveCounter userCount={userCount} />
      
      {/* Features Section - moved above Roadmap */}
      <FeaturesSection />
      
      {/* Startup Roadmap - moved below Features */}
      <StartupRoadmap />

      {/* Integrations Section with Continuous Scroll */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Integrates with your favorite tools</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Connect Launchly with the tools you already love and use
            </p>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex space-x-6 animate-scroll-left">
              {/* Triple the integrations for seamless infinite loop */}
              {[...integrations, ...integrations, ...integrations].map((integration, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 group relative"
                >
                  <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 w-28 h-28">
                    <CardContent className="p-4 flex flex-col items-center justify-center h-full">
                      <img 
                        src={integration.logo} 
                        alt={integration.name}
                        className="w-8 h-8 mb-2"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <p className="text-xs text-gray-400 text-center">{integration.name}</p>
                    </CardContent>
                  </Card>
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    Coming soon
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-400">
              More integrations coming soon. Need a specific tool? Let us know.
            </p>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* Use Case Tiles */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Who's Launchly for? You.</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Whether you're solo or scaling, Launchly adapts to your journey.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Dashboard Preview */}
      <section id="dashboard" className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Control Center</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              See everything, tweak anything — without leaving your browser.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <Card className="bg-gray-800 border-gray-700 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-4 border-b border-gray-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {dashboardCards.map((card) => (
                      <Card 
                        key={card.id} 
                        className="bg-gray-700 border-gray-600 hover:border-blue-500 transition-all duration-300 cursor-pointer hover:transform hover:scale-105"
                        onClick={() => setSelectedCard(card)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              {card.icon}
                              <p className="text-gray-300 text-sm">{card.title}</p>
                            </div>
                          </div>
                          <p className="text-2xl font-bold text-white">{card.value}</p>
                          <p className="text-green-400 text-sm">{card.change}</p>
                          {card.chart && (
                            <div className="mt-3 h-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded flex items-end space-x-1 p-2">
                              {[40, 60, 80, 45, 90, 70, 85].map((height, i) => (
                                <div key={i} className="bg-blue-400 rounded-sm flex-1" style={{ height: `${height}%` }}></div>
                              ))}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-gray-700 border-gray-600">
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold mb-4 text-white">Recent Activity</h3>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                              <Bell className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-sm text-gray-300">New user signed up</p>
                              <p className="text-xs text-gray-400">2 minutes ago</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                              <Package className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-sm text-gray-300">Payment received</p>
                              <p className="text-xs text-gray-400">15 minutes ago</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-gray-700 border-gray-600">
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold mb-4 text-white">Quick Actions</h3>
                        <div className="grid grid-cols-2 gap-3">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="border-gray-400 hover:border-blue-400 text-black hover:text-black bg-gray-300 hover:bg-gray-200 hover:scale-105 transition-all duration-200"
                            onClick={() => alert("Get Support clicked! This would open a support modal in a real app.")}
                          >
                            <Mail className="w-4 h-4 mr-2 text-black" />
                            Get Support
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="border-gray-400 hover:border-blue-400 text-black hover:text-black bg-gray-300 hover:bg-gray-200 hover:scale-105 transition-all duration-200 hover:shadow-lg"
                            onClick={() => alert("User Report clicked! This would generate a user report in a real app.")}
                          >
                            <FileText className="w-4 h-4 mr-2 text-black" />
                            User Report
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* WordPress vs Launchly Comparison */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Settle for Templates?</h2>
            <p className="text-gray-300 text-lg">
              Here's what sets Launchly apart.
            </p>
          </div>
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left p-6 text-lg font-semibold text-white">Feature</th>
                      <th className="text-center p-6 text-lg font-semibold text-gray-400">WordPress</th>
                      <th className="text-center p-6 text-lg font-semibold text-blue-400">Launchly</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className="border-b border-gray-700/50">
                        <td className="p-6 font-medium text-white">{row.feature}</td>
                        <td className="p-6 text-center text-gray-400">{row.wordpress}</td>
                        <td className="p-6 text-center text-blue-400 font-semibold">{row.launchly}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <PricingSection onCTAClick={() => setCTAOpen(true)} />
      <NewsletterSection />

      {/* Animated CTA Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Launch This Thing</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            No more 'someday'. Make it today.
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 rounded-lg shadow-lg animate-pulse-slow magnetic-button"
            onMouseMove={handleMagneticCTA}
            onClick={() => setCTAOpen(true)}
          >
            Try it Free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 border-t border-gray-800 py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <p className="text-gray-400 text-sm">
              This site is a demo project to showcase freelance web design work.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                Launchly
              </div>
              <p className="text-gray-400 mb-4">
                Empowering founders to launch faster and smarter.
              </p>
              <div className="flex space-x-4">
                <a href="javascript:void(0)" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="javascript:void(0)" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="javascript:void(0)" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Product</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('features')} className="text-gray-400 hover:text-blue-400 transition-colors">Features</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="text-gray-400 hover:text-blue-400 transition-colors">Pricing</button></li>
                <li><button onClick={() => scrollToSection('dashboard')} className="text-gray-400 hover:text-blue-400 transition-colors">Dashboard</button></li>
                <li><a href="javascript:void(0)" className="text-gray-400 hover:text-blue-400 transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2">
                <li><a href="javascript:void(0)" className="text-gray-400 hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="javascript:void(0)" className="text-gray-400 hover:text-blue-400 transition-colors">Blog</a></li>
                <li><a href="javascript:void(0)" className="text-gray-400 hover:text-blue-400 transition-colors">Careers</a></li>
                <li><a href="javascript:void(0)" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Support</h3>
              <ul className="space-y-2">
                <li><a href="javascript:void(0)" className="text-gray-400 hover:text-blue-400 transition-colors">Help Center</a></li>
                <li><a href="javascript:void(0)" className="text-gray-400 hover:text-blue-400 transition-colors">Documentation</a></li>
                <li><a href="javascript:void(0)" className="text-gray-400 hover:text-blue-400 transition-colors">Community</a></li>
                <li><a href="javascript:void(0)" className="text-gray-400 hover:text-blue-400 transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Launchly. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="javascript:void(0)" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Privacy Policy</a>
              <a href="javascript:void(0)" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Terms of Service</a>
              <a href="javascript:void(0)" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Assistant */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setChatOpen(!chatOpen)}
          className="bg-blue-600 hover:bg-blue-700 rounded-full p-4 shadow-lg animate-pulse-slow"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="ml-2 hidden sm:inline">Need help?</span>
        </Button>
        
        {chatOpen && (
          <div className="absolute bottom-16 right-0 w-80 bg-gray-800 border border-gray-700 rounded-lg shadow-xl animate-slide-up">
            <div className="p-4 border-b border-gray-700 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <span className="font-semibold text-white">Launchly Assistant</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setChatOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="p-4 max-h-64 overflow-y-auto space-y-3">
              {chatMessages.map((message, index) => (
                <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs px-3 py-2 rounded-lg ${
                    message.sender === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-700 text-gray-300'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-700">
              <form onSubmit={handleSendMessage} className="flex space-x-2">
                <input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="bg-gray-700 border border-gray-600 text-white placeholder-gray-400 flex-1 px-3 py-2 rounded"
                />
                <Button type="submit" size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Send
                </Button>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Dashboard Card Modal */}
      {selectedCard && (
        <Dialog open={!!selectedCard} onOpenChange={() => setSelectedCard(null)}>
          <DialogContent className="bg-gray-800 border-gray-700">
            <DialogHeader>
              <DialogTitle className="text-white flex items-center space-x-2">
                {selectedCard.icon}
                <span>{selectedCard.title}</span>
              </DialogTitle>
              <DialogDescription className="text-gray-300">
                Detailed insights for your {selectedCard.title.toLowerCase()}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div>
                  <p className="text-3xl font-bold text-white">{selectedCard.value}</p>
                  <p className="text-green-400">{selectedCard.change} vs last month</p>
                </div>
              </div>
              <p className="text-gray-300">
                This metric shows your {selectedCard.title.toLowerCase()} performance over time. 
                The data is updated in real-time to help you make informed decisions.
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                View Full Report
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Index;
