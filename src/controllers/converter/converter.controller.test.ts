import { afterEach, expect, it, describe, vi } from "vitest";
import axiosClient from "../../libs/axios";
import converterController from "./converter.controller";

describe("converterController", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });
  it("should send a GET request to the correct endpoint with the provided text parameter", async () => {
    const axiosClientMock = vi
      .spyOn(axiosClient, "get")
      .mockResolvedValue({ data: { result: "ⵔⴰⵛⵉⴷ" } });

    const result = await converterController.getLatinToTifinaghText("rachid");

    expect(axiosClientMock).toHaveBeenCalledWith(
      "/converter/latin-to-tifinagh/rachid"
    );
    expect(result).toEqual({ data: { result: "ⵔⴰⵛⵉⴷ" } });
  });

  it("should throw an error if the provided text parameter is empty", async () => {
    await expect(
      converterController.getLatinToTifinaghText("")
    ).rejects.toThrowError();
  });

  // it('should throw an error if the request to the server fails', async () => {
  //   // const axiosClientMock = vi.spyOn(axiosClient, 'get').mockRejectedValue(new Error('Request failed'));

  //   await expect(converterController.getLatinToTifinaghText('latin text')).rejects.toThrowError('Request failed');
  // });
});


// that is a comment