import { filterList } from "./index";

describe("filterList", () => {
  test("returns list items that contain the exact query", () => {
    const list = ["Alabama", "Nebraska", "Ala"];
    const query = "Ala";
    expect(filterList(list, query)).toEqual(["Alabama", "Ala"]);
  });

  test("returns list items that contain the query when ignoring case", () => {
    const list = ["alabama", "Nebraska", "Ala"]
    const query = "Ala"
    expect(filterList(list, query)).toEqual(["alabama", "Ala"])
  })

  test("does not return list items that do not contain the query when ignoring case", () => {
    const list = ["alabama", "Nebraska", "Ala"]
    const query = "Ala"
    expect(filterList(list, query)).not.toContain("Nebraska")
  })
});
