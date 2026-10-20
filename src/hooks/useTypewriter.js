import { useState, useEffect } from 'react';

export function useTypewriter(words = [], typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const currentWord = words[index] ?? '';

    // Quando terminou de digitar a palavra inteira
    if (!isDeleting && subIndex === currentWord.length) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(timeout);
    }

    // Quando terminou de apagar a palavra
    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    // Intervalo de digitação ou deleção
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index, words, typingSpeed, deletingSpeed, pauseDuration]);

  const currentText = (words?.[index] ?? '').substring(0, subIndex);

  return {
    currentText,
    isDeleting
  };
}
