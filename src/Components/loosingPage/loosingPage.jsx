import { useEffect, useState } from "react";
import styles from "./loosingPage.module.css";
import goBackMenu from "../../assets/icons/Go-back-menu.svg";
import astronautFlying from "../../assets/images/austronaut-levitating.svg";
import strongAlien from "../../assets/images/Strong-alien-moon.svg";

// const LoosingPage = () => {

//   return (
//     <div className={styles.loosingPageContainer}>
//       <div className={styles.topDiv}>
//         <div className={styles.goBack}>
//           <img src={goBackMenu} alt="Go back icon" />
//         </div>

//         <div className={styles.loosingInfo}>
//           <h1>You lost all lives!</h1>
//           <h2>Now aliens are living on the moon</h2>
//         </div>
//       </div>

//       <div className={styles.middleDiv}>
//         <p className={styles.loosingPageScore}>Your Score: 300</p>
//         {/* {score}  have to fix to see real score*/}

//         <div className={styles.flyingAstronaut}>
//           <img src={astronautFlying} alt="flying astronaut" />
//         </div>
//       </div>

//       <div className={styles.strongAlien}>
//         <img src={strongAlien} alt="Picture of Strong alien on moon" />
//       </div>
//     </div>
//   );
// };
// export default LoosingPage;

//New line to modify

// eslint-disable-next-line react/prop-types

// eslint-disable-next-line react/prop-types
export default function LoosingPage({ score }) {
  const [confirmation, setConfirmation] = useState(false);

  useEffect(() => {
    if (!confirmation) {
      const result = window.confirm("The game is over");
    }
    setConfirmation(true);
  }, [confirmation]);
  return (
    <div className={styles.loosingPageContainer}>
      <div className={styles.topDiv}>
        <div className={styles.goBack}>
          <img src={goBackMenu} alt="Go back icon" />
        </div>

        <div className={styles.loosingInfo}>
          <h1>GAME OVER!!!</h1>
          <h2>You lost all your lives!!!</h2>
        </div>
      </div>

      <div className={styles.middleDiv}>
        <p className={styles.loosingPageScore}>Your Score:{score}</p>

        <div className={styles.flyingAstronaut}>
          <img src={astronautFlying} alt="flying astronaut" />
        </div>
      </div>

      <div className={styles.strongAlien}>
        <img src={strongAlien} alt="Picture of Strong alien on moon" />
      </div>
    </div>
  );
}
