function GetData() {
  const [pokemonList, setPokemonList] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [conditionA, conditionB]);
  oldCondA === newCondA;
  // quit early if error
  if (error) return <h1>Error</h1>;

  pokemonList.results[0].name;
  // .value

  pokemonList.results.map((pokemon, index) => {
    return (
      <div key={index}>
        <h3>{pokemon.name}</h3>
        <h4>{pokemon.url}</h4>
        <h5></h5>
      </div>
    );
  });
}
export default app;
