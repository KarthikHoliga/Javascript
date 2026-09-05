const compareLists = (listA, listB) => {
  if (listA.length !== listB.length) return false;
  const sortedA = [...listA].sort();
  const sortedB = [...listB].sort();
  for (let i = 0; i < sortedA.length; i++) {
    if (sortedA[i] !== sortedB[i]) return false;
  }
  return true;
};
