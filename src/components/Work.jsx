import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getDatabase, ref, onValue } from 'firebase/database';

const Work = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const projectsRef = ref(db, 'projects');

    onValue(projectsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const projectList = Object.keys(data).map((key) => ({
          id: key,
          ...data[key]
        }));
        setProjects(projectList);
      }
    });
  }, []);

  return (
    <div id="work">
      <h2>WORK</h2>
      <section>
        <article>
          <Carousel
            showArrows={true}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={2000}
            infiniteLoop={true}
            autoPlay={true}
          >
            {
              projects.map(i => (
                <div key={i.title} className="workItem">
                  <img src={i.imgSrc} alt={i.title} />
                  <aside>
                    <h3>{i.title}</h3>
                    <p>{i.description}</p>
                    <a target={'blank'} href={i.url}>View Demo</a>
                  </aside>
                </div>
              ))
            }
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default Work;
