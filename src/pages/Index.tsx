import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, ArrowUp, Bell, Settings, Home, Calendar, Mail, Package, FileText, User, MessageSquare, X, TrendingUp, Users, Zap, Code, Palette, BarChart3, Shield, Rocket, Briefcase, PenTool, Target, Lightbulb, ChevronLeft, ChevronRight } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [userCount, setUserCount] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [currentTagline, setCurrentTagline] = useState(0);
  const [ctaClicks, setCtaClicks] = useState(0);
  const [selectedPersona, setSelectedPersona] = useState("Founder");
  const [konamiSequence, setKonamiSequence] = useState([]);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [currentIntegration, setCurrentIntegration] = useState(0);

  const taglines = [
    "Launch Smarter.",
    "Ship in Days, Not Weeks.",
    "Make Your Idea Real.",
    "Stop Wasting Time."
  ];

  const personas = ["Founder", "Freelancer", "Agency"];

  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

  const integrations = [
    { name: "Stripe", icon: "💳" },
    { name: "Notion", icon: "📝" },
    { name: "Slack", icon: "💬" },
    { name: "Discord", icon: "🎮" },
    { name: "Shopify", icon: "🛍️" },
    { name: "Zapier", icon: "⚡" },
    { name: "Mailchimp", icon: "📧" },
    { name: "Google Analytics", icon: "📊" }
  ];

  const timelineSteps = [
    {
      icon: <Target className="w-8 h-8 text-blue-400" />,
      title: "Test your idea with real feedback",
      description: "Get validation before you invest time building"
    },
    {
      icon: <Rocket className="w-8 h-8 text-blue-400" />,
      title: "Publish your MVP faster than ever",
      description: "Go live without the usual technical headaches"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
      title: "Make decisions backed by live analytics",
      description: "See what works and double down on it"
    },
    {
      icon: <Star className="w-8 h-8 text-blue-400" />,
      title: "Because launching should feel like winning",
      description: "Celebrate with thousands of successful founders"
    }
  ];

  // Animated user counter
  useEffect(() => {
    const targetCount = 13247;
    const duration = 2000;
    const increment = targetCount / (duration / 50);
    
    const timer = setInterval(() => {
      setUserCount(prev => {
        const newCount = prev + increment;
        if (newCount >= targetCount) {
          clearInterval(timer);
          return targetCount;
        }
        return Math.floor(newCount);
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  // Tagline rotator
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline(prev => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // CTA click counter animation
  useEffect(() => {
    const targetClicks = 427;
    const duration = 1500;
    const increment = targetClicks / (duration / 50);
    
    const timer = setInterval(() => {
      setCtaClicks(prev => {
        const newCount = prev + increment;
        if (newCount >= targetClicks) {
          clearInterval(timer);
          return targetClicks;
        }
        return Math.floor(newCount);
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  // Konami code listener
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

  // Integration carousel auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIntegration(prev => (prev + 1) % integrations.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Settings className="w-8 h-8 text-blue-400" />,
      title: "Skip configs, start building",
      description: "No more wrestling with setup. Jump straight into creating what matters."
    },
    {
      icon: <Bell className="w-8 h-8 text-blue-400" />,
      title: "Know what's working instantly",
      description: "Real-time insights that actually help you make better decisions."
    },
    {
      icon: <ArrowUp className="w-8 h-8 text-blue-400" />,
      title: "No stress when traffic spikes",
      description: "Built to handle your success. Scale without breaking a sweat."
    },
    {
      icon: <Star className="w-8 h-8 text-blue-400" />,
      title: "Real help from people who've been there",
      description: "Get advice from founders who've launched, scaled, and sold. You're not alone."
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for validating your first idea",
      features: [
        "1 Business Launch",
        "Basic Analytics",
        "Email Support",
        "Template Library",
        "Payment Processing"
      ],
      popular: false,
      cta: "Start for $0"
    },
    {
      name: "Pro",
      price: "$79",
      period: "/month",
      description: "Scale your business with advanced tools",
      features: [
        "5 Business Launches",
        "Advanced Analytics",
        "Priority Support",
        "Custom Branding",
        "A/B Testing",
        "API Access"
      ],
      popular: true,
      cta: "Upgrade Anytime"
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For serious entrepreneurs and agencies",
      features: [
        "Unlimited Launches",
        "Custom Analytics",
        "24/7 Phone Support",
        "White-label Solution",
        "Team Collaboration",
        "Custom Integrations"
      ],
      popular: false,
      cta: "Pick Your Plan →"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder, TechFlow",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      quote: "This saved me weeks of dev work. Seriously."
    },
    {
      name: "Marcus Rodriguez",
      role: "CEO, GrowthLab",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "Launchly felt like a co-founder with superpowers."
    },
    {
      name: "Emma Thompson",
      role: "Founder, DesignCo",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "From idea to launch in 48 hours. I couldn't believe it."
    }
  ];

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

  const userAvatars = [
    { name: "Alex Johnson", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face", testimonial: "Launched my e-commerce store in 3 days!" },
    { name: "Lisa Park", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face", testimonial: "Perfect for my consulting business." },
    { name: "David Kim", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face", testimonial: "Analytics helped me optimize conversions." },
    { name: "Maria Santos", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face", testimonial: "Best investment for my startup." },
    { name: "James Wilson", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face", testimonial: "Saved me months of development time." },
    { name: "Sophie Chen", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face", testimonial: "Intuitive and powerful platform." }
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
    { feature: "Setup Time", wordpress: "2-4 weeks", launchly: "2-4 hours" },
    { feature: "Design Freedom", wordpress: "Limited", launchly: "Unlimited" },
    { feature: "Built-in Analytics", wordpress: "Plugin Required", launchly: "Included" },
    { feature: "Performance", wordpress: "Varies", launchly: "Optimized" },
    { feature: "Support", wordpress: "Community", launchly: "24/7 Expert" }
  ];

  const chatMessages = [
    { text: "Hi! I'm here to help you launch your next idea. What can I assist you with today?", sender: "bot" },
    { text: "How quickly can I get started?", sender: "user" },
    { text: "You can launch your first project in under 10 minutes! Would you like me to show you how?", sender: "bot" },
    { text: "What's included in the free trial?", sender: "user" },
    { text: "Full access to all features for 14 days - no credit card required. You can build, test, and launch completely free!", sender: "bot" }
  ];

  const getPersonaContent = () => {
    switch(selectedPersona) {
      case "Freelancer":
        return {
          headline: "Launch What Matters",
          subtext: "Turn your freelance hustle into a real business. Join thousands of independent pros who skipped the fluff and built something lasting with Launchly."
        };
      case "Agency":
        return {
          headline: "Launch What Matters",
          subtext: "Scale your agency operations without the usual chaos. Join thousands of agency owners who streamlined their process with Launchly."
        };
      default:
        return {
          headline: "Launch What Matters",
          subtext: "Turn your idea into something real — fast. Join thousands of founders who skipped the fluff and built businesses with Launchly."
        };
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
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
      {/* Easter Egg Modal */}
      {showEasterEgg && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] animate-fade-in">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-lg text-center max-w-md animate-scale-in">
            <h2 className="text-2xl font-bold mb-4">🎉 You found it!</h2>
            <p className="text-lg mb-4">Konami Code Master Detected!</p>
            <p className="text-sm opacity-80">True founders know the secrets...</p>
            <Button 
              onClick={() => setShowEasterEgg(false)}
              className="mt-4 bg-white text-blue-600 hover:bg-gray-100"
            >
              Continue Building
            </Button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-lg border-b border-gray-800 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Launchly
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
            <a href="#dashboard" className="hover:text-blue-400 transition-colors">Dashboard</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Sign In
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          {/* Personality Picker */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-800 p-1 rounded-lg flex space-x-1">
              {personas.map((persona) => (
                <button
                  key={persona}
                  onClick={() => setSelectedPersona(persona)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    selectedPersona === persona
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {persona}
                </button>
              ))}
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent leading-tight animate-slide-up">
            {getPersonaContent().headline}
          </h1>
          
          {/* Dynamic Tagline Rotator */}
          <div className="mb-4 h-16 flex items-center justify-center">
            <p className="text-3xl md:text-4xl font-bold text-blue-400 animate-fade-in" key={currentTagline}>
              {taglines[currentTagline]}
            </p>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            {getPersonaContent().subtext}
          </p>
          
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 magnetic-button"
            onMouseMove={handleMagneticCTA}
          >
            Try it Free
          </Button>
          
          {/* Real-Time CTA Click Counter */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-400">
              🔁 <span className="text-blue-400 font-semibold">{ctaClicks}</span> people clicked this today
            </p>
          </div>
          
          <p className="text-sm text-gray-400 mt-2">No credit card needed · 14-day free trial</p>
        </div>
      </section>

      {/* Live User Counter */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gray-800/50 rounded-2xl p-8 max-w-md mx-auto border border-gray-700">
            <p className="text-3xl font-bold text-blue-400 mb-2">
              🔥 {userCount.toLocaleString()} founders and counting... You're next.
            </p>
          </div>
        </div>
      </section>

      {/* Memory Lane Timeline */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Startup Roadmap</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              From 'I have an idea' to 'I just launched' — all in one platform.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 to-purple-500 h-full"></div>
              
              {timelineSteps.map((step, index) => (
                <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-slide-up`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                      <CardContent className="p-6">
                        <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'} mb-4`}>
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                        <p className="text-gray-300">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-gray-900 flex items-center justify-center z-10">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">⚡ Zero to Launch in Minutes</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Everything you need — nothing you don't.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fake Integration Carousel */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Integrates with your favorite tools</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Connect Launchly with the tools you already love and use
            </p>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex space-x-6 animate-slide-x" style={{ transform: `translateX(-${currentIntegration * 120}px)` }}>
              {[...integrations, ...integrations].map((integration, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 group relative"
                >
                  <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 w-28 h-28">
                    <CardContent className="p-4 flex flex-col items-center justify-center h-full">
                      <div className="text-3xl mb-2">{integration.icon}</div>
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
              More integrations coming soon. Got a tool you love? Let us know.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Loved by founders worldwide</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Join thousands of successful entrepreneurs who've launched with Launchly.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.3}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 border-2 border-gray-700"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
                        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                              <Bell className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-sm">New user signed up</p>
                              <p className="text-xs text-gray-400">2 minutes ago</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                              <Package className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-sm">Payment received</p>
                              <p className="text-xs text-gray-400">15 minutes ago</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-gray-700 border-gray-600">
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                        <div className="grid grid-cols-2 gap-3">
                          <Button variant="outline" size="sm" className="border-gray-500 hover:border-blue-400">
                            <Mail className="w-4 h-4 mr-2" />
                            Send Email
                          </Button>
                          <Button variant="outline" size="sm" className="border-gray-500 hover:border-blue-400">
                            <FileText className="w-4 h-4 mr-2" />
                            New Report
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
                      <th className="text-left p-6 text-lg font-semibold">Feature</th>
                      <th className="text-center p-6 text-lg font-semibold text-gray-400">WordPress</th>
                      <th className="text-center p-6 text-lg font-semibold text-blue-400">Launchly</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className="border-b border-gray-700/50">
                        <td className="p-6 font-medium">{row.feature}</td>
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

      {/* User Avatar Grid */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Join successful founders</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              See what our community has built with Launchly
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {userAvatars.map((user, index) => (
              <div 
                key={index} 
                className="text-center cursor-pointer hover:transform hover:scale-105 transition-all duration-300"
                onClick={() => setSelectedAvatar(user)}
              >
                <img 
                  src={user.avatar} 
                  alt={user.name}
                  className="w-20 h-20 rounded-full mx-auto mb-2 border-2 border-gray-700 hover:border-blue-400 transition-colors"
                />
                <p className="text-sm font-medium">{user.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Built to Scale With You</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Start small. Grow big. Always know what you're paying for.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <Card key={index} className={`relative bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 ${plan.popular ? 'border-blue-500 shadow-lg shadow-blue-500/20' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                    Most Popular
                  </Badge>
                )}
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <Button className={`w-full mb-6 ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-700 hover:bg-gray-600'}`}>
                    {plan.cta}
                  </Button>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-400 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">📬 Want launch tips & founder insights?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Drop your email — no spam, just value.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 flex-1"
              required
            />
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 px-8">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-gray-400 mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>

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
          >
            Try it Free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 border-t border-gray-800 py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                Launchly
              </div>
              <p className="text-gray-400 mb-4">
                Empowering founders to launch faster and smarter.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">GitHub</a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Dashboard</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Community</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Launchly. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Cookie Policy</a>
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
                <span className="font-semibold">Launchly Assistant</span>
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
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Start Free Trial
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Dashboard Card Modal */}
      {selectedCard && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">{selectedCard.title}</h3>
              <Button variant="ghost" size="sm" onClick={() => setSelectedCard(null)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                {selectedCard.icon}
                <div>
                  <p className="text-2xl font-bold">{selectedCard.value}</p>
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
          </div>
        </div>
      )}

      {/* Avatar Testimonial Modal */}
      {selectedAvatar && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <img 
                  src={selectedAvatar.avatar} 
                  alt={selectedAvatar.name}
                  className="w-12 h-12 rounded-full"
                />
                <h3 className="text-xl font-semibold">{selectedAvatar.name}</h3>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setSelectedAvatar(null)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300 italic">"{selectedAvatar.testimonial}"</p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Start Your Journey
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
