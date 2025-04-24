import React from "react";

export default function BlogsPage() {
  return (
    <div className="container max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-foreground mb-6">Our Blog</h1>
      <p className="text-muted-foreground text-lg mb-4">
        Insights, updates, and tips from our team. Stay inspired and informed! 📝
      </p>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-2">🌟 Latest Articles</h2>
          <p className="text-muted-foreground">
            Explore our newest posts on AI, fitness, productivity, and more. We share practical advice and the latest trends to help you thrive.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-primary mb-2">📚 Popular Topics</h2>
          <p className="text-muted-foreground">
            From workout routines to nutrition guides and tech innovations, find articles that match your interests and goals.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-primary mb-2">✍️ Write for Us</h2>
          <p className="text-muted-foreground">
            Have a story or expertise to share? Reach out to <span className="text-primary">blog@yourapp.com</span> to contribute and join our community of writers!
          </p>
        </div>
      </div>
    </div>
  );
}
