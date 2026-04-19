// --- 75 ПОПУЛЯРНЫХ ГОРОДОВ РОССИИ ---
const CITY_LIST = [
    "Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Казань", "Нижний Новгород", "Челябинск", "Самара", "Омск", "Ростов-на-Дону",
    "Уфа", "Красноярск", "Пермь", "Воронеж", "Волгоград", "Краснодар", "Саратов", "Тюмень", "Тольятти", "Ижевск",
    "Барнаул", "Ульяновск", "Иркутск", "Хабаровск", "Ярославль", "Владивосток", "Махачкала", "Томск", "Оренбург", "Кемерово",
    "Новокузнецк", "Рязань", "Астрахань", "Набережные Челны", "Пенза", "Киров", "Липецк", "Балашиха", "Чебоксары", "Калининград",
    "Тула", "Курск", "Ставрополь", "Севастополь", "Сочи", "Улан-Удэ", "Тверь", "Магнитогорск", "Иваново", "Брянск",
    "Белгород", "Сургут", "Владимир", "Нижний Тагил", "Архангельск", "Чита", "Калуга", "Симферополь", "Смоленск", "Волжский",
    "Курган", "Орёл", "Череповец", "Вологда", "Саранск", "Владикавказ", "Якутск", "Мурманск", "Подольск", "Тамбов",
    "Грозный", "Стерлитамак", "Петрозаводск", "Кострома", "Нижневартовск"
].sort();

// --- ТИПЫ ЖИВОТНЫХ ---
const PET_TYPES = [
    { id: 'all', name: 'Все', icon: 'fas fa-paw' },
    { id: 'dog', name: 'Собаки', icon: 'fas fa-dog' },
    { id: 'cat', name: 'Кошки', icon: 'fas fa-cat' },
    { id: 'bird', name: 'Птицы', icon: 'fas fa-dove' },
    { id: 'rodent', name: 'Грызуны', icon: 'fas fa-otter' },
    { id: 'fish', name: 'Рыбки', icon: 'fas fa-fish' }
];

// --- 43 РЕАЛЬНЫХ КЕЙСА ПИТОМЦЕВ ---
const REAL_PETS = [
    // СОБАКИ (10)
    { id: 1, name: 'Рекс', type: 'dog', breed: 'Немецкая овчарка', age: 3, weight: 35, weightUnit: 'кг', description: 'Верный и преданный пёс. Охраняет дом, любит детей, знает базовые команды.', img: 'https://images.unsplash.com/photo-1553882809-a4f57e01e8e6?w=400', forFoster: false, city: 'Москва', street: 'ул. Тверская, д. 15', ownerName: 'Анна', ownerType: 'person', ownerContact: 'anna@mail.ru', ownerReviews: 12 },
    { id: 2, name: 'Джесси', type: 'dog', breed: 'Хаски', age: 2, weight: 23, weightUnit: 'кг', description: 'Энергичная и дружелюбная хаски. Обожает бегать и играть.', img: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400', forFoster: true, city: 'Санкт-Петербург', street: 'ул. Невский пр., 42', ownerName: 'Приют "Добрые руки"', ownerType: 'shelter', ownerContact: '+7 (812) 111-22-33', ownerReviews: 156 },
    { id: 3, name: 'Бумер', type: 'dog', breed: 'Корги', age: 1, weight: 12, weightUnit: 'кг', description: 'Весёлый корги-мальчик. Короткие лапки, большое сердце.', img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400', forFoster: false, city: 'Екатеринбург', street: 'ул. Ленина, 10', ownerName: 'Алексей', ownerType: 'person', ownerContact: '+7 (343) 987-65-43', ownerReviews: 5 },
    { id: 4, name: 'Бетти', type: 'dog', breed: 'Мопс', age: 4, weight: 8, weightUnit: 'кг', description: 'Спокойная и ласковая мопсиха. Любит спать на коленях.', img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400', forFoster: false, city: 'Казань', street: 'ул. Баумана, 5', ownerName: 'Елена', ownerType: 'person', ownerContact: 'elena@mail.ru', ownerReviews: 15 },
    { id: 5, name: 'Рокки', type: 'dog', breed: 'Джек-рассел терьер', age: 5, weight: 7, weightUnit: 'кг', description: 'Активный охотник. Обожает копать ямы и гоняться за птицами.', img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400', forFoster: true, city: 'Новосибирск', street: 'ул. Красный пр., 28', ownerName: 'Приют "Верный друг"', ownerType: 'shelter', ownerContact: 'verdrug@mail.ru', ownerReviews: 89 },
    { id: 6, name: 'Альфа', type: 'dog', breed: 'Доберман', age: 2, weight: 32, weightUnit: 'кг', description: 'Элегантный и умный доберман. Отличный компаньон.', img: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400', forFoster: false, city: 'Краснодар', street: 'ул. Красная, 75', ownerName: 'Дмитрий', ownerType: 'person', ownerContact: '+7 (861) 456-78-90', ownerReviews: 7 },
    { id: 7, name: 'Граф', type: 'dog', breed: 'Лабрадор', age: 6, weight: 30, weightUnit: 'кг', description: 'Добрый лабрадор-пенсионер. Ищет спокойный дом.', img: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400', forFoster: false, city: 'Сочи', street: 'ул. Курортный пр., 88', ownerName: 'Ольга', ownerType: 'person', ownerContact: 'olga@mail.ru', ownerReviews: 9 },
    { id: 8, name: 'Лаки', type: 'dog', breed: 'Бульдог американский', age: 3, weight: 28, weightUnit: 'кг', description: 'Мощный и ласковый американский бульдог. Любит объятия.', img: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=400', forFoster: false, city: 'Ростов-на-Дону', street: 'ул. Большая Садовая, 33', ownerName: 'Сергей', ownerType: 'person', ownerContact: '+7 (863) 234-56-78', ownerReviews: 11 },
    { id: 9, name: 'Зевс', type: 'dog', breed: 'Ротвейлер', age: 4, weight: 42, weightUnit: 'кг', description: 'Серьёзный ротвейлер. Прошёл курс дрессировки.', img: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400', forFoster: true, city: 'Воронеж', street: 'ул. Плехановская, 14', ownerName: 'Приют "Лапка"', ownerType: 'shelter', ownerContact: 'lapka@mail.ru', ownerReviews: 67 },
    { id: 10, name: 'Чарли', type: 'dog', breed: 'Пудель', age: 2, weight: 9, weightUnit: 'кг', description: 'Умный пудель. Не линяет, подходит для квартиры.', img: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400', forFoster: false, city: 'Нижний Новгород', street: 'ул. Большая Покровская, 20', ownerName: 'Иван', ownerType: 'person', ownerContact: '+7 (831) 345-67-89', ownerReviews: 4 },
    // КОШКИ (7)
    { id: 11, name: 'Мурка', type: 'cat', breed: 'Мейн-кун', age: 2, weight: 8, weightUnit: 'кг', description: 'Величественная кошка. Спокойная и умная.', img: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400', forFoster: false, city: 'Москва', street: 'ул. Арбат, 12', ownerName: 'Анна', ownerType: 'person', ownerContact: 'anna@mail.ru', ownerReviews: 12 },
    { id: 12, name: 'Симба', type: 'cat', breed: 'Британская', age: 3, weight: 6, weightUnit: 'кг', description: 'Плюшевый британец с золотыми глазами.', img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400', forFoster: false, city: 'Санкт-Петербург', street: 'ул. Рубинштейна, 7', ownerName: 'Михаил', ownerType: 'person', ownerContact: '+7 (903) 123-45-67', ownerReviews: 8 },
    { id: 13, name: 'Луна', type: 'cat', breed: 'Сиамская', age: 1, weight: 4, weightUnit: 'кг', description: 'Голубоглазая сиамская кошка. Очень разговорчивая.', img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400', forFoster: true, city: 'Казань', street: 'ул. Петербургская, 18', ownerName: 'Приют "Котопёс"', ownerType: 'shelter', ownerContact: 'kotopes@mail.ru', ownerReviews: 45 },
    { id: 14, name: 'Багира', type: 'cat', breed: 'Бенгальская', age: 2, weight: 5, weightUnit: 'кг', description: 'Мини-леопард. Активная и игривая.', img: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400', forFoster: false, city: 'Екатеринбург', street: 'ул. Вайнера, 9', ownerName: 'Алексей', ownerType: 'person', ownerContact: '+7 (953) 987-65-43', ownerReviews: 5 },
    { id: 15, name: 'Персик', type: 'cat', breed: 'Персидская', age: 5, weight: 5, weightUnit: 'кг', description: 'Пушистое облачко. Требует ухода за шерстью.', img: 'https://images.unsplash.com/photo-1553882809-a4f57e01e8e6?w=400', forFoster: false, city: 'Краснодар', street: 'ул. Ставропольская, 45', ownerName: 'Дмитрий', ownerType: 'person', ownerContact: '+7 (902) 456-78-90', ownerReviews: 7 },
    { id: 16, name: 'Клео', type: 'cat', breed: 'Сфинкс', age: 2, weight: 4, weightUnit: 'кг', description: 'Горячая кошка без шерсти. Любит обниматься.', img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400', forFoster: true, city: 'Новосибирск', street: 'ул. Советская, 30', ownerName: 'Мария', ownerType: 'person', ownerContact: 'maria56@mail.ru', ownerReviews: 23 },
    { id: 17, name: 'Васька', type: 'cat', breed: 'Шотландская вислоухая', age: 1, weight: 4, weightUnit: 'кг', description: 'Круглый кот с висячими ушками.', img: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400', forFoster: false, city: 'Сочи', street: 'ул. Навагинская, 11', ownerName: 'Ольга', ownerType: 'person', ownerContact: 'olga13@mail.ru', ownerReviews: 9 },
    { id: 18, name: 'Горгий', type: 'cat', breed: 'Абиссинская', age: 3, weight: 5, weightUnit: 'кг', description: 'Спокойная и умная.', img: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400', forFoster: false, city: 'Москва', street: 'ул. Арбат, 12', ownerName: 'Анна', ownerType: 'person', ownerContact: 'anna@mail.ru', ownerReviews: 12 },
    // ПТИЦЫ (5)
    { id: 19, name: 'Кеша', type: 'bird', breed: 'Волнистый попугай', age: 2, weight: 40, weightUnit: 'г', description: 'Весёлый волнистик. Умеет говорить.', img: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400', forFoster: false, city: 'Москва', street: 'ул. Пятницкая, 8', ownerName: 'Анна', ownerType: 'person', ownerContact: 'anna41@mail.ru', ownerReviews: 12 },
    { id: 20, name: 'Гоша', type: 'bird', breed: 'Корелла', age: 3, weight: 90, weightUnit: 'г', description: 'Ручной попугай с жёлтым хохолком. Насвистывает мелодии.', img: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=400', forFoster: false, city: 'Санкт-Петербург', street: 'ул. Гороховая, 23', ownerName: 'Михаил', ownerType: 'person', ownerContact: '+7 (902) 697-93-67', ownerReviews: 8 },
    { id: 21, name: 'Жако', type: 'bird', breed: 'Жако', age: 2, weight: 400, weightUnit: 'г', description: 'Умный серый попугай. Знает более 50 слов.', img: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400', forFoster: true, city: 'Казань', street: 'ул. Чистопольская, 16', ownerName: 'Елена', ownerType: 'person', ownerContact: 'elena0915@mail.ru', ownerReviews: 15 },
    { id: 22, name: 'Желток', type: 'bird', breed: 'Канарейка', age: 1, weight: 25, weightUnit: 'г', description: 'Жёлтая канарейка-кенар. Прекрасно поёт, особенно по утрам. Неприхотлив в уходе.', img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400', forFoster: true, city: 'Казань', street: 'ул. Чистопольская, 16', ownerName: 'Елена', ownerType: 'person', ownerContact: 'elena15@mail.ru', ownerReviews: 15 },
    { id: 23, name: 'Георгий', type: 'bird', breed: 'Голубь белый', age: 2, weight: 250, weightUnit: 'г', description: 'Ручной голубишка очень умный', img: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=400', forFoster: false, city: 'Санкт-Петербург', street: 'ул. Гороховая, 23', ownerName: 'Михаил', ownerType: 'person', ownerContact: '+7 (902) 697-93-67', ownerReviews: 8 },
    // ГРЫЗУНЫ (8)
    { id: 24, name: 'Хома', type: 'rodent', breed: 'Сирийский хомяк', age: 1, weight: 150, weightUnit: 'г', description: 'Золотистый хомячок. Любит бегать в колесе.', img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400', forFoster: false, city: 'Екатеринбург', street: 'ул. Малышева, 21', ownerName: 'Алексей', ownerType: 'person', ownerContact: '+7 (343) 987-65-43', ownerReviews: 5 },
    { id: 25, name: 'Шуша', type: 'rodent', breed: 'Шиншилла', age: 2, weight: 600, weightUnit: 'г', description: 'Серая пушистая шиншилла. Любит купаться в песке.', img: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400', forFoster: false, city: 'Москва', street: 'ул. Профсоюзная, 43', ownerName: 'Наталья', ownerType: 'person', ownerContact: 'natalia@mail.ru', ownerReviews: 6 },
    { id: 26, name: 'Снежок', type: 'rodent', breed: 'Кролик', age: 1, weight: 1200, weightUnit: 'г', description: 'Белый декоративный кролик. Ручной.', img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400', forFoster: true, city: 'Краснодар', street: 'ул. Северная, 55', ownerName: 'Приют "Добрые руки"', ownerType: 'shelter', ownerContact: '+7 (812) 111-22-33', ownerReviews: 156 },
    { id: 27, name: 'Пушок', type: 'rodent', breed: 'Морская свинка', age: 2, weight: 900, weightUnit: 'г', description: 'Пушистая морская свинка. Очень общительная, любит когда гладят и дают вкусняшки.', img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400', forFoster: false, city: 'Новосибирск', street: 'ул. Ленина, 15', ownerName: 'Мария', ownerType: 'person', ownerContact: 'maria@mail.ru', ownerReviews: 23 },
    { id: 28, name: 'Кнопка', type: 'rodent', breed: 'Дегу', age: 1, weight: 250, weightUnit: 'г', description: 'Чилийская белочка дегу. Очень социальная, нуждается в паре. Любит песочные ванны.', img: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400', forFoster: true, city: 'Казань', street: 'ул. Баумана, 20', ownerName: 'Приют "Лапка"', ownerType: 'shelter', ownerContact: 'lapka@mail.ru', ownerReviews: 67 },
    { id: 29, name: 'Стрелка', type: 'rodent', breed: 'Крыса', age: 1, weight: 350, weightUnit: 'г', description: 'Умная декоративная крыса. Знает несколько трюков, очень ласковая и чистоплотная.', img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400', forFoster: false, city: 'Екатеринбург', street: 'ул. Вайнера, 5', ownerName: 'Алексей', ownerType: 'person', ownerContact: '+7 (343) 987-65-43', ownerReviews: 5 },
    { id: 30, name: 'Буся', type: 'rodent', breed: 'Бурундук', age: 2, weight: 100, weightUnit: 'г', description: 'Сибирский бурундук. Очень активный, любит делать запасы и бегать в колесе.', img: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400', forFoster: false, city: 'Краснодар', street: 'ул. Красная, 30', ownerName: 'Дмитрий', ownerType: 'person', ownerContact: '+7 (902) 456-78-90', ownerReviews: 7 },
    { id: 31, name: 'Маня', type: 'rodent', breed: 'Мышь', age: 1, weight: 30, weightUnit: 'г', description: 'Декоративная мышка-сатин. Шёлковая шёрстка, очень милая и компанейская.', img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400', forFoster: true, city: 'Сочи', street: 'ул. Курортная, 10', ownerName: 'Ольга', ownerType: 'person', ownerContact: 'olga@mail.ru', ownerReviews: 9 },
    // РЫБКИ (6)
    { id: 32, name: 'Золотинка', type: 'fish', breed: 'Золотая рыбка', age: 1, weight: 20, weightUnit: 'г', description: 'Крупная золотая рыбка. Живёт в аквариуме от 50л.', img: 'https://images.unsplash.com/photo-1553882809-a4f57e01e8e6?w=400', forFoster: false, city: 'Москва', street: 'ул. Академика Королёва, 12', ownerName: 'Анна', ownerType: 'person', ownerContact: 'anna@mail.ru', ownerReviews: 12 },
    { id: 33, name: 'Неончик', type: 'fish', breed: 'Неон', age: 1, weight: 1, weightUnit: 'г', description: 'Стайка из 10 неонов. Красиво светятся.', img: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400', forFoster: false, city: 'Санкт-Петербург', street: 'ул. Садовая, 34', ownerName: 'Михаил', ownerType: 'person', ownerContact: '+7 (921) 123-45-67', ownerReviews: 8 },
    { id: 34, name: 'Жемчуг', type: 'fish', breed: 'Гурами', age: 1, weight: 15, weightUnit: 'г', description: 'Жемчужный гурами. Мирная лабиринтовая рыбка с красивым узором из белых точек.', img: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400', forFoster: false, city: 'Санкт-Петербург', street: 'ул. Садовая, 15', ownerName: 'Михаил', ownerType: 'person', ownerContact: '+7 (903) 123-45-67', ownerReviews: 8 },
    { id: 35, name: 'Изумруд', type: 'fish', breed: 'Меченосец', age: 1, weight: 10, weightUnit: 'г', description: 'Стайка красных меченосцев. Активные живородящие рыбки, подходят для начинающих.', img: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400', forFoster: true, city: 'Екатеринбург', street: 'ул. Ленина, 50', ownerName: 'Приют "Котопёс"', ownerType: 'shelter', ownerContact: 'kotopes12@mail.ru', ownerReviews: 45 },
    { id: 36, name: 'Сапфир', type: 'fish', breed: 'Тернеция', age: 1, weight: 8, weightUnit: 'г', description: 'Стайка цветных тернеций. Неприхотливые харациновые рыбки, красиво смотрятся в стае.', img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400', forFoster: false, city: 'Новосибирск', street: 'ул. Красный пр., 60', ownerName: 'Мария', ownerType: 'person', ownerContact: 'maria48@mail.ru', ownerReviews: 23 },
    { id: 37, name: 'Топаз', type: 'fish', breed: 'Барбус', age: 1, weight: 12, weightUnit: 'г', description: 'Стайка суматранских барбусов. Очень подвижные и интересные рыбки для видового аквариума.', img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400', forFoster: false, city: 'Краснодар', street: 'ул. Северная, 25', ownerName: 'Дмитрий', ownerType: 'person', ownerContact: '+7 (953) 456-78-90', ownerReviews: 7 }
];

// --- БАЗА ДАННЫХ ---
const DB = {
    init() {
        // Заполняем 37 реальных анкет
        localStorage.setItem('pet_pets', JSON.stringify([]));
        const pets = [];
        REAL_PETS.forEach((petData, index) => {
            const ownerAvatar = petData.ownerType === 'shelter' ? 'fas fa-home' : 'fas fa-user-circle';
            pets.push({
                id: Date.now() + index + Math.random(),
                name: petData.name,
                breed: petData.breed,
                age: petData.age,
                weight: petData.weight,
                weightUnit: petData.weightUnit,
                description: petData.description,
                img: petData.img,
                type: petData.type,
                owner: `owner_${petData.name}_${index}`,
                ownerType: petData.ownerType,
                ownerName: petData.ownerName,
                ownerAvatar: ownerAvatar,
                ownerReviews: petData.ownerReviews,
                ownerCity: petData.city,
                ownerContact: petData.ownerContact,
                city: petData.city,
                street: petData.street,
                forFoster: petData.forFoster
            });
        });
        localStorage.setItem('pet_pets', JSON.stringify(pets));
        
        if (!localStorage.getItem('pet_users')) localStorage.setItem('pet_users', JSON.stringify([]));
        if (!localStorage.getItem('pet_favorites')) localStorage.setItem('pet_favorites', JSON.stringify({}));
        if (!localStorage.getItem('pet_chats')) localStorage.setItem('pet_chats', JSON.stringify({}));
        if (!localStorage.getItem('pet_reviews')) localStorage.setItem('pet_reviews', JSON.stringify({}));
        if (!localStorage.getItem('pet_currentUser')) localStorage.setItem('pet_currentUser', JSON.stringify(null));
        if (!localStorage.getItem('pet_theme')) localStorage.setItem('pet_theme', 'light');
        if (!localStorage.getItem('pet_avatars')) localStorage.setItem('pet_avatars', JSON.stringify({}));
    },
    getUsers() { return JSON.parse(localStorage.getItem('pet_users')) || []; },
    saveUser(user) { const users = this.getUsers(); users.push(user); localStorage.setItem('pet_users', JSON.stringify(users)); },
    updateUser(identifier, updates) {
        const users = this.getUsers();
        const idx = users.findIndex(u => u.email === identifier || u.phone === identifier);
        if (idx !== -1) {
            users[idx] = { ...users[idx], ...updates };
            localStorage.setItem('pet_users', JSON.stringify(users));
            if (DB.getCurrentUser()?.email === identifier || DB.getCurrentUser()?.phone === identifier) DB.setCurrentUser(users[idx]);
        }
    },
    findUser(login, password) { return this.getUsers().find(u => (u.email === login || u.phone === login) && u.password === password); },
    findUserByEmailOrPhone(login) { return this.getUsers().find(u => u.email === login || u.phone === login); },
    getPets() { return JSON.parse(localStorage.getItem('pet_pets')) || []; },
    addPet(pet) { const pets = this.getPets(); pet.id = Date.now() + Math.random(); pets.push(pet); localStorage.setItem('pet_pets', JSON.stringify(pets)); },
    updatePet(petId, updates) {
        const pets = this.getPets();
        const idx = pets.findIndex(p => p.id == petId);
        if (idx !== -1) {
            pets[idx] = { ...pets[idx], ...updates };
            localStorage.setItem('pet_pets', JSON.stringify(pets));
        }
    },
    getUserPets(userId) { return this.getPets().filter(p => p.owner === userId); },
    deletePet(petId) {
        const pets = this.getPets().filter(p => p.id != petId);
        localStorage.setItem('pet_pets', JSON.stringify(pets));
        const favs = this.getFavorites();
        for (const uid in favs) favs[uid] = favs[uid].filter(id => id != petId);
        localStorage.setItem('pet_favorites', JSON.stringify(favs));
    },
    getFavorites() { return JSON.parse(localStorage.getItem('pet_favorites')) || {}; },
    addFavorite(userId, petId) {
        const favs = this.getFavorites();
        if (!favs[userId]) favs[userId] = [];
        if (!favs[userId].includes(petId)) {
            favs[userId].push(petId);
            localStorage.setItem('pet_favorites', JSON.stringify(favs));
        }
    },
    removeFavorite(userId, petId) {
        const favs = this.getFavorites();
        if (favs[userId]) {
            favs[userId] = favs[userId].filter(id => id != petId);
            localStorage.setItem('pet_favorites', JSON.stringify(favs));
        }
    },
    getUserFavorites(userId) { return this.getFavorites()[userId] || []; },
    isFavorite(userId, petId) { return this.getUserFavorites(userId).includes(petId); },
    
    // --- ЧАТЫ: полное соответствие принципу из второй части ---
    getChats() { return JSON.parse(localStorage.getItem('pet_chats')) || {}; },
    saveChat(chatId, messages) { 
        const chats = this.getChats(); 
        chats[chatId] = messages; 
        localStorage.setItem('pet_chats', JSON.stringify(chats)); 
    },
    getUserChats(userId) {
        const chats = this.getChats();
        const userChats = [];
        for (const chatId in chats) {
            if (chatId.includes(userId) && chats[chatId].length > 0) {
                const petId = chatId.split('_').find(p => !p.includes('@') && !p.includes('+') && !p.includes('system'));
                const pet = this.getPets().find(p => p.id == petId);
                userChats.push({
                    chatId: chatId,
                    pet: pet,
                    lastMessage: chats[chatId][chats[chatId].length - 1],
                    messages: chats[chatId]
                });
            }
        }
        return userChats;
    },
    // --- КОНЕЦ БЛОКА ЧАТОВ ---
    
    getReviews() { return JSON.parse(localStorage.getItem('pet_reviews') || '{}'); },
    addReview(ownerId, review) {
        const reviews = this.getReviews();
        if (!reviews[ownerId]) reviews[ownerId] = [];
        reviews[ownerId].push({ ...review, date: new Date().toLocaleDateString() });
        localStorage.setItem('pet_reviews', JSON.stringify(reviews));
    },
    getOwnerReviews(ownerId) { return this.getReviews()[ownerId] || []; },
    getCurrentUser() { return JSON.parse(localStorage.getItem('pet_currentUser')); },
    setCurrentUser(user) { localStorage.setItem('pet_currentUser', JSON.stringify(user)); },
    getTheme() { return localStorage.getItem('pet_theme') || 'light'; },
    setTheme(theme) { localStorage.setItem('pet_theme', theme); },
    getAvatars() { return JSON.parse(localStorage.getItem('pet_avatars') || '{}'); },
    saveAvatar(userId, avatarData) { const avatars = this.getAvatars(); avatars[userId] = avatarData; localStorage.setItem('pet_avatars', JSON.stringify(avatars)); },
    getAvatar(userId) { return this.getAvatars()[userId] || null; }
};

DB.init();
if (DB.getTheme() === 'dark') document.body.classList.add('dark-theme');

// --- Глобальное состояние ---
let currentPage = 'auth';
let currentPetIndex = 0;
let filteredPets = [];
let currentChatId = null;
let currentUser = DB.getCurrentUser();
let activeFilter = 'all';
let accountType = 'person';
let justRegisteredUser = null;
let editingPetId = null;
let isGuest = false;
let selectedPet = null;
let selectedOwner = null;

let registrationState = {
    step: 'name',
    name: '',
    birthdate: '',
    email: '',
    phone: '',
    password: '',
    city: '',
    street: '',
    description: '',
    shelterName: ''
};

const app = document.getElementById('app');
const nav = document.getElementById('bottom-nav');
const GUEST_USER = {
    type: 'person',
    name: 'Гость',
    email: 'guest@guest.com',
    phone: '',
    city: 'Москва',
    description: '',
    isGuest: true
};

// --- Вспомогательные функции валидации ---
function isValidEmail(email) {
    const allowed = ['gmail.com', 'mail.com', 'yandex.ru'];
    const parts = email.split('@');
    return parts.length === 2 && allowed.includes(parts[1].toLowerCase());
}

function isValidPhone(phone) {
    return /^(\+7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(phone);
}

function isValidNickname(name) {
    return name.length >= 4 && name.length <= 16 && !/^\d+$/.test(name);
}

function isValidPassword(pass) {
    return pass.length >= 6;
}

function isValidPetName(name) {
    return name && name.length >= 2 && name.length <= 20 && name[0] === name[0].toUpperCase();
}

function filterPets() {
    let pets = DB.getPets().filter(p => p.owner !== (currentUser?.email || currentUser?.phone));
    if (activeFilter !== 'all') pets = pets.filter(p => p.type === activeFilter);
    return pets;
}

function renderAvatarElement(avatar, size = '60px') {
    if (avatar && avatar.startsWith('fas ')) {
        return `<div style="width:${size};height:${size};border-radius:50%;background:var(--accent);display:flex;align-items:center;justify-content:center;color:white;font-size:calc(${size} * 0.6);"><i class="${avatar}"></i></div>`;
    } else if (avatar && (avatar.startsWith('http') || avatar.startsWith('data:'))) {
        return `<div style="width:${size};height:${size};border-radius:50%;background-image:url('${avatar}');background-size:cover;background-position:center;"></div>`;
    } else {
        return `<div style="width:${size};height:${size};border-radius:50%;background:var(--accent);display:flex;align-items:center;justify-content:center;color:white;"><i class="fas fa-user"></i></div>`;
    }
}

// --- Основной рендер ---
function render() {
    if (!currentUser) {
        nav.style.display = 'none';
        if (currentPage === 'register') renderRegistration();
        else if (currentPage === 'accountType') renderAccountType();
        else if (currentPage === 'welcome') renderWelcome();
        else renderAuth();
    } else {
        nav.style.display = 'flex';
        const pages = {
            home: renderHome,
            favorites: renderFavorites,
            myListings: renderMyListings,
            chats: renderChatsList,
            profile: renderProfile,
            chat: renderChat,
            createListing: renderCreateListing,
            editListing: renderEditListing,
            petDetail: renderPetDetail,
            ownerProfile: renderOwnerProfile
        };
        (pages[currentPage] || renderHome)();
    }
    updateNavActive();
    document.body.style.overflow = (currentPage === 'home' && currentUser) ? 'hidden' : '';
    app.style.overflow = (currentPage === 'home' && currentUser) ? 'hidden' : '';
}

function updateNavActive() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.page === currentPage);
    });
    if (nav) {
        const items = nav.querySelectorAll('.nav-item');
        items.forEach(item => {
            item.style.width = `${100 / items.length}%`;
        });
    }
}

function showConfirmModal(title, message, onConfirm, confirmText = 'Выйти') {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal">
            <h3>${title}</h3>
            <p>${message}</p>
            <div class="modal-actions">
                <button class="btn-outline" id="modal-cancel">Отмена</button>
                <button class="btn" id="modal-confirm">${confirmText}</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    document.getElementById('modal-cancel').onclick = () => modal.remove();
    document.getElementById('modal-confirm').onclick = () => {
        modal.remove();
        onConfirm();
    };
    modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
    };
}

// --- Экраны авторизации и регистрации ---
function renderWelcome() {
    const userName = justRegisteredUser?.name || justRegisteredUser?.shelterName || 'друг';
    app.innerHTML = `
        <div class="auth-container">
            <div class="auth-box">
                <div class="app-title">${userName}, рады тебя видеть!</div>
                <p style="text-align:center;color:var(--text-secondary);margin:10px 0 30px;">Аккаунт создан</p>
                <button class="btn" id="welcome-login-btn">Войти</button>
            </div>
        </div>
    `;
    document.getElementById('welcome-login-btn').onclick = () => {
        currentPage = 'auth';
        justRegisteredUser = null;
        renderAuth();
    };
}

function renderAuth() {
    app.innerHTML = `
        <div class="auth-container">
            <div class="auth-box">
                <div class="app-title">Лапо-Знакомства</div>
                <button class="btn" id="login-btn">Войти</button>
                <button class="btn btn-outline" id="create-profile-btn">Создать профиль</button>
                <button class="btn btn-outline" id="guest-btn" style="margin-top:10px;border-color:var(--text-secondary);color:var(--text-secondary);">
                    <i class="fas fa-user"></i> Войти как гость
                </button>
            </div>
        </div>
    `;
    document.getElementById('login-btn').onclick = renderLoginForm;
    document.getElementById('create-profile-btn').onclick = () => {
        currentPage = 'accountType';
        renderAccountType();
    };
    document.getElementById('guest-btn').onclick = () => {
        isGuest = true;
        currentUser = { ...GUEST_USER };
        DB.setCurrentUser(currentUser);
        currentPage = 'home';
        render();
    };
}

function renderLoginForm() {
    app.innerHTML = `
        <div class="auth-container">
            <div class="auth-box">
                <div class="app-title">Вход</div>
                <div class="auth-form">
                    <input type="text" id="login-input" placeholder="Email или телефон">
                    <input type="password" id="login-password" placeholder="Пароль">
                    <div id="login-error" class="error-message"></div>
                    <button class="btn" id="login-submit">Войти</button>
                    <div class="link" id="back-to-auth">Назад</div>
                </div>
            </div>
        </div>
    `;
    document.getElementById('login-submit').onclick = login;
    document.getElementById('back-to-auth').onclick = renderAuth;
}

function login() {
    const login = document.getElementById('login-input').value.trim();
    const pass = document.getElementById('login-password').value;
    const err = document.getElementById('login-error');
    if (!login) {
        err.textContent = 'Введите email или телефон';
        return;
    }
    if (!pass) {
        err.textContent = 'Введите пароль';
        return;
    }
    const user = DB.findUser(login, pass);
    if (user) {
        isGuest = false;
        currentUser = user;
        DB.setCurrentUser(user);
        currentPage = 'home';
        render();
    } else {
        err.textContent = 'Неверный логин или пароль';
    }
}

function renderAccountType() {
    app.innerHTML = `
        <div class="onboarding-container">
            <div class="onboarding-header">
                <button class="back-btn" id="back-to-auth"><i class="fas fa-arrow-left"></i></button>
            </div>
            <div class="onboarding-content">
                <div class="onboarding-title">Выберите тип аккаунта</div>
                <div class="account-type-selector">
                    <div class="account-type-btn ${accountType === 'person' ? 'active' : ''}" data-type="person">
                        <i class="fas fa-user"></i><span>Персона</span>
                    </div>
                    <div class="account-type-btn ${accountType === 'shelter' ? 'active' : ''}" data-type="shelter">
                        <i class="fas fa-home"></i><span>Приют</span>
                    </div>
                </div>
            </div>
            <button class="continue-btn" id="continue-type">Продолжить</button>
        </div>
    `;
    document.getElementById('back-to-auth').onclick = () => {
        currentPage = 'auth';
        render();
    };
    document.querySelectorAll('.account-type-btn').forEach(btn => {
        btn.onclick = () => {
            accountType = btn.dataset.type;
            document.querySelectorAll('.account-type-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        };
    });
    document.getElementById('continue-type').onclick = () => {
        currentPage = 'register';
        registrationState = {
            step: accountType === 'person' ? 'name' : 'shelterName',
            name: '',
            birthdate: '',
            email: '',
            phone: '',
            password: '',
            city: '',
            street: '',
            description: '',
            shelterName: ''
        };
        renderRegistration();
    };
}

function renderRegistration() {
    const s = registrationState;
    
    if (s.step === 'name') {
        app.innerHTML = `
            <div class="onboarding-container">
                <div class="onboarding-header">
                    <button class="back-btn" id="back-btn"><i class="fas fa-arrow-left"></i></button>
                </div>
                <div class="onboarding-content">
                    <div class="onboarding-title">Как тебя зовут?</div>
                    <div class="input-with-icon">
                        <i class="fas fa-user"></i>
                        <input type="text" id="reg-name" placeholder="Ваше имя" maxlength="16" value="${s.name}">
                    </div>
                    <div id="error-msg" class="error-message"></div>
                </div>
                <button class="continue-btn" id="continue-btn">Продолжить</button>
            </div>
        `;
        document.getElementById('back-btn').onclick = () => {
            currentPage = 'accountType';
            renderAccountType();
        };
        document.getElementById('continue-btn').onclick = () => {
            const name = document.getElementById('reg-name').value.trim();
            if (!isValidNickname(name)) {
                document.getElementById('error-msg').textContent = 'Имя от 4 до 16 символов, не только цифры';
                return;
            }
            s.name = name;
            s.step = 'birthdate';
            renderRegistration();
        };
    } 
    else if (s.step === 'birthdate') {
        app.innerHTML = `
            <div class="onboarding-container">
                <div class="onboarding-header">
                    <button class="back-btn" id="back-btn"><i class="fas fa-arrow-left"></i></button>
                </div>
                <div class="onboarding-content">
                    <div class="onboarding-title">Дата рождения</div>
                    <div class="input-with-icon">
                        <i class="fas fa-calendar"></i>
                        <input type="text" id="reg-birthdate" placeholder="ДД.ММ.ГГГГ" value="${s.birthdate}">
                    </div>
                    <div id="error-msg" class="error-message"></div>
                </div>
                <button class="continue-btn" id="continue-btn">Продолжить</button>
            </div>
        `;
        document.getElementById('back-btn').onclick = () => {
            s.step = 'name';
            renderRegistration();
        };
        const inp = document.getElementById('reg-birthdate');
        inp.addEventListener('input', e => {
            let v = e.target.value.replace(/\D/g, '');
            if (v.length >= 2) v = v.slice(0, 2) + '.' + v.slice(2);
            if (v.length >= 5) v = v.slice(0, 5) + '.' + v.slice(5, 9);
            e.target.value = v.slice(0, 10);
        });
        document.getElementById('continue-btn').onclick = () => {
            const bd = inp.value.trim();
            const m = bd.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
            if (!m) {
                document.getElementById('error-msg').textContent = 'Формат ДД.ММ.ГГГГ';
                return;
            }
            const d = +m[1], mo = +m[2], y = +m[3];
            const date = new Date(y, mo - 1, d);
            if (date.getDate() !== d || date.getMonth() !== mo - 1) {
                document.getElementById('error-msg').textContent = 'Некорректная дата';
                return;
            }
            const age = new Date().getFullYear() - y - (new Date().getMonth() < mo - 1 || (new Date().getMonth() === mo - 1 && new Date().getDate() < d) ? 1 : 0);
            if (age < 14) {
                document.getElementById('error-msg').textContent = 'Минимум 14 лет';
                return;
            }
            if (age > 100) {
                document.getElementById('error-msg').textContent = 'Слишком большой возраст';
                return;
            }
            s.birthdate = bd;
            s.step = 'email';
            renderRegistration();
        };
    } 
    else if (s.step === 'email') {
        app.innerHTML = `
            <div class="onboarding-container">
                <div class="onboarding-header">
                    <button class="back-btn" id="back-btn"><i class="fas fa-arrow-left"></i></button>
                </div>
                <div class="onboarding-content">
                    <div class="onboarding-title">Твоя почта</div>
                    <div class="input-with-icon">
                        <i class="fas fa-envelope"></i>
                        <input type="email" id="reg-email" placeholder="example@gmail.com" value="${s.email}">
                    </div>
                    <div id="error-msg" class="error-message"></div>
                    <button class="btn btn-outline btn-small" id="no-email-btn">Нет почты?</button>
                </div>
                <button class="continue-btn" id="continue-btn">Продолжить</button>
            </div>
        `;
        document.getElementById('back-btn').onclick = () => {
            s.step = 'birthdate';
            renderRegistration();
        };
        document.getElementById('continue-btn').onclick = () => {
            const email = document.getElementById('reg-email').value.trim();
            if (!isValidEmail(email)) {
                document.getElementById('error-msg').textContent = 'Используйте gmail.com, mail.com или yandex.ru';
                return;
            }
            if (DB.findUserByEmailOrPhone(email)) {
                document.getElementById('error-msg').textContent = 'Уже используется';
                return;
            }
            s.email = email;
            s.phone = '';
            s.step = 'password';
            renderRegistration();
        };
        document.getElementById('no-email-btn').onclick = () => {
            s.step = 'phone';
            renderRegistration();
        };
    } 
    else if (s.step === 'phone') {
        app.innerHTML = `
            <div class="onboarding-container">
                <div class="onboarding-header">
                    <button class="back-btn" id="back-btn"><i class="fas fa-arrow-left"></i></button>
                </div>
                <div class="onboarding-content">
                    <div class="onboarding-title">Номер телефона</div>
                    <div class="input-with-icon">
                        <i class="fas fa-phone"></i>
                        <input type="tel" id="reg-phone" placeholder="+7 (999) 123-45-67" value="${s.phone}">
                    </div>
                    <div id="error-msg" class="error-message"></div>
                </div>
                <button class="continue-btn" id="continue-btn">Продолжить</button>
            </div>
        `;
        document.getElementById('back-btn').onclick = () => {
            s.step = 'email';
            renderRegistration();
        };
        document.getElementById('continue-btn').onclick = () => {
            const phone = document.getElementById('reg-phone').value.trim();
            if (!isValidPhone(phone)) {
                document.getElementById('error-msg').textContent = 'Некорректный номер';
                return;
            }
            if (DB.findUserByEmailOrPhone(phone)) {
                document.getElementById('error-msg').textContent = 'Уже используется';
                return;
            }
            s.phone = phone;
            s.email = '';
            s.step = 'password';
            renderRegistration();
        };
    } 
    else if (s.step === 'password' || s.step === 'shelterPassword') {
        const isShelter = s.step === 'shelterPassword';
        app.innerHTML = `
            <div class="onboarding-container">
                <div class="onboarding-header">
                    <button class="back-btn" id="back-btn"><i class="fas fa-arrow-left"></i></button>
                </div>
                <div class="onboarding-content">
                    <div class="onboarding-title">Придумай пароль</div>
                    <div class="input-with-icon">
                        <i class="fas fa-lock"></i>
                        <input type="password" id="reg-pass" placeholder="Минимум 6 символов" value="${s.password}">
                        <i class="fas fa-eye password-toggle" id="toggle-pass" style="right:15px;left:auto;"></i>
                    </div>
                    <div class="input-with-icon">
                        <i class="fas fa-lock"></i>
                        <input type="password" id="reg-pass-confirm" placeholder="Повтори пароль">
                        <i class="fas fa-eye password-toggle" id="toggle-confirm" style="right:15px;left:auto;"></i>
                    </div>
                    <div id="error-msg" class="error-message"></div>
                </div>
                <button class="continue-btn" id="continue-btn">${isShelter ? 'Зарегистрироваться' : 'Продолжить'}</button>
            </div>
        `;
        document.getElementById('back-btn').onclick = () => {
            s.step = isShelter ? 'shelterPhone' : (s.email ? 'email' : 'phone');
            renderRegistration();
        };
        const pi = document.getElementById('reg-pass');
        const ci = document.getElementById('reg-pass-confirm');
        document.getElementById('toggle-pass').onclick = () => {
            pi.type = pi.type === 'password' ? 'text' : 'password';
        };
        document.getElementById('toggle-confirm').onclick = () => {
            ci.type = ci.type === 'password' ? 'text' : 'password';
        };
        document.getElementById('continue-btn').onclick = () => {
            const p1 = pi.value;
            const p2 = ci.value;
            if (!isValidPassword(p1)) {
                document.getElementById('error-msg').textContent = 'Минимум 6 символов';
                return;
            }
            if (p1 !== p2) {
                document.getElementById('error-msg').textContent = 'Пароли не совпадают';
                return;
            }
            s.password = p1;
            if (isShelter) {
                const newUser = {
                    type: 'shelter',
                    shelterName: s.shelterName,
                    city: s.city,
                    street: s.street,
                    phone: s.phone,
                    email: '',
                    password: s.password,
                    description: ''
                };
                DB.saveUser(newUser);
                justRegisteredUser = newUser;
                currentPage = 'welcome';
                registrationState = {
                    step: 'name',
                    name: '',
                    birthdate: '',
                    email: '',
                    phone: '',
                    password: '',
                    city: '',
                    street: '',
                    description: '',
                    shelterName: ''
                };
                render();
            } else {
                s.step = 'city';
                renderRegistration();
            }
        };
    } 
    else if (s.step === 'city') {
        const opts = CITY_LIST.map(c => `<option value="${c}">`).join('');
        app.innerHTML = `
            <div class="onboarding-container">
                <div class="onboarding-header">
                    <button class="back-btn" id="back-btn"><i class="fas fa-arrow-left"></i></button>
                </div>
                <div class="onboarding-content">
                    <div class="onboarding-title">Твой город</div>
                    <div class="onboarding-input-wrapper">
                        <i class="fas fa-map-marker-alt"></i>
                        <input type="text" id="reg-city" placeholder="Начните вводить" class="onboarding-input" list="city-list" autocomplete="off" value="${s.city}">
                        <datalist id="city-list">${opts}</datalist>
                    </div>
                    <div id="error-msg" class="error-message"></div>
                </div>
                <button class="continue-btn" id="continue-btn">Зарегистрироваться</button>
            </div>
        `;
        document.getElementById('back-btn').onclick = () => {
            s.step = 'password';
            renderRegistration();
        };
        document.getElementById('continue-btn').onclick = () => {
            const city = document.getElementById('reg-city').value.trim();
            if (!city || !CITY_LIST.includes(city)) {
                document.getElementById('error-msg').textContent = 'Выберите город из списка';
                return;
            }
            const newUser = {
                type: 'person',
                name: s.name,
                birthdate: s.birthdate,
                email: s.email,
                phone: s.phone,
                password: s.password,
                city: city,
                description: ''
            };
            DB.saveUser(newUser);
            justRegisteredUser = newUser;
            currentPage = 'welcome';
            registrationState = {
                step: 'name',
                name: '',
                birthdate: '',
                email: '',
                phone: '',
                password: '',
                city: '',
                street: '',
                description: '',
                shelterName: ''
            };
            render();
        };
    } 
    else if (s.step === 'shelterName') {
        app.innerHTML = `
            <div class="onboarding-container">
                <div class="onboarding-header">
                    <button class="back-btn" id="back-btn"><i class="fas fa-arrow-left"></i></button>
                </div>
                <div class="onboarding-content">
                    <div class="onboarding-title">Название приюта</div>
                    <div class="input-with-icon">
                        <i class="fas fa-home"></i>
                        <input type="text" id="reg-shelter" placeholder="Название" maxlength="50" value="${s.shelterName}">
                    </div>
                    <div id="error-msg" class="error-message"></div>
                </div>
                <button class="continue-btn" id="continue-btn">Продолжить</button>
            </div>
        `;
        document.getElementById('back-btn').onclick = () => {
            currentPage = 'accountType';
            renderAccountType();
        };
        document.getElementById('continue-btn').onclick = () => {
            const name = document.getElementById('reg-shelter').value.trim();
            if (name.length < 2) {
                document.getElementById('error-msg').textContent = 'Минимум 2 символа';
                return;
            }
            s.shelterName = name;
            s.step = 'shelterCity';
            renderRegistration();
        };
    } 
    else if (s.step === 'shelterCity') {
        const opts = CITY_LIST.map(c => `<option value="${c}">`).join('');
        app.innerHTML = `
            <div class="onboarding-container">
                <div class="onboarding-header">
                    <button class="back-btn" id="back-btn"><i class="fas fa-arrow-left"></i></button>
                </div>
                <div class="onboarding-content">
                    <div class="onboarding-title">Город приюта</div>
                    <div class="onboarding-input-wrapper">
                        <i class="fas fa-map-marker-alt"></i>
                        <input type="text" id="reg-city" placeholder="Начните вводить" class="onboarding-input" list="city-list" autocomplete="off" value="${s.city}">
                        <datalist id="city-list">${opts}</datalist>
                    </div>
                    <div id="error-msg" class="error-message"></div>
                </div>
                <button class="continue-btn" id="continue-btn">Продолжить</button>
            </div>
        `;
        document.getElementById('back-btn').onclick = () => {
            s.step = 'shelterName';
            renderRegistration();
        };
        document.getElementById('continue-btn').onclick = () => {
            const city = document.getElementById('reg-city').value.trim();
            if (!city || !CITY_LIST.includes(city)) {
                document.getElementById('error-msg').textContent = 'Выберите город из списка';
                return;
            }
            s.city = city;
            s.step = 'shelterStreet';
            renderRegistration();
        };
    } 
    else if (s.step === 'shelterStreet') {
        app.innerHTML = `
            <div class="onboarding-container">
                <div class="onboarding-header">
                    <button class="back-btn" id="back-btn"><i class="fas fa-arrow-left"></i></button>
                </div>
                <div class="onboarding-content">
                    <div class="onboarding-title">Адрес приюта</div>
                    <div class="input-with-icon">
                        <i class="fas fa-road"></i>
                        <input type="text" id="reg-street" placeholder="Улица и номер дома" value="${s.street}">
                    </div>
                    <div id="error-msg" class="error-message"></div>
                </div>
                <button class="continue-btn" id="continue-btn">Продолжить</button>
            </div>
        `;
        document.getElementById('back-btn').onclick = () => {
            s.step = 'shelterCity';
            renderRegistration();
        };
        document.getElementById('continue-btn').onclick = () => {
            const street = document.getElementById('reg-street').value.trim();
            if (street.length < 5) {
                document.getElementById('error-msg').textContent = 'Введите полный адрес';
                return;
            }
            s.street = street;
            s.step = 'shelterPhone';
            renderRegistration();
        };
    } 
    else if (s.step === 'shelterPhone') {
        app.innerHTML = `
            <div class="onboarding-container">
                <div class="onboarding-header">
                    <button class="back-btn" id="back-btn"><i class="fas fa-arrow-left"></i></button>
                </div>
                <div class="onboarding-content">
                    <div class="onboarding-title">Телефон владельца</div>
                    <div class="input-with-icon">
                        <i class="fas fa-phone"></i>
                        <input type="tel" id="reg-phone" placeholder="+7 (999) 123-45-67" value="${s.phone}">
                    </div>
                    <div id="error-msg" class="error-message"></div>
                </div>
                <button class="continue-btn" id="continue-btn">Продолжить</button>
            </div>
        `;
        document.getElementById('back-btn').onclick = () => {
            s.step = 'shelterStreet';
            renderRegistration();
        };
        document.getElementById('continue-btn').onclick = () => {
            const phone = document.getElementById('reg-phone').value.trim();
            if (!isValidPhone(phone)) {
                document.getElementById('error-msg').textContent = 'Некорректный номер';
                return;
            }
            if (DB.findUserByEmailOrPhone(phone)) {
                document.getElementById('error-msg').textContent = 'Номер уже используется';
                return;
            }
            s.phone = phone;
            s.step = 'shelterPassword';
            renderRegistration();
        };
    }
}

// --- ГЛАВНЫЙ ЭКРАН (свайпы) ---
function renderHome() {
    filteredPets = filterPets();
    const userId = currentUser.email || currentUser.phone;
    
    app.innerHTML = `
        <div class="page-container" style="overflow:hidden;height:100%;display:flex;flex-direction:column;padding:0;">
            <div class="header" style="flex-shrink:0;padding:16px 16px 0;">
                <div class="header-top">
                    <h2>Лапо-Знакомства</h2>
                    <div class="city-badge"><i class="fas fa-map-marker-alt"></i> ${currentUser.city}</div>
                </div>
                <div class="filter-chips">
                    ${PET_TYPES.map(t => `
                        <div class="filter-chip ${activeFilter === t.id ? 'active' : ''}" data-filter="${t.id}">
                            <i class="${t.icon}"></i> ${t.name}
                        </div>
                    `).join('')}
                </div>
            </div>
            ${filteredPets.length === 0 ? `
                <div style="text-align:center;padding:60px 20px;color:var(--text-secondary);flex:1;display:flex;flex-direction:column;justify-content:center;">
                    <i class="fas fa-paw" style="font-size:48px;margin-bottom:20px;opacity:0.5;"></i>
                    <h3>Питомцев пока нет</h3>
                </div>
            ` : (() => {
                if (currentPetIndex >= filteredPets.length) currentPetIndex = 0;
                const pet = filteredPets[currentPetIndex];
                return `
                    <div style="flex:1;display:flex;flex-direction:column;overflow:hidden;padding:12px;">
                        <div class="card" id="current-card" style="flex:1;position:relative;border-radius:28px;overflow:hidden;box-shadow:0 4px 20px var(--shadow);">
                            <div class="card-img" style="background-image:url('${pet.img}');height:60%;">
                                ${pet.forFoster ? '<span style="position:absolute;top:15px;left:15px;background:var(--success-color);color:white;padding:6px 12px;border-radius:30px;font-size:12px;">Передержка</span>' : ''}
                            </div>
                            <div class="card-info" style="height:40%;overflow-y:auto;padding:20px;">
                                <h3>${pet.name}, ${pet.age} ${pet.age === 1 ? 'год' : pet.age < 5 ? 'года' : 'лет'}</h3>
                                <p><i class="fas fa-paw"></i> ${pet.breed}</p>
                                <p><i class="fas fa-map-marker-alt"></i> ${pet.city || 'Не указан'}</p>
                                <div class="card-description"><p>${pet.description || ''}</p></div>
                            </div>
                        </div>
                    </div>
                `;
            })()}
        </div>
    `;
    
    if (filteredPets.length > 0) {
        const pet = filteredPets[currentPetIndex];
        const card = document.getElementById('current-card');
        let startX = 0, currentX = 0, isDragging = false, hasMoved = false;
        
        card.addEventListener('click', e => {
            if (!hasMoved) {
                selectedPet = pet;
                currentPage = 'petDetail';
                render();
            }
            hasMoved = false;
        });
        
        card.addEventListener('touchstart', e => {
            startX = e.touches[0].clientX;
            currentX = startX;
            card.style.transition = 'none';
            isDragging = false;
            hasMoved = false;
        });
        
        card.addEventListener('touchmove', e => {
            e.preventDefault();
            currentX = e.touches[0].clientX;
            const diff = currentX - startX;
            if (Math.abs(diff) > 10) {
                isDragging = true;
                hasMoved = true;
            }
            if (isDragging) {
                card.style.transform = `translateX(${diff}px) rotate(${diff * 0.1}deg)`;
            }
        });
        
        card.addEventListener('touchend', e => {
            card.style.transition = 'transform 0.3s ease';
            const diff = currentX - startX;
            if (isDragging && Math.abs(diff) > 100) {
                if (diff > 0) {
                    card.style.transform = 'translateX(500px) rotate(30deg)';
                    DB.addFavorite(userId, pet.id);
                    setTimeout(() => {
                        currentPetIndex++;
                        renderHome();
                    }, 200);
                } else {
                    card.style.transform = 'translateX(-500px) rotate(-30deg)';
                    setTimeout(() => {
                        currentPetIndex++;
                        renderHome();
                    }, 200);
                }
            } else {
                card.style.transform = '';
            }
            setTimeout(() => {
                isDragging = false;
                hasMoved = false;
            }, 100);
        });
    }
    
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            activeFilter = chip.dataset.filter;
            currentPetIndex = 0;
            renderHome();
        });
    });
}

// --- Детальная страница питомца ---
function renderPetDetail() {
    if (!selectedPet) {
        currentPage = 'home';
        render();
        return;
    }
    const pet = selectedPet;
    const ownerAvatarHtml = renderAvatarElement(pet.ownerAvatar, '60px');
    
    app.innerHTML = `
        <div class="page-container">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:15px;">
                <i class="fas fa-arrow-left" id="back-btn" style="cursor:pointer;"></i>
                <h2>${pet.name}</h2>
            </div>
            <div style="border-radius:20px;overflow:hidden;margin-bottom:20px;">
                <img src="${pet.img}" style="width:100%;height:300px;object-fit:cover;">
            </div>
            <div style="background:var(--bg-color);border-radius:20px;padding:20px;margin-bottom:20px;">
                <h3 style="margin-bottom:15px;">О питомце</h3>
                <p><i class="fas fa-paw" style="width:25px;color:var(--accent);"></i> <strong>Порода:</strong> ${pet.breed}</p>
                <p><i class="fas fa-birthday-cake" style="width:25px;color:var(--accent);"></i> <strong>Возраст:</strong> ${pet.age} ${pet.age === 1 ? 'год' : pet.age < 5 ? 'года' : 'лет'}</p>
                <p><i class="fas fa-weight-scale" style="width:25px;color:var(--accent);"></i> <strong>Вес:</strong> ${pet.weight} ${pet.weightUnit}</p>
                <p><i class="fas fa-map-marker-alt" style="width:25px;color:var(--accent);"></i> <strong>Город:</strong> ${pet.city}</p>
                <p><i class="fas fa-road" style="width:25px;color:var(--accent);"></i> <strong>Улица:</strong> ${pet.street || 'Не указана'}</p>
                <p><i class="fas fa-home" style="width:25px;color:var(--accent);"></i> <strong>Передержка:</strong> ${pet.forFoster ? 'Да' : 'Нет'}</p>
                <p style="margin-top:15px;padding-top:15px;border-top:1px solid var(--border-color);">
                    <i class="fas fa-info-circle" style="width:25px;color:var(--accent);"></i> ${pet.description}
                </p>
            </div>
            <div style="background:var(--bg-color);border-radius:20px;padding:20px;cursor:pointer;" id="owner-section">
                <div style="display:flex;align-items:center;gap:15px;">
                    ${ownerAvatarHtml}
                    <div style="flex:1;">
                        <h4>${pet.ownerName}</h4>
                        <p style="color:var(--text-secondary);"><i class="fas fa-star" style="color:#ffc107;"></i> ${pet.ownerReviews} отзывов</p>
                    </div>
                    <i class="fas fa-chevron-right" style="color:var(--text-secondary);"></i>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('back-btn').onclick = () => {
        currentPage = 'home';
        render();
    };
    
    document.getElementById('owner-section').onclick = () => {
        selectedOwner = {
            name: pet.ownerName,
            avatar: pet.ownerAvatar,
            reviews: pet.ownerReviews,
            city: pet.ownerCity,
            contact: pet.ownerContact,
            type: pet.ownerType,
            id: pet.owner
        };
        currentPage = 'ownerProfile';
        render();
    };
}

// --- Профиль владельца с отзывами ---
function renderOwnerProfile() {
    if (!selectedOwner) {
        currentPage = 'home';
        render();
        return;
    }
    const owner = selectedOwner;
    const reviews = DB.getOwnerReviews(owner.id) || [];
    const isSelfProfile = !isGuest && currentUser && (currentUser.email === owner.id || currentUser.phone === owner.id || currentUser.name === owner.name);
    const ownerAvatarHtml = renderAvatarElement(owner.avatar, '100px');
    
    app.innerHTML = `
        <div class="page-container">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:20px;">
                <i class="fas fa-arrow-left" id="back-btn" style="cursor:pointer;"></i>
                <h2>Профиль</h2>
            </div>
            <div style="text-align:center;margin-bottom:20px;">
                ${ownerAvatarHtml}
                <h3>${owner.name}</h3>
                <p style="color:var(--text-secondary);"><i class="fas fa-star" style="color:#ffc107;"></i> ${owner.reviews} отзывов</p>
                <div class="profile-type-badge" style="margin-top:10px;">${owner.type === 'shelter' ? 'Приют' : 'Частное лицо'}</div>
            </div>
            <div style="background:var(--bg-color);border-radius:20px;padding:20px;margin-bottom:20px;">
                <p><i class="fas fa-map-marker-alt" style="width:25px;color:var(--accent);"></i> ${owner.city}</p>
                <p><i class="fas fa-${owner.contact.includes('@') ? 'envelope' : 'phone'}" style="width:25px;color:var(--accent);"></i> ${owner.contact}</p>
            </div>
            <div style="margin-bottom:20px;">
                <h4>Отзывы (${reviews.length})</h4>
                ${reviews.length > 0 ? reviews.slice(0, 5).map(r => `
                    <div style="background:var(--bg-color);border-radius:15px;padding:15px;margin-bottom:10px;">
                        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
                            <div style="width:35px;height:35px;border-radius:50%;background:var(--accent);display:flex;align-items:center;justify-content:center;color:white;"><i class="fas fa-user"></i></div>
                            <div>
                                <p style="font-weight:600;">${r.author}</p>
                                <p style="font-size:12px;color:var(--text-secondary);">${r.date}</p>
                            </div>
                        </div>
                        <p>${r.text}</p>
                    </div>
                `).join('') : '<p style="color:var(--text-secondary);text-align:center;">Пока нет отзывов</p>'}
            </div>
            ${!isSelfProfile ? `
                <div style="background:var(--bg-color);border-radius:20px;padding:20px;">
                    <h4>Оставить отзыв</h4>
                    <textarea id="review-text" placeholder="Напишите ваш отзыв..." style="width:100%;padding:12px;border-radius:15px;border:1px solid var(--border-color);background:var(--input-bg);color:var(--text-color);min-height:100px;margin-bottom:10px;"></textarea>
                    <div id="review-error" class="error-message"></div>
                    <div id="review-success" class="success-message"></div>
                    <button class="btn" id="submit-review"><i class="fas fa-paper-plane"></i> Отправить</button>
                </div>
            ` : ''}
        </div>
    `;
    
    document.getElementById('back-btn').onclick = () => {
        currentPage = 'petDetail';
        render();
    };
    
    if (!isSelfProfile) {
        document.getElementById('submit-review').onclick = () => {
            const text = document.getElementById('review-text').value.trim();
            const err = document.getElementById('review-error');
            const suc = document.getElementById('review-success');
            err.textContent = suc.textContent = '';
            if (text.length < 5) {
                err.textContent = 'Отзыв должен содержать минимум 5 символов';
                return;
            }
            const author = isGuest ? 'Гость' : (currentUser.name || 'Пользователь');
            DB.addReview(owner.id, { author, text });
            suc.textContent = 'Отзыв отправлен!';
            document.getElementById('review-text').value = '';
            setTimeout(() => renderOwnerProfile(), 1000);
        };
    }
}

// --- Избранное ---
function renderFavorites() {
    const userId = currentUser.email || currentUser.phone;
    const pets = DB.getPets().filter(p => DB.getUserFavorites(userId).includes(p.id));
    
    app.innerHTML = `
        <div class="page-container">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:20px;">
                <i class="fas fa-arrow-left" id="back-btn" style="cursor:pointer;"></i>
                <h2>Избранное</h2>
            </div>
            ${pets.length ? `
                <div class="favorites-list">
                    ${pets.map(p => `
                        <div class="favorite-item" data-petid="${p.id}">
                            <div class="favorite-img" style="background-image:url('${p.img}')"></div>
                            <div class="favorite-info">
                                <h4>${p.name}, ${p.age} ${p.age === 1 ? 'год' : p.age < 5 ? 'года' : 'лет'}</h4>
                                <p>${p.breed}</p>
                            </div>
                            <div style="display:flex;gap:8px;">
                                <button class="favorite-chat-btn" data-id="${p.id}">Написать</button>
                                <button class="btn-outline btn-small" data-remove="${p.id}" style="border-radius:30px;padding:8px 12px;color:#ff4757;border-color:#ff4757;">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            ` : '<p style="text-align:center;">Нет избранных</p>'}
        </div>
    `;
    
    document.getElementById('back-btn').onclick = () => {
        currentPage = 'home';
        render();
    };
    
    document.querySelectorAll('.favorite-item').forEach(item => {
        item.addEventListener('click', e => {
            if (!e.target.closest('button')) {
                selectedPet = DB.getPets().find(p => p.id == item.dataset.petid);
                currentPage = 'petDetail';
                render();
            }
        });
    });
    
    document.querySelectorAll('.favorite-chat-btn').forEach(btn => {
        btn.onclick = e => {
            e.stopPropagation();
            const pet = DB.getPets().find(p => p.id == btn.dataset.id);
            if (pet) {
                currentChatId = `${userId}_${pet.id}`;
                if (!DB.getChats()[currentChatId]) DB.saveChat(currentChatId, []);
                currentPage = 'chat';
                render();
            }
        };
    });
    
    document.querySelectorAll('[data-remove]').forEach(btn => {
        btn.onclick = e => {
            e.stopPropagation();
            DB.removeFavorite(userId, +btn.dataset.remove);
            renderFavorites();
        };
    });
}

// --- СПИСОК ЧАТОВ (полностью по принципу из второй части) ---
function renderChatsList() {
    const userId = currentUser.email || currentUser.phone;
    const chats = DB.getUserChats(userId);
    
    app.innerHTML = `
        <div class="page-container">
            <h2>Чаты</h2>
            ${chats.length ? `
                <div class="chats-list">
                    ${chats.map(c => `
                        <div class="chat-item" data-id="${c.chatId}">
                            <div class="chat-avatar" style="background-image:url('${c.pet?.img || ''}')"></div>
                            <div class="chat-info">
                                <h4>${c.pet?.name || 'Питомец'}</h4>
                                <p>${c.lastMessage?.text || 'Нет сообщений'}</p>
                            </div>
                            <i class="fas fa-chevron-right"></i>
                        </div>
                    `).join('')}
                </div>
            ` : '<p style="text-align:center;">Нет чатов</p>'}
        </div>
    `;
    
    document.querySelectorAll('.chat-item').forEach(i => {
        i.onclick = () => {
            currentChatId = i.dataset.id;
            currentPage = 'chat';
            render();
        };
    });
}

// --- ОКНО ЧАТА (полностью по принципу из второй части) ---
function renderChat() {
    const userId = currentUser.email || currentUser.phone;
    const pet = DB.getPets().find(p => p.id == currentChatId.split('_')[1]);
    const msgs = DB.getChats()[currentChatId] || [];
    
    app.innerHTML = `
        <div class="page-container chat-window">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:15px;">
                <i class="fas fa-arrow-left" id="back-btn" style="cursor:pointer;"></i>
                <div class="chat-avatar" style="width:40px;height:40px;background-image:url('${pet?.img || ''}')"></div>
                <h3>${pet?.name || 'Питомец'}</h3>
            </div>
            <div class="messages" id="msg-container">
                ${msgs.map(m => `
                    <div class="message ${m.sender === userId ? 'own' : ''}">${escapeHtml(m.text)}</div>
                `).join('')}
            </div>
            <div class="chat-input-area">
                <input type="text" id="chat-input" placeholder="Сообщение...">
                <button class="btn" id="send-btn"><i class="fas fa-paper-plane"></i></button>
            </div>
        </div>
    `;
    
    const msgContainer = document.getElementById('msg-container');
    if (msgContainer) {
        msgContainer.scrollTop = msgContainer.scrollHeight;
    }
    
    document.getElementById('back-btn').onclick = () => {
        currentPage = 'chats';
        render();
    };
    
    // Функция отправки сообщения (точь-в-точь как во второй части)
    const sendMessage = () => {
        const txt = document.getElementById('chat-input').value.trim();
        if (!txt) return;
        
        const chats = DB.getChats();
        if (!chats[currentChatId]) chats[currentChatId] = [];
        
        // Добавляем сообщение от пользователя
        chats[currentChatId].push({ sender: userId, text: txt });
        DB.saveChat(currentChatId, chats[currentChatId]);
        
        // Очищаем поле и перерисовываем чат
        document.getElementById('chat-input').value = '';
        renderChat();
        
        // Автоматический ответ от питомца через 500 мс (как во второй части)
        setTimeout(() => {
            const updatedChats = DB.getChats();
            if (!updatedChats[currentChatId]) updatedChats[currentChatId] = [];
            const autoReplies = ['Привет!', 'Как дела?', '👍', '🐾', 'Спасибо!'];
            updatedChats[currentChatId].push({
                sender: 'pet',
                text: autoReplies[Math.floor(Math.random() * autoReplies.length)]
            });
            DB.saveChat(currentChatId, updatedChats[currentChatId]);
            if (currentPage === 'chat') renderChat();
        }, 500);
    };
    
    document.getElementById('send-btn').onclick = sendMessage;
    document.getElementById('chat-input').onkeypress = e => {
        if (e.key === 'Enter') sendMessage();
    };
}

// Вспомогательная функция для экранирования HTML (безопасность)
function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// --- Мои объявления ---
function renderMyListings() {
    const userId = currentUser.email || currentUser.phone;
    const my = DB.getUserPets(userId);
    
    app.innerHTML = `
        <div class="page-container">
            <h2>Мои объявления</h2>
            <button class="btn add-listing-btn" id="add-btn"><i class="fas fa-plus"></i> Создать объявление</button>
            ${my.length ? `
                <div class="listings-list">
                    ${my.map(p => `
                        <div class="listing-item" data-petid="${p.id}">
                            <div class="listing-img" style="background-image:url('${p.img}')"></div>
                            <div class="listing-info">
                                <h4>${p.name}, ${p.age} ${p.age === 1 ? 'год' : p.age < 5 ? 'года' : 'лет'}</h4>
                                <p>${p.breed}</p>
                                ${p.forFoster ? '<span style="color:var(--success-color);"><i class="fas fa-home"></i> Передержка</span>' : ''}
                            </div>
                            <div style="display:flex;gap:8px;">
                                <button class="btn-outline btn-small" data-edit="${p.id}" style="border-radius:30px;padding:8px 12px;"><i class="fas fa-pen"></i></button>
                                <button class="btn-outline btn-small" data-del="${p.id}" style="border-radius:30px;padding:8px 12px;color:#ff4757;border-color:#ff4757;"><i class="fas fa-trash"></i></button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            ` : '<p style="text-align:center;">Нет объявлений</p>'}
        </div>
    `;
    
    document.querySelectorAll('.listing-item').forEach(item => {
        item.addEventListener('click', e => {
            if (!e.target.closest('button')) {
                selectedPet = DB.getPets().find(p => p.id == item.dataset.petid);
                currentPage = 'petDetail';
                render();
            }
        });
    });
    
    document.getElementById('add-btn').onclick = () => {
        currentPage = 'createListing';
        render();
    };
    
    document.querySelectorAll('[data-edit]').forEach(b => {
        b.onclick = e => {
            e.stopPropagation();
            editingPetId = +b.dataset.edit;
            currentPage = 'editListing';
            render();
        };
    });
    
    document.querySelectorAll('[data-del]').forEach(b => {
        b.onclick = e => {
            e.stopPropagation();
            if (confirm('Удалить объявление?')) {
                DB.deletePet(+b.dataset.del);
                renderMyListings();
            }
        };
    });
}

// --- Вспомогательная функция для диапазона веса ---
function getWeightRange(type) {
    if (type === 'dog') return { min: 3, max: 120, unit: 'кг', step: 0.1 };
    if (type === 'cat') return { min: 3, max: 15, unit: 'кг', step: 0.1 };
    if (type === 'bird') return { min: 20, max: 2000, unit: 'г', step: 1 };
    if (type === 'rodent') return { min: 20, max: 2000, unit: 'г', step: 1 };
    return { min: 1, max: 1000, unit: 'г', step: 1 };
}

// --- Редактирование объявления ---
function renderEditListing() {
    const pet = DB.getPets().find(p => p.id == editingPetId);
    if (!pet) {
        currentPage = 'myListings';
        render();
        return;
    }
    const range = getWeightRange(pet.type);
    
    app.innerHTML = `
        <div class="page-container">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:20px;">
                <i class="fas fa-arrow-left" id="back-btn" style="cursor:pointer;"></i>
                <h2>Редактировать</h2>
            </div>
            <div class="create-listing-form" style="max-width:100%;">
                <div class="form-group"><label><i class="fas fa-paw"></i> Имя</label><input type="text" id="pet-name" value="${pet.name}"></div>
                <div class="form-group"><label><i class="fas fa-tag"></i> Тип</label><select id="pet-type">${PET_TYPES.filter(t => t.id !== 'all').map(t => `<option value="${t.id}" ${pet.type === t.id ? 'selected' : ''}>${t.name}</option>`).join('')}</select></div>
                <div class="form-group"><label><i class="fas fa-dna"></i> Порода</label><input type="text" id="pet-breed" value="${pet.breed}"></div>
                <div class="form-group"><label><i class="fas fa-birthday-cake"></i> Возраст</label><input type="number" id="pet-age" min="0" max="30" value="${pet.age}"></div>
                <div class="form-group"><label><i class="fas fa-weight-scale"></i> Вес (${range.unit})</label><input type="number" id="pet-weight" step="${range.step}" min="${range.min}" max="${range.max}" value="${pet.weight}"></div>
                <div class="form-group"><label><i class="fas fa-align-left"></i> Описание</label><textarea id="pet-desc">${pet.description}</textarea></div>
                <div class="form-group"><label><i class="fas fa-road"></i> Улица</label><input type="text" id="pet-street" value="${pet.street || ''}"></div>
                <div class="form-group"><label><i class="fas fa-camera"></i> Фото</label><div class="photo-upload-area" id="photo-up"><i class="fas fa-cloud-upload-alt"></i><p>Нажмите для изменения</p></div><input type="file" id="pet-photo" accept="image/*" style="display:none;"><div id="photo-prev" class="photo-preview" style="background-image:url('${pet.img}');"></div></div>
                <div class="switch-group"><span><i class="fas fa-home"></i> Передержка</span><label class="switch"><input type="checkbox" id="pet-foster" ${pet.forFoster ? 'checked' : ''}><span class="slider"></span></label></div>
                <div id="form-error" class="error-message"></div>
                <div id="form-status"></div>
                <button class="btn btn-success" id="submit-btn">Сохранить</button>
            </div>
        </div>
    `;
    
    document.getElementById('back-btn').onclick = () => {
        currentPage = 'myListings';
        render();
    };
    
    let newPhotoData = '';
    const photoInp = document.getElementById('pet-photo');
    const photoUp = document.getElementById('photo-up');
    const photoPrev = document.getElementById('photo-prev');
    
    photoUp.onclick = () => photoInp.click();
    photoInp.onchange = e => {
        const f = e.target.files[0];
        if (f) {
            const r = new FileReader();
            r.onload = ev => {
                newPhotoData = ev.target.result;
                photoPrev.style.backgroundImage = `url('${newPhotoData}')`;
                photoUp.style.display = 'none';
            };
            r.readAsDataURL(f);
        }
    };
    
    const typeSelect = document.getElementById('pet-type');
    const weightInput = document.getElementById('pet-weight');
    typeSelect.onchange = () => {
        const r = getWeightRange(typeSelect.value);
        weightInput.step = r.step;
        weightInput.min = r.min;
        weightInput.max = r.max;
        weightInput.placeholder = `${r.min}-${r.max} ${r.unit}`;
    };
    
    document.getElementById('submit-btn').onclick = () => {
        const name = document.getElementById('pet-name').value.trim();
        const type = typeSelect.value;
        const breed = document.getElementById('pet-breed').value.trim();
        const age = +document.getElementById('pet-age').value;
        const weight = +weightInput.value;
        const street = document.getElementById('pet-street').value.trim();
        const desc = document.getElementById('pet-desc').value.trim();
        const foster = document.getElementById('pet-foster').checked;
        const err = document.getElementById('form-error');
        err.textContent = '';
        const r = getWeightRange(type);
        
        if (!isValidPetName(name)) { err.textContent = 'Имя с большой буквы, 2-20 символов'; return; }
        if (!breed) { err.textContent = 'Укажите породу'; return; }
        if (isNaN(age) || age < 0 || age > 30) { err.textContent = 'Возраст 0-30 лет'; return; }
        if (isNaN(weight) || weight < r.min || weight > r.max) { err.textContent = `Вес ${r.min}-${r.max} ${r.unit}`; return; }
        if (!street) { err.textContent = 'Укажите улицу'; return; }
        if (!desc) { err.textContent = 'Добавьте описание'; return; }
        
        const statusDiv = document.getElementById('form-status');
        statusDiv.innerHTML = '<div style="color:var(--accent);"><i class="fas fa-spinner fa-spin"></i> Обработка...</div>';
        document.getElementById('submit-btn').disabled = true;
        
        let seconds = 5;
        const timer = setInterval(() => {
            seconds--;
            if (seconds > 0) {
                statusDiv.innerHTML = `<div style="color:var(--accent);">Обработка... ${seconds} сек</div>`;
            } else {
                clearInterval(timer);
                const updates = { name, type, breed, age, weight, weightUnit: r.unit, street, description: desc, forFoster: foster };
                if (newPhotoData) updates.img = newPhotoData;
                DB.updatePet(editingPetId, updates);
                statusDiv.innerHTML = '<div style="color:var(--success-color);">Успешно!</div>';
                setTimeout(() => {
                    currentPage = 'myListings';
                    render();
                }, 1500);
            }
        }, 1000);
    };
}

// --- Создание объявления ---
function renderCreateListing() {
    const userId = currentUser.email || currentUser.phone;
    
    app.innerHTML = `
        <div class="page-container">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:20px;">
                <i class="fas fa-arrow-left" id="back-btn" style="cursor:pointer;"></i>
                <h2>Новое объявление</h2>
            </div>
            <div class="create-listing-form" style="max-width:100%;">
                <div class="form-group"><label><i class="fas fa-paw"></i> Имя</label><input type="text" id="pet-name" placeholder="Барсик"></div>
                <div class="form-group"><label><i class="fas fa-tag"></i> Тип</label><select id="pet-type">${PET_TYPES.filter(t => t.id !== 'all').map(t => `<option value="${t.id}">${t.name}</option>`).join('')}</select></div>
                <div class="form-group"><label><i class="fas fa-dna"></i> Порода</label><input type="text" id="pet-breed" placeholder="Мейн-кун"></div>
                <div class="form-group"><label><i class="fas fa-birthday-cake"></i> Возраст</label><input type="number" id="pet-age" min="0" max="30"></div>
                <div class="form-group"><label><i class="fas fa-weight-scale"></i> Вес</label><input type="number" id="pet-weight" step="0.1" min="3" max="15"></div>
                <div class="form-group"><label><i class="fas fa-align-left"></i> Описание</label><textarea id="pet-desc"></textarea></div>
                <div class="form-group"><label><i class="fas fa-road"></i> Улица</label><input type="text" id="pet-street" placeholder="ул. Ленина, д. 1"></div>
                <div class="form-group"><label><i class="fas fa-camera"></i> Фото</label><div class="photo-upload-area" id="photo-up"><i class="fas fa-cloud-upload-alt"></i><p>Нажмите для загрузки</p></div><input type="file" id="pet-photo" accept="image/*" style="display:none;"><div id="photo-prev" class="photo-preview hidden"></div></div>
                <div class="switch-group"><span><i class="fas fa-home"></i> Передержка</span><label class="switch"><input type="checkbox" id="pet-foster"><span class="slider"></span></label></div>
                <div id="form-error" class="error-message"></div>
                <div id="form-status"></div>
                <button class="btn btn-success" id="submit-btn">Выложить</button>
            </div>
        </div>
    `;
    
    document.getElementById('back-btn').onclick = () => {
        currentPage = 'myListings';
        render();
    };
    
    let photoData = '';
    const photoInp = document.getElementById('pet-photo');
    const photoUp = document.getElementById('photo-up');
    const photoPrev = document.getElementById('photo-prev');
    
    photoUp.onclick = () => photoInp.click();
    photoInp.onchange = e => {
        const f = e.target.files[0];
        if (f) {
            const r = new FileReader();
            r.onload = ev => {
                photoData = ev.target.result;
                photoPrev.style.backgroundImage = `url('${photoData}')`;
                photoPrev.classList.remove('hidden');
                photoUp.classList.add('hidden');
            };
            r.readAsDataURL(f);
        }
    };
    
    const typeSelect = document.getElementById('pet-type');
    const weightInput = document.getElementById('pet-weight');
    typeSelect.onchange = () => {
        const r = getWeightRange(typeSelect.value);
        weightInput.step = r.step;
        weightInput.min = r.min;
        weightInput.max = r.max;
        weightInput.placeholder = `${r.min}-${r.max} ${r.unit}`;
        weightInput.value = '';
    };
    
    document.getElementById('submit-btn').onclick = () => {
        const name = document.getElementById('pet-name').value.trim();
        const type = typeSelect.value;
        const breed = document.getElementById('pet-breed').value.trim();
        const age = +document.getElementById('pet-age').value;
        const weight = +weightInput.value;
        const street = document.getElementById('pet-street').value.trim();
        const desc = document.getElementById('pet-desc').value.trim();
        const foster = document.getElementById('pet-foster').checked;
        const err = document.getElementById('form-error');
        err.textContent = '';
        const r = getWeightRange(type);
        
        if (!isValidPetName(name)) { err.textContent = 'Имя с большой буквы, 2-20 символов'; return; }
        if (!breed) { err.textContent = 'Укажите породу'; return; }
        if (isNaN(age) || age < 0 || age > 30) { err.textContent = 'Возраст 0-30 лет'; return; }
        if (isNaN(weight) || weight < r.min || weight > r.max) { err.textContent = `Вес ${r.min}-${r.max} ${r.unit}`; return; }
        if (!street) { err.textContent = 'Укажите улицу'; return; }
        if (!desc) { err.textContent = 'Добавьте описание'; return; }
        if (!photoData) { err.textContent = 'Загрузите фото'; return; }
        
        const statusDiv = document.getElementById('form-status');
        statusDiv.innerHTML = '<div style="color:var(--accent);"><i class="fas fa-spinner fa-spin"></i> Обработка...</div>';
        document.getElementById('submit-btn').disabled = true;
        
        let seconds = 5;
        const timer = setInterval(() => {
            seconds--;
            if (seconds > 0) {
                statusDiv.innerHTML = `<div style="color:var(--accent);">Обработка... ${seconds} сек</div>`;
            } else {
                clearInterval(timer);
                DB.addPet({
                    id: Date.now(),
                    name, breed, age, weight, weightUnit: r.unit,
                    street, description: desc, img: photoData, type,
                    owner: userId, city: currentUser.city, forFoster: foster,
                    ownerType: currentUser.type || 'person',
                    ownerName: currentUser.name || currentUser.shelterName || 'Пользователь',
                    ownerAvatar: DB.getAvatar(userId) || 'fas fa-user-circle',
                    ownerReviews: 0, ownerCity: currentUser.city,
                    ownerContact: currentUser.email || currentUser.phone
                });
                statusDiv.innerHTML = '<div style="color:var(--success-color);">Успешно!</div>';
                setTimeout(() => {
                    currentPage = 'myListings';
                    render();
                }, 1500);
            }
        }, 1000);
    };
}

// --- Профиль пользователя ---
function renderProfile() {
    if (isGuest) {
        app.innerHTML = `
            <div class="page-container">
                <div class="profile-header">
                    <div class="profile-avatar"><div class="avatar-placeholder"><i class="fas fa-user"></i></div></div>
                    <h2>Гость</h2>
                    <div class="profile-type-badge">Гостевой режим</div>
                </div>
                <div class="theme-toggle">
                    <span><i class="fas fa-moon"></i> Тёмная тема</span>
                    <label class="switch"><input type="checkbox" id="theme-tog" ${DB.getTheme() === 'dark' ? 'checked' : ''}><span class="slider"></span></label>
                </div>
                <button class="btn btn-outline" id="login-btn" style="border-radius:30px;margin-top:20px;"><i class="fas fa-sign-in-alt"></i> Вход</button>
            </div>
        `;
        document.getElementById('theme-tog').onchange = e => {
            DB.setTheme(e.target.checked ? 'dark' : 'light');
            document.body.classList.toggle('dark-theme', e.target.checked);
        };
        document.getElementById('login-btn').onclick = () => {
            showConfirmModal('Выход из гостевого режима', 'Все ваши данные будут потеряны. Вы уверены?', () => {
                isGuest = false;
                DB.setCurrentUser(null);
                currentUser = null;
                currentPage = 'auth';
                render();
            }, 'Подтвердить');
        };
        return;
    }
    
    const isPerson = currentUser.type === 'person';
    const userId = currentUser.email || currentUser.phone;
    const av = DB.getAvatar(userId);
    const myReviews = DB.getOwnerReviews(userId) || [];
    
    let avatarHtml = '';
    if (av && av.startsWith('fas ')) {
        avatarHtml = `<div class="avatar-placeholder"><i class="${av}"></i></div>`;
    } else if (av && (av.startsWith('http') || av.startsWith('data:'))) {
        avatarHtml = '';
    } else {
        avatarHtml = `<div class="avatar-placeholder"><i class="fas fa-${isPerson ? 'user' : 'home'}"></i></div>`;
    }
    
    app.innerHTML = `
        <div class="page-container">
            <div class="profile-header">
                <div class="profile-avatar" id="prof-av" style="${(av && !av.startsWith('fas ')) ? `background-image:url('${av}')` : ''}">
                    ${avatarHtml}
                    <div class="avatar-overlay"><i class="fas fa-camera"></i></div>
                </div>
                <input type="file" id="av-inp" accept="image/*" style="display:none;">
                <h2>${isPerson ? currentUser.name : currentUser.shelterName}</h2>
                <div class="profile-type-badge">${isPerson ? 'Персона' : 'Приют'}</div>
            </div>
            <div class="profile-info">
                ${isPerson ? `
                    <p><i class="fas fa-envelope"></i> ${currentUser.email || currentUser.phone}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${currentUser.city}</p>
                    <p><i class="fas fa-calendar"></i> ${currentUser.birthdate}</p>
                ` : `
                    <p><i class="fas fa-phone"></i> ${currentUser.phone}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${currentUser.city}</p>
                    <p><i class="fas fa-road"></i> ${currentUser.street}</p>
                `}
            </div>
            <div class="description-edit-area">
                <div class="description-label">
                    <span><i class="fas fa-info-circle"></i> ${isPerson ? 'О себе' : 'О приюте'}</span>
                    <button class="btn-outline btn-small" id="edit-desc" style="border-radius:30px;"><i class="fas fa-pen"></i></button>
                </div>
                <div id="desc-view">${currentUser.description || (isPerson ? 'Добавьте описание...' : 'Добавьте описание приюта...')}</div>
                <div id="desc-edit" class="hidden">
                    <textarea id="desc-inp" class="description-textarea">${currentUser.description || ''}</textarea>
                    <div class="description-actions">
                        <button class="btn" id="save-desc">Сохранить</button>
                        <button class="btn-outline" id="cancel-desc">Отмена</button>
                    </div>
                </div>
            </div>
            <div style="margin-bottom:20px;">
                <h4>Мои отзывы (${myReviews.length})</h4>
                ${myReviews.length > 0 ? myReviews.slice(0, 5).map(r => `
                    <div style="background:var(--bg-color);border-radius:15px;padding:15px;margin-bottom:10px;">
                        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
                            <div style="width:35px;height:35px;border-radius:50%;background:var(--accent);display:flex;align-items:center;justify-content:center;color:white;"><i class="fas fa-user"></i></div>
                            <div>
                                <p style="font-weight:600;">${r.author}</p>
                                <p style="font-size:12px;color:var(--text-secondary);">${r.date}</p>
                            </div>
                        </div>
                        <p>${r.text}</p>
                    </div>
                `).join('') : '<p style="color:var(--text-secondary);text-align:center;">Пока нет отзывов</p>'}
            </div>
            <div class="theme-toggle">
                <span><i class="fas fa-moon"></i> Тёмная тема</span>
                <label class="switch"><input type="checkbox" id="theme-tog" ${DB.getTheme() === 'dark' ? 'checked' : ''}><span class="slider"></span></label>
            </div>
            <button class="btn btn-outline logout-btn" id="logout-btn">Выйти</button>
        </div>
    `;
    
    document.getElementById('prof-av').onclick = () => document.getElementById('av-inp').click();
    document.getElementById('av-inp').onchange = e => {
        const f = e.target.files[0];
        if (f) {
            const r = new FileReader();
            r.onload = ev => {
                DB.saveAvatar(userId, ev.target.result);
                document.getElementById('prof-av').style.backgroundImage = `url('${ev.target.result}')`;
                document.getElementById('prof-av').innerHTML = '<div class="avatar-overlay"><i class="fas fa-camera"></i></div>';
            };
            r.readAsDataURL(f);
        }
    };
    
    const v = document.getElementById('desc-view');
    const ed = document.getElementById('desc-edit');
    document.getElementById('edit-desc').onclick = () => {
        v.classList.add('hidden');
        ed.classList.remove('hidden');
    };
    document.getElementById('cancel-desc').onclick = () => {
        v.classList.remove('hidden');
        ed.classList.add('hidden');
    };
    document.getElementById('save-desc').onclick = () => {
        const nd = document.getElementById('desc-inp').value.trim();
        currentUser.description = nd;
        DB.updateUser(userId, { description: nd });
        v.textContent = nd || (isPerson ? 'Добавьте описание...' : 'Добавьте описание приюта...');
        v.classList.remove('hidden');
        ed.classList.add('hidden');
    };
    document.getElementById('theme-tog').onchange = e => {
        DB.setTheme(e.target.checked ? 'dark' : 'light');
        document.body.classList.toggle('dark-theme', e.target.checked);
    };
    document.getElementById('logout-btn').onclick = () => {
        showConfirmModal('Выход', 'Вы уверены?', () => {
            isGuest = false;
            DB.setCurrentUser(null);
            currentUser = null;
            currentPage = 'auth';
            render();
        });
    };
}

// --- Навигация ---
document.addEventListener('click', e => {
    const n = e.target.closest('.nav-item');
    if (n) {
        currentPage = n.dataset.page;
        currentPetIndex = 0;
        render();
    }
});

render();