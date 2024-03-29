"use client";
import Image from "next/image";
import { useId, CSSProperties, SetStateAction, Dispatch } from "react";
import Select, {
  DropdownIndicatorProps,
  StylesConfig,
  components,
} from "react-select";

export interface SearchProp {
  value: number;
  label: string;
}

const customControlStyles: CSSProperties = {
  color: "white",
  borderColor: "black",
  height: "250px",
  padding: "50px",
  fontSize: "90px",
  textTransform: "uppercase",
  borderRadius: "15px",
};

const customMenuStyles: CSSProperties = {
  color: "rgba(217, 217, 217, 1)",
  padding: "50px",
  fontSize: "90px",
  textTransform: "uppercase",
};

const customMenuListStyles: CSSProperties = {
  maxHeight: "650px",
};

const customOptionStyles: CSSProperties = {
  padding: "25px",
  backgroundColor: "white",
  color: "rgba(217, 217, 217, 1)",
};

type IsMulti = false;

type MyOptionType = {
  label: string;
  value: number;
};

const options: MyOptionType[] = [
  { value:25, label: "Пан Александр Владимирович"},
  { value:25, label: "Погосян Артем Михайлович"},
  { value:8, label: "Агапцов Сергей Анатольевич"},
  { value:20, label: "Аклаев Равиль Русланович"},
  { value:2, label: "Алгульян Даниил Валерьевич"},
  { value:8, label: "Алексеева Юлия Алексеевна"},
  { value:25, label: "Алимурадова Изумруд Алигаджиевна"},
  { value:27, label: "Андреева Оксана Владимировна"},
  { value:4, label: "Андрианов Алексей Алексеевич"},
  { value:11, label: "Анисимова Евгения Олеговна"},
  { value:15, label: "Антохина Мария Валерьевна "},
  { value:22, label: "Аржанов Алексей Анатольевич"},
  { value:1, label: "Асташева Юлия Валерьевна"},
  { value:11, label: "Бабурина Наталья Андреевна"},
  { value:25, label: "Бадгутдинов Марат Фаритович"},
  { value:3, label: "Байсангурова Диана Валерьевна"},
  { value:3, label: "Балекин Евгений Викторович "},
  { value:1, label: "Басова Валентина Михайловна"},
  { value:25, label: "Батин Сергей Леонидович"},
  { value:21, label: "Бащук Валерий Максимович "},
  { value:20, label: "Белоусов Павел Александрович"},
  { value:25, label: "Благодарова Марина Николаевна"},
  { value:26, label: "Блохина Екатерина Ивановна"},
  { value:1, label: "Богдановская Светлана Александровна"},
  { value:9, label: "Божевалов Иван Геннадьевич"},
  { value:4, label: "Бондаренко Андрей Александрович"},
  { value:24, label: "Борисов Евгений Игоревич"},
  { value:22, label: "Бормашенко Игорь Владимирович"},
  { value:25, label: "Брегман Борис Давыдович"},
  { value:20, label: "Брежнева Татьяна Вячеславовна"},
  { value:10, label: "Булаков Дмитрий Владимирович"},
  { value:6, label: "Булатов Руслан Рустемович"},
  { value:25, label: "Бутузов Владимир Васильевич"},
  { value:21, label: "Варушкин Борис Вадимович"},
  { value:21, label: "Васильев Алексей Анатольевич"},
  { value:26, label: "Васильева Анастасия Петровна"},
  { value:4, label: "Васильченко Елена Владимировна"},
  { value:4, label: "Вахтин Игорь Анатольевич"},
  { value:6, label: "Верник Петр Аркадьевич"},
  { value:25, label: "Весник Евгений Евгеньевич"},
  { value:4, label: "Виноградов Вячеслав Владимирович"},
  { value:24, label: "Вододохов Сергей Эдуардович"},
  { value:16, label: "Воронкова Инна Васильевна"},
  { value:13, label: "Выдрыч Никита Валерьевич"},
  { value:27, label: "Гаврилина Татьяна Владимировна"},
  { value:3, label: "Гайданский Анатолий Иосифович "},
  { value:5, label: "Гайнутдинов Анвар Талгатович"},
  { value:1, label: "Гаршина Виктория Александровна"},
  { value:27, label: "Герман Сергей Леонидович"},
  { value:28, label: "Гершанова Екатерина Владимировна"},
  { value:30, label: "Гизатуллина Дарина Ришатовна"},
  { value:20, label: "Гимаев Николай Александрович"},
  { value:22, label: "Главнова Яна Александровна"},
  { value:29, label: "Гнилицкая Мария Олеговна"},
  { value:18, label: "Гоголадзе Георгий Тедаозович"},
  { value:14, label: "Годуйко Владимир Алексеевич"},
  { value:23, label: "Голофаев Михаил Алексеевич"},
  { value:16, label: "Гонгало Виктор Брониславович"},
  { value:12, label: "Гончаров Евгений Васильевич"},
  { value:18, label: "Горлов Григорий Юрьевич"},
  { value:23, label: "Григорьев Александр Викторович"},
  { value:15, label: "Григорьев Дмитрий Владимирович"},
  { value:23, label: "Губарев Александр Михайлович"},
  { value:11, label: "Гурова Оксана Владимировна"},
  { value:4, label: "Гусев Константин Александрович"},
  { value:4, label: "Давыдов Андрей Алексеевич"},
  { value:2, label: "Давыдов Валерий Петрович"},
  { value:2, label: "Данилин Павел Евгеньевич"},
  { value:1, label: "Данилина Надежда Владимировна"},
  { value:21, label: "Данилова Марина Владимировна"},
  { value:9, label: "Данилочкина Наталья Павловна"},
  { value:25, label: "Демин Игорь Михайлович"},
  { value:21, label: "Денисов Дмитрий Иванович"},
  { value:30, label: "Джало Владислав Андреевич "},
  { value:9, label: "Дмитриева Вера Владимировна "},
  { value:22, label: "Догаева Ирина Анатольевна"},
  { value:13, label: "Долгополов Владимир Александрович"},
  { value:3, label: "Долотовский Александр Викторович "},
  { value:30, label: "Дряев Георгий Борисович"},
  { value:3, label: "Дубинецкий Вадим Николаевич"},
  { value:1, label: "Дудорова Екатерина Аркадьевна"},
  { value:3, label: "Дучков Борис Андреевич"},
  { value:13, label: "Дядющенко Ирина Владимировна"},
  { value:18, label: "Евсеев Алексей Васильевич"},
  { value:20, label: "Евсеев Евгений Васильевич"},
  { value:1, label: "Евсеева Виктория Александровна"},
  { value:16, label: "Елина Елена Константиновна"},
  { value:30, label: "Ерчева Инна Сергеевна"},
  { value:25, label: "Ефимов Владимир Сергеевич"},
  { value:22, label: "Жаворонкова Ирина Владимировна"},
  { value:23, label: "Железный Александр Михайлович"},
  { value:8, label: "Железняков Александр Робертович"},
  { value:4, label: "Жируев Дмитрий Михайлович"},
  { value:14, label: "Жукова Ирина Игоревна"},
  { value:5, label: "Заболотских Анна Дмитриевна"},
  { value:12, label: "Завьялов Сергей Викторович"},
  { value:15, label: "Заикина Елена Игоревна"},
  { value:27, label: "Зацепин Михаил Александрович"},
  { value:8, label: "Зеля Максим Юрьевич "},
  { value:25, label: "Золотов Игорь Валерьевич"},
  { value:12, label: "Зугрова Екатерина Евгеньевна"},
  { value:17, label: "Иванова Кристина Александровна"},
  { value:28, label: "Иванова Любовь Михайловна"},
  { value:27, label: "Игнатова Наталия Владимировна"},
  { value:28, label: "Илизиров Вадим Романович"},
  { value:25, label: "Илизиров Эрвин Равиноевич "},
  { value:2, label: "Ильина Ольга Викторовна"},
  { value:30, label: "Иренова Дарима Чингисовна"},
  { value:22, label: "Исаева Надежда Васильевна "},
  { value:9, label: "Исыркамышева Зухра Тахировна"},
  { value:26, label: "Кавеева Линара Румильевна"},
  { value:16, label: "Казаков Павел Иванович"},
  { value:6, label: "Казандаев  Иван Александрович"},
  { value:10, label: "Казанцева Елена Анатольевна"},
  { value:29, label: "Казаченок Татьяна Владимировна"},
  { value:26, label: "Казымова Айнур Харгаил кызы"},
  { value:27, label: "Калачева Мария Евгеньевна"},
  { value:22, label: "Калинин Игорь Эдуардович"},
  { value:8, label: "Калугин Дмитрий Павлович"},
  { value:23, label: "Канавин Андрей Иванович"},
  { value:23, label: "Канавин Иван Борисович"},
  { value:8, label: "Канукова Марина Арсеновна "},
  { value:23, label: "Кащеев Валерий Владимирович"},
  { value:20, label: "Квитко Станислав Игоревич"},
  { value:12, label: "Кириленко Людмила Валерьевна"},
  { value:24, label: "Клинкова Галина Юрьевна"},
  { value:7, label: "Клочков Сергей Анатольевич"},
  { value:16, label: "Ковалевский  Вячеслав Юрьевич"},
  { value:12, label: "Ковалевский Евгений Михайлович"},
  { value:11, label: "Козлова Александра Юрьевна"},
  { value:9, label: "Колмаков Константин Константинович"},
  { value:5, label: "Колядин Сергей Анатольевич"},
  { value:13, label: "Константинов Дмитрий Викторович"},
  { value:30, label: "Константинова Яна Сергеевна"},
  { value:14, label: "Копалкина Юлия Владимировна"},
  { value:10, label: "Кораблев Виктор Владимирович"},
  { value:6, label: "Коробков Артем Дмитриевич"},
  { value:16, label: "Коровина Ольга Павловна"},
  { value:24, label: "Коровина Юлия Павловна"},
  { value:15, label: "Королёв Григорий Вячеславович"},
  { value:4, label: "Косарев Олег Михайлович"},
  { value:25, label: "Костин Иван Иванович"},
  { value:28, label: "Костюшов Владимир Николаевич"},
  { value:18, label: "Косырев Андрей Александрович"},
  { value:28, label: "Косьянов Сергей Иванович"},
  { value:27, label: "Косяк Анна Дмитриевна"},
  { value:23, label: "Котлов Василий Николаевич"},
  { value:14, label: "Которова Ольга Сергеевна"},
  { value:13, label: "Кривко Сергей Владимирович"},
  { value:15, label: "Крутоголова Татьяна Михайловна"},
  { value:28, label: "Кудинова Александра Владимировна"},
  { value:19, label: "Кузмичев Вячеслав Анатольевич"},
  { value:2, label: "Кузнецов Алексей Борисович"},
  { value:15, label: "Кузнецова Наталья Константиновна"},
  { value:16, label: "Кузнецова Ольга Владимировна "},
  { value:28, label: "Куклина Ирина Сергеевна"},
  { value:27, label: "Кулик Сергей Васильевич"},
  { value:29, label: "Куликов Игорь Николаевич"},
  { value:25, label: "Кулишов Сергей Владимирович"},
  { value:23, label: "Курчатов Роман Владимирович"},
  { value:4, label: "Лапицкий Станислав Дмитриевич"},
  { value:23, label: "Ларин Андрей Львович"},
  { value:13, label: "Лебедев Сергей Николаевич"},
  { value:2, label: "Лебедь Андрей Алексеевич"},
  { value:15, label: "Лепехова Юлия Сергеевна"},
  { value:18, label: "Лерман Натан Анатольевич"},
  { value:26, label: "Линькова Анастасия Юрьевна"},
  { value:15, label: "Лобачев Иван Андреевич"},
  { value:1, label: "Лукомская Валентина Михайловна"},
  { value:12, label: "Лымарь Алла Леонидовна"},
  { value:25, label: "Маевский Юрий Иванович"},
  { value:22, label: "Майков Алексей Николаевич"},
  { value:12, label: "Максимова Мария Николаевна"},
  { value:6, label: "Маликов Константин Витальевич"},
  { value:15, label: "Мальцева Наталья Геннадьевна"},
  { value:3, label: "Мамедов Имран Эльманович "},
  { value:14, label: "Манулин Андрей Юрьевич"},
  { value:2, label: "Мардаровская Ольга Сергеевна"},
  { value:17, label: "Маркелова Валентина Евгеньева"},
  { value:8, label: "Маслянко Константин Сергеевич"},
  { value:16, label: "Масной Владимир Аркадьвич"},
  { value:13, label: "Матвеева Ирина Алексеевна "},
  { value:9, label: "Матренин Игорь Александрович"},
  { value:26, label: "Медведева Дарья Игоревна"},
  { value:25, label: "Мельников Алексей Владимирович"},
  { value:11, label: "Миненко Анастасия Сергеевна"},
  { value:25, label: "Миронов Иван Кузьмич"},
  { value:7, label: "Миронов Никита Андреевич"},
  { value:22, label: "Михеев Владимир Геннадьевич "},
  { value:18, label: "Могилевский Владимир Анатольевич"},
  { value:7, label: "Мокрушин Михаил Алексеевич"},
  { value:21, label: "Мотайленко Елена Владимировна"},
  { value:18, label: "Муганлинский Александр Фирудинович"},
  { value:21, label: "Мударисов Артур Саидович"},
  { value:22, label: "Мукина Юлия Анатольевна"},
  { value:7, label: "Мукосеева Лилия Викторовна"},
  { value:28, label: "Назаренко Максим Андреевич"},
  { value:1, label: "Насибуллина Рима Загитовна"},
  { value:3, label: "Нестеров Олег Владимирович "},
  { value:20, label: "Нефедов Егор Сергеевич"},
  { value:21, label: "Нечаева Светлана Викторовна"},
  { value:30, label: "Николаева Екатерина Робертовна"},
  { value:11, label: "Николаева Наталья Анатольевна"},
  { value:17, label: "Никулина Анастасия Владиславовна"},
  { value:23, label: "Нистор Иван Иванович"},
  { value:30, label: "Онищенко Александра Ивановна"},
  { value:24, label: "Онищенко Григорий Олегович"},
  { value:17, label: "Орешникова Кристина Олеговна"},
  { value:28, label: "Орлов Герман Леонович"},
  { value:7, label: "Орлов Дмитрий Александрович"},
  { value:19, label: "Осипов Сергей Викторович"},
  { value:18, label: "Павлов Сергей Викторович"},
  { value:5, label: "Павлюков Владимир Николаевич"},
  { value:11, label: "Панфилова Татьяна Николаевна"},
  { value:13, label: "Пархоменко Андрей Олегович"},
  { value:14, label: "Пастухов Евгений Сергеевич"},
  { value:19, label: "Печенкин Алексей Анатольевич"},
  { value:6, label: "Пискун Владимир Петрович"},
  { value:5, label: "Пискунова Людмила Николаевна"},
  { value:7, label: "Письменный Николай Владиславович"},
  { value:3, label: "Плешков Олег Алексеевич "},
  { value:7, label: "Полтавцев Андрей Михайлович"},
  { value:24, label: "Полухин Николай Васильевич"},
  { value:8, label: "Полухина Олеся Николаевна "},
  { value:8, label: "Поляков Андрей Александрович"},
  { value:30, label: "Полякова Елена Сергеевна"},
  { value:11, label: "Пономаренко Константин Анатольевич"},
  { value:5, label: "Попов Илья Владимирович"},
  { value:20, label: "Портная Ольга Игоревна"},
  { value:27, label: "Портнова Ксения Константинова"},
  { value:2, label: "Поспелов Дмитрий Владимирович"},
  { value:17, label: "Пронькин Иван Михайлович"},
  { value:6, label: "Пугачев Максим Петрович"},
  { value:6, label: "Ребус Дмитрий Александрович"},
  { value:6, label: "Ребус Екатерина Анатольевна"},
  { value:24, label: "Резников Станислав Александрович"},
  { value:10, label: "Решетникова Галина Леонтьевна"},
  { value:10, label: "Решетникова Юлия Олеговна"},
  { value:17, label: "Рожнов Роман Сергеевич"},
  { value:19, label: "Ромашкин Алексей Анатольевич"},
  { value:25, label: "Рубан Александр Сергеевич"},
  { value:5, label: "Рубан Вероника Владимировна"},
  { value:10, label: "Руденко Алексей Владимирович"},
  { value:10, label: "Рыбак Олег Игоревич"},
  { value:14, label: "Рыков Андрей Владимирович"},
  { value:18, label: "Рябов Павел Дмитриевич"},
  { value:11, label: "Сазанов Георгий Владимирович"},
  { value:17, label: "Салахетдинов Наиль Сяйяревич "},
  { value:14, label: "Салахов Тимур Равильевич"},
  { value:5, label: "Салыкова Махабат Киыкбаевна"},
  { value:3, label: "Самарцев Владимир Михайлович"},
  { value:17, label: "Сапеляк  Анастасия Сергеевна"},
  { value:26, label: "Сапронов Андрей Валерьевич"},
  { value:26, label: "Сафронова Варвара Михайловна"},
  { value:12, label: "Селезнева Наталья Владиславовна"},
  { value:17, label: "Сёмушкина Дарья Владимировна"},
  { value:7, label: "Сергеев Владимир Николаевич"},
  { value:24, label: "Серпилина Маргарита Сергеевна"},
  { value:29, label: "Сим Елена Зумбоевна"},
  { value:3, label: "Симакова Маргарита Николаевна "},
  { value:10, label: "Сиротин Александр Александрович"},
  { value:10, label: "Скок Ксения Дмитриевна"},
  { value:7, label: "Смирнова Светлана Леонидовна"},
  { value:28, label: "Солдатов Андрей Константинович"},
  { value:21, label: "Солоненко Николай Иванович"},
  { value:1, label: "Спиридонова Евгения Валерьевна"},
  { value:11, label: "Стародубцева Елена Викторовна"},
  { value:13, label: "Старых Игорь Борисович"},
  { value:7, label: "Степаненко Елена Мечиславовна"},
  { value:9, label: "Степанов Алексей Юрьевич "},
  { value:16, label: "Степановский Леонид Георгиевич"},
  { value:10, label: "Стодумова Анастасия Олеговна"},
  { value:4, label: "Телец Дарья Алексеевна"},
  { value:18, label: "Тимошин Алексей Николаевич"},
  { value:6, label: "Тихомиров Эдуард Геннадьевич"},
  { value:6, label: "Тихомирова Наталья Валерьевна"},
  { value:30, label: "Ткаченко Ирина Анатольевна"},
  { value:2, label: "Торбин Алексей Германович"},
  { value:2, label: "Торбина Алина Геннадьевна"},
  { value:17, label: "Тронина Наталия Алексеевна"},
  { value:5, label: "Туркин Алексей Владимирович"},
  { value:14, label: "Туркина Ольга Владимировна"},
  { value:30, label: "Тырса Наталья Александровна"},
  { value:13, label: "Усенко Александр Андреевич "},
  { value:20, label: "Уфимцева Ксения Викторовна"},
  { value:9, label: "Фельбуш Елена Владимировна"},
  { value:19, label: "Феофанов Сергей Евгеньевич"},
  { value:21, label: "Фетисов Евгений Николаевич "},
  { value:5, label: "Филиппов Евгений Станиславович"},
  { value:5, label: "Филиппова Анастасия Евгеньевна"},
  { value:25, label: "Фомин Сергей Валерьевич"},
  { value:19, label: "Фролов Макасим Владимирович"},
  { value:22, label: "Фуер Эльвира Владимировна"},
  { value:29, label: "Харькова Ирина Леонидовна"},
  { value:19, label: "Хафизов Наиль Ваисович"},
  { value:16, label: "Хицов Иван Петрович"},
  { value:9, label: "Ходов Александр Дмитриевич"},
  { value:16, label: "Царьков Сергей Николаевич"},
  { value:8, label: "Цику Руслан Кимович"},
  { value:15, label: "Цурикова Анна Сергеевна"},
  { value:1, label: "Чайка Светлана Ивановна"},
  { value:19, label: "Черешнюк Александр Александрович"},
  { value:25, label: "Черковский Александр Владимирович"},
  { value:24, label: "Черникова Жанна Алексеевна"},
  { value:29, label: "Чернышева Евгения Владимировна"},
  { value:14, label: "Черняк Владислав Владимирович"},
  { value:9, label: "Чечетина Наталия Александровна"},
  { value:29, label: "Чирков Владислав Викторович"},
  { value:12, label: "Чмыхов Петр Петрович"},
  { value:26, label: "Чураков Артем Андреевич"},
  { value:24, label: "Шабанова Марина Сергеевна"},
  { value:2, label: "Шаталов Михаил Юрьевич"},
  { value:19, label: "Шах-Гильдян Сурен Игоревич"},
  { value:12, label: "Шевцов Виталий Викторович"},
  { value:28, label: "Шевырев Илья Геннадьевич"},
  { value:10, label: "Шибаев Роман Алексеевич"},
  { value:21, label: "Шнайдер Анна Владимировна"},
  { value:29, label: "Шостак Яна Александровна"},
  { value:20, label: "Шубич Михаил Игнатьевич"},
  { value:18, label: "Юдин Николай Николаевич"},
  { value:13, label: "Юнкин Алексей Владимирович "},
  { value:26, label: "Юшкова Марина Михайловна"},
  { value:24, label: "Ягудина Лариса Разитовна"},
  { value:7, label: "Ядыкин Александр Анатольевич"},
  { value:20, label: "Ядыкин Алексей Андреевич"},
  { value:17, label: "Яичкин Роман Сергеевич"},
  { value:29, label: "Яковлева Анна Евгеньевна"},
  { value:19, label: "Янковский Дмитрий Валерьевия"},
  { value:27, label: "Ярулина Татьяна Александровна"},
  { value:19, label: "Яшин Максим Александрович"},
];

const selectStyle: StylesConfig<MyOptionType, IsMulti> = {
  control: (provided, state) => {
    // provided has CSSObject type
    // state has ControlProps type

    // return type is CSSObject which means this line will throw error if uncommented
    // return false;

    return {
      ...provided,
      ...customControlStyles,
    };
  },
  menu: (provider, state) => {
    return {
      ...provider,
      ...customMenuStyles,
    };
  },
  option: (provider, state) => {
    return {
      ...provider,
      ...customOptionStyles,
      "&:hover": {
        backgroundColor: "white",
        color: "black",
      },
      "&:focus": {
        backgroundColor: "white",
        color: "black",
      },
    };
  },
  menuList: (provider, state) => {
    return {
      ...provider,
      ...customMenuListStyles,
    };
  },
};

const DropdownIndicator: React.FC<DropdownIndicatorProps> = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <div className="bg-transparent-black h-full w-[350px]">
        <Image
          style={{ width: 118, height: 118 }}
          src="/lopa.svg"
          alt="Vercel Logo"
          width={0}
          height={0}
          priority
        />
      </div>
    </components.DropdownIndicator>
  );
};

interface ISearch {
  setSelectedOption: Dispatch<SetStateAction<SearchProp | null>>;
  selectedOption: SearchProp | null;
}

export default function Search({ setSelectedOption, selectedOption }: ISearch) {
  return (
    <div className="w-full">
      <Select
        noOptionsMessage={({ inputValue }) => "Результатов не найдено"}
        instanceId={useId()}
        onChange={(option: SearchProp | null) => {
          setSelectedOption(option);
        }}
        options={options}
        isSearchable
        isClearable
        value={selectedOption}
        styles={selectStyle}
        placeholder="Введите имя"
      />
    </div>
  );
}
