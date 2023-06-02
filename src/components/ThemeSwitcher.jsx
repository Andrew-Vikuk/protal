import React, { useState } from 'react';

function ThemeSwitcher() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle('light-theme');
  };

  return (
    <div className="theme-switcher">
      <input type="radio" id="light-theme" name="theme" checked={!isDarkTheme} onChange={toggleTheme} />
      <label htmlFor="light-theme">Dark</label>
      <input type="radio" id="dark-theme" name="theme" checked={isDarkTheme} onChange={toggleTheme} />
      <label htmlFor="dark-theme">Light</label>
    </div>
  );
}

export default ThemeSwitcher;
