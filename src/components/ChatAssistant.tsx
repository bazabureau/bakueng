import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, Minimize2, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";

interface Message {
  id: string;
  content: string;
  sender: "user" | "assistant";
  timestamp: Date;
}

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your Baku Engineering assistant. How can I help you today? I can provide information about our products, certifications, or answer any technical questions.",
      sender: "assistant",
      timestamp: new Date(),
    },
  ]);
  
  const quickActions = [
    "Product information",
    "Request a quote",
    "Certifications",
    "Contact details",
  ];
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector("[data-radix-scroll-area-viewport]");
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, isMinimized]);

  // Mock AI response function
  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Product-related queries
    if (lowerMessage.includes("product") || lowerMessage.includes("valve") || lowerMessage.includes("bearing") || lowerMessage.includes("fastener")) {
      return "We offer a wide range of industrial products including valves, bearings, fasteners, and tools. You can browse our complete catalog on the Products page. Would you like me to recommend specific products based on your requirements?";
    }

    // Certification queries
    if (lowerMessage.includes("certificat") || lowerMessage.includes("iso") || lowerMessage.includes("quality")) {
      return "Baku Engineering Supplies LTD maintains ISO 9001:2015 certification and complies with international standards. Our products meet CE, ATEX, and other relevant certifications. Visit our Certifications page for detailed information.";
    }

    // Quote/pricing queries
    if (lowerMessage.includes("price") || lowerMessage.includes("quote") || lowerMessage.includes("cost")) {
      return "For pricing information and custom quotes, please use our Request Quote form on the Contact page or call us at +994 (012) 452 68 55. We'll provide a detailed quotation based on your specific requirements.";
    }

    // Delivery/shipping queries
    if (lowerMessage.includes("deliver") || lowerMessage.includes("ship") || lowerMessage.includes("lead time")) {
      return "Lead times vary by product. Most in-stock items ship within 2-4 weeks. For urgent requirements, we can arrange expedited delivery. Contact our sales team for specific delivery timelines.";
    }

    // Technical specifications
    if (lowerMessage.includes("specification") || lowerMessage.includes("technical") || lowerMessage.includes("datasheet")) {
      return "Detailed technical specifications are available for each product on our Products page. You can also download PDF catalogs from our Catalogs section. For custom specifications, our engineering team is ready to assist.";
    }

    // Contact/support queries
    if (lowerMessage.includes("contact") || lowerMessage.includes("support") || lowerMessage.includes("help") || lowerMessage.includes("call")) {
      return "You can reach us at:\n📞 Phone: +994 (012) 452 68 55\n📧 Email: sales@bakuengineering.com\n📍 Address: Baku, Azerbaijan\n\nOur team is available Monday-Friday, 9:00 AM - 6:00 PM (GMT+4).";
    }

    // About company
    if (lowerMessage.includes("about") || lowerMessage.includes("company") || lowerMessage.includes("who are you") || lowerMessage.includes("experience")) {
      return "Baku Engineering Supplies LTD is a leading industrial supplier with over 10 years of experience serving the oil & gas sector. We maintain ISO 9001:2015 certification and have delivered to 100+ B2B clients worldwide. Visit our About page to learn more about our mission, values, and journey.";
    }

    // Location/warehouse
    if (lowerMessage.includes("location") || lowerMessage.includes("address") || lowerMessage.includes("warehouse")) {
      return "We're located in Baku, Azerbaijan, with a modern warehouse facility stocking over 5,000 products. Visit our Contact page for detailed directions and location information.";
    }

    // Default response
    return "Thank you for your question. Our team specializes in industrial supplies and technical solutions. For specific inquiries, please contact our sales team at sales@bakuengineering.com or call +994 (012) 452 68 55. How else can I assist you?";
  };

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputValue;
    if (!textToSend.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: textToSend,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI thinking delay
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000));

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: generateResponse(textToSend),
      sender: "assistant",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 z-50 sm:bottom-4 sm:right-4"
            style={{ willChange: 'transform, opacity' }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="w-16 h-16 bg-[#EB791B] hover:bg-[#D36D17] text-white rounded-full shadow-lg flex items-center justify-center transition-colors duration-240 relative group"
              aria-label="Open chat assistant"
            >
              <MessageCircle className="w-7 h-7" />
              
              {/* Pulse animation */}
              <span className="absolute inset-0 rounded-full bg-[#EB791B] animate-ping opacity-20 group-hover:opacity-0 transition-opacity" />
              
              {/* Notification badge */}
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-[#0073E6] text-white rounded-full flex items-center justify-center text-xs"
              >
                1
              </motion.span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1
            }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 w-[380px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200 md:w-[380px] sm:bottom-4 sm:right-4"
            style={{ 
              height: isMinimized ? 'auto' : '600px',
              willChange: 'transform, opacity'
            }}
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-[#EB791B] to-[#D36D17] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-white">🤖</span>
                </div>
                <div>
                  <h3 className="text-white">Baku Engineering AI</h3>
                  <p className="text-white/80 text-xs">
                    {isTyping ? "Typing..." : "Online"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="w-8 h-8 hover:bg-white/20 rounded-lg flex items-center justify-center text-white transition-all duration-200 active:scale-95"
                  aria-label={isMinimized ? "Maximize" : "Minimize"}
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 hover:bg-white/20 rounded-lg flex items-center justify-center text-white transition-all duration-200 active:scale-95"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Content */}
            {!isMinimized && (
              <>
                {/* Messages Area */}
                <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex gap-3 ${
                          message.sender === "user" ? "flex-row-reverse" : ""
                        }`}
                      >
                        {/* Avatar */}
                        <div className={`flex-shrink-0 ${message.sender === "user" ? "" : ""}`}>
                          {message.sender === "assistant" ? (
                            <div className="w-8 h-8 bg-[#EB791B] rounded-full flex items-center justify-center">
                              <span className="text-white text-sm">🤖</span>
                            </div>
                          ) : (
                            <div className="w-8 h-8 bg-[#0073E6] rounded-full flex items-center justify-center">
                              <span className="text-white text-sm">👤</span>
                            </div>
                          )}
                        </div>

                        {/* Message Bubble */}
                        <div
                          className={`max-w-[75%] rounded-2xl px-4 py-2.5 ${
                            message.sender === "user"
                              ? "bg-[#0073E6] text-white"
                              : "bg-gray-100 text-gray-900"
                          }`}
                        >
                          <p className="whitespace-pre-wrap text-sm leading-relaxed">
                            {message.content}
                          </p>
                          <span
                            className={`text-xs mt-1 block ${
                              message.sender === "user"
                                ? "text-white/70"
                                : "text-gray-500"
                            }`}
                          >
                            {message.timestamp.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                      </div>
                    ))}

                    {/* Typing Indicator */}
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="flex gap-3"
                      >
                        <div className="w-8 h-8 bg-[#EB791B] rounded-full flex items-center justify-center">
                          <span className="text-white text-sm">🤖</span>
                        </div>
                        <div className="bg-gray-100 rounded-2xl px-4 py-3">
                          <div className="flex gap-1.5">
                            <motion.div
                              animate={{ y: [0, -5, 0] }}
                              transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                              className="w-2 h-2 bg-gray-400 rounded-full"
                            />
                            <motion.div
                              animate={{ y: [0, -5, 0] }}
                              transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                              className="w-2 h-2 bg-gray-400 rounded-full"
                            />
                            <motion.div
                              animate={{ y: [0, -5, 0] }}
                              transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                              className="w-2 h-2 bg-gray-400 rounded-full"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </ScrollArea>

                {/* Quick Actions */}
                {messages.length === 1 && (
                  <div className="px-4 pb-3">
                    <p className="text-xs text-gray-500 mb-2">Quick actions:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {quickActions.map((action) => (
                        <button
                          key={action}
                          onClick={() => handleSendMessage(action)}
                          className="text-xs px-3 py-2 bg-white border border-gray-200 rounded-lg hover:border-[#EB791B] hover:text-[#EB791B] text-gray-700 transition-all duration-200 text-left active:scale-98"
                          disabled={isTyping}
                        >
                          {action}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input Area */}
                <div className="border-t border-gray-200 p-4 bg-gray-50">
                  <div className="flex gap-2">
                    <Input
                      ref={inputRef}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 border-gray-300 focus:border-[#EB791B] focus:ring-[#EB791B]"
                      disabled={isTyping}
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || isTyping}
                      className="bg-[#EB791B] hover:bg-[#D36D17] text-white transition-colors duration-200 active:scale-95"
                      size="icon"
                    >
                      {isTyping ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <Send className="w-5 h-5" />
                      )}
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Powered by Baku Engineering AI
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
