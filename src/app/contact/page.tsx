import React from "react";

export default function ContactPage() {
  return (
    <div className="container max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-foreground mb-6">Contact Us</h1>
      <p className="text-muted-foreground text-lg mb-4">
        We’d love to hear from you! Reach out with your questions, feedback, or partnership ideas. 📬
      </p>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-2">📞 Customer Support</h2>
          <p className="text-muted-foreground">
            Need help? Email us at <span className="text-primary">support@yourapp.com</span> and our team will respond within 24 hours.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-primary mb-2">🤝 Partnerships</h2>
          <p className="text-muted-foreground">
            Interested in collaborating? Contact us at <span className="text-primary">partners@yourapp.com</span> to explore partnership opportunities.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-primary mb-2">📱 Social Media</h2>
          <p className="text-muted-foreground">
            Connect with us on Twitter, Instagram, and Facebook for updates and community stories.
          </p>
        </div>
      </div>
    </div>
  );
}
