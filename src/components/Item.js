function Item(props) {
  return (
    <li>
      <div>
        <span>{props.countryName} : </span>
        <span>{props.countryCode} </span>
      </div>
    </li>
  );
}

export default Item;
