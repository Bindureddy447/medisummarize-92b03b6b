import { Brain, Zap, Shield, BookOpen } from 'lucide-react';

const InfoSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'LLM-Powered Summarization',
      description: 'Uses advanced language models for abstractive summarization, generating concise summaries rather than extracting sentences.'
    },
    {
      icon: Zap,
      title: 'Key Information Extraction',
      description: 'Automatically identifies medications, follow-up instructions, and critical findings from clinical documents.'
    },
    {
      icon: Shield,
      title: 'Privacy-First Design',
      description: 'No patient data is stored. All processing is ephemeral with no persistence of sensitive information.'
    },
    {
      icon: BookOpen,
      title: 'Patient-Friendly Output',
      description: 'Generates easy-to-understand explanations suitable for patients and their families.'
    }
  ];

  return (
    <section className="py-12 border-t border-border">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-serif font-semibold text-foreground mb-2">
          How It Works
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          This system uses Large Language Models (LLMs) to process clinical documents and extract meaningful summaries while maintaining medical accuracy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div 
              key={index}
              className="medical-card text-center"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-12 medical-card bg-medical-light/50">
        <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
          About the Technology
        </h3>
        <div className="prose prose-sm max-w-none text-muted-foreground">
          <p className="mb-3">
            <strong className="text-foreground">Why Abstractive Summarization?</strong> Unlike extractive methods that simply select and copy sentences from the source, 
            abstractive summarization generates new text that captures the essence of the document. This approach, powered by 
            transformer-based models, produces more coherent and concise summaries.
          </p>
          <p className="mb-3">
            <strong className="text-foreground">Document Processing:</strong> Long clinical documents are processed using intelligent chunking 
            to handle text that exceeds model context limits while maintaining coherence across sections.
          </p>
          <p>
            <strong className="text-foreground">Evaluation:</strong> Summary quality can be measured using ROUGE scores, which compare 
            the overlap between generated summaries and reference summaries in terms of n-grams and longest common subsequences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
