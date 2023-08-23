"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const questions = [
    {
      id: 1,
      question: "How long is shipping?",
      answer: "Shipping is between 5-10 business days",
    },
    {
      id: 2,
      question: "What if I want a refund?",
      answer: "Moonlamps.com does 100% refund if you are not satisfied",
    },
    {
      id: 3,
      question: "Can I just purchase the stand?",
      answer:
        "Unfortunatley, we are only selling the bundle which includes the stand",
    },
    {
      id: 4,
      question: "How can I track my order?",
      answer: "You can go to your dashboard and view all of your orders",
    },
    {
      id: 5,
      question: "How many years does this lamp last?",
      answer:
        "We would hope a lifetime, but you never know what could happen. ",
    },
  ];

  return (
    <div id="faq" className="w-full py-5">
      <div className="w-[89%] m-auto max-w-[1400px] shadow-md rounded-lg p-8 bg-background">
        <h2 className="text-2xl mb-6 font-semibold">
          Frequently Asked Questions
        </h2>
        {questions.map((q) => (
          <div key={q.id} className="mb-4 last:mb-0">
            <button
              onClick={() =>
                setActiveQuestion(activeQuestion === q.id ? null : q.id)
              }
              className="w-full text-left text-xl focus:outline-none p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center"
            >
              {q.question}
              {activeQuestion === q.id ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              )}
            </button>
            <AnimatePresence>
              {activeQuestion === q.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <p className="mt-3">{q.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
