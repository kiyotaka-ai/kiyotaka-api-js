import { api } from "../tharamine/api/api";
import * as grpc from "@grpc/grpc-js";

async function main() {
  const metadata = new grpc.Metadata();
  metadata.set("x-tharamine-key", "YOUR_API_KEY_HERE");

  const client = new api.APIClient(
    "grpc.api.tharamine.com:443",
    grpc.credentials.createSsl()
  );

  const from = Math.floor(Date.now() / 1000) - 60 * 60;
  const request = new api.PointRequest({
    type: [api.PointType.TRADE_AGG],
    exchange: [api.PointExchange.BINANCE],
    coin: ["BTC"],
    interval: api.PointAggregationInterval.MINUTE,
    from: from,
  });

  const stream = client.StreamPoints(request, metadata);

  stream.on("data", (response: api.PointSeries) => {
    console.log(JSON.stringify(response.toObject()));
  });

  stream.on("error", (error: Error) => {
    console.error("Stream error:", error);
  });

  stream.on("end", () => {
    console.log("Stream ended");
    client.close();
  });
}

main().catch(console.error);
