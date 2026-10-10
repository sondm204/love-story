'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Star, Music, Coffee, ArrowDown, X } from 'lucide-react';

// --- CONFIGURATION: YOUR STORY ---
const TIMELINE_EVENTS = [
  { 
    date: "", 
    title: "Ngày Đầu Tiên Chúng Ta Gặp Nhau", 
    desc: "Ngày cuộc đời anh thay đổi mãi mãi. Anh đã rất hồi hộp, còn em thì thật hoàn hảo.", 
    photo: "/First_meet.jpeg" 
  },
  { 
    date: "", 
    title: "Những Khoảnh Khắc Hạnh Phúc", 
    desc: "Khoảnh khắc anh nhận ra em chính là người anh luôn tìm kiếm. Anh vẫn nhớ ngày hôm ấy.", 
    photo: "/Happy_moment.jpeg" 
  },
  { 
    date: "", 
    title: "Lần Đầu Nắm Tay", 
    desc: "Khoảnh khắc đáng yêu khi chúng ta lần đầu nắm tay nhau. Anh cứ ngỡ mình đang ở trong một giấc mơ.", 
    photo: "/tag.jpeg" 
  },
];

const LOVE_REASONS = [
  { icon: <Heart />, title: "Sự Tử Tế Của Em", reason: "Em luôn đối xử với mọi người bằng sự tôn trọng và yêu thương." },
  { icon: <Star />, title: "Đôi Mắt Của Em", reason: "Anh có thể đắm chìm trong đôi mắt ấy hàng giờ liền." },
  { icon: <Music />, title: "Tiếng Cười Của Em", reason: "Đó chính là âm thanh anh yêu thích nhất trên đời." },
  { icon: <Coffee />, title: "Sự Đồng Hành Của Em", reason: "Em tin tưởng anh ngay cả khi chính anh còn nghi ngờ bản thân mình." },
];

const BULLET_POINTS = [
  "Nụ cười của em làm trái tim anh bừng sáng 😊",
  "Sự đáng yêu của em mỗi khi đói bụng 😄",
  "Cách em luôn ủng hộ những ước mơ của anh 💪",
  "Cách em ôm anh thật chặt 🤗",
];

const FUTURE_PROMISES = [
  "Cùng nhau đi khắp thế gian 🗼",
  "Xây dựng ngôi nhà mơ ước của chúng ta 🏠",
  "Cùng nhận nuôi một chú cún 🐶",
  "Cùng nhau già đi, dù đôi lúc có hơi khó tính 👴👵"
];

// ------------------------------------------------

export default function SurprisePage() {
  const [displayedText, setDisplayedText] = useState('');
  const [isFinishedTyping, setIsFinishedTyping] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ top: '50%', left: '70%' });
  
  // --- UPDATED LOVE LETTER ---
  const LOVE_LETTER = `Bava yêu dấu của anh,

Giữa một thế giới thường xuyên ồn ào và bộn bề, em là chốn bình yên mà anh luôn muốn trở về.

Càng hiểu em, anh càng nhận ra mình không cần quá nhiều lời để diễn tả cảm xúc. “Anh yêu em” là điều giản dị và chân thành nhất trong tim anh, nhưng lại chứa đựng tất cả lòng biết ơn vì em đã đến bên đời anh.

Cảm ơn em vì luôn ở bên anh, để chúng ta trở thành một đôi không hoàn hảo nhưng hoàn hảo theo cách riêng của mình.

Trong ánh sáng từ nụ cười của em, anh quên mất cả chính mình.
Dù hơi thở có ngừng lại, anh vẫn sẽ không bao giờ buông bỏ những ký ức về em.

Mãi mãi thuộc về em,
Bujiii ❤️`;
  // ---------------------------

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < LOVE_LETTER.length) {
        setDisplayedText((prev) => prev + LOVE_LETTER[index]);
        index++;
      } else {
        setIsFinishedTyping(true);
        clearInterval(timer);
      }
    }, 40); // Typing speed
    return () => clearInterval(timer);
  }, []);

  const moveNoButton = () => {
    const x = Math.random() * 80 + 10;
    const y = Math.random() * 80 + 10;
    setNoButtonPos({ top: `${y}%`, left: `${x}%` });
  };

  const handleYesClick = () => {
    const duration = 3000;
    const end = Date.now() + duration;
    const frame = () => {
      confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#ff0000', '#ffa500'] });
      confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#ff0000', '#ffa500'] });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
    setShowSuccess(true);
  };

  return (
    <div className="min-h-screen bg-rose-50 overflow-x-hidden">
      
      {/* SECTION 1: THE LETTER */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6 relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="bg-white max-w-2xl w-full min-h-[300px] p-8 md:p-12 shadow-2xl rounded-sm border border-stone-200 relative z-10"
          style={{ backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '100% 2rem' }}
        >
          <p className="text-xl md:text-2xl text-stone-800 leading-relaxed font-dancing whitespace-pre-wrap">
            {displayedText}<span className="animate-pulse">|</span>
          </p>
        </motion.div>
        
        {isFinishedTyping && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute bottom-10 text-rose-400 flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-sm font-sans font-medium tracking-widest uppercase">Cuộn xuống</span>
            <ArrowDown />
          </motion.div>
        )}
      </section>

      {/* SECTION 2: MEMORY LANE TIMELINE */}
      {isFinishedTyping && (
        <section id="timeline" className="py-20 px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-rose-600 mb-16 font-dancing">Hành Trình Kỷ Niệm</h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 h-full w-1 bg-rose-200 transform -translate-x-1/2"></div>
            {TIMELINE_EVENTS.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-rose-500 rounded-full border-4 border-white transform -translate-x-1/2 z-10"></div>
                <div className="ml-12 md:ml-0 md:w-1/2 px-4">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-rose-100">
                    <span className="inline-block px-3 py-1 bg-rose-100 text-rose-600 text-xs font-bold rounded-full mb-2">{event.date}</span>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.desc}</p>
                    <div className="w-full h-64 bg-rose-100 rounded-lg overflow-hidden relative shadow-inner group">
                         <img 
                           src={event.photo} 
                           alt={event.title} 
                           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                         />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 3: WHY I LOVE YOU */}
      {isFinishedTyping && (
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-rose-600 mb-16 font-dancing">Vì Sao Anh Yêu Em</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {LOVE_REASONS.map((item, index) => (
                <div key={index} className="group h-64 perspective-1000 cursor-pointer">
                  <div className="relative w-full h-full transition-all duration-500 transform style-preserve-3d group-hover:rotate-y-180 shadow-xl rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-rose-600 rounded-2xl flex flex-col items-center justify-center text-white backface-hidden">
                      <div className="mb-4 scale-150">{item.icon}</div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-xs mt-2 opacity-80">(Di chuột để xem)</p>
                    </div>
                    <div className="absolute inset-0 bg-white border-2 border-rose-200 rounded-2xl flex items-center justify-center p-6 text-center rotate-y-180 backface-hidden">
                      <p className="text-rose-600 font-medium font-dancing text-xl">{item.reason}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="max-w-2xl mx-auto bg-rose-50 p-8 rounded-3xl shadow-inner">
               <h3 className="text-2xl font-bold text-center text-rose-800 mb-6">Những Điều Khiến Em Thật Đặc Biệt</h3>
               <ul className="space-y-4">
                 {BULLET_POINTS.map((point, i) => (
                   <motion.li 
                     key={i}
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ delay: i * 0.2 }}
                     className="flex items-center gap-3 text-lg text-gray-700"
                   >
                     <Heart className="text-rose-500 fill-rose-500 w-5 h-5 flex-shrink-0" />
                     {point}
                   </motion.li>
                 ))}
               </ul>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 4: FUTURE PROMISES */}
      {isFinishedTyping && (
        <section className="py-20 px-6 max-w-4xl mx-auto text-center">
           <h2 className="text-4xl font-bold text-rose-600 mb-12 font-dancing">Tương Lai Của Chúng Ta</h2>
           <div className="flex flex-wrap justify-center gap-4">
             {FUTURE_PROMISES.map((promise, i) => (
               <motion.div 
                 key={i}
                 whileHover={{ scale: 1.1, rotate: 2 }}
                 className="bg-white border-2 border-rose-200 px-6 py-3 rounded-full shadow-sm text-rose-600 font-medium"
               >
                 {promise}
               </motion.div>
             ))}
           </div>
        </section>
      )}

      {/* SECTION 5: THE BIG QUESTION */}
      {isFinishedTyping && (
        <section className="py-32 flex flex-col items-center justify-center bg-gradient-to-t from-rose-100 to-white">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="text-center z-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-rose-600 mb-12 font-dancing drop-shadow-sm">
              Em sẽ là Valentine của anh nhé?
            </h2>

            <div className="flex gap-8 justify-center items-center relative h-32">
              <button
                onClick={handleYesClick}
                className="bg-rose-500 hover:bg-rose-600 text-white text-2xl font-bold py-4 px-10 rounded-full shadow-2xl transform transition hover:scale-110 active:scale-95 ring-4 ring-rose-200"
              >
                ĐỒNG Ý! 💖
              </button>

              <button
                onMouseEnter={moveNoButton}
                onClick={moveNoButton}
                style={{ position: 'fixed', top: noButtonPos.top, left: noButtonPos.left, transition: 'all 0.3s ease' }}
                className="bg-gray-300 text-gray-600 text-xl font-bold py-3 px-8 rounded-full opacity-80 hover:opacity-100"
              >
                Không 🙄
              </button>
            </div>
          </motion.div>
        </section>
      )}

      {/* --- SUCCESS MODAL POP-UP --- */}
      <AnimatePresence>
        {showSuccess && (
          <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setShowSuccess(false)}
            />
            
            <motion.div 
              initial={{ scale: 0.5, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="bg-white rounded-3xl p-8 md:p-12 max-w-md w-full text-center shadow-2xl relative z-50 border-4 border-rose-200"
            >
              <button 
                onClick={() => setShowSuccess(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>

              <div className="flex justify-center mb-6">
                <motion.div
                   animate={{ scale: [1, 1.2, 1] }}
                   transition={{ repeat: Infinity, duration: 1.5 }}
                   className="bg-rose-100 p-6 rounded-full"
                >
                  <Heart className="w-16 h-16 text-rose-600 fill-rose-600" />
                </motion.div>
              </div>

              <h3 className="text-4xl font-bold text-rose-600 font-dancing mb-4">Anh Biết Mà! ❤️</h3>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Cảm ơn em vì đã khiến anh trở thành người hạnh phúc nhất. Anh hứa sẽ yêu em nhiều hơn sau mỗi ngày.
              </p>

              <button
                onClick={() => setShowSuccess(false)}
                className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform"
              >
                Cùng Ăn Mừng Nhé! 🥂
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      <style jsx global>{`
        .perspective-1000 { perspective: 1000px; }
        .style-preserve-3d { transform-style: preserve-3d; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .backface-hidden { backface-visibility: hidden; }
      `}</style>
    </div>
  );
}
