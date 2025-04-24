import React from "react";

export default function TermsPage() {
  return (
    <div className="container max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-foreground mb-6">Terms & Conditions</h1>
      <p className="text-muted-foreground text-lg mb-4">
        Please review our terms to understand your rights and responsibilities when using our app.
      </p>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-2">🔒 User Agreement</h2>
          <p className="text-muted-foreground">
            By accessing our app, you agree to abide by our terms of service, privacy policy, and community guidelines.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-primary mb-2">⚖️ Usage Policy</h2>
          <p className="text-muted-foreground">
            Use our services responsibly and do not engage in prohibited activities. Violations may result in suspension or termination of your account.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-primary mb-2">📩 Contact Us</h2>
          <p className="text-muted-foreground">
            Questions about our terms? Email us at <span className="text-primary">legal@yourapp.com</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
