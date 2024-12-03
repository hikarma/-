document.addEventListener('DOMContentLoaded', () => {
    // Инициализация карты
    const map = L.map('mapContainer').setView([55.7558, 37.6173], 10); // Москва, Россия

    // Добавление базового слоя карты
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Добавление маркеров достопримечательностей
    const landmarks = [
        {
            name: "Красная площадь",
            coords: [55.7539, 37.6208],
            description: "Знаменитая площадь Москвы и символ России."
        },
        {
            name: "Парк Горького",
            coords: [55.7294, 37.6034],
            description: "Центральный парк культуры и отдыха."
        },
        {
            name: "Третьяковская галерея",
            coords: [55.7414, 37.6203],
            description: "Известный музей искусства."
        }
    ];

    landmarks.forEach(landmark => {
        const marker = L.marker(landmark.coords).addTo(map);
        marker.bindPopup(`<b>${landmark.name}</b><br>${landmark.description}`);
    });

    // Прокрутка к секциям
    window.scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };

    // Обработка формы контактов
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert("Ваше сообщение отправлено!");
        contactForm.reset();
    });
});
// Инициализация карты
const map = L.map('mapContainer').setView([55.751244, 37.618423], 6); // Координаты центра России

// Добавляем слой карты OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Список достопримечательностей
const landmarks = [
    {
        name: "Красная площадь, Москва",
        coords: [55.753215, 37.622504],
        description: "Главная площадь России, знаменитая историческими событиями."
    },
    {
        name: "Эрмитаж, Санкт-Петербург",
        coords: [59.939832, 30.314560],
        description: "Один из крупнейших музеев мира."
    },
    {
        name: "Байкал, Иркутская область",
        coords: [53.5587, 108.165],
        description: "Самое глубокое озеро в мире."
    }
];

// Добавляем метки на карту
landmarks.forEach(landmark => {
    const marker = L.marker(landmark.coords).addTo(map);
    marker.bindPopup(`<b>${landmark.name}</b><br>${landmark.description}`).openPopup();
});

// Событие на добавление новой метки
map.on('click', function(e) {
    const { lat, lng } = e.latlng;
    const newMarker = L.marker([lat, lng]).addTo(map);
    newMarker.bindPopup(`<b>Новая метка</b><br>Координаты: ${lat.toFixed(5)}, ${lng.toFixed(5)}`).openPopup();
});
