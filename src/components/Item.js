function Item(props) {
  return (
    <div>
      <span>{props.countryName} : </span>
      <span>{props.countryCode} </span>
    </div>
  );
}

export default Item;
