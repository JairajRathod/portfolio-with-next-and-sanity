export const experienceQuery = `
  *[_type == "experience"] | order(startDate desc) {
    _id,
    companyName,
    position,
    startDate,
    endDate,
    description
  }
`;
