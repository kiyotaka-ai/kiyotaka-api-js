/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.1
 * source: trade.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./timestamp/timestamp";
import * as pb_1 from "google-protobuf";
export class Trade extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        id?: string;
        price?: number;
        amount?: number;
        timestamp?: dependency_1.Timestamp;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("id" in data && data.id != undefined) {
                this.id = data.id;
            }
            if ("price" in data && data.price != undefined) {
                this.price = data.price;
            }
            if ("amount" in data && data.amount != undefined) {
                this.amount = data.amount;
            }
            if ("timestamp" in data && data.timestamp != undefined) {
                this.timestamp = data.timestamp;
            }
        }
    }
    get id() {
        return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
    }
    set id(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get price() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
    }
    set price(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get amount() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
    }
    set amount(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    get timestamp() {
        return pb_1.Message.getWrapperField(this, dependency_1.Timestamp, 4) as dependency_1.Timestamp;
    }
    set timestamp(value: dependency_1.Timestamp) {
        pb_1.Message.setWrapperField(this, 4, value);
    }
    get has_timestamp() {
        return pb_1.Message.getField(this, 4) != null;
    }
    static fromObject(data: {
        id?: string;
        price?: number;
        amount?: number;
        timestamp?: ReturnType<typeof dependency_1.Timestamp.prototype.toObject>;
    }): Trade {
        const message = new Trade({});
        if (data.id != null) {
            message.id = data.id;
        }
        if (data.price != null) {
            message.price = data.price;
        }
        if (data.amount != null) {
            message.amount = data.amount;
        }
        if (data.timestamp != null) {
            message.timestamp = dependency_1.Timestamp.fromObject(data.timestamp);
        }
        return message;
    }
    toObject() {
        const data: {
            id?: string;
            price?: number;
            amount?: number;
            timestamp?: ReturnType<typeof dependency_1.Timestamp.prototype.toObject>;
        } = {};
        if (this.id != null) {
            data.id = this.id;
        }
        if (this.price != null) {
            data.price = this.price;
        }
        if (this.amount != null) {
            data.amount = this.amount;
        }
        if (this.timestamp != null) {
            data.timestamp = this.timestamp.toObject();
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.id.length)
            writer.writeString(1, this.id);
        if (this.price != 0)
            writer.writeDouble(2, this.price);
        if (this.amount != 0)
            writer.writeDouble(3, this.amount);
        if (this.has_timestamp)
            writer.writeMessage(4, this.timestamp, () => this.timestamp.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Trade {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Trade();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.id = reader.readString();
                    break;
                case 2:
                    message.price = reader.readDouble();
                    break;
                case 3:
                    message.amount = reader.readDouble();
                    break;
                case 4:
                    reader.readMessage(message.timestamp, () => message.timestamp = dependency_1.Timestamp.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): Trade {
        return Trade.deserialize(bytes);
    }
}