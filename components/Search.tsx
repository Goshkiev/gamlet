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
  { value: 15, label: "Чемезов Сергей Викторович" },
  { value: 15, label: "Игнатова Екатерина Сергеевна" },
  { value: 15, label: "Артяков Владимир Владимирович " },

  { value: 9, label: "Волобуев Николай Анатольевич " },
  { value: 15, label: "Завьялов Игорь Николаевич " },
  { value: 6, label: "Назаров Александр Юрьевич " },
  { value: 6, label: "Назарова Татьяна Николаевна" },
  { value: 9, label: "Леликов Дмитрий Юрьевич" },
  { value: 6, label: "Выборных Максим Владимирович" },

  { value: 15, label: "Сердюков Анатолий Эдуардович" },
  { value: 15, label: "Васильева Евгения Николаевна" },
  { value: 6, label: "Оздоев Бекхан Ибрагимович" },
  { value: 6, label: "Бекова Изабелла Вахаевна" },
  { value: 9, label: "Ходов Казбек Владимирович" },

  { value: 6, label: "Евтушенко Олег Николаевич" },
  { value: 6, label: "Карасина Екатерина Григорьевна" },
  { value: 6, label: "Мясников Илья Анатольевич" },
  { value: 6, label: "Мясникова Мария Сергеевна" },
  { value: 8, label: "Лобанова Оксана Геннадьевна" },
  { value: 4, label: "Одинцова Алла Викторовна " },
  { value: 8, label: "Поворина Алена Владимировна" },

  { value: 8, label: "Грушкин Максим Витальевич" },
  { value: 8, label: "Грушкина Анна Михайловна" },

  { value: 8, label: "Скрыльник Иван Александрович" },
  { value: 9, label: "Цветкова Юлия Дмитриевна" },
  { value: 9, label: "Ершов Дмитрий Александрович" },
  { value: 8, label: "Гололобова Татьяна Михайловна" },

  { value: 8, label: "Кирьянов Виктор Николаевич " },
  { value: 8, label: "Сиэрра Елена Одулиовна" },
  { value: 7, label: "Артюхов Александр Викторович" },
  { value: 7, label: "Борисова Наталья Владимировна" },
  { value: 7, label: "Воронова Юлия Анатольевна" },
  { value: 8, label: "Баранова Екатерина Игоревна" },

  { value: 7, label: "Литвин Владимир Залманович" },
  { value: 7, label: "Литвина Елена Валерьевна" },

  { value: 15, label: "Яковлева Татьяна Владимировна " },

  { value: 3, label: "Бочаров Олег Евгеньевич" },
  { value: 15, label: "Дерябина Ольга Сергеевна" },

  { value: 3, label: "Лысогорский Кирилл Алексеевич " },
  { value: 13, label: "Саитов Олег Элекпаевич" },
  { value: 13, label: "Кожевников Александр Викторович" },
  { value: 3, label: "Панина Анна Григорьевна" },

  { value: 5, label: "Буренок Василий Михайлович" },
  { value: 5, label: "Кобылаш Сергей Иванович" },
  { value: 5, label: "Бенедиктов Владимир Валентинович" },
  { value: 5, label: "Грехов Юрий Николаевич" },

  { value: 5, label: "Курбатский Глеб Валерьевич" },
  { value: 5, label: "Пучков Евгений Геннадьевич" },

  { value: 5, label: "Шмырин Евгений Валерьевич" },
  { value: 5, label: "Шам Александр Викторович" },
  { value: 5, label: "Бедин Андрей Федорович" },

  { value: 15, label: "Тонкошкуров Василий Петрович" },
  { value: 5, label: "Тюлин Андрей Евгеньевич" },
  { value: 5, label: "Смирнов Сергей Александрович" },

  { value: 15, label: "Колесов Николай Александрович" },
  { value: 1, label: "Колесов Александр Николаевич" },

  { value: 10, label: "Насенков Игорь Георгиевич" },
  { value: 10, label: "Ковалевская Валерия Викторовна " },
  { value: 10, label: "Григорьев Виктор Евгеньевич " },
  { value: 10, label: "Бадеха Вадим Александрович " },
  { value: 10, label: "Слюсарь Юрий Борисович " },
  { value: 10, label: "Богинский Андрей Иванович" },
  { value: 6, label: "Бренерман Даниил Михайлович" },
  { value: 3, label: "Тимофеев Константин Петрович" },

  { value: 10, label: "Калюгин Вадим Станиславович" },
  { value: 15, label: "Алешин Алексей Владиславович " },
  { value: 10, label: "Сахненко Сергей Степанович " },
  { value: 10, label: "Высотская Александра Евгеньевна" },
  { value: 2, label: "Кондратьев Андрей Валерьевич" },
  { value: 6, label: "Ходаковский Денис Васильевич" },
  { value: 6, label: "Ходаковская Мария Анатольевна" },
  { value: 7, label: "Шорин Владлен Маусырович" },
  { value: 7, label: "Беляк Константин Игоревич" },
  { value: 15, label: "Михеев Александр Александрович " },
  { value: 15, label: "Михеева Элеонора Алексеевна" },
  { value: 15, label: "Гутенев Владимир Владимирович " },
  { value: 15, label: "Гутенева Елена Николаевна" },

  { value: 10, label: "Обносов Борис Викторович" },
  { value: 15, label: "Шугаев Дмитрий Евгеньевич " },
  { value: 15, label: "Шугаева Ольга Альбертовна" },
  { value: 11, label: "Восьмирко Александр Владимирович" },
  { value: 11, label: "Исаченко Иван Андреевич" },

  { value: 11, label: "Гуляев Олег Анатольевич" },
  { value: 11, label: "Шарипов Ронис Накипович" },
  { value: 11, label: "Короткевич Михаил Захарович" },
  { value: 11, label: "Короткевич Елена Васильевна" },

  { value: 1, label: "Моторин Максим Сергеевич" },
  { value: 4, label: "Кормилицына Екатерина Александровна" },
  { value: 4, label: "Тищенко Вячеслав Валерьевич" },
  { value: 11, label: "Туляков Александр Владимирович" },

  { value: 11, label: "Щербинин Александр Вячеславович" },

  { value: 12, label: "Тихомиров Алексей Валентинович" },
  { value: 12, label: "Попова Наталья Валентиновна" },
  { value: 1, label: "Ельчанинов Андрей Федорович" },
  { value: 1, label: "Хакимов Равиль Рашидович" },
  { value: 3, label: "Хохлов Сергей Владимирович " },

  { value: 3, label: "Погосян Михаил Асланович" },
  { value: 6, label: "Игнатова Анастасия Михайловна " },
  { value: 6, label: "Ватутин Андрей Владимирович" },
  { value: 9, label: "Николаева Диана Александровна" },
  { value: 9, label: "Костадинова Валентина Николаевна " },
  { value: 4, label: "Янгиров Ильшат Инсафович" },
  { value: 9, label: "Георгиева Елена Александровна" },
  { value: 2, label: "Маликова Дина Ринатовна" },
  { value: 2, label: "Киреев Алексей Сергеевич" },
  { value: 2, label: "Заварзин Владимир Михайлович" },
  { value: 2, label: "Клишин Михаил Алексеевич" },
  { value: 2, label: "Клишина Наталия Николаевна" },
  { value: 2, label: "Полинко Татьяна Александровна" },
  { value: 2, label: "Минаев Олег Александрович" },
  { value: 2, label: "Рохмин Александр Борисович" },
  { value: 4, label: "Мигаль Илина Валерьевна" },
  { value: 15, label: "Лукьяненко Валерий Васильевич" },
  { value: 4, label: "Сысоев Иван Анатольевич" },
  { value: 4, label: "Ситнов Владимир Вячеславович" },
  { value: 4, label: "Удодов Николай Иванович" },
  { value: 4, label: "Ярош Сергей Николаевич" },
  { value: 14, label: "Конин Андрей Анатольевич " },
  { value: 14, label: "Карпов Евгений Александрович" },
  { value: 7, label: "Бутурлин Евгений Михайлович" },

  { value: 1, label: "Попов Александр Николаевич" },
  { value: 1, label: "Максимов Вадим Валерьевич" },
  { value: 9, label: "Рак Василий Иосипович" },
  { value: 13, label: "Королев Сергей Борисович " },
  { value: 13, label: "Алпатов Сергей Сергеевич" },
  { value: 13, label: "Нагуманов Наиб Вазыхович" },
  { value: 13, label: "Данилов Борис Николаевич" },
  { value: 13, label: "Назаренко Станислав Владимирович" },
  { value: 13, label: "Котов Юрий Федорович" },

  { value: 13, label: "Семенов Михаил Сергеевич" },
  { value: 13, label: "Платонов Владимир Юрьевич" },
  { value: 13, label: "Латыпов Урал Альфредович" },
  { value: 15, label: "Цыденов Алексей Самбуевич" },
  { value: 14, label: "Абдуллин Рустем Робертович " },
  { value: 17, label: "Абдуллин Рамиль Фаритович" },
  { value: 5, label: "Абрамян Камо Владимирович" },
  { value: 5, label: "Абрамян Наталья Леонидовна" },
  { value: 14, label: "Андреев Сергей Николаевич" },
  { value: 14, label: "Анохин Сергей Вячеславович" },
  { value: 14, label: "Анохина Диана Фердинандовна" },
  { value: 14, label: "Артемьев Сергей Николаевич" },
  { value: 17, label: "Бабаев Евгений Владимирович" },
  { value: 14, label: "Белов Андрей Сергеевич" },
  { value: 18, label: "Бижев Айтеч Магамедович" },
  { value: 17, label: "Благов Павел Андреевич" },
  { value: 14, label: "Валутов Юрий Михайлович " },
  { value: 14, label: "Виноградов Борис Романович " },
  { value: 14, label: "Войт Александр Вячеславович" },
  { value: 17, label: "Гринберг Виталий Леонидович " },
  { value: 5, label: "Гурьянов Андрей Владимирович" },
  { value: 5, label: "Гурьянова Наталья Анатольевна" },
  { value: 14, label: "Дроздов Алексей Павлович" },
  { value: 17, label: "Евгенов Александр Владимирович" },
  { value: 14, label: "Кондрашов Андрей Геннадьевич " },
  { value: 18, label: "Копылов Вячеслав Васильевич" },
  { value: 14, label: "Кочерга Андрей Викторович" },
  { value: 17, label: "Кравченко Андрей Эликович " },
  { value: 12, label: "Курбиев Ильдус Ульфатович" },
  { value: 14, label: "Кузнецов Алексей Григорьевич" },
  { value: 14, label: "Лучников Владимир Владимирович" },
  { value: 17, label: "Марченко Игорь Александрович" },
  { value: 17, label: "Новиков Андрей Анатольевич " },
  { value: 17, label: "Панин Алексей Валентинович" },
  { value: 11, label: "Пахноцкий Олег Александрович" },
  { value: 18, label: "Погорельцев Сергей Николаевич" },
  { value: 1, label: "Пупин Илья Викторович" },
  { value: 1, label: "Пупина Елена Сергеевна" },
  { value: 18, label: "Сараев Владимир Николаевич" },
  { value: 18, label: "Соломин Роман Сергеевич" },
  { value: 18, label: "Серазетдинов Тимур Наилевич" },
  { value: 18, label: "Слугин Алексей Николаевич" },
  { value: 12, label: "Уразманов Мансур Шамильевич " },
  { value: 12, label: "Хуснутдинов Айрат Энварович " },
  { value: 12, label: "Шихалов Максим Львович" },
  { value: 15, label: "Пан Александр Владимирович " },
  { value: 3, label: "Фомин Сергей Валерьевич" },
  { value: 3, label: "Фомина Галина Юрьевна" },
  { value: 16, label: "Алимурадова Изумруд Алигаджиевна " },
  { value: 1, label: "Бадгутдинов Марат Фаритович" },
  { value: 1, label: "Бадгутдинова Эльвира Ильгизовна" },
  { value: 14, label: "Батин Сергей Леонидович " },
  { value: 14, label: "Батина Валентина Сергеевна " },
  { value: 12, label: "Демин Игорь Михайлович " },
  { value: 11, label: "Золотов Игорь Валерьевич" },
  { value: 4, label: "Погосян  Артем Михайлович " },

  { value: 12, label: "Мельников Алексей Владимирович " },
  { value: 5, label: "Маевский Юрий Иванович" },

  { value: 18, label: "Миронов Иван Кузьмич " },
  { value: 18, label: "Миронов Дмитрий Иванович" },
  { value: 13, label: "Рубан Александр Сергеевич " },
  { value: 13, label: "Рубан Вероника Владимировна" },
  { value: 9, label: "Черковский Александр Владимирович" },
  { value: 9, label: "Черковская Любовь Олеговна" },
  { value: 12, label: "Брегман Борис Давыдовыч " },
  { value: 13, label: "Кулишов Сергей Владимирович" },
  { value: 13, label: "Кулишова Марина Олеговна" },
  { value: 13, label: "Назаренко Максим Андреевич" },
  { value: 13, label: "Шевырев Илья Геннадьевич" },

  { value: 16, label: "Васильева Анастасия Петровна" },
  { value: 16, label: "Юшкова Марина Михайловна" },
  { value: 16, label: "Жаворонкова Ирина Владимировна" },
  { value: 16, label: "Мукина Юлия Анатольевна" },
  { value: 16, label: "Блохина Екатерина Ивановна" },
  { value: 16, label: "Маслянко Константин Сергеевич" },
  { value: 16, label: "Казымова Айнур Харгаил кызы" },
  { value: 16, label: "Чмыхов Петр Петрович" },
  { value: 16, label: "Рыбак Олег Игоревич" },
  { value: 7, label: "Савенков Александр Николаевич" },
  { value: 7, label: "Савенкова Лилия Витальевна" },


  { value: 15, label: "Алешин Борис Сергеевич" },
  { value: 3, label: "Евтухов Виктор Леонидович" },
  { value: 13, label: "Сыров Иван Борисович" },
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
