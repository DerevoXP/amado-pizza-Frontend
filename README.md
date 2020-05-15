*** AMADO-PIZZA by DerevoXP ***

http://derevoxp.ru/ --- адрес сайта

http://a0438483.xsph.ru/ --- адрес сервера

https://github.com/DerevoXP/amado-pizza-Backend --- гит-репозиторий бэкенда на ГитХаб (PHP)

https://github.com/DerevoXP/amado-pizza-Frontend --- гит-репозиторий фронтенда (React)

*** БАЗА ДАННЫХ (mySQL) ***

Username: d4DubyxbEm

Database name: d4DubyxbEm

Password: ZvpYodSAGs

Server: remotemysql.com

Port: 3306

*** Отследить состояние датабазы (после оформления заказа) можно по ссылке: ***

https://remotemysql.com/phpmyadmin/index.php?db=d4DubyxbEm

Username: d4DubyxbEm
Password: ZvpYodSAGs


*** ДНЕВНИК РАЗРАБОТКИ (ПОСТОРОННИМ БУДЕТ НЕ ИНТЕРЕСНО) ***

На чистый Реакт-шаблон:

sudo npm i --save connected-react-router history immutable prop-types rc-slider react-redux react-redux-toastr react-router react-router-dom react-spinners reactstrap redux redux-thunk seamless-immutable styled-components typescript

Самая полезная ссылка для деплоя React на Heroku: https://github.com/mars/create-react-app-buildpack#usage

Для БД доустановил:

sudo apt install mysql-server
sudo apt-get install php-mysql

Для PHP (и Heroku):

sudo snap install --classic heroku
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === 'e0012edf3e80b6978849f5eff0d4b4e4c79ff1609dd1e613307e16318854d24ae64f26d17af3ef0bf7cfb710ca74755a') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"

*** описание и скрипты для базы данных ***

Таблица menu
0) ID пиццы
1) Наименования пиццы
2) Изображение пиццы (адрес)
3) Стоимость за штуку
4) Описание пиццы
5) Категория пиццы (вдруг она суши?)

Таблица orders
0) ID заказа
1) ID заказчика
2) Список ID выбранных пицц [1, 2, 3]
3) Количество заказанных пицц [3, 5, 7]
6) Выбранный скидочный шарик
7) Стоимость заказа

create table if not exists menu
(
	id serial not null primary key,
	title varchar(512) not null default 'Empty',
	image varchar(512) not null default 'empty.png',
	price integer not null default 0,
	description varchar(1024) not null default 'Empty',
	category integer not null default 0
);

create table if not exists orders
(
	id serial not null primary key,
	customer_id varchar(512) not null default 'Безымянный',
	cart_title varchar(512) not null default '[]',
	cart_amount varchar(512) not null default '[]',
	discount_baloon integer not null default 0,
	total_sum integer not null default 0
);

insert into menu (title, image, price, description, category) values 
('Vinni Gretto', '01.png', '25', 'Awakens exalted instincts even in the most humiliated persons!', '1'),
('Rogue', '02.png', '2', 'Cooks have already been fired, but we can not throw it away ...', '1'),
('Fat', '03.png', '11', 'Good for brandy!', '1'),
('Minaigrette', '04.png', '82', 'Somewhere we have already tried this ... To recall exactly where.', '1'),
('Yellowish', '05.png', '66', 'Get your hand to the sun!', '1'),
('Mayonnaisengly', '06.png', '12', 'This is really mayonnaise. But we are still very happy to see you!', '1'),
('Shawshank', '07.png', '31', 'In every second pizza - a file as a gift!', '1'),
('le Matzoth', '08.png', '23', 'I beg you, try it!', '1'),
('Ipritto', '09.png', '12', 'Without GMO. Mustard-free!', '1'),
('Zhirinovsky', '10.png', '45', 'Vladimir Vladimirovich in the know.', '1'),
('Sasalmon', 's01.png', '23', 'The cook cried with tenderness in the process of making these rice pellets!', '2'),
('Black dog', 's02.png', '45', 'Maybe, after all, better pizza "Fat"?', '2'),
('Lard, or the 120 Days at home', 's03.png', '99', 'Children under 16 are better off not trying!', '2'),
('Spawny', 's04.png', '18', 'In every second roll - a real squash caviar!', '2'),
('Evening in Mojave', 's05.png', '44', 'The sky is the color of meat, the meat is the taste of the sky. Risk it?', '2'),
('Classic pha', 's06.png', '45', 'Have you already refresh your inner man?', '2');