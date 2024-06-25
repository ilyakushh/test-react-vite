import github from "../assets/Github.svg";
import instagram from "../assets/Instagram.svg";
import facebook from "../assets/Facebook.svg";
import webdev from "../assets/web development.svg";
import mobdev from "../assets/web development.svg";
import design from "../assets/web development.svg";
import university from "../assets/University.svg";
import cources from "../assets/Courses.svg";
import developer from "../assets/Developer.svg";
import designer from "../assets/designer.svg";
import html from "../assets/html5.svg";
import css from "../assets/css3.svg";
import js from "../assets/JS.svg";
import mongodb from "../assets/Mongo.db.svg";
import nodeJS from "../assets/Node.js.svg";
import jquery from "../assets/Jquery.svg";
import react from "../assets/React.svg";
import telegram from "../assets/Telegram.svg";

export const linkIcons = [github, instagram, facebook];

export const skillsData = [
  {
    alt: "web development",
    image: webdev,
    name: "Web-разработка",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    alt: "Mobile",
    image: mobdev,
    name: "Разработка приложений",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    alt: "Design",
    image: design,
    name: "UI/UX Design",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const educationData = [
  {
    title: "МГТУ им. Н. Э. Баумана",
    image: university,
    subtitle: "Диплом магистра | Москва (2014-2020)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo. ",
  },
  {
    title: "Udemy",
    image: cources,
    subtitle: "Курсы по Web-разработке",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo. ",
  },
];

export const experienceData = [
  {
    title: "Front-End Developer",
    image: developer,
    subtitle: "EPAM | Москва (2018-2019)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo. ",
  },
  {
    title: "UI/UX Designer",
    image: designer,
    subtitle: "Squad Team | Москва (2018)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo. ",
  },
];

export const skills = [
  {
    image: html,
    title: "HTML5",
    description:
      "Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более SEO-оптимизированную структуру вашего продукта",
  },
  {
    image: css,
    title: "CSS3",
    description:
      "Этот язык стилей позволяет мне создавать абсолютно любой внешний вид вашего сайта или приложения. Все ограничивается только вашей фантазией!",
  },
  {
    image: js,
    title: "Java Script",
    description:
      "Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое",
  },
  {
    image: jquery,
    title: "Jquery",
    description:
      "Библиотека Jquery позволит ускорить разработку. Без необходимости интегрировать в проект мы её не будем, но навык работы с ней присутствует",
  },
  {
    image: react,
    title: "React",
    description:
      "Эта библиотека позволяет создавать web-приложения. Мы можем создать максимально интерактивный продукт именно под ваши цели",
  },
  {
    image: nodeJS,
    title: "Node.js",
    description:
      "Эта платформа позволяет создавать бэкенд для вашего продукта - “мозги”, которые будут выполнять действия, которые пользователь не видит",
  },
  {
    image: mongodb,
    title: "Mongo.db",
    description:
      "Это нереляционная база данных, которая будет хранить данные вашего сайта или приложения",
  },
];

export const abilities = [
  {
    title: "Создание сайтов",
    percent: 100,
  },
  {
    title: "Создание приложений",
    percent: 85,
  },
  {
    title: "Работа с данными",
    percent: 90,
  },
  {
    title: "Креативность",
    percent: 75,
  },
  {
    title: "Создание дизайна",
    percent: 90,
  },
  {
    title: "Soft skills",
    percent: 95,
  },
];

export const pricesData = [
  {
    title: "Landing-page",
    price: "от 8000 руб.",
    description: "Одностраничный сайт для презентации услуг/товаров/...",
  },
  {
    title: "Web-приложение",
    price: "от 28000 руб.",
    description: "Приложение внутри браузера для лучшего комфорта",
  },
  {
    title: "Корпоративный сайт",
    price: "от 20000 руб.",
    description: "Сайт для вашего бизнеса или компании",
  },
  {
    title: "Android/IOS Приложение",
    price: "от 25000 руб.",
    description: "Приложение для смартфона любой ОС",
  },
  {
    title: "Интернет-магазин",
    price: "от 30000 руб.",
    description: "Инструмент для ваших продаж в сети",
  },
  {
    title: "Дизайн",
    price: "Индивидуально",
    description: "Создам дизайн для вашего сайта/приложения...",
  },
];

export const socialNetworks = [facebook, telegram, instagram];

export const navMenu = [
  "ПРО МЕНЯ",
  "МОЙ ОПЫТ",
  "МОИ НАВЫКИ",
  "МОИ РАБОТЫ",
  "ПРАЙС-ЛИСТ",
  "КОНТАКТЫ",
];
