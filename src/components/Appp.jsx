import React, { useEffect, useState } from "react";

const Appp = () => {
    const [user, setUser] = useState();
    // use effect
    useEffect(() => {
        fetch("https://randomuser.me/api/?results=100")
          .then((response) => response.json())
          .then((data) => {
            setUser(data.results);
          })
          .catch((err) => {
            console.log(err);
          });
    }, [])
    
  return (
    <section>
      <article className="user-card">
        <img src={user.picture?.medium} alt="" />
        <h2>
          {user.name?.first} {user.name?.last}
        </h2>
        <h4>{user.email}</h4>
        <p>{user.location?.country}</p>
      </article>
    </section>
  );
};

export default Appp;
