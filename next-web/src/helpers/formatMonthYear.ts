export const formatMonthYear = (date: string) => {
  const [year, month] = date.split("-").map(Number);

  if (!year || !month) return "";

  return new Date(Date.UTC(year, month - 1)).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
};
