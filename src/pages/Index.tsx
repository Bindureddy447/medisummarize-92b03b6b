import { useState } from 'react';
import { RotateCcw, Sparkles, Shield, Zap } from 'lucide-react';
import Header from '@/components/Header';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import DocumentUploader from '@/components/DocumentUploader';
import SampleDocuments from '@/components/SampleDocuments';
import SummaryResults from '@/components/SummaryResults';
import InfoSection from '@/components/InfoSection';
import { Button } from '@/components/ui/button';
import { useSummarize } from '@/hooks/useSummarize';

const Index = () => {
  const { isProcessing, summaryData, summarize, reset } = useSummarize();
  const [documentText, setDocumentText] = useState('');

  const handleDocumentSubmit = (text: string) => {
    setDocumentText(text);
    summarize(text);
  };

  const handleReset = () => {
    setDocumentText('');
    reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-12">
        {/* Hero Section */}
        <section className="text-center mb-14 fade-in">
          <div className="inline-flex items-center gap-2 section-badge mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            <span>AI-Powered Analysis</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-semibold text-foreground mb-6 tracking-tight">
            Clinical Document{' '}
            <span className="gradient-text">Summarization</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform complex medical documents into clear, actionable summaries. 
            Designed for healthcare professionals who value precision and efficiency.
          </p>
          
          {/* Feature pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full text-sm text-muted-foreground">
              <Zap className="h-4 w-4 text-warning" />
              <span>Instant Results</span>
            </div>
            <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-success" />
              <span>Privacy-First</span>
            </div>
          </div>
        </section>

        <DisclaimerBanner />

        {summaryData ? (
          <div className="space-y-8 slide-up">
            <div className="flex justify-end">
              <Button variant="outline" onClick={handleReset} className="gap-2">
                <RotateCcw className="h-4 w-4" />
                Analyze Another Document
              </Button>
            </div>
            <SummaryResults data={summaryData} />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 slide-up">
            <DocumentUploader 
              onDocumentSubmit={handleDocumentSubmit} 
              isProcessing={isProcessing}
            />
            <SampleDocuments 
              onSelectDocument={handleDocumentSubmit}
              isProcessing={isProcessing}
            />
          </div>
        )}

        <InfoSection />

        {/* Footer */}
        <footer className="py-12 mt-12 border-t border-border">
          <div className="text-center space-y-4">
            <p className="text-base font-medium text-foreground">
              <span className="font-serif">MedDoc</span><span className="text-primary font-serif">AI</span>
              <span className="text-muted-foreground font-normal ml-2">— Clinical Document Summarization Assistant</span>
            </p>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              This is an educational demonstration project. Not intended for actual clinical use.
              Uses de-identified sample data only. No patient information is stored or transmitted.
            </p>
            <p className="text-xs text-muted-foreground/60">
              © 2024 MedDocAI. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
