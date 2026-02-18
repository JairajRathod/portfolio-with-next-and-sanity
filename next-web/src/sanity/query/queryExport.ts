import { client } from "../client";
import { experienceQuery } from "./experience";
import { projectsListQuery, singleProjectQuery } from "./project";
import { skillsBasicQuery, skillsFullQuery } from "./skills";

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

// fetching all experience data from sanity
export const allExperienceDetails = async () => {
  const result = await client.fetch(experienceQuery);
  return result;
};

// fetching only skill name and icon to show on main page
export const basicSkillsDetails = async () => {
  const result = await client.fetch(skillsBasicQuery);
  return result;
};

// fetching complete skill details
export const completeSkillsDetails = async () => {
  const result = await client.fetch(skillsFullQuery);
  return result;
};
