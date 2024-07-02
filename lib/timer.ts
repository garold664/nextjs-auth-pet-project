const timer = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));
export default timer;
