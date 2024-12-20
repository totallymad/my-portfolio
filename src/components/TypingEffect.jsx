import { useState, useEffect } from "react";

export default function TypingEffect() {
  // Массив с фразами, которые будут выводиться на экране побуквенно
  const phrases = [
    "WEB - разработчик",
    "UX/UI - разработчик",
    "UX/UI - дизайнер",
  ];

  // Индекс текущей фразы из массива phrases
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  // Текст, который уже был выведен на экран
  const [displayedText, setDisplayedText] = useState("");

  // Индекс текущей буквы в текущей фразе
  const [letterIndex, setLetterIndex] = useState(0);

  // Определяет, идёт ли сейчас печать текста (true) или его удаление (false)
  const [isDeleting, setIsDeleting] = useState(false);

  // useEffect срабатывает каждый раз, когда изменяется letterIndex или currentPhraseIndex
  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    // Устанавливаем скорость для печати и удаления текста
    const typingSpeed = isDeleting ? 50 : 150; // Удаляем быстрее, чем печатаем

    const interval = setTimeout(() => {
      if (!isDeleting) {
        // Добавляем буквы по одной
        if (letterIndex < currentPhrase.length) {
          setDisplayedText((prev) => prev + currentPhrase[letterIndex]);
          setLetterIndex((prev) => prev + 1);
        } else {
          // Когда вся фраза напечатана, начинаем паузу перед удалением
          setTimeout(() => setIsDeleting(true), 1000); // Пауза 1 секунда перед удалением
        }
      } else {
        // Удаляем буквы по одной
        if (letterIndex > 0) {
          setDisplayedText((prev) => prev.slice(0, -1)); // Убираем последнюю букву
          setLetterIndex((prev) => prev - 1);
        } else {
          // Когда текст полностью удалён, переходим к следующей фразе
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length); // Переход к следующей фразе
        }
      }
    }, typingSpeed);

    // Очищаем интервал при изменении состояния
    return () => clearTimeout(interval);
  }, [letterIndex, isDeleting, currentPhraseIndex]); // Зависимости

  return (
    <div className="text-4xl font-bold bg-gradient-to-r from-emerald-500 to-emerald-50 bg-clip-text text-transparent">
      Я {displayedText}
    </div>
  );
}
