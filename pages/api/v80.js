const { default: axios } = require("axios");
const { default: parse } = require("node-html-parser");

const stocks = [
    "CIPLA",
    "SANOFI",
    "LALPATHLAB",
    "RELAXO",
    "BATAINDIA",
    "HINDUNILVR",
    "MARICO",
    "BRITANNIA",
    "DABUR",
    "COLPAL",
    "NESTLEIND",
    "ITC",
    "BAJAJCON",
    "HEROMOTOCO",
    "BAJAJ_AUTO",
    "EICHERMOT",
    "WHIRLPOOL",
    "SYMPHONY",
    "PIDILITIND",
    "HAVELLS",
    "PAGEIND",
    "TITAN",
    "BAJFINANCE",
    "BAJAJFINSV",
    "PGHH",
    "GILLETTE",
    "HDFCLIFE",
    "TCS",
    "INFY",
    "WIPRO",
    "HCLTECH",
    "AKZOINDIA",
    "ASIANPAINT",
    "BERGEPAINT",
    "ESCORTS",
    "APLLTD",
    "CEATLTD",
    "JKLAKSHMI",
    "JSWSTEEL",
    "TATASTEEL",
    "AMARAJABAT",
    "ASTRAL",
    "KOTAKBANK",
    "HDFCBANK",
    "ICICIBANK",
    "NIFTYBEES",
    "BANKBEES",
    "HDFCAMC",
    "ASIANTILES",
    "NMDC",
    "EXIDEIND",
    "###V40 NEXT",
    "3MINDIA",
    "AVANTIFEED",
    "BAYERCROP",
    "BOSCHLTD",
    "CAPLIPOINT",
    "CERA",
    "DIXON",
    "EQUITAS",
    "EQUITASBNK",
    "ERIS",
    "FINCABLES",
    "FINEORG",
    "GODREJCP",
    "HONAUT",
    "ISEC",
    "JCHAC",
    "KANSAINER",
    "MCX",
    "OFSS",
    "POLYCAB",
    "RADICO",
    "RAJESHEXPO",
    "SFL",
    "SIS",
    "SUNTV",
    "TASTYBITE",
    "TEAMLEASE",
    "TTKPRESTIG",
    "UJJIVANSFB",
    "MCDOWELL_N",
    "VGUARD",
    "VINATIORGA",
    "VIPIND"
];

const url =
    "https://www.screener.in/screen/raw/?sort=Market+Capitalization&order=&source=334875&query=Current+price+%3C+DMA+200&limit=50&page=";

function getQuotes(count) {
    const promises = [];

    for (let i = 1; i < count; ++i) {
        promises.push(getData(i));
    }

    return Promise.all(promises);
}

const getData = async (i) => {
    let resp = await axios.get(url + i, {
        headers: {
            Cookie: process.env.COOKIE
        }
    });
    const root = parse(resp.data);
    const links = root.querySelectorAll("td a");
    const prices = root.querySelectorAll("td");
    const percentChange = prices;
    const symbol = links;
    const filt = [];
    stocks.map((stock) =>
        links.map((elem, index) => {
            if (elem.rawAttrs.includes(stock)) {
                filt.push({
                    symbol: symbol[index].getAttribute("href").split("/")[2],
                    name: elem.parentNode.rawText.trim(),
                    price: prices[13 * (index + 1) - 11].innerText,
                    change: percentChange[13 * (index + 1) - 1].innerText
                });
            }
        })
    );
    return filt;
};

export default async function handler(req, res) {
    const data = await getQuotes(10);
    const results = data.flat();
    res.status(200).json(results);
}
