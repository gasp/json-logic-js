function none(apply, data, values) {
  const filtered = apply({ filter: values }, data);

  return filtered.length === 0;
}

none.withApply = true;

export default none;
