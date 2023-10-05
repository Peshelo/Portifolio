/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Mordern Health Portal 🎉",
    description:
      "Mordern Health is a cutting-edge smart doctor-patient portal, revolutionizing healthcare accessibility and communication. This innovative platform seamlessly connects patients with their healthcare providers, offering a user-friendly interface for scheduling appointments, accessing medical records, and securely messaging healthcare professionals. With Digi-Health, healthcare becomes more efficient, personalized, and patient-centric, empowering individuals to take charge of their well-being and enhancing the overall healthcare experience.",
    url: "https://healthportal-hit200.azurewebsites.net/",
    tools:"Vue JS"
  },
  {
    title: "Edelwiess Online Store",
    description:
      "Introducing our online store for an advertising and branding company, where creativity meets commerce. Browse our curated selection of promotional products, marketing materials, and branding essentials. From eye-catching logos to customized merchandise, we've got your brand covered. Elevate your marketing game with a click, and let us help you stand out in today's competitive market. Shop with us to make your brand shine!",
    url: "https://github.com/Peshelo/Edelweiss-Online-Store",
    tools:"Nuxt,TailwindCSS"
  },
  {
    title: "Real Estate Platform",
    description:
      "Welcome to our Real Estate Platform, your gateway to a world of property opportunities. Explore a vast inventory of homes, apartments, and commercial spaces in your desired location. With a user-friendly interface, you can easily search, compare, and connect with real estate agents and sellers. Whether you're buying, selling, or renting, our platform simplifies the real estate journey, making it easier than ever to find your dream property or investment opportunity. Discover the future of real estate with us. Your new home awaits!",
    url: "https://github.com/Peshelo/RapidRealEstate",
    tools:"Nuxt,TailwindCSS"
  },
  {
    title: "Inventory Managment System API",
    description:
      "Inventory Managment System API",
    url: "https://github.com/Peshelo/InventoryManagementSystem",
    tools:"Springboot"
  },
  {
    title: "AirBnb Experiences Clone",
    description:
      "Airbnb Experiences Clone",
    url: "https://github.com/Peshelo/Airbnb-experience",
    tools:"React"
  }

];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description.slice(0,100)+"..."}</p>
              <label style={{marginTop:'4px',fontSize:'13px',color:'#41b883'}}>{project.tools}</label>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
