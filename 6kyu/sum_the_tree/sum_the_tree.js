function sumTheTreeValues(root) {
  // your code here
  if (!root) return 0;
  return (
    root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right)
  );
}
