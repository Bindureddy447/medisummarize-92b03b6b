import { FileText, Shield } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-bg">
            <FileText className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground font-serif">
              MedDoc<span className="text-primary">AI</span>
            </h1>
            <p className="text-xs text-muted-foreground">Clinical Document Assistant</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Shield className="h-4 w-4 text-success" />
          <span>Not a diagnostic tool</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
