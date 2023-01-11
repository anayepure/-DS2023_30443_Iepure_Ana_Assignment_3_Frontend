// package: 
// file: chat.proto

import * as chat_pb from "./chat_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ChatServicejoin = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_pb.User;
  readonly responseType: typeof chat_pb.JoinResponse;
};

type ChatServicesendMsg = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_pb.ChatMessage;
  readonly responseType: typeof chat_pb.Empty;
};

type ChatServicereceiveMsg = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof chat_pb.Empty;
  readonly responseType: typeof chat_pb.ChatMessage;
};

type ChatServicegetAllUsers = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_pb.Empty;
  readonly responseType: typeof chat_pb.UserList;
};

export class ChatService {
  static readonly serviceName: string;
  static readonly join: ChatServicejoin;
  static readonly sendMsg: ChatServicesendMsg;
  static readonly receiveMsg: ChatServicereceiveMsg;
  static readonly getAllUsers: ChatServicegetAllUsers;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ChatServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  join(
    requestMessage: chat_pb.User,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_pb.JoinResponse|null) => void
  ): UnaryResponse;
  join(
    requestMessage: chat_pb.User,
    callback: (error: ServiceError|null, responseMessage: chat_pb.JoinResponse|null) => void
  ): UnaryResponse;
  sendMsg(
    requestMessage: chat_pb.ChatMessage,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_pb.Empty|null) => void
  ): UnaryResponse;
  sendMsg(
    requestMessage: chat_pb.ChatMessage,
    callback: (error: ServiceError|null, responseMessage: chat_pb.Empty|null) => void
  ): UnaryResponse;
  receiveMsg(requestMessage: chat_pb.Empty, metadata?: grpc.Metadata): ResponseStream<chat_pb.ChatMessage>;
  getAllUsers(
    requestMessage: chat_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_pb.UserList|null) => void
  ): UnaryResponse;
  getAllUsers(
    requestMessage: chat_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: chat_pb.UserList|null) => void
  ): UnaryResponse;
}

