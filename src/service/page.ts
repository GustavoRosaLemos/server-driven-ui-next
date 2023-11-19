import { Page } from "@/types/page";
import { requestService } from "@/utils/requestService";

export const requestGetPageData = async (
    path: string
  ): Promise<Page> => {
    const url = `https://2a79d3be-755d-4d20-8cdb-0d6019d09e0f.mock.pstmn.io/home`;
    const headers = { 'content-type': 'application/json' };
    const response = await requestService(url, {}, headers);
    return response;
  };