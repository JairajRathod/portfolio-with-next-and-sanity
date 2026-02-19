export const formateDate = (date: string ) =>
  date
    ? new Date(date).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      })
    : "Present";
