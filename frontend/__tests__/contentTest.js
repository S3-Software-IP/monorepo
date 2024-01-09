import React from "react";
import "@testing-library/jest-dom";
import { render, waitFor, screen } from "@testing-library/react";
import Top50Artists from "@/components/leaderboards/ranking-artists";
import Top50Genres from "@/components/leaderboards/ranking-genres";
import Top50Songs from "@/components/leaderboards/ranking-songs";
import axios from "@/../__mocks__/axios";

jest.mock("axios");

describe("Top50Artists Component", () => {
  it("Are 50 artists rendered when provided with data?", async () => {
    axios.get();
    render(<Top50Artists />);

    await waitFor(() => {
      const artists = screen.queryAllByTestId("artist");

      expect(artists.length == 50);
    });
  });
});

describe("Top50Genres Component", () => {
  it("Are 50 genres rendered when provided with data?", async () => {
    axios.get();
    render(<Top50Genres />);

    await waitFor(() => {
      const genres = screen.queryAllByTestId("genre");

      expect(genres.length == 50);
    });
  });
});

describe("Top50Songs Component", () => {
  it("Are 50 songs rendered when provided with data?", async () => {
    axios.get();
    render(<Top50Songs />);

    await waitFor(() => {
      const songs = screen.queryAllByTestId("songs");

      expect(songs.length == 50);
    });
  });
});
