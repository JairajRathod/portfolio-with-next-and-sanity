import { client } from "../client";
import { projectsListQuery, singleProjectQuery } from "./project";

// fetching all products data from sanity
export const allProjectsDetails = async () => {
  const result = await client.fetch(projectsListQuery);
  return result;
};

// fetching single product data from sanity with the help of id prop
export const selectedProjectDetails = async ({ id }: { id: string }) => {
  const result = await client.fetch(singleProjectQuery, { id });
  return result;
};
