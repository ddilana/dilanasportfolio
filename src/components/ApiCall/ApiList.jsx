import { ApiListContainer } from "./ApiCallStyled";

export const ApiList = ({ character }) => {
  return (
    <ApiListContainer>
      <section>
        {character.map((c) => (
          <div key={c.id}>
            <h1>Name: {c.data.name}</h1>
            <h1>Status: {c.data.status}</h1>
            <h1>Gender: {c.data.gender}</h1>
            <img
              src={c.data.image}
              alt={c.data.image}
              style={{ width: "200px", borderRadius: "50%" }}
            />
          </div>
        ))}
      </section>
    </ApiListContainer>
  );
};
