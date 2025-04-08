import { Articles } from "../types/types";

export const articles: Articles[] = [
  {
    id: 1,
    title: "Що таке TypeScript?",
    text: "TypeScript — це надмножина JavaScript, яка додає статичну типізацію.",
  },
  {
    id: 2,
    title: "Переваги використання React",
    text: "React дозволяє створювати компонентні інтерфейси та ефективно оновлювати DOM.",
  },
  {
    id: 3,
    title: "Основи Node.js",
    text: "Node.js — це середовище виконання JavaScript на сервері.",
  },
  {
    id: 4,
    title: "Вступ до Git",
    text: "Git — це система керування версіями для командної та індивідуальної розробки.",
  },
  {
    id: 5,
    title: "Що таке REST API?",
    text: "REST API — це архітектурний стиль для створення веб-сервісів.",
  },
  {
    id: 6,
    title: "CSS Grid vs Flexbox",
    text: "CSS Grid краще підходить для двовимірного розташування, а Flexbox — для лінійного.",
  },
  {
    id: 7,
    title: "Безпечне зберігання паролів",
    text: "Ніколи не зберігайте паролі у відкритому вигляді — використовуйте хешування з солью.",
  },
  {
    id: 8,
    title: "Що таке JWT?",
    text: "JWT — це JSON Web Token, який використовується для аутентифікації та передачі даних.",
  },
  {
    id: 9,
    title: "Використання useEffect у React",
    text: "Хук useEffect виконує побічні ефекти у функціональних компонентах.",
  },
  {
    id: 10,
    title: "Що таке Docker?",
    text: "Docker — це платформа для контейнеризації додатків, що забезпечує їхню портативність.",
  },
];

export function getArticleById(id: number) {
  const Article = articles.find((p) => p.id === id);
  return Article || { id: null, title: "", text: "Product not found" };
}
