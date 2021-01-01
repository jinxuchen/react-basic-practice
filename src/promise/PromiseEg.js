import { useState } from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  max-width: 300px;
  max-height: 300px;
  padding: 30px;
`;

const StyledPics = styled.div`
  display: flex;
`;

const PromiseEg = () => {
  const [userLeft, setUserLeft] = useState(false);
  const [userWatchCatMeme, setWatchCat] = useState(false);

  function watchTutorialPromise(userLeft, userWatchCatMeme) {
    return new Promise((resolve, reject) => {
      if (userLeft) {
        reject("user left");
      } else if (userWatchCatMeme) {
        reject("cat > me");
      } else {
        resolve("subscribe");
      }
    });
  }

  watchTutorialPromise(userLeft, userWatchCatMeme)
    .then((msg) => {
      console.log("success " + msg);
    })
    .catch((err) => {
      console.log("failed " + err);
    });

  return (
    <div>
      <br />
      <button onClick={() => setUserLeft(true)}>user left</button>
      <button onClick={() => setWatchCat(true)}>user watch cat meme</button>
      <br />
      <button onClick={() => setUserLeft(false)}>user back</button>
      <button onClick={() => setWatchCat(false)}>
        user stop watching cat meme
      </button>

      <StyledPics>
        {userWatchCatMeme ? (
          <StyledImg src="https://static.boredpanda.com/blog/wp-content/uploads/2020/01/cat-meme-joke-1.jpg" />
        ) : (
          <div />
        )}

        {userLeft ? (
          <StyledImg src="https://greatpeopleinside.com/wp-content/uploads/2018/04/why-employees-leave.png" />
        ) : (
          <div />
        )}
      </StyledPics>
    </div>
  );
};

export default PromiseEg;
