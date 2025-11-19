import React from "react";
import { X } from "lucide-react";

const TermsModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl relative max-h-[85vh] overflow-hidden">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-600 hover:text-black"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[70vh]">
          <h2 className="text-3xl font-semibold mb-6">Terms & Conditions</h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">

            <div>
              <h3 className="text-lg font-semibold">1. Acceptance of Terms</h3>
              <p className="mt-1">
                By using EduSwap, you agree to these terms and conditions.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">2. User Responsibilities</h3>
              <p className="mt-1">
                Users must provide accurate information and maintain the confidentiality of their account credentials.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">3. Resource Sharing Guidelines</h3>
              <p className="mt-1">
                All shared resources must comply with copyright laws. Physical items must be returned by the agreed deadline.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">4. Trust Score System</h3>
              <p className="mt-1">
                Your trust score reflects your borrowing and lending behavior. Late returns or violations may affect your score.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">5. Prohibited Content</h3>
              <p className="mt-1">
                Do not share inappropriate, copyrighted, or illegal materials.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">6. Dispute Resolution</h3>
              <p className="mt-1">
                In case of disputes, contact the administrator through the platform.
              </p>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t">
          <button
            onClick={onClose}
            className="w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition font-medium"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default TermsModal;
