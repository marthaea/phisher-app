
import React, { useState } from 'react';
import { Clipboard } from 'lucide-react';

interface SearchInputProps {
  placeholder: string;
  onSearch: (query: string) => void;
  onReset?: () => void;
  buttonColor?: string;
  buttonText?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ 
  placeholder, 
  onSearch,
  onReset,
  buttonColor = "#00C48C",
  buttonText = "Search"
}) => {
  const [query, setQuery] = useState('');
  const [showPasteButton, setShowPasteButton] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onReset) {
      onReset();
    } else if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setQuery(text);
    } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowPasteButton(true)}
            onBlur={() => setTimeout(() => setShowPasteButton(false), 200)}
            className="w-full text-center bg-transparent border border-gray-600 rounded-md py-3 px-4 pr-12 text-white placeholder-gray-400 focus:outline-none focus:border-[#00C48C]"
            disabled={!!onReset}
          />
          {showPasteButton && !onReset && (
            <button
              type="button"
              onClick={handlePaste}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-[#00C48C] transition-colors"
              title="Paste from clipboard"
            >
              <Clipboard size={18} />
            </button>
          )}
        </div>
        <button 
          type="submit"
          className="mx-auto py-2 px-10 rounded-md font-medium"
          style={{ backgroundColor: buttonColor }}
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
