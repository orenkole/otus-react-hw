export const cloneObj = (obj: any) => {
  const newObj: any = {};
  for (const key in obj) {
    if (typeof obj[key] !== "object") {
      newObj[key] = obj[key];
    } else if (typeof obj[key] === "object" && Array.isArray(obj[key])) {
      newObj[key] = cloneObj(obj[key]);
      newObj[key] = Object.values(newObj[key]);
    } else {
      newObj[key] = cloneObj(obj[key]);
    }
  }
  return newObj;
};
