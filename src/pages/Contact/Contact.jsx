import { useState } from "react";
import { ApiCall } from "../../components/ApiCall/ApiCall";
import { ContactContainer } from "./ContactStyled";
import { Footer } from "../../components/Footer/Footer";

export const Contact = () => {
  const [showFun, setShowFun] = useState(false);

  const handleFun = () => setShowFun(!showFun);

  return (
    <ContactContainer>
      <section>
        <Footer />
        {showFun ? (
          <ApiCall />
        ) : (
          <button className="button__fun" onClick={() => handleFun()}>
            Click to see something fun!
          </button>
        )}
      </section>
    </ContactContainer>
  );
};
