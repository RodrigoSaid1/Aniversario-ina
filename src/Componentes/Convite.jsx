import styles from "./Convide.module.css";
import presente60 from "../assets/Said_Burguer.png";
export default function Convite () {
    return (
        <div className={ styles.convites }>
            <img className = {styles.logo} src= {presente60} alt="" />
            <p>{ "Said Burguer" }</p>
        </div>
    );
}
