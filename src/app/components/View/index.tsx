"use client"
import renderComponents from "@/app/modules/renderComponents";
import { Loader } from "@mantine/core";
import { useEffect, useState } from "react";

interface ViewProps {
    route:string;
}

export default function View({route}:ViewProps) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<any>();

    useEffect(() => {
        fetch(`http://localhost:3333${route}`)
        .then((response) => response.json())
        .then((data) => setData(data))
        .finally(() => setLoading(false))
    }, [route])

    if (isLoading) {
        return <Loader color="blue" type="dots" size={50} />;
    }

    console.log(data.children);
    return <>{renderComponents(data.children)}</>
}