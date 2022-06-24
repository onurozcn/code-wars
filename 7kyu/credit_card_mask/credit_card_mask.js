function maskify(cc) {
  if (cc.length > 4)
    return (
      cc.slice(0, cc.length - 4).replace(/\w/g, "#") +
      cc.slice(cc.length - 4, cc.length)
    );
  else return cc;
}
