import { requestGetPageData } from "@/service/page";
import Provider from "./provider";

export default function Home() {
  return (
    <div>
      <Provider path="/home"/>
    </div>
  )
}
