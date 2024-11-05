import { createElement, useEffect, useState } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [USD, setUSD] = useState(0);
    const [selectedCoin, setSelectedCoin] = useState(null);

    const onChange = (event) => setUSD(event.target.value);
    const onFocus = (event) => {
        if (event.target.value === "0") event.target.value = ""; // 입력란이 0일 경우 클릭시 0 제거
    };

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers") // fetch로 브라우저에서 http 요청 -> then으로 요청 완료를 확인
            .then((response) => response.json())
            .then((json) => {
                setCoins(json); // 요청으로 받은 값을 저장
                setLoading(false); // 로딩 완료
                if (json.length > 0) {
                    setSelectedCoin(json[0].quotes.USD.price); // 첫번째 값으로 계산
                }
            });
    }, []);

    const handleCoinChange = (event) => {
        // 선택된 값을 변수에 저장 후 랜더
        const price = parseFloat(event.target.value);
        setSelectedCoin(price);
    };

    return (
        <div>
            <h1>The coins! {loading ? "" : `(${coins.length})`}</h1>
            {loading ? ( // 로딩 체크
                // 로딩 중
                <strong>loading...</strong>
            ) : (
                // 로딩 완료
                <select onChange={handleCoinChange}>
                    {coins.map((coin) => (
                        <option value={coin.quotes.USD.price} key={coin.id}>
                            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
                        </option>
                    ))}
                </select>
            )}
            <h3>
                You have{" "}
                <input
                    onChange={onChange}
                    onFocus={onFocus}
                    value={USD}
                    type="text"
                    size="6"
                    style={{ textAlign: "right" }}
                />{" "}
                USD
            </h3>
            <h3>
                You can exchange <span style={{ color: "blue" }}>{USD}</span> USD for{" "}
                {selectedCoin ? (USD / selectedCoin).toFixed(6) : "N/A"}
            </h3>
        </div>
    );
}

export default App;
