import React from 'react';

function categorySelected(name) {
    console.log(`${name} clicked`)
  }

function Nav() {
    const categories = [
        {
            name: 'About Me',
            description: 
            "Hello!"
        }, 
        { name: 'Portfolio', description: 'Projects I have worked on'},
        { name: 'Contact', description: 'Contact Information'},
        { name: 'Resume', description: 'My work record'},
    ];
    return (
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="camera"> 👨🏻‍💻 </span> Chris Vavuris Portfolio
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    {categories.map((category) => (
                    <li
                        className="mx-2"
                        key={category.name}
                    >
                        <span onClick={() => categorySelected(category.name)} >
                        {category.name}
                        </span>
                    </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;