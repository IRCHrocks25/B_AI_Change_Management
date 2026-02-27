import { useEffect, useRef } from 'react';

interface RegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RegistrationForm({ isOpen, onClose }: RegistrationFormProps) {
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (isOpen && !scriptLoaded.current) {
      // Load the form embed script only once
      const existingScript = document.querySelector(
        'script[src="https://l.industryrockstars.ch/js/form_embed.js"]'
      );
      
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://l.industryrockstars.ch/js/form_embed.js';
        script.async = true;
        document.body.appendChild(script);
        scriptLoaded.current = true;
      } else {
        scriptLoaded.current = true;
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-[32px] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ height: '650px' }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
          aria-label="Close"
        >
          <svg
            className="w-5 h-5 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Form iframe */}
        <iframe
          src="https://l.industryrockstars.ch/widget/form/fzCQlAmoUcjf5ymPGPzp"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: '32px',
          }}
          id="inline-fzCQlAmoUcjf5ymPGPzp"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="AI Change Management"
          data-height="593"
          data-layout-iframe-id="inline-fzCQlAmoUcjf5ymPGPzp"
          data-form-id="fzCQlAmoUcjf5ymPGPzp"
          title="AI Change Management"
        />
      </div>
    </div>
  );
}

