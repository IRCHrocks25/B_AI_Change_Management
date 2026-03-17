import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
} from "./ui/dialog";

interface FormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function FormModal({ open, onOpenChange }: FormModalProps) {
  useEffect(() => {
    if (open) {
      const existingScript = document.querySelector(
        'script[src="https://l.industryrockstars.ch/js/form_embed.js"]'
      );
      
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://l.industryrockstars.ch/js/form_embed.js";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[90vw] sm:max-w-[600px] w-full p-0 border-none bg-transparent">
        <div className="w-full rounded-[32px] overflow-hidden bg-white">
          {/* Workshop Details Header */}
          <div className="px-6 pt-6 pb-4 bg-white text-center">
            <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-xl md:text-2xl text-gray-900 mb-2 leading-tight">
              AI Change Management Workshop
            </h2>
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-gray-700 leading-tight">
              Saturday 28th March 2026 9:00AM PST
            </p>
          </div>
          <div className="h-[566px]">
            <iframe
              src="https://l.industryrockstars.ch/widget/form/bEgSoPVsNkMA0i7narvB"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: "32px",
              }}
              id="inline-bEgSoPVsNkMA0i7narvB"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="FB - AI Change Management - March 28, 2026"
              data-height="566"
              data-layout-iframe-id="inline-bEgSoPVsNkMA0i7narvB"
              data-form-id="bEgSoPVsNkMA0i7narvB"
              title="FB - AI Change Management - March 28, 2026"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}