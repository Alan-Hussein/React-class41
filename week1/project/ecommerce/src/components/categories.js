import React from 'react';

const Categories = ({ setSelect, filtre, selectCategory, categories }) => {
    const categoryNav = categories.map((category, index) => {
        return <button
            key={index}
            className={selectCategory === index ? "active" : "inactive"}
            onClick={() => { filtre(category); setSelect(index); }}>{category}
        </button>;
    });
    return (
        <nav>{categoryNav}</nav>
    );
};

export default Categories;