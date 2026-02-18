// fetching all project details
export const projectsListQuery = `
  *[_type == "project"] | order(startDate desc) {
    _id,
    name,
    description,
    projectLink,
    technologies,
    company,
    startDate,
    endDate
  }
`;

// fetching single project complete details
export const singleProjectQuery = `
  *[_type == "project" && _id == $id][0] {
    _id,
    name,
    description,
    company,
    startDate,
    endDate,
    projectLink,
    technologies,
    screenshots[]{
      asset->{
        _id,
        url
      }
    }
  }
`;
