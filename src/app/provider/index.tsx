
"use client"
import { COMPONENT_TYPES } from "@/constant";
import { requestGetPageData } from "@/service/page";
import { Page } from "@/types/page";
import { useEffect, useState } from "react";

interface ProviderProps {
    path: string;
}

export default function Provider({path}: ProviderProps) {
    const [data, setData] = useState<Page>();
    useEffect(() => {
        requestGetPageData(path)
        .then((data) => setData(data))
        .catch((reason) => console.log("RequestError:", reason));
      }, [path])

    return (
        <>
        {data?.components.map((component, index) => 
            { return COMPONENT_TYPES.find((value) => value.type === component.type)?.component({value: 'Teste'})}
        )}
        </>
    )
}