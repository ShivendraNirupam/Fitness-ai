import React from "react";

export default function PrivacyPage() {
  return (
    <div className="container max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-foreground mb-6">Privacy Policy</h1>
      <p className="text-muted-foreground text-lg mb-4">
        Your privacy matters to us. Learn how we protect and use your information.
      </p>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-2">🔐 Data Protection</h2>
          <p className="text-muted-foreground">
            We use industry-standard measures to safeguard your data and ensure your privacy is respected at all times.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-primary mb-2">📄 Information Usage</h2>
          <p className="text-muted-foreground">
            We only collect data necessary to provide and improve our services. We never sell your information to third parties.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-primary mb-2">✉️ Contact for Privacy</h2>
          <p className="text-muted-foreground">
            Have questions about your privacy? Email our privacy team at <span className="text-primary">privacy@yourapp.com</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
