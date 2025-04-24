export default function HelpPage() {
    return (
      <div className="container max-w-3xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-foreground mb-6">Need Help?</h1>
        <p className="text-muted-foreground text-lg mb-4">
          Welcome to your guidebook. Here’s how to navigate the world of AI-powered fitness. 💪
        </p>
  
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-2">🧠 How the AI Works</h2>
            <p className="text-muted-foreground">
              Our AI takes in your fitness goals, experience level, and available equipment to craft
              a personalized workout and diet plan. It’s like having a personal trainer in your
              pocket.
            </p>
          </div>
  
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-2">🔧 Troubleshooting</h2>
            <p className="text-muted-foreground">
              If your program isn't generating or loading, try refreshing or clearing your browser
              cache. Still stuck? Email us at <span className="text-primary">support@yourapp.com</span>
            </p>
          </div>
  
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-2">📬 Contact Support</h2>
            <p className="text-muted-foreground">
              Need more help? We’re just an email away. Drop us a message and we’ll get back to you
              within 24 hours.
            </p>
          </div>
        </div>
      </div>
    );
  }
  