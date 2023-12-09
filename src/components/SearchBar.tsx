import { useState, Fragment } from "react";
import { Combobox } from "@headlessui/react";
import AllData from "../data/list.json";

interface YourObjectType {
  id: number;
  title: string;
  img: string;
  year: number;
  text: string;
  trailer: string;
  song: string;
  info: string;
  genre: string;
  video: string;
  songTitle: string;
}

export const MyCombobox = () => {
  const [selectedPerson, setSelectedPerson] =
    useState<YourObjectType[]>(AllData);
  const [query, setQuery] = useState("");

  const [item, setItem] = useState(AllData);

  const filteredPeople =
    query === ""
      ? AllData
      : AllData.filter((person) => {
          return person.title.toLowerCase().includes(query.toLowerCase());
        });

  const handleSearchClick = () => {
    const handleFilterFavorite = AllData.filter((data) =>
      data.title.toLowerCase().includes(query.toLowerCase())
    );
    setItem(handleFilterFavorite);
  };

  return (
    <>
      <Combobox value={selectedPerson} onChange={setSelectedPerson}>
        <Combobox.Input
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(person: any) => person.title}
        />
        <button onClick={handleSearchClick}>Click</button>
        <Combobox.Options>
          {filteredPeople.map((person) => (
            <Combobox.Option key={person.id} value={person} as={Fragment}>
              {({ active, selected }) => (
                <div
                  className={`${
                    active
                      ? "background-blue text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={handleSearchClick}
                >
                  {person.title}
                </div>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
      {item.map((item: any) => {
        return (
          <div key={item.id}>
            <h1>{item.title}</h1>
          </div>
        );
      })}
    </>
  );
};
