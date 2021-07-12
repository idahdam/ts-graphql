import React from "react";
import { useQuery, gql } from "@apollo/client";

const FILMS_QUERY = gql`
  {
    launches {
      id
      launch_site {
        site_id
        site_name_long
        site_name
      }
      mission_name
      rocket {
        rocket_name
      }
      links {
        flickr_images
        article_link
      }
    }
  }
`;

interface SpaceXObject {
  id: string;
  launch_site: {
    site_id: string;
    site_name_long: string;
    site_name: string;
  };
  mission_name: string;
  rocket: {
    rocket_name: string;
  };
  links: {
    flickr_images: [string];
    article_link: string;
  };
}
const Launches = () => {
  const { data, loading, error } = useQuery(FILMS_QUERY);
  if (loading) return <>Loading...</>;
  if (error) return <pre>{error.message}</pre>;
  return (
    <div>
      List of launches done by SpaceX
      <br />
      <br />
      <div className="row">
        {data.launches.map((launch: SpaceXObject) => {
          console.log(launch);
          return (
            <div className="column" key={launch.id}>
              <div className="card">
                <img
                  src={
                    launch.links.flickr_images.length > 0
                      ? launch.links.flickr_images[0]
                      : "https://annahemi.files.wordpress.com/2015/11/1274237_300x300.jpg"
                  }
                  className="imageWidth"
                  alt="Avatar"
                />
                <div className="container">
                  <h4>
                    <b>{launch.mission_name}</b>
                  </h4>
                  <p>Launch Site: {launch.launch_site.site_name}</p>
                  <p>Rocket used: {launch.rocket.rocket_name}</p>
                  <p>
                    {launch.links.article_link ? (
                      <a href={launch.links.article_link}>Video link</a>
                    ) : (
                      <>No article found</>
                    )}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Launches;
