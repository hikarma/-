// Инициализация карты
const map = L.map('mapContainer').setView([55.751244, 37.618423], 6); // Центр карты - Россия

// Добавляем слой карты OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Список достопримечательностей
const landmarks = [
    
    {
        name: "Станица Ленинградская, Краснодарский край",
        coords: [46.3209, 39.3946],
        description: "Уютное место с богатой историей и культурой Кубани."
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
    },
    {
        name: "Станица Ленинградская, Краснодарский край",
        coords: [46.3209, 39.3946],
        description: "Уютное место с богатой историей и культурой Кубани."
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

