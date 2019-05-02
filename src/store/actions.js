export const increment = () => ({
  type: "INCREMENT"
});

export const decrement = () => ({
  type: "DECREMENT"
});

export const changeTitle = (title: string) => ({
  type: "CHANGE_TITLE",
  title
});
