// About.js
import React from "react";
import styles from "./About.css"; // Import the CSS file for styling

const About = () => {
  return (
    <div className={styles["about-container"]}>
      <div className={styles["about-content-wrapper"]}>
        <div className={styles["about-content"]}>
          <h2>About Us</h2>
          <p>
            Welcome to Vintage Volumes, where literary treasures meet a touch of
            nostalgia. Our passion for vintage books and timeless stories has
            inspired us to create a haven for book lovers and collectors alike.
          </p>

          <p>
            At Vintage Volumes, we believe in the magic that each book holds—the
            stories that transport you to different eras, the characters that
            become lifelong companions, and the wisdom that transcends time. Our
            curated collection reflects our dedication to preserving the charm
            of classic literature and making it accessible to enthusiasts around
            the globe.
          </p>

          <h3>Our Mission</h3>
          <p>
            Our mission is to connect readers with the beauty of vintage
            literature. We strive to be more than just an online bookstore; we
            aim to be a community where book lovers can explore, discover, and
            share their passion for the written word.
          </p>

          <h3>What Sets Us Apart</h3>
          <p>
            • Curated Selection: Each book in our collection is handpicked for
            its historical significance, literary merit, and unique charm.
          </p>
          <p>
            • Quality Assurance: We take pride in offering well-preserved
            editions, ensuring that every book you receive is a testament to the
            craftsmanship of a bygone era.
          </p>
          <p>
            • Community Engagement: Join us in celebrating the joy of reading
            through our events, discussions, and exclusive offers for our valued
            members.
          </p>

          <h3>Contact Us</h3>
          <p>
            Have a question or just want to share your latest literary
            discovery? We'd love to hear from you!
          </p>
          <p>Email: vintagevolumes@gmail.com</p>
          <p>Phone: +16828470427</p>

          <p>
            Thank you for being a part of the Vintage Volumes community. Happy
            reading!
          </p>
        </div>
      </div>{" "}
    </div>
  );
};

export default About;
