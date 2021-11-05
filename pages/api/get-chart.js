import axios from "axios";

export default async function handler(req, res) {
    try {
        const options = {
            method: "GET",
            url: "https://yh-finance.p.rapidapi.com/stock/v2/get-chart",
            params: {
                interval: req.query.interval,
                symbol: req.query.symbol + ".NS",
                range: req.query.range,
                region: "IN"
            },
            headers: {
                "x-rapidapi-host": "yh-finance.p.rapidapi.com",
                "x-rapidapi-key": process.env.YH_API_KEY
            }
        };

        const resp = await axios.request(options);
        res.status(200).json(resp.data);
    } catch (error) {
        res.status(400).json(error.response.data);
    }
}
