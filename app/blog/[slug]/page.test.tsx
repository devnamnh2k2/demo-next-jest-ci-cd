/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

it("Async Page test", async () => {
  const PageComponent = await Page({ params: Promise.resolve({ slug: "Test" }) });
  render(PageComponent);
  expect(screen.getByText("Slug: Test")).toBeInTheDocument();
});


it("NamNH  TEST", async () => {
  const PageComponent = await Page({ params: Promise.resolve({ slug: "NamNH" }) });
  render(PageComponent);
  expect(await screen.findByText("NamNH")).toBeInTheDocument();
});