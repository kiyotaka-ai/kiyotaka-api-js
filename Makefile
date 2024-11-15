PROTO_DIR := ./proto
DIST := ./kiyotaka

IMPORTS := -I $(PROTO_DIR)/service/ -I $(PROTO_DIR)/lib/ -I $(PROTO_DIR)/types/
FILES := $(PROTO_DIR)/service/api/*.proto \
		$(PROTO_DIR)/lib/timestamp/timestamp.proto \
		$(PROTO_DIR)/types/trade.proto \
		$(PROTO_DIR)/types/trade_aggregation.proto \
		$(PROTO_DIR)/types/trade_side_agnostic_aggregation.proto

.PHONY: all clean

all: $(DIST)

$(DIST):
	mkdir -p $(DIST)

	npx grpc_tools_node_protoc \
		--js_out=import_style=commonjs,binary:${DIST} \
		--grpc_out=grpc_js:${DIST} \
		--plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
		$(IMPORTS) \
		$(FILES)
	npx grpc_tools_node_protoc \
		--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
		--ts_out=grpc_js:${DIST} \
		$(IMPORTS) \
		$(FILES)

clean:
	rm -rf $(DIST)
