// this is to fetch skill name and icon to show on home page
export const skillsBasicQuery = `
  *[_type == "skill"] | order(name asc) {
    _id,
    name,
    icon{
      asset->{
        url
      }
    }
  }
`;

// this is to fetch all skill data
export const skillsFullQuery = `
  *[_type == "skill"] | order(category asc, rating desc) {
    _id,
    name,
    experience,
    rating,
    category,
    featured,
    icon{
      asset->{
        url
      }
    }
  }
`;
