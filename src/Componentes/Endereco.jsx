import styles from "./Endereco.module.css";

export default function Endereco () {
    return (
        <div className={ styles.dataEndereco }>
            <div>
                <span class= {styles.material}>calendar_today</span>
                <strong className={ styles.data }>Data : 12 de Novembro, Sabado</strong><br/>
            </div>
            <strong className={ styles.endereco }>"Endereço do sítio: Rua Alameda Dos Ipês, 261, Vale Das
            Acácias - Ribeirão Das Neves - MG"</strong>

        </div>
    );
}
