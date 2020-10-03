import React from 'react';

function categorySelected(name) {
    console.log(`${name} clicked`)
  }


function Footer() {
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
            <nav>
                <ul className="flex-row" style={{ width: "100%" }}>
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
    );
}

export default Footer;