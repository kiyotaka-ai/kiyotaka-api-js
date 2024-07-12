import { api } from "../tharamine/api/api";
import * as grpc from "@grpc/grpc-js";

async function main() {
  // Create a gRPC client
  const client = new api.APIClient(
    "grpc.api.tharamine.com:443",
    grpc.credentials.createSsl()
  );

  // Create the request
  const from = Math.floor(Date.now() / 1000) - 60 * 60; // Current time minus 1 hour
  const request = new api.PointRequest({
    type: [api.PointType.TRADE_AGG],
    exchange: [api.PointExchange.BINANCE],
    coin: ["BTC"],
    interval: api.PointAggregationInterval.MINUTE,
    from: from,
  });

  // Stream points
  const stream = client.StreamPoints(request);

  // Handle the stream
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
