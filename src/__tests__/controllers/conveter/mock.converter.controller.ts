import axiosMockClient from "../../../libs/axios.mock";

async function getMockLatinToTifinaghText(text: string)  {
  return axiosMockClient.get<{result:string}>(`/converter/latin-to-tifinagh/${text}`);
}

const mockConverterController = {
  getMockLatinToTifinaghText,
};
export default mockConverterController;
