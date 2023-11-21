"use client"
import { EmitSignalData, SignalContext, SignalData, Subscribe, SubscribeResult } from "../../../types/Subscribe";
import { createContext, useContext, useEffect, useState } from "react";

const SignalContext = createContext({} as SignalContext);

function SignalProvider(props: any) {
    const { children } = props;
    const [subscribers, setSubscribers] = useState([] as SubscribeResult[])

    const signalsRegistry = new Map<String, SignalData>();

    const registerSignal = (signal: SignalData | null | undefined): Subscribe => {
        if (!signal) {
            return {
                subscribe: null,
            }
        }

        const key = signal.type + signal.reference;

        if (!signalsRegistry.get(key)) {
            signalsRegistry.set(key, signal)
        }

        if (signal.reference){
            return {
                subscribe: subscribers.filter(
                    (s) => s.result.reference === signal.reference
                )[0],
            };
        }

        return {
            subscribe: subscribers.filter(
                (s) => s.result.type === signal.type
            )[0],
        };
    }

    const useSignalEvent = (
        signal: SignalData | null | undefined,
        callback: (result: SubscribeResult) => void
    ) => {
        const { subscribe } = registerSignal(signal);
        useEffect(() => {
            const subscribeExists = subscribe && subscribe.result;
            const hasSubscribe = signal?.reference && subscribe?.result.reference && signal.reference === subscribe.result.reference;
            const hasNewSubscribe = !signal?.reference && signal?.type === subscribe?.result.type;
            if (subscribeExists) {
                if (hasSubscribe || hasNewSubscribe) {
                    callback(subscribe);
                }
            }
        }, [subscribe])
    }

    const emitSignals = (emitSignals: EmitSignalData[]) => {
        const result = [] as SubscribeResult[];

        emitSignals?.forEach((emitSignal) => {
            signalsRegistry.forEach((signal) => {
              if (emitSignal?.signal?.type === signal.type) {
                result.push({
                  result: {
                    type: emitSignal.signal.type,
                    reference: emitSignal.signal.reference || undefined,
                    values: emitSignal.values,
                  },
                });
              }
            });
          });
        setSubscribers(result);
    }

    const context = {
        useSignalEvent,
        emitSignals,
    }

    return (
        <SignalContext.Provider value={context}>
            {children}
        </SignalContext.Provider>
    )

}

const useSignal = () => {
    const context = useContext(SignalContext);
    return context;
}

export { useSignal, SignalProvider }