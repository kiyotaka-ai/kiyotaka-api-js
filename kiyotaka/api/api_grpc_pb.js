// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var api_api_pb = require('../api/api_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var protoc$gen$openapiv2_options_annotations_pb = require('../protoc-gen-openapiv2/options/annotations_pb.js');
var trade_aggregation_pb = require('../trade_aggregation_pb.js');
var trade_side_agnostic_aggregation_pb = require('../trade_side_agnostic_aggregation_pb.js');
var trade_pb = require('../trade_pb.js');

function serialize_api_PointMetaRequest(arg) {
  if (!(arg instanceof api_api_pb.PointMetaRequest)) {
    throw new Error('Expected argument of type api.PointMetaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PointMetaRequest(buffer_arg) {
  return api_api_pb.PointMetaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PointMetaResponse(arg) {
  if (!(arg instanceof api_api_pb.PointMetaResponse)) {
    throw new Error('Expected argument of type api.PointMetaResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PointMetaResponse(buffer_arg) {
  return api_api_pb.PointMetaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PointRequest(arg) {
  if (!(arg instanceof api_api_pb.PointRequest)) {
    throw new Error('Expected argument of type api.PointRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PointRequest(buffer_arg) {
  return api_api_pb.PointRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PointResponse(arg) {
  if (!(arg instanceof api_api_pb.PointResponse)) {
    throw new Error('Expected argument of type api.PointResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PointResponse(buffer_arg) {
  return api_api_pb.PointResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PointSeries(arg) {
  if (!(arg instanceof api_api_pb.PointSeries)) {
    throw new Error('Expected argument of type api.PointSeries');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PointSeries(buffer_arg) {
  return api_api_pb.PointSeries.deserializeBinary(new Uint8Array(buffer_arg));
}


// API service for querying and streaming financial data points
var APIService = exports.APIService = {
  // Retrieves a set of data points based on the provided criteria
getPoints: {
    path: '/api.API/GetPoints',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.PointRequest,
    responseType: api_api_pb.PointResponse,
    requestSerialize: serialize_api_PointRequest,
    requestDeserialize: deserialize_api_PointRequest,
    responseSerialize: serialize_api_PointResponse,
    responseDeserialize: deserialize_api_PointResponse,
  },
  // Streams data points in real-time based on the provided criteria
streamPoints: {
    path: '/api.API/StreamPoints',
    requestStream: false,
    responseStream: true,
    requestType: api_api_pb.PointRequest,
    responseType: api_api_pb.PointSeries,
    requestSerialize: serialize_api_PointRequest,
    requestDeserialize: deserialize_api_PointRequest,
    responseSerialize: serialize_api_PointSeries,
    responseDeserialize: deserialize_api_PointSeries,
  },
  // Retrieves available data types
getTypes: {
    path: '/api.API/GetTypes',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.PointMetaRequest,
    responseType: api_api_pb.PointMetaResponse,
    requestSerialize: serialize_api_PointMetaRequest,
    requestDeserialize: deserialize_api_PointMetaRequest,
    responseSerialize: serialize_api_PointMetaResponse,
    responseDeserialize: deserialize_api_PointMetaResponse,
  },
  // Retrieves available exchanges
getExchanges: {
    path: '/api.API/GetExchanges',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.PointMetaRequest,
    responseType: api_api_pb.PointMetaResponse,
    requestSerialize: serialize_api_PointMetaRequest,
    requestDeserialize: deserialize_api_PointMetaRequest,
    responseSerialize: serialize_api_PointMetaResponse,
    responseDeserialize: deserialize_api_PointMetaResponse,
  },
  // Retrieves available categories
getCategories: {
    path: '/api.API/GetCategories',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.PointMetaRequest,
    responseType: api_api_pb.PointMetaResponse,
    requestSerialize: serialize_api_PointMetaRequest,
    requestDeserialize: deserialize_api_PointMetaRequest,
    responseSerialize: serialize_api_PointMetaResponse,
    responseDeserialize: deserialize_api_PointMetaResponse,
  },
  // Retrieves available coins
getCoins: {
    path: '/api.API/GetCoins',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.PointMetaRequest,
    responseType: api_api_pb.PointMetaResponse,
    requestSerialize: serialize_api_PointMetaRequest,
    requestDeserialize: deserialize_api_PointMetaRequest,
    responseSerialize: serialize_api_PointMetaResponse,
    responseDeserialize: deserialize_api_PointMetaResponse,
  },
  // Retrieves available raw symbols
getRawSymbols: {
    path: '/api.API/GetRawSymbols',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.PointMetaRequest,
    responseType: api_api_pb.PointMetaResponse,
    requestSerialize: serialize_api_PointMetaRequest,
    requestDeserialize: deserialize_api_PointMetaRequest,
    responseSerialize: serialize_api_PointMetaResponse,
    responseDeserialize: deserialize_api_PointMetaResponse,
  },
};

exports.APIClient = grpc.makeGenericClientConstructor(APIService);
