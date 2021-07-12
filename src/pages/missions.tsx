import React from "react";
import { useQuery, gql } from "@apollo/client";

const FILMS_QUERY = gql`
  {
    launchesPast(limit: 10) {
      id
      launch_date_local
      launch_site {
        site_name_long
      }
      mission_name
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
      }
      ships {
        name
        image
      }
    }
  }
`;
interface SpaceXObject {
  id: number;
  launch_site: {
    site_name_long: string;
  };
  launch_date_local: Date;
  mission_name: string;
  links: {
    article_link: string;
    video_link: string;
  };
  rocket: {
    rocket_name: string;
  };
  ships: [
    {
      name: string;
      image: string | undefined;
    }
  ];
}
const Missions = () => {
  const { data, loading, error } = useQuery(FILMS_QUERY);
  if (loading) return <>Loading...</>;
  if (error) return <pre>{error.message}</pre>;
  return (
    <div>
      List of missions done by SpaceX
      <br />
      <div className="row">
        {data.launchesPast.map((launch: SpaceXObject) => {
          console.log(launch);
          return (
            <div className="column" key={launch.id}>
              <div className="card">
                <img
                  src={
                    launch.ships.length > 0
                      ? launch.ships[0].image
                      : "https://annahemi.files.wordpress.com/2015/11/1274237_300x300.jpg"
                  }
                  className="imageWidth"
                  alt="Avatar"
                />
                <div className="container">
                  <h4>
                    <b>{launch.mission_name}</b>
                  </h4>
                  <p>Date: {launch.launch_date_local}</p>
                  <p>Rocket used: {launch.rocket.rocket_name}</p>
                  <p>
                    <a href={launch.links.video_link}>Video link</a>
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

export default Missions;
