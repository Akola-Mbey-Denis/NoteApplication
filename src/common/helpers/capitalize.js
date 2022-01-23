const capitalize = (sentence) => {
  return sentence.replace(/(^\w{1})|(\s+\w{1})/g, letter => {
    return letter.toUpperCase();
  });
};

export default capitalize;
