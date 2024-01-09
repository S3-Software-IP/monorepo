import React from "react";
import "@testing-library/jest-dom";
import { render, waitFor, screen } from "@testing-library/react";
import Top50Artists from "@/components/leaderboards/ranking-artists";
import axios from "@/../__mocks__/axios";

jest.mock("axios");

describe("Top50Artists Component", () => {
  it("Are 50 artists rendered when 50 in data are provided?", async () => {
    axios.get();
    render(<Top50Artists />);

    await waitFor(() => {
      const artists = screen.queryAllByTestId("artist");

      expect(artists.length == 50);
    });
  });
});
