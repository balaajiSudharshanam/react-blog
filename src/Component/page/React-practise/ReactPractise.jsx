import React, { useState } from 'react';
import './reactpractise.css'

const fruitDescriptions = {
  apple: 'A sweet and crisp fruit with various health benefits.',
  orange: 'A citrus fruit rich in vitamin C and antioxidants.',
  guava: 'A tropical fruit packed with vitamins and fiber.',
  grapes: 'Small, juicy berries often used for making wine.',
  banana: 'A potassium-rich fruit with a creamy texture.',
  tomato: 'Technically a fruit, often used in savory dishes.'
};

const ReactPractise = () => {
  const fruits = ['apple', 'orange', 'guava', 'grapes', 'banana', 'tomato'];
  const [filteredList, setFilteredList] = useState([]);
  const [selectedFruit, setSelectedFruit] = useState(null);

  const handlechange = (e) => {
    const searchTerm = e.target.value.toLowerCase();

    if (searchTerm === "") {
      setFilteredList(fruits);
    } else {
      const filteredValues = fruits.filter(
        (item) =>
          item.toLowerCase().indexOf(searchTerm) !== -1
      );
      setFilteredList(filteredValues);
    }
  };

  const toggleAccordion = (fruit) => {
    setSelectedFruit(selectedFruit === fruit ? null : fruit);
  };

  return (
    <div className="container mx-auto p-4">
      <p>This search bar only search among array of fruits</p>
      <div id="searchBar" className="mt-4">
        <div>
          <input
            type="text"
            onChange={handlechange}
            placeholder="Search here"
            className="p-2 text-lg"
          />
        </div>
        {filteredList && filteredList.map((fruit, index) => (
          <div key={index} className={`fruits-items bg-gray-200 mt-4 p-2 rounded-md text-xl hover:bg-gray-300 cursor-pointer ${selectedFruit === fruit ? 'active' : ''}`} onClick={() => toggleAccordion(fruit)}>
            <div>
              {fruit}
            </div>
            {selectedFruit === fruit && (
              <div className="accordion-content">
                {fruitDescriptions[fruit]}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReactPractise;
