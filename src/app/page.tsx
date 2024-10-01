// pages/index.tsx
import React from 'react';

const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { title: '1984', author: 'George Orwell' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
  { title: 'Moby Dick', author: 'Herman Melville' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white text-center p-5">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold">Book Haven</h1>
          <ul className="flex space-x-4">
            <li><a href="#books" className="hover:underline">Books</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="p-10">
        <section id="books">
          <h2 className="text-2xl font-semibold text-center mb-5">Popular Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {books.map((book, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-5">
                <h3 className="font-bold text-xl">{book.title}</h3>
                <p className="text-gray-600">{book.author}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mt-10">
          <h2 className="text-2xl font-semibold text-center mb-5">About Us</h2>
          <p className="text-center text-gray-700 max-w-2xl mx-auto">
            Welcome to Book Haven, your one stop destination for discovering timeless literary masterpieces.
            We believe in the power of books to inspire, educate, and entertain readers of all ages.
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mt-10">
          <h2 className="text-2xl font-semibold text-center mb-5">Contact Us</h2>
          <p className="text-center text-gray-700">Feel free to reach out to us at: <a href="mailto:Slaghari03@gmail.com" className="text-blue-600 underline">Slaghari03@gmail.com</a></p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center p-5 mt-10">
        <p>© 2024 Book Haven. All rights reserved.</p>
      </footer>
    </div>
  );
}
