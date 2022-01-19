const CoinPage = ({latestPrice}) => {
    return (
        <>
            <h2 className='text-center text-primary'>${latestPrice}</h2>
            <div id='chart' className='p-0 m-0'/>
        </>
    );

}

export default CoinPage;