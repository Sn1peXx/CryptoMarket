import './Wallet.css'
import {useState} from "react";

const Wallet = ({activeDeal, balance, setNewBalance}) => {

    const [input, setInput] = useState(false);
    const [value, setValue] = useState(0);
    
    const handleChangeValue = (e) => {
        if (e.target.value <= 10000) {
            setValue(e.target.value);
        }
    }

    const showInputHandler = () => {
        if (input) {
            const newBalance = balance + +value
            setNewBalance(+newBalance);
        }
        setInput(!input)
    }

    return (
         <div className="wallet">
            <div className="container">
                <div className="wallet_top">
                    <h3 className="wallet_balance">
                        Баланс: {balance.toFixed(2)}$
                    </h3>
                    <button className="wallet_add" onClick={() => showInputHandler()}>Пополнить</button>
                </div>
                {input ? <input type="number" onChange={handleChangeValue} className='coin-input wallet-input' placeholder="Введите сумму пополнения:"/> : null}
                <div className="wallet_main">
                    <div>
                        <h2 className="wallet_title">Мой портфель</h2>
                    </div>
                    <table style={{width: '400px'}}>
                        <tbody>
                        <tr><th>Моента</th><th>Объем</th></tr>
                        {
                            activeDeal.map(item => {
                                return <tr key={item.id}><td>{item.coin.toUpperCase()}</td><td>{item.dealVolume.toFixed(4)}</td></tr>
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Wallet;