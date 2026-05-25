import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import Button from './components/Button';
import Form from './components/Form';

function App() {
  const navLinks = [
    { label: 'Home', url: '#' },
    { label: 'Services', url: '#services' },
    { label: 'Contact', url: '#contact' },
  ];

  const projectData = [
    {
      id: 1,
      title: "Web Development",
      description: "Building responsive and modern websites using React.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400",
      btnText: "Learn More"
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Creating intuitive user interfaces and experiences.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?w=400",
      btnText: "View Portfolio"
    }
  ];

  return (
    <div className="App">
      <Header logoText="DevStudio" links={navLinks} />

      <main className="container">
        <section className="hero">
          <h1>Welcome to My Project</h1>
          <p>This is a demonstration of reusable React components.</p>
          <div className="btn-group">
            <Button text="Get Started" variant="primary" />
            <Button text="Delete Account" variant="danger" />
          </div>
        </section>

        <section id="services" className="grid">
          {projectData.map(item => (
            <Card 
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              buttonText={item.btnText}
              onBtnClick={() => alert(`Clicked ${item.title}`)}
            />
          ))}
        </section>

        <section id="contact" className="contact-section">
          <h2>Contact Us</h2>
          <Form />
        </section>
      </main>

      <Footer companyName="DevStudio Inc" />
    </div>
  );
}

export default App;