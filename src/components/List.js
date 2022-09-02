import Item from './Item';

function List(props) {
  return (
    <ul>
      {props.countries.map((country) => {
        return (
          <Item
            key={country.id}
            id={country.id}
            countryName={country.countryName}
            countryCode={country.countryCode}
          />
        );
      })}
    </ul>
  );
}

export default List;
