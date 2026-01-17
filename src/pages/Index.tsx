import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
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
      
      <main className="container py-8">
        {/* Hero Section */}
        <section className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">
            Clinical Document{' '}
            <span className="gradient-text">Summarization</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI-powered assistant for healthcare professionals. Generate concise summaries, 
            extract key findings, and create patient-friendly explanations from clinical documents.
          </p>
        </section>

        <DisclaimerBanner />

        {summaryData ? (
          <div className="space-y-6">
            <div className="flex justify-end">
              <Button variant="outline" onClick={handleReset}>
                <RotateCcw className="h-4 w-4 mr-2" />
                Analyze Another Document
              </Button>
            </div>
            <SummaryResults data={summaryData} />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
        <footer className="py-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            <strong>MedDocAI</strong> — Clinical Document Summarization Assistant
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            This is an educational demonstration project. Not intended for actual clinical use.
            <br />
            Uses de-identified sample data only. No patient information is stored or transmitted.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
