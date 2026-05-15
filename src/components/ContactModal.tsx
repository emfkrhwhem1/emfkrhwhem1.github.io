import { motion, AnimatePresence } from "motion/react";
import { Mail, MessageSquare, X, Copy, Check, PhoneCall } from "lucide-react";
import { useState } from "react";

const ContactModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const email = "emfkrhwhem1@naver.com";
  const phoneNumber = "010-6208-4324";

  // --- 모바일 및 구형 브라우저 대응 복사 로직 ---
  const handleCopy = async (text: string, type: "email" | "phone") => {
    // 1. 최신 Clipboard API 시도 (HTTPS 환경에서만 작동)
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        showSuccess(type);
        return;
      } catch (err) {
        console.error("Clipboard API 실패, 대체 로직 시도");
      }
    }

    // 2. 대체 로직: execCommand('copy') - HTTP 또는 구형 모바일 대응
    const textArea = document.createElement("textarea");
    textArea.value = text;
    // 화면에 보이지 않게 처리
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    textArea.style.top = "-9999px";
    document.body.appendChild(textArea);

    textArea.focus();
    textArea.select();
    textArea.setSelectionRange(0, 99999); // 모바일 iOS 대응

    try {
      document.execCommand("copy");
      showSuccess(type);
    } catch (err) {
      alert("복사에 실패했습니다. 직접 입력해주세요.");
    }

    document.body.removeChild(textArea);
  };

  const showSuccess = (type: "email" | "phone") => {
    if (type === "email") {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 뒷배경 (Backdrop) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-[150] cursor-pointer"
          />

          {/* 모달 본체 (반응형: PC 중앙 / 모바일 하단) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 100, x: "-50%" }}
            animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, scale: 0.9, y: 100, x: "-50%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 z-[151] w-full max-w-md pointer-events-auto bottom-0 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 px-0 sm:px-4"
          >
            <div className="glass bg-slate-900/95 border border-white/10 p-7 md:p-8 shadow-2xl cursor-default rounded-t-[2.5rem] sm:rounded-[2.5rem] relative overflow-hidden">
              {/* 모달 핸들 (모바일 전용 시각 요소) */}
              <div className="w-12 h-1.5 bg-white/10 rounded-full mx-auto mb-6 sm:hidden" />

              {/* 헤더 */}
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                  <div className="p-2 bg-purple/20 rounded-lg">
                    <MessageSquare className="text-purple size-5 md:size-6" />
                  </div>
                  Contact
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/50 hover:text-white cursor-pointer"
                >
                  <X className="size-6" />
                </button>
              </div>

              {/* 연락처 리스트 */}
              <div className="space-y-4">
                {/* 이메일 */}
                <div className="group bg-white/5 border border-white/5 p-4 md:p-5 rounded-2xl hover:border-purple/30 transition-all">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4 overflow-hidden">
                      <div className="p-3 bg-purple/10 rounded-xl text-purple shrink-0">
                        <Mail className="size-5 md:size-6" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] md:text-xs text-white/40 font-mono uppercase tracking-widest">
                          Email
                        </p>
                        <p className="text-sm md:text-base text-white font-medium truncate">
                          {email}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy(email, "email")}
                      className="p-2.5 bg-white/5 hover:bg-purple/20 rounded-xl text-white/40 hover:text-purple transition-all cursor-pointer shrink-0"
                    >
                      {copied ? (
                        <Check className="size-5 text-green-400" />
                      ) : (
                        <Copy className="size-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* 전화번호 */}
                <div className="group bg-white/5 border border-white/5 p-4 md:p-5 rounded-2xl hover:border-purple/30 transition-all">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4 overflow-hidden">
                      <div className="p-3 bg-purple/10 rounded-xl text-purple shrink-0">
                        <PhoneCall className="size-5 md:size-6" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] md:text-xs text-white/40 font-mono uppercase tracking-widest">
                          Phone Number
                        </p>
                        <p className="text-sm md:text-base text-white font-medium truncate">
                          {phoneNumber}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy(phoneNumber, "phone")}
                      className="p-2.5 bg-white/5 hover:bg-purple/20 rounded-xl text-white/40 hover:text-purple transition-all cursor-pointer shrink-0"
                    >
                      {copiedPhone ? (
                        <Check className="size-5 text-green-400" />
                      ) : (
                        <Copy className="size-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-center text-white/20 text-[11px] sm:hidden">
                배경을 클릭하면 닫힙니다
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
