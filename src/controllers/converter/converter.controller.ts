import axiosClient from "../../libs/axios";

async function getLatinToTifinaghText(text: string)  {
  return axiosClient.get<{result:string}>(`/converter/latin-to-tifinagh/${text}`);
}

const converterController = {
  getLatinToTifinaghText,
};
export default converterController;
