import { SignalType, SignalValuePairKey } from "@/app/constants";

export interface SignalStringValueData {
    text: string;
}

export interface SignalArrayValueData {
    prefix?: [string];
    suffix?: [string];
    array: [string];
}

export type SignalValuePairValue = SignalStringValueData | SignalArrayValueData;

export interface SignalValuePairData {
    key: SignalValuePairKey;
    value: SignalValuePairValue;
}

export interface Result {
    type: SignalType;
    reference?: string;
    values?: SignalValuePairData[];
}

export interface SubscribeResult {
    result: Result;
}

export interface SignalData {
    reference?: string;
    type: SignalType;
}

export interface Subscribe {
    subscribe: SubscribeResult | null;
}

export interface EmitSignalData {
    signal: SignalData;
    values?: SignalValuePairData[];
}

export interface SignalContext {
    useSignalEvent: (
      signal: SignalData | null | undefined,
      callback: (result: SubscribeResult) => void
    ) => void;
    emitSignals: (emitSignals: EmitSignalData[]) => void;
}