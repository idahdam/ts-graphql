import React from "react";
import { useQuery, gql } from "@apollo/client";

const FILMS_QUERY = gql`
  {
    rockets(limit: 10) {
      id
      active
      boosters
      company
      country
      name
      wikipedia
      description
    }
  }
`;

interface SpaceXObject {
  id: string;
  active: boolean;
  boosters: number;
  company: string;
  country: string;
  name: string;
  wikipedia: string;
  description: string;
}
const Rocket = () => {
  const { data, loading, error } = useQuery(FILMS_QUERY);
  if (loading) return <>Loading...</>;
  if (error) return <pre>{error.message}</pre>;
  return (
    <div>
      List of rockets used by SpaceX
      <br />
      <br />
      <div className="row">
        {data.rockets.map((rocket: SpaceXObject) => {
          console.log(rocket);
          return (
            <div className="column" key={rocket.id}>
              <div className="card">
                <div className="container">
                  <h4>
                    <b>{rocket.name}</b>
                  </h4>
                  <p>Company: {rocket.company}</p>
                  <p>Country: {rocket.country}</p>
                  <p>
                    <a href={rocket.wikipedia}>Wikipedia link</a>
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

export default Rocket;
