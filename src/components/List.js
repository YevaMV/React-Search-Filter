import Item from './Item';

function List(props) {
  return (
    <div>
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
    </div>
  );
}

export default List;
