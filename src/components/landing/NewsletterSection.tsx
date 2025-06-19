
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="newsletter" className="py-20 px-4">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">📬 Want launch tips & founder insights?</h2>
        <p className="text-gray-300 text-lg mb-2">
          Drop your email — no spam, just value.
        </p>
        <p className="text-gray-400 text-sm mb-8">
          Insights, tips, and the occasional founder meme.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
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
        {submitted && (
          <p className="text-green-400 text-sm mt-4 animate-fade-in">
            Thanks! You're on the list.
          </p>
        )}
        <p className="text-xs text-gray-400 mt-4">
          No spam, unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};
