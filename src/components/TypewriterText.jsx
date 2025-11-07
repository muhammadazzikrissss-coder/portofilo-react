// src/components/TypewriterText.jsx
import { useEffect, useState } from 'react';

export default function TypewriterText() {
  const text = "SIMPLIFY.\nCREATE.\nINSPIRE.";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100; // Hapus lebih cepat dari ngetik
    const pauseDelay = 1500; // Jeda di akhir sebelum hapus

    const timeoutId = setTimeout(() => {
      if (!isDeleting && charIndex < text.length) {
        // Sedang mengetik
        setDisplayedText(text.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        // Sedang menghapus
        setDisplayedText(text.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === text.length) {
        // Selesai ngetik → jeda → mulai hapus
        setTimeout(() => setIsDeleting(true), pauseDelay);
      } else if (isDeleting && charIndex === 0) {
        // Selesai hapus → lanjut ke loop berikutnya
        setIsDeleting(false);
        setLoopIndex(loopIndex + 1); // Trigger re-render loop
        // charIndex tetap 0, nanti mulai ngetik lagi
      }
    }, typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [charIndex, isDeleting, loopIndex, text]);

  return (
    <h1 className="typewriter-text">
      {displayedText}
      <span className="cursor">|</span>
    </h1>
  );
}