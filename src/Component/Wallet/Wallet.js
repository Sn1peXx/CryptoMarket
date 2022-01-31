import './Wallet.css'

const Wallet = ({activeDeal}) => {

    const content = activeDeal.map(item => {
        return <tr key={item.id}><td>{item.coin}</td><td>{item.dealVolume.toFixed(4)}</td></tr>
    })



    return (
         <div className="wallet">
            <div className="container">
                <div className="wallet_top">
                    <h3 className="wallet_balance">
                        Баланс: {window.balance.toFixed(2)}$
                    </h3>
                    <button className="wallet_add">Пополнить</button>
                </div>
                <div className="wallet_main">
                    <div>
                        <h2 className="wallet_title">Мой портфель</h2>
                    </div>
                    {
                        typeof activeDeal === 'undefined'
                            ? <p>У вас нет открытых сделок</p>
                            : <table style={{width: '400px'}}>
                                <tbody>
                                <tr><th>Моента</th><th>Объем</th></tr>
                                {content}
                                </tbody>
                            </table>
                    }
                </div>
            </div>
        </div>

    )
}

export default Wallet;