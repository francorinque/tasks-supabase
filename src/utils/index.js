const fixedDate = (item) =>
  item?.created_at.split("T")[0].split("-").reverse().join("/")

const fixedName = (item) =>
  item?.name.length > 20 ? item.name.slice(0, 20) + "..." : item.name

export { fixedDate, fixedName }
