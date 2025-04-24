import React from "react";

export default function AboutPage() {
  return (
    <div className="container max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-foreground mb-6">About Us</h1>
      <p className="text-muted-foreground text-lg mb-4">
        Discover the story behind our app and the team dedicated to making your experience exceptional. 🌟
      </p>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-2">🚀 Our Mission</h2>
          <p className="text-muted-foreground">
            We aim to empower individuals with smart, AI-driven solutions that simplify everyday life. Our mission is to bridge technology and well-being for everyone.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-primary mb-2">💡 How It Started</h2>
          <p className="text-muted-foreground">
            Founded in 2025, our journey began with a small team passionate about innovation and user-centric design. We believe in making technology accessible and enjoyable.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-primary mb-2">🤝 Meet the Team</h2>
          <p className="text-muted-foreground">
            Our diverse team of engineers, designers, and fitness experts work together to deliver seamless experiences. We’re committed to continuous improvement and listening to your feedback.
          </p>
        </div>
      </div>
    </div>
  );
}
