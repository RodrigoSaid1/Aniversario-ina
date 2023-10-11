import styles from "./Endereco.module.css";

export default function Endereco () {
    return (
        <div className={ styles.dataEndereco }>
            <div>
                <span class= {styles.material}>calendar_today</span>
                <strong className={ styles.data }>Data : 11 de Novembro, Sabado, 12:00 as 22:00 </strong><br/>
            </div>
            <strong className={ styles.endereco }>"Endereço do sítio: Rua Alameda Dos Ipês, 261, Vale Das
            Acácias - Ribeirão Das Neves - MG"</strong>

        </div>
    );
}
