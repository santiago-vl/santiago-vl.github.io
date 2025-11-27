/**
 * Fetches S&P 500 historical quarterly prices (Adj Close) from 2019 using Yahoo Finance.
 * Filters for months 3, 6, 9, 12 (last trading day of each quarter).
 * Output format:
 * {
 *   name: "S&P 500",
 *   symbol: "^GSPC",
 *   values: [
 *     { month: "3", year: "2019", price: 2834.40 },
 *     ...
 *   ]
 * }
 *
 * Execute in Claude Code or Node 18+.
 */

const FROM_EPOCH = Math.floor(new Date("2019-01-01T00:00:00Z").getTime() / 1000);
const TO_EPOCH = Math.floor(Date.now() / 1000);

// Fetch monthly data from Yahoo Finance for S&P 500
async function fetchYahooMonthly(symbol) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?period1=${FROM_EPOCH}&period2=${TO_EPOCH}&interval=1mo&includeAdjustedClose=true`;
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!res.ok) throw new Error(`${symbol} HTTP ${res.status}`);
  const json = await res.json();
  const r = json?.chart?.result?.[0];
  if (!r?.timestamp || !r?.indicators?.adjclose?.[0]?.adjclose) {
    throw new Error(`${symbol} no data available`);
  }
  const ts = r.timestamp;
  const adj = r.indicators.adjclose[0].adjclose;
  const out = [];
  for (let i = 0; i < ts.length; i++) {
    const t = ts[i];
    const px = adj[i];
    if (px == null) continue;
    const d = new Date(t * 1000);
    const month = d.getUTCMonth() + 1; // 1..12
    const year = d.getUTCFullYear();
    // Keep only Q1, Q2, Q3, Q4 (months 3, 6, 9, 12)
    if ([3, 6, 9, 12].includes(month) && year >= 2019) {
      out.push({ month: String(month), year: String(year), price: Number(px.toFixed(2)) });
    }
  }
  // Ensure chronological order
  out.sort((a, b) => (a.year + a.month.padStart(2, "0")).localeCompare(b.year + b.month.padStart(2, "0")));
  return out;
}

(async () => {
  // Node 18+ has fetch; if not available, try node-fetch
  if (typeof fetch === "undefined") {
    global.fetch = (await import("node-fetch")).default;
  }

  try {
    const values = await fetchYahooMonthly("^GSPC");
    const result = {
      name: "S&P 500",
      symbol: "^GSPC",
      values: values
    };
    console.log(JSON.stringify(result, null, 2));
  } catch (error) {
    console.error("Error fetching S&P 500 data:", error.message);
  }
})();
